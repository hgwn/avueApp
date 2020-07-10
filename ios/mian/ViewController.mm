//
//  ViewController.m
//

#import "ViewController.h"
#import "PAWebView.h"
#import "XLAlertView.h"
#import <ShareSDK/ShareSDK.h>
#import <ShareSDKUI/ShareSDK+SSUI.h>
#import <CPCNLiveDetection/CPCNLiveDetection.h>
#import "CompletionViewController.h"
#import "CustomHUD.h"
#import "CustomLiveDetectionVC.h"
#import "WHWebViewController.h"
#import "WXWebViewController.h"


#define PAColor(r, g, b, a) [UIColor colorWithRed:(r)/255.0f green:(g)/255.0f blue:(b)/255.0f alpha:a]

#define     DEFAULT_BACKGROUND_COLOR         PAColor(239.0, 239.0, 244.0, 1.0) //默认背景颜色
#define     DEFAULT_NAVBAR_COLOR             PAColor(22.0, 129.0, 254.0, 1.0)  //导航栏背景颜色
#define WKSCREEN_WIDTH        [UIScreen mainScreen].bounds.size.width
#define WKSCREEN_HEIGHT       [UIScreen mainScreen].bounds.size.height

//有返回值的宏
#define isToNull(value) \
({\
   id tmp;\
    if (![value isKindOfClass:[NSNull class]])\
        tmp = value;\
    else tmp = nil;\
    (tmp);\
})\

//获取图片资源
#define GetImage(imageName) [UIImage imageNamed:[NSString stringWithFormat:@"%@",imageName]]



typedef void (^runCaseBlock)(id);

@interface ViewController ()<PAWKScriptMessageHandler>

@property (nonatomic,strong) NSDictionary * runBlockDict;
@property (nonatomic,strong)NSString * name1;
@property (nonatomic,strong)NSString * idcarNO1;
@property (nonatomic,strong)NSString * phone1;
@property (nonatomic,strong)NSString * acNO1;
@property (nonatomic,strong)NSString * token;
@property (nonatomic,strong)NSString * auUrl;

@end

@implementation ViewController

NSString *update_url =@"http://upgrade.baiwang168.cn:6062/upgrade/version/get";


//隐藏NavigationBar
-(void) viewWillAppear:(BOOL)animated{
    [self.navigationController setNavigationBarHidden:YES animated:YES]; //设置隐藏
    [super viewWillAppear:animated];

}

//-(void) viewWillDisappear:(BOOL)animated{
//
//    [self.navigationController setNavigationBarHidden:YES animated:YES]; //设置隐藏
//    [super viewWillAppear:animated];
//}

- (void)viewDidLoad {
    [super viewDidLoad];
 
//    [self.navigationController.navigationBar setBarTintColor:DEFAULT_NAVBAR_COLOR];
//    [self.navigationController.navigationBar setTintColor:[UIColor whiteColor]];
    
    
    [self.navigationController.navigationBar setBarTintColor:[UIColor blackColor]];
    //初始化，单例
   
    PAWebView *webView = [PAWebView shareInstance];

    //添加与JS交互事件
    [self addMessageHandleName];
    
    //加载网页
//    [webView loadRequestURL:[NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"https://www.sina.cn"] cachePolicy:NSURLRequestReloadIgnoringLocalCacheData timeoutInterval:20.0f]];
    
    [webView loadLocalHTMLWithFileName:@"index"];
//    webView loadLocalHTMLWithFileName:<#(NSString *)#> 加载本地网页
//    [webView reload]; //重新加载网页
//    [webView reloadFromOrigin]; //无视缓存，重新加载服务器最新的网页
    
    [self.navigationController pushViewController:webView animated:YES];
    
    //调用js
//    [self performSelector:@selector(TESTCallJS) withObject:nil afterDelay:6];
    
//    [webView goback]; //返回上一级
//    [webView goForward]; //返回下一级
    //获取图片的路径
    
    
    //二维码识别后返回的二维码数据
    [webView notificationInfoFromQRCode:^(NSString *info) {
        
    }];
    
    
    [self checkUpdata];
}



