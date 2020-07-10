//
//  WHWebViewController.m
//  baiwang
//
//  Created by dht_pro on 2019/10/25.
//  Copyright © 2019 llyouss. All rights reserved.
//

#import "WXWebViewController.h"
#import <WebKit/WebKit.h>
#import <ShareSDK/ShareSDK.h>
#import <ShareSDKUI/ShareSDK+SSUI.h>

#define NAV_HEIGHT 64+30

@interface WXWebViewController1 ()<WKUIDelegate,WKNavigationDelegate,WKScriptMessageHandler>

@property (nonatomic,strong) WKWebView *wkWebView;  //  WKWebView
@property (nonatomic,strong) UIRefreshControl *refreshControl;  //刷新
@property (nonatomic,strong) UIProgressView *progress;  //进度条
@property (nonatomic,strong) UIButton *reloadBtn;  //重新加载按钮

@property (nonatomic, strong) UIBarButtonItem *backBarButtonItem;   //返回按钮
@property (nonatomic, strong) UIBarButtonItem *closeBarButtonItem;  //关闭按钮

@end

@implementation WXWebViewController1


UIView *WxBarView;

//隐藏导航栏
-(void) viewDidAppear:(BOOL)animated
{
    self.navigationController.navigationBarHidden =YES;

}

#pragma mark lazy load
- (WKWebView *)wkWebView{
    if (!_wkWebView) {
        // 设置WKWebView基本配置信息
        WKWebViewConfiguration *configuration = [[WKWebViewConfiguration alloc] init];
        configuration.preferences = [[WKPreferences alloc] init];
        configuration.allowsInlineMediaPlayback = YES;
        configuration.selectionGranularity = YES;
        
        WKUserContentController *userContentController = [[WKUserContentController alloc] init];
        [userContentController addScriptMessageHandler:self name:@"jsCallOC"];
        
        if (self.jsString) {
            WKUserScript *jsString = [[WKUserScript alloc] initWithSource:self.jsString injectionTime:(WKUserScriptInjectionTimeAtDocumentStart) forMainFrameOnly:NO];
            [userContentController addUserScript:jsString];
        }
        configuration.userContentController = userContentController;
        
        _wkWebView = [[WKWebView alloc] initWithFrame:CGRectMake(0, NAV_HEIGHT, self.view.bounds.size.width, self.view.bounds.size.height-NAV_HEIGHT-80) configuration:configuration];
        // 设置代理
        _wkWebView.UIDelegate = self;
        _wkWebView.navigationDelegate = self;
        
        _wkWebView.allowsBackForwardNavigationGestures = YES;
        // 是否开启下拉刷新
        if ([[[UIDevice currentDevice] systemVersion] floatValue] >= 10.0 && _canDownRefresh) {
            _wkWebView.scrollView.refreshControl = self.refreshControl;
        }
        // 添加进度监听
        [_wkWebView addObserver:self forKeyPath:@"estimatedProgress" options:(NSKeyValueObservingOptionNew) context:nil];
        
    }
    return _wkWebView;
}

- (UIRefreshControl *)refreshControl{
    if (!_refreshControl) {
        self.refreshControl = [[UIRefreshControl alloc] init];
        [_refreshControl addTarget:self action:@selector(wkWebViewReload) forControlEvents:(UIControlEventValueChanged)];
    }
    return _refreshControl;
}

- (UIProgressView* )progress {
    if (!_progress) {
        self.progress = [[UIProgressView alloc]initWithFrame:CGRectMake(0, NAV_HEIGHT, self.view.bounds.size.width, 2)];
        _progress.progressTintColor = _loadingProgressColor?_loadingProgressColor:[UIColor greenColor];
    }
    return _progress;
}