- (void)PAUserContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message{
    NSLog(@"监听JS调用IC");
    ((runCaseBlock)self.runBlockDict[message.name])(message.body);
}

#pragma mark - JS 调用 OC
- (void)addMessageHandleName
{
    PAWebView *webView = [PAWebView shareInstance];
//    webView.messageHandlerdelegate =self;
//    [webView addScriptMessageHandlerWithName:@[@"AliPay",@"weixin",@"webViewApp"]];
    
    __weak typeof(self)weekSelf = self;
    [webView addScriptMessageHandlerWithName:@[@"showFace",@"showShare",@"openWebview",@"OpenWechat",@"OpenAlipay"] observeValue:^(WKUserContentController *userContentController, WKScriptMessage *message) {

        //JS调用OC处理
        __strong typeof(self)strongSelf = weekSelf;
        ((runCaseBlock)strongSelf.runBlockDict[message.name])(message.body);
    }];
}

//JS调用OC处理事件
#pragma mark runBlockDict 运行的代码块
-(NSDictionary *)runBlockDict
{
    if (_runBlockDict == nil) {
        _runBlockDict =
        @{
          @"showShare":
              ^(id body) {
                  NSLog(@"请求分享");
//                  NSLog(@"%@", body.params);
                  NSDictionary *dicjson = (NSDictionary *)body;
                  NSDictionary *dicjson1 = [dicjson objectForKey:@"params"];
                  NSString * title = [dicjson1 objectForKey:@"title"];
                  NSString * content = [dicjson1 objectForKey:@"content"];
                  NSString * url = [dicjson1 objectForKey:@"url"];
                  NSString * imgurl = [dicjson1 objectForKey:@"imgurl"];
                  NSString * type = [dicjson1 objectForKey:@"type"];
                  NSString * imgName = [dicjson1 objectForKey:@"imgName"];
                  NSString * QRUrl = [dicjson1 objectForKey:@"QRUrl"];
                  NSLog(@"请求分享");
                  
                  NSLog(@"dicjson1 : %@",dicjson1);
                  [self showShare:title :content :url :imgurl :type :imgName :QRUrl];
                  
                
              },
          @"showFace":
              ^(id body) {
                  NSLog(@"请求刷脸事件");
                  NSDictionary *dicjson = (NSDictionary *)body;
                  NSString * name = [dicjson objectForKey:@"name"];
                  NSString * acNO= [dicjson objectForKey:@"carNO"];
                  NSString * phone = [dicjson objectForKey:@"phone"];
                  NSString * idcarNO = [dicjson objectForKey:@"idNO"];
                  NSString *auTkoen = [dicjson objectForKey:@"authToken"];
                  NSString *authUrl = [dicjson objectForKey:@"authUrl"];
                  
                  self.name1 = name;
                  self.acNO1 = acNO;
                  self.phone1 = phone;
                  self.idcarNO1 = idcarNO;
                  self.token = auTkoen;
                  self.auUrl = authUrl;
                  

                  [self callSDKDemo];
              },
           @"openWebview":
                ^(id body) {
                    NSLog(@"请求打开url");
        //          NSLog(@"%@", body.params);
                    NSDictionary *dicjson = (NSDictionary *)body;
                    NSString * url = [dicjson objectForKey:@"url"];
                    NSString * webviewTitle = [dicjson objectForKey:@"webviewTitle"];
                    NSString * title = [dicjson objectForKey:@"title"];
                    NSString * content = [dicjson objectForKey:@"content"];
                    
                    WHWebViewController *whWebVC = [[WHWebViewController alloc] init];
                    whWebVC.urlString = url;
                    whWebVC.titleString = title;
                    whWebVC.contentString = content;
                    
                    UINavigationController *nav = [[UINavigationController alloc] initWithRootViewController:whWebVC];
                    nav.navigationBar.barTintColor = [UIColor whiteColor];
                    [self presentViewController:nav animated:YES completion:nil];
                          
            },
            @"OpenWechat":
             ^(id body) {
                 NSLog(@"请求打开url");
                 NSDictionary *dicjson = (NSDictionary *)body;
                 NSString * wxTitle = [dicjson objectForKey:@"title"];
                 NSString * referer = [dicjson objectForKey:@"referer"];
                 NSString * wxUrl = [dicjson objectForKey:@"url"];
                 
                 WXWebViewController1 *wxWebVC = [[WXWebViewController1 alloc] init];
                 
                 wxWebVC.urlString = wxUrl;
                 wxWebVC.titleString = wxTitle;
                 wxWebVC.referer = referer;
                 
                 UINavigationController *nav = [[UINavigationController alloc] initWithRootViewController:wxWebVC];
                 nav.navigationBar.barTintColor = [UIColor whiteColor];
                 [self presentViewController:nav animated:YES completion:nil];
                 
             },
             @"OpenAlipay":
             ^(id body) {
            NSLog(@"请求使用打开url");
                 NSDictionary *dicjson = (NSDictionary *)body;
                 NSString *title = [dicjson objectForKey:@"title"];
                 NSString *url = [dicjson objectForKey:@"url"];
                 //跳转Safari打开链接
                 [[UIApplication sharedApplication] openURL:[NSURL URLWithString:url]];
                
                 
        }
        
          };
    }
    return _runBlockDict;
}

#pragma mark - OC 调用 JS
- (void)TESTCallJS{
    [[PAWebView shareInstance] callJS:@"alert('调用JS成功')"];
}

- (void)TESTcallJS1
{
    [[PAWebView shareInstance] callJS:@"alert('调用JS成功1')" handler:^(id response, NSError *error) {
        NSLog(@"调用js回调事件");
    }];
}



-(void)checkUpdata{
    
    //创建一个NSURL：请求路径
    NSString *strURL = [NSString stringWithFormat:@"%@", update_url];
//    NSURL *url = [NSURL URLWithString:strURL];
    //创建一个请求
//    NSURLRequest *request = [NSURLRequest requestWithURL:url];
     NSString*paramStr=[NSString stringWithFormat:@"agentId=%@&terminalType=%@",@1000,@2];
    [self request:strURL withHttpArg:paramStr];

    
}

//post  
-(void)request: (NSString*)httpUrl withHttpArg: (NSString*)paramStr{
    NSURL *url = [NSURL URLWithString: httpUrl];
    NSMutableURLRequest *request = [[NSMutableURLRequest alloc]initWithURL: url cachePolicy: NSURLRequestUseProtocolCachePolicy timeoutInterval: 10];
    [request setHTTPMethod: @"POST"];
    [request setValue:@"application/x-www-form-urlencoded" forHTTPHeaderField:@"Content-Type"];
     NSData*paramData=[paramStr dataUsingEncoding:NSUTF8StringEncoding];
    [request setHTTPBody:paramData];
    [NSURLConnection sendAsynchronousRequest: request
                                       queue: [NSOperationQueue mainQueue]
                           completionHandler: ^(NSURLResponse *response, NSData *data, NSError *error){
                               if (error) {
                                   NSLog(@"Httperror: %@%ld", error.localizedDescription, error.code);
                               } else {
                                   NSInteger responseCode = [(NSHTTPURLResponse *)response statusCode];
                                   NSString *responseString = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
                                   NSLog(@"HttpResponseCode:%ld", responseCode);
                                   NSLog(@"HttpResponseBody %@",responseString);
                                   NSJSONSerialization *json = [NSJSONSerialization JSONObjectWithData:data options:0 error:nil];
                                   NSDictionary *dicjson = (NSDictionary *)json;
                                   NSDictionary *dic1 = isToNull(dicjson[@"data"]);
                                   
                                   if(dic1!=NULL&& dic1 != nil){
                                       NSString *version = [dic1 objectForKey:@"version"];
                                                                      NSString *title = [dic1 objectForKey:@"agentName"];
                                                                      NSString *content = [dic1 objectForKey:@"remark"];
                                                                      NSString *url = [dic1 objectForKey:@"url"];
                                       
                                                                      NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];
                                                                      
                                                                      NSString *app_Version = [infoDictionary objectForKey:@"CFBundleShortVersionString"];
                                                                      
                                                                      XLAlertView *xlAlertView = [[XLAlertView alloc] initWithTitle:title message:content sureBtn:@"立即更新" cancleBtn:@"取消"];
                                                                      xlAlertView.resultIndex = ^(NSInteger index){
                                                                          //回调---处理一系列动作
                                                                          [[UIApplication sharedApplication] openURL:[NSURL URLWithString:url]];
                                                                      };
                                       
                                                        NSArray * array1 = [app_Version componentsSeparatedByString:@"."];
                                                                   NSInteger currentVersionInt = 0;
                                                        
                                                        if (array1.count == 3)//默认版本号1.0.0类型
                                                        {
                                                            currentVersionInt = [array1[0] integerValue]*100 + [array1[1] integerValue]*10 + [array1[2] integerValue];
                                                        }
                                                        NSArray * array2 = [version componentsSeparatedByString:@"."];
                                                        NSInteger lineVersionInt = 0;
                                                        if (array2.count == 3)
                                                        {
                                                            lineVersionInt = [array2[0] integerValue]*100 + [array2[1] integerValue]*10 + [array2[2] integerValue];
                                                        }
                                    
                                                                      
                                                                      if ([NSThread isMainThread])
                                                                      {
                                                                          
                                                                          
                                                                          if(currentVersionInt < lineVersionInt ){
                                                                              [xlAlertView showXLAlertView];
                                                                          }
                                                                          
                                                                      }
                                                                      else
                                                                      {
                                                                          dispatch_sync(dispatch_get_main_queue(), ^{
                                                                              //Update UI in UI thread here
                                                                              if(currentVersionInt < lineVersionInt ){
                                                                                  [xlAlertView showXLAlertView];
                                                                              }
                                                                              
                                                                              
                                                                          });
                                                                      }
                                       
                                   }
                                   
                                   
                                    }
                           }];
    
    
  
}