- (UIButton *)reloadBtn{
    if (!_reloadBtn) {
        self.reloadBtn = [UIButton buttonWithType:(UIButtonTypeCustom)];
        _reloadBtn.frame = CGRectMake(0, 0, 200, 140);
        _reloadBtn.center = self.view.center;
        [_reloadBtn setBackgroundImage:[UIImage imageNamed:@"loadingError"] forState:UIControlStateNormal];
        [_reloadBtn setTitle:@"网络异常，点击重新加载" forState:UIControlStateNormal];
        [_reloadBtn addTarget:self action:@selector(wkWebViewReload) forControlEvents:(UIControlEventTouchUpInside)];
        [_reloadBtn setTitleColor:[UIColor lightGrayColor] forState:UIControlStateNormal];
        _reloadBtn.titleLabel.font = [UIFont systemFontOfSize:15];
        [_reloadBtn setTitleEdgeInsets:UIEdgeInsetsMake(200, -50, 0, -50)];
        _reloadBtn.titleLabel.numberOfLines = 0;
        _reloadBtn.titleLabel.textAlignment = NSTextAlignmentCenter;
        CGRect rect = _reloadBtn.frame;
        rect.origin.y -= 100;
        _reloadBtn.frame = rect;
        _reloadBtn.hidden = YES;
    }
    return _reloadBtn;
}

- (UIBarButtonItem *)backBarButtonItem {
    if (!_backBarButtonItem) {
        UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];
        [button setImage:[UIImage imageNamed:@"backImage"] forState:UIControlStateNormal];
        [button addTarget:self action:@selector(back:) forControlEvents:(UIControlEventTouchUpInside)];
        _backBarButtonItem = [[UIBarButtonItem alloc] initWithCustomView:button];
    }
    return _backBarButtonItem;
}

- (UIBarButtonItem *)closeBarButtonItem {
    if (!_closeBarButtonItem) {
        _closeBarButtonItem = [[UIBarButtonItem alloc]initWithTitle:@"关闭" style:UIBarButtonItemStylePlain target:self action:@selector(close:)];
    }
    return _closeBarButtonItem;
}
#pragma mark viewDidload
- (void)viewDidLoad {
    
    [super viewDidLoad];
    
    self.view.backgroundColor = [UIColor whiteColor];

//    //创建一个高20的假状态栏
    UIView *statusBarView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, self.view.bounds.size.width, 40)];
    //设置成绿色
    statusBarView.backgroundColor=[UIColor blackColor];
    // 添加到 navigationBar 上
    [self.view addSubview:statusBarView];
    
    
    WxBarView = [[UIView alloc] initWithFrame:CGRectMake(0, 30, self.view.bounds.size.width, 44)];
    WxBarView.backgroundColor=[UIColor whiteColor];
    // 添加到 navigationBar 上
    [self.view addSubview:WxBarView];
    	
    
    [self setupUI];
    [self loadRequest];
    
}
- (void)navigationController:(UINavigationController*)navigationController willShowViewController:(UIViewController*)viewController animated:(BOOL)animated {
    
    if(viewController == self){
        [navigationController setNavigationBarHidden:YES animated:YES];
    }else{
        
        //系统相册继承自 UINavigationController 这个不能隐藏 所有就直接return
        if ([navigationController isKindOfClass:[UIImagePickerController class]]) {
            return;
        }
        
        //不在本页时，显示真正的navbar
        [navigationController setNavigationBarHidden:NO animated:YES];
        //当不显示本页时，要么就push到下一页，要么就被pop了，那么就将delegate设置为nil，防止出现BAD ACCESS
        //之前将这段代码放在viewDidDisappear和dealloc中，这两种情况可能已经被pop了，self.navigationController为nil，这里采用手动持有navigationController的引用来解决
        if(navigationController.delegate == self){
            //如果delegate是自己才设置为nil，因为viewWillAppear调用的比此方法较早，其他controller如果设置了delegate就可能会被误伤
            navigationController.delegate = nil;
        }
    }
}
#pragma mark private Methods
- (void)setupUI{
    self.view.backgroundColor = [UIColor whiteColor];
    [self showLeftBarButtonItem];
    [self.view addSubview:self.wkWebView];
    [self.view addSubview:self.progress];
    [self.view addSubview:self.reloadBtn];
}