- (void) showShare: (NSString *)title :(NSString *)content :(NSString *)shareLink:(NSString*)imgurl :(NSString *)type :(NSString *)imgName :(NSString *)QRUrl{
    
    NSMutableDictionary *shareParams = [NSMutableDictionary dictionary];
    NSString *typeStr = [NSString stringWithFormat:@"%@",type];
    
    if([typeStr isEqualToString:@"1"]){
        [shareParams SSDKSetupShareParamsByText:content
                                         images:imgurl
                                            url:[NSURL URLWithString:shareLink]
                                          title:title
                                           type:SSDKContentTypeAuto];
        
    }else{
        
         UIImage* image=GetImage(imgName);
            NSLog(@"image : %@",image);
        
        UIImage* qrImg ;
        if(image != nil){
            
            CGImageRef  imageRef = image.CGImage;
            size_t width  = CGImageGetWidth(imageRef);
            size_t height = CGImageGetHeight(imageRef);
            
                   qrImg = [self createBinaryCodeImageByUrl:[QRUrl UTF8String] bottomImg:image drawAtPositionX:(width/2)-90 drawAtPositionY:height-240 binaryCodeImgWidth:200];
        }else{
            qrImg = NULL;
        }
        
        
        NSLog(@"qrImg : %@",qrImg);
        NSLog(@"shareLink :%@",shareLink);
        NSLog(@"title : %@",title);
        [shareParams SSDKSetupShareParamsByText:content
        images:qrImg
           url:[NSURL URLWithString:shareLink]
         title:title
          type:SSDKContentTypeImage];
        
    }
    
    
    
//    NSArray* imageArray = @[[[NSBundle mainBundle] pathForResource:@"D45" ofType:@"jpg"]];
//    [shareParams SSDKSetupShareParamsByText:content
//                                     images:imgurl
//                                        url:[NSURL URLWithString:shareLink]
//                                      title:title
//                                       type:SSDKContentTypeAuto];
    
    [ShareSDK showShareActionSheet:nil //(第一个参数要显示菜单的视图, iPad版中此参数作为弹出菜单的参照视图，在ipad中要想弹出我们的分享菜单，这个参数必须要传值，可以传自己分享按钮的对象，或者可以创建一个小的view对象去传，传值与否不影响iphone显示)
                customItems:@[@(SSDKPlatformSubTypeWechatSession),
                      @(SSDKPlatformSubTypeWechatTimeline)]                                    shareParams:shareParams
                sheetConfiguration:nil
                    onStateChanged:^(SSDKResponseState state,
                                     SSDKPlatformType platformType,
                                     NSDictionary *userData,
                                     SSDKContentEntity *contentEntity,
                                     NSError *error,
                                     BOOL end)
     {
    
         switch (state) {
    
             case SSDKResponseStateSuccess:
                 NSLog(@"成功");//成功
                 break;
             case SSDKResponseStateFail:
             {
                 NSLog(@"--%@",error.description);
                 //失败
                 break;
             }
             case SSDKResponseStateCancel:
                 break;
             default:
                 break;
         }
     }];
    
}