- (void)setReferer:(NSString *)referer {
    if ([referer hasPrefix:@"http"]) {
        NSURL *url = [NSURL URLWithString:referer];
        referer = [NSString stringWithFormat:@"%@://",url.host];
    }
    _referer = referer;
}


- (void)loadRequest {
    if (![self.urlString hasPrefix:@"http"]) {//容错处理 不要忘记plist文件中设置http可访问 App Transport Security Settings
        self.urlString = [NSString stringWithFormat:@"http://%@",self.urlString];
    }
    NSURLRequest *request = [[NSURLRequest alloc] initWithURL:[NSURL URLWithString:_urlString]];
    
    //2.创建一个 NSMutableURLRequest 添加 header
    NSMutableURLRequest *mutableRequest = [request mutableCopy];

    /******** 2019-11-12 *********/
//    [mutableRequest addValue:self.referer forHTTPHeaderField:@"Referer"];
    [mutableRequest setValue:self.referer forHTTPHeaderField:@"Referer"];
    /************/

    
    request = [mutableRequest copy];
  
    [_wkWebView loadRequest:request];
    
}

- (void)wkWebViewReload{
    [_wkWebView reload];
}

-(void)back
{
    
//    [self.navigationController popViewControllerAnimated:YES];
    [self dismissViewControllerAnimated:YES completion:nil];
}

- (void)showLeftBarButtonItem {
//    if ([_wkWebView canGoBack]) {
//        self.navigationItem.leftBarButtonItems = @[self.backBarButtonItem,self.closeBarButtonItem];
//    } else {
//        self.navigationItem.leftBarButtonItem = self.backBarButtonItem;
//    }
    
//    self.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithTitle:@" < " style:UIBarButtonItemStylePlain target:self action:@selector(back)];
    
    
    
    UILabel *lb_left = [[UILabel alloc] initWithFrame: CGRectMake(10, 10, 120, 44)];

    lb_left.backgroundColor = [UIColor clearColor];

    lb_left.textColor=[UIColor blackColor];

    [lb_left setFont:[UIFont systemFontOfSize:17.0]];

    [lb_left setText:@"< 返回"];
    
    lb_left.userInteractionEnabled=YES;
    UITapGestureRecognizer *labelTapGestureRecognizer = [[UITapGestureRecognizer alloc]initWithTarget:self action:@selector(labelTouchUpInside:)];
    
    [lb_left addGestureRecognizer:labelTapGestureRecognizer];
    
    [WxBarView addSubview:lb_left];
    
    
    
    UILabel *titleText = [[UILabel alloc] initWithFrame: CGRectMake((self.view.bounds.size.width/2)-20, 10, 120, 44)];

    titleText.backgroundColor = [UIColor clearColor];

    titleText.textColor=[UIColor blackColor];

    [titleText setFont:[UIFont systemFontOfSize:17.0]];

    [titleText setText:_titleString];

    titleText.lineBreakMode = NSLineBreakByCharWrapping;
    
    [WxBarView addSubview:titleText];
    
    
    
}

-(void) labelTouchUpInside:(UITapGestureRecognizer *)recognizer{
   
  [self dismissViewControllerAnimated:YES completion:nil];
   
}


#pragma mark 导航按钮
- (void)back:(UIBarButtonItem*)item {
    if ([_wkWebView canGoBack]) {
        [_wkWebView goBack];
    } else {
        [self.navigationController popViewControllerAnimated:YES];
        [self dismissViewControllerAnimated:YES completion:nil];
    }
}

- (void)close:(UIBarButtonItem*)item {
    [self.navigationController popViewControllerAnimated:YES];
    [self dismissViewControllerAnimated:YES completion:nil];
}

#pragma mark KVO
- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary<NSKeyValueChangeKey,id> *)change context:(void *)context{
    if ([keyPath isEqualToString:@"estimatedProgress"]) {
        _progress.progress = [change[@"new"] floatValue];
        if (_progress.progress == 1.0) {
            dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(.5 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
                _progress.hidden = YES;
            });
        }
    }
}