/**
 face调用
 */
-(void)callSDKDemo {
    //1.先请求网络授权
    [CustomHUD showHUDLoadingWithText:@"" inView:self.view];
    [CPCNLiveDetectionLicence licenseForNetWorkFinish:^(bool isSuccess) {        
        if(isSuccess) {
            [CustomHUD HideHUDFrom:self.view animated:YES];
            //2.授权成功，初始化 活体检测Controller
            CustomLiveDetectionVC *vc = [[CustomLiveDetectionVC alloc] init];
            [vc setValue:self.name1 :self.idcarNO1 :self.phone1 :self.acNO1 :self.token :self.auUrl];
            //设置脸部占屏比例
//            if(self.faceMaxSizeRatio.text.length > 0) {
//                vc.faceMaxSizeRatio = self.faceMaxSizeRatio.text.floatValue;
//            }
            [self.navigationController pushViewController:vc animated:YES];
        }else {
            [CustomHUD HideHUDAndShowFail:@"授权失败" inView:self.view];
        }
    }];
}




//把生成的二维码贴到底图上,里面嵌套调用了生成二维码图片的方法
-(UIImage *)createBinaryCodeImageByUrl:(const char *)url bottomImg:(UIImage *)bottomImg drawAtPositionX:(int)drawAtPositionX drawAtPositionY:(int)drawAtPositionY binaryCodeImgWidth:(int)binaryCodeImgWidth
{

    UIImage *binaryImg = [self createBinaryCodeImg:url withSize:binaryCodeImgWidth];
    
    CGImageRef  imageRef = bottomImg.CGImage;
    size_t width  = CGImageGetWidth(imageRef);
    size_t height = CGImageGetHeight(imageRef);
    
    size_t bitsPerComponent = CGImageGetBitsPerComponent(imageRef);
    size_t bitsPerPixel = CGImageGetBitsPerPixel(imageRef);
    size_t bytesPerRow = CGImageGetBytesPerRow(imageRef);
    
    CGColorSpaceRef colorSpace = CGImageGetColorSpace(imageRef);
    CGBitmapInfo bitmapInfo = CGImageGetBitmapInfo(imageRef);
    
    bool shouldInterpolate = CGImageGetShouldInterpolate(imageRef);
    
    CGColorRenderingIntent intent = CGImageGetRenderingIntent(imageRef);
    CGDataProviderRef dataProvider = CGImageGetDataProvider(imageRef);
    
    CFDataRef   data = CGDataProviderCopyData(dataProvider);
    UInt8*   buffer = (UInt8*)CFDataGetBytePtr(data);
    
    CGImageRef binaryImgRef = binaryImg.CGImage;
    CGDataProviderRef binaryImgDataPvd = CGImageGetDataProvider(binaryImgRef);
    CFDataRef datacpy  = CGDataProviderCopyData(binaryImgDataPvd);
    UInt8 *binaryImgBuffer = (UInt8 *)CFDataGetBytePtr(datacpy);
    size_t binaryBitsPerRow = CGImageGetBytesPerRow(binaryImgRef);
    
    NSUInteger  x, y,w,h;
    int limitWidth = drawAtPositionX + binaryCodeImgWidth;
    int limitHeight = drawAtPositionY + binaryCodeImgWidth;
    for (y = drawAtPositionY,h = 0; y < limitHeight; y++,h++) {
        for (x = drawAtPositionX,w = 0; x < limitWidth; x++,w++) {
            UInt8*  tmp,*binaryTmp;
            tmp = buffer + y * bytesPerRow + x * 4;
            binaryTmp = binaryImgBuffer + h * binaryBitsPerRow + w * 4;
            
            *(tmp + 0) = *(binaryTmp + 0);
            *(tmp + 1) = *(binaryTmp + 1);
            *(tmp + 2) = *(binaryTmp + 2);
        }
    }
    
    CFDataRef   effectedData = CFDataCreate(NULL, buffer, CFDataGetLength(data));
    
    CGDataProviderRef   effectedDataProvider = CGDataProviderCreateWithCFData(effectedData);
    
    CGImageRef  effectedCgImage;
    UIImage*    effectedImage;
    effectedCgImage = CGImageCreate(
                                    width, height,
                                    bitsPerComponent, bitsPerPixel, bytesPerRow,
                                    colorSpace, bitmapInfo, effectedDataProvider,
                                    NULL, shouldInterpolate, intent);
    effectedImage = [[UIImage alloc] initWithCGImage:effectedCgImage];
    
    CGImageRelease(effectedCgImage);
    CFRelease(effectedDataProvider);
    CFRelease(effectedData);
    CFRelease(data);
    
    CFRelease(datacpy);
    
    return effectedImage;
}