#pragma mark WKNavigationDelegate
- (void)webView:(WKWebView *)webView didStartProvisionalNavigation:(WKNavigation *)navigation
{
    _progress.hidden = NO;
    _wkWebView.hidden = NO;
    _reloadBtn.hidden = YES;
    // 看是否加载空网页
    if ([webView.URL.scheme isEqual:@"about"]) {
        webView.hidden = YES;
    }
}

- (void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation
{
    //执行JS方法获取导航栏标题
    [webView evaluateJavaScript:@"document.title" completionHandler:^(id _Nullable title, NSError * _Nullable error) {
        self.navigationItem.title = title;
    }];
    
    [self showLeftBarButtonItem];
    [_refreshControl endRefreshing];
}



/******** 2019-11-12 *********/
-  (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler {
//    NSString *url = navigationAction.request.URL.absoluteString;
//
//    if ([url containsString:@"https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?"]) {
//        //        这里把webView设置成一个像素点，主要是不影响操作和界面，主要的作用是设置referer
////        BWHideWebView *webView = [[BWHideWebView alloc] initWithFrame:CGRectMake(0, 0, 1, 1)];
////
////        [webView loadingURL:url referer:self.referer];
////        //
////        [self.view addSubview:webView];
//
//        decisionHandler(WKNavigationActionPolicyCancel);
//
//
//
//
//    }else {
//        decisionHandler(WKNavigationActionPolicyAllow);
//    }
    
    //////////////////////
    
    NSURLRequest *request = navigationAction.request;
      NSURL *URL = request.URL;
      NSString *myScheme = self.referer;
      if ([URL.host isEqualToString:@"wx.tenpay.com"]) {

          decisionHandler(WKNavigationActionPolicyAllow);
          NSURLComponents *cmps = [[NSURLComponents alloc] initWithURL:URL resolvingAgainstBaseURL:YES];
          NSString *redirect_url = nil;
          for (NSURLQueryItem *item in cmps.queryItems) {
              if ([item.name isEqualToString:@"redirect_url"]) {
                  redirect_url = item.value;
                  break;
              }
          }
          if (redirect_url == nil) return;
          NSURL *redirect_URL = [NSURL URLWithString:redirect_url];
          if (redirect_URL == nil) return;
          NSString *replaceScheme = redirect_URL.scheme;
          // 如果replaceScheme已经被替换过了就不再替换了
          if (replaceScheme == nil || [replaceScheme isEqualToString:myScheme]) return;
          NSString *my_redirect_url = [redirect_url stringByReplacingOccurrencesOfString:replaceScheme withString:myScheme];
          NSString *urlAbsoluteString = [URL.absoluteString stringByReplacingPercentEscapesUsingEncoding:(NSUTF8StringEncoding)];
          NSString *my_requestUrl = [urlAbsoluteString stringByReplacingOccurrencesOfString:redirect_url withString:my_redirect_url];
          NSURL *my_requestURL = [NSURL URLWithString:my_requestUrl];
          NSMutableURLRequest *my_request = [NSMutableURLRequest requestWithURL:my_requestURL];
          if (my_requestURL == nil) return;
          my_request.allHTTPHeaderFields = request.allHTTPHeaderFields;
          // 让webView加载被修改过的request
          // 这会导致本方法再次被调用
          [webView loadRequest:my_request];
          return;
      }
    if ([URL.scheme isEqualToString:@"weixin"]) {
        if ([[UIApplication sharedApplication] canOpenURL:URL]) {
            if (@available(iOS 10.0, *)) {
                [[UIApplication sharedApplication] openURL:URL options:@{} completionHandler:nil];
            } else {
                [[UIApplication sharedApplication] openURL:URL];
            }
            decisionHandler(WKNavigationActionPolicyCancel);
        }
    } else if ([URL.scheme isEqualToString:myScheme]) {
        // 在微信支付完成或失败后回到APP会调用
        // 将xxx.faker.com://www.myFaker.com/epay…
        // 修改成 https://www.myFaker.com/epay…
        // 让webView重新加载
        decisionHandler(WKNavigationActionPolicyCancel);
        NSString *urlAbsoluteString = [URL.absoluteString stringByReplacingPercentEscapesUsingEncoding:(NSUTF8StringEncoding)];
        NSString *schemeDetail = [NSString stringWithFormat:@"%@://",myScheme];
        NSString *targetUrl = [urlAbsoluteString stringByReplacingOccurrencesOfString:schemeDetail withString:@"https://"];
        NSURL *targetURL = [NSURL URLWithString:targetUrl];
        NSURLRequest *request = [NSURLRequest requestWithURL:targetURL];
        [webView loadRequest:request];
    } else {
        decisionHandler(WKNavigationActionPolicyAllow);
    }
    
    ///////////////////////
    
    
    
    
    

    
//    decisionHandler(WKNavigationActionPolicyAllow);
    
}
/******************/

// 返回内容是否允许加载
- (void)webView:(WKWebView *)webView decidePolicyForNavigationResponse:(WKNavigationResponse *)navigationResponse decisionHandler:(void (^)(WKNavigationResponsePolicy))decisionHandler
{
    decisionHandler(WKNavigationResponsePolicyAllow);
}

//页面加载失败
- (void)webView:(WKWebView *)webView didFailProvisionalNavigation:(null_unspecified WKNavigation *)navigation withError:(NSError *)error{
    
    webView.hidden = YES;
    _reloadBtn.hidden = NO;
}

#pragma mark UIDelegate
- (void)webView:(WKWebView *)webView runJavaScriptAlertPanelWithMessage:(NSString *)message initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(void))completionHandler
{
    
}

- (void)webView:(WKWebView *)webView runJavaScriptConfirmPanelWithMessage:(NSString *)message initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(BOOL))completionHandler
{
    
}

- (void)webView:(WKWebView *)webView runJavaScriptTextInputPanelWithPrompt:(NSString *)prompt defaultText:(NSString *)defaultText initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(NSString * _Nullable))completionHandler
{
    
}

#pragma mark WKScriptMessageHandler js 拦截 调用OC方法
- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message
{
    
    NSLog(@"方法名:%@", message.name);
    NSLog(@"参数:%@", message.body);
    //    // 方法名
    //    NSString *methods = [NSString stringWithFormat:@"%@:", message.name];
    //    SEL selector = NSSelectorFromString(methods);
    //    // 调用方法
    //    if ([self respondsToSelector:selector]) {
    //        [self performeSlector:selector withObject:message.body];
    //    } else {
    //        NSLog(@"未实行方法：%@", methods);
    //    }
    
    if([message.name isEqualToString:@"jsCallOc"]){
        // do something
    }
}


#pragma mark Dealloc
- (void)dealloc{
    [_wkWebView removeObserver:self forKeyPath:@"estimatedProgress"];
    [_wkWebView stopLoading];
    _wkWebView.UIDelegate = nil;
    _wkWebView.navigationDelegate = nil;
}




- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}


@end






/******** 2019-11-12 *********/

/******** 2019-11-12 *********/

//@interface BWHideWebView ()
//
//@property (nonatomic, strong) UIWebView *web;
//
//@end
//
//@implementation BWHideWebView
//
//
//- (void)loadingURL:(NSString *)url referer:(NSString *)referer {
//
//   self.web = [[UIWebView alloc] initWithFrame:self.bounds];
//
//    [self addSubview:self.web];
//
//    NSMutableURLRequest *req = [[NSMutableURLRequest alloc] initWithURL:[NSURL URLWithString:url]];
//    [req setValue:referer forHTTPHeaderField:@"Referer"];
//
//    [self.web loadRequest:req];
////
//
//
//}
//
//
//@end
//
//
///************/