- (UIImage *) createBinaryCodeImg:(const char  *)url withSize:(CGFloat) size
{
    //create binary code image with the url
    CIFilter *ciFilter = [CIFilter filterWithName:@"CIQRCodeGenerator"];
    [ciFilter setDefaults];
    NSString *showUrl = [NSString stringWithCString:url encoding:NSUTF8StringEncoding];
    NSData *nsData = [showUrl dataUsingEncoding:NSUTF8StringEncoding];
    [ciFilter setValue:nsData forKey:@"inputMessage"];
    CIImage *image = [ciFilter outputImage];
    
    //fixing the image to the size
    CGRect extent = CGRectIntegral(image.extent);
    CGFloat scale = MIN(size/CGRectGetWidth(extent), size/CGRectGetHeight(extent));
    
    size_t width = CGRectGetWidth(extent) * scale;
    size_t height = CGRectGetHeight(extent) * scale;
    CGColorSpaceRef cs = CGColorSpaceCreateDeviceRGB();
    
    CGContextRef bitmapRef = CGBitmapContextCreate(nil, width, height, 8, 0, cs, (CGBitmapInfo)kCGImageAlphaPremultipliedLast);
    CIContext *context = [CIContext contextWithOptions:nil];
    CGImageRef bitmapImage = [context createCGImage:image fromRect:extent];
    CGContextSetInterpolationQuality(bitmapRef, kCGInterpolationNone);
    CGContextScaleCTM(bitmapRef, scale, scale);
    CGContextDrawImage(bitmapRef, extent, bitmapImage);
    
    CGImageRef scaledImage = CGBitmapContextCreateImage(bitmapRef);
    CGContextRelease(bitmapRef);
    CGImageRelease(bitmapImage);
    
    return [UIImage imageWithCGImage:scaledImage];
}





- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
