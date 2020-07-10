//
//  CustomLiveDetectionVC.m
//  SDKDemo
//
//  Created by zj_baiyijing on 2018/11/26.
//  Copyright © 2018年 zj_baiyijing. All rights reserved.
//  活体检测界面,需要继承CPCNLiveDetectionViewController

#import "CustomLiveDetectionVC.h"
#import "CompletionViewController.h"
#import "PAWebView.h"
#import "ToastManager.h"


@interface CustomLiveDetectionVC()

@property(strong,nonatomic)NSString *mName;
@property(strong,nonatomic)NSString *mIdcarNO;
@property(strong,nonatomic)NSString *mPhone;
@property(strong,nonatomic)NSString *mAcNO;
@property(strong,nonatomic)NSString *mToken;
@property(strong,nonatomic)NSString *mAuthUrl;

@end

@implementation CustomLiveDetectionVC

NSString *strURL =@"http://120.79.74.34:6065/auth/all";




- (void)viewDidLoad {
    [super viewDidLoad];
    //采集图片完成后的回调block
    __weak __typeof(self) weakSelf = self;
    self.resultBlock = ^(NSDictionary *imageDictionary, NSString *delta, CPCN_ERROR_TYPE state) {
        NSLog(@"delta = %@",delta);
       
        if (state == CPCN_SUCCESS) {
            //成功之后跳转完成界面
//            CompletionViewController *completionVC = [[CompletionViewController alloc] init];
//            [weakSelf.navigationController pushViewController:completionVC animated:YES];
            //创建一个NSURL：请求路径
//            NSString *strURL = [NSString stringWithFormat:@"%@", update_url];
//            NSURL *url = [NSURL URLWithString:strURL];
            //创建一个请求
//            NSURLRequest *request = [NSURLRequest requestWithURL:url];
            //组装请求参数
            
            NSString *image_best = [imageDictionary objectForKey:@"image_best"];
            NSString *image_env = [imageDictionary objectForKey:@"image_env"];
            NSLog(@"image_best = %@",image_best);
            NSLog(@"image_env = %@",image_env);
            
            NSString*paramStr=[NSString stringWithFormat:@"accountNumber=%@&agentId=%@&delta=%@&identificationNumber=%@&imageBest=%@&imageEnv=%@&name=%@&phoneNumber=%@",self.mAcNO,@20000,delta,self.mIdcarNO,image_best,image_env,self.mName,self.mPhone];
            
            NSString *token = [@"Bearer " stringByAppendingString:self.mToken];
            
            NSString *url = [self.mAuthUrl stringByAppendingString:@"/user/face/auth"];
            
            [weakSelf request:url withHttpArg:paramStr auToken:token];
            
            
        }else{
            NSLog(@"检测失败 %zd",state);
            [weakSelf.navigationController popViewControllerAnimated:YES];
        }

    };
}

-(void)setValue:(NSString*)name:(NSString*)idcrdNO:(NSString*)phone:(NSString*)acNO:(NSString*)token:(NSString*)authUrl{

    self.mName = name;
    self.mIdcarNO = idcrdNO;
    self.mPhone = phone;
    self.mAcNO = acNO;
    self.mToken = token;
    self.mAuthUrl = authUrl;
    
}


//重写creatView方法
- (void)creatView {
    [super creatView];
    
    //可自定义修改页面的样式
    //...
////    //可以调整拍摄视图的大小
////    [[self.videoManager videoPreview] setFrame:CGRectMake(0, 64, UIScreen.mainScreen.bounds.size.width, UIScreen.mainScreen.bounds.size.width)];
////    //调整视图上蒙版大小
////    [self.headerView setFrame:[self.videoManager videoPreview].frame];
}

  //post  
-(void)request: (NSString*)httpUrl withHttpArg: (NSString*)paramStr auToken: (NSString *)token{
    NSURL *url = [NSURL URLWithString: httpUrl];
    NSMutableURLRequest *request = [[NSMutableURLRequest alloc]initWithURL: url cachePolicy: NSURLRequestUseProtocolCachePolicy timeoutInterval: 10];
    [request setHTTPMethod: @"POST"];
    [request setValue:@"application/x-www-form-urlencoded" forHTTPHeaderField:@"Content-Type"];
    [request setValue:token forHTTPHeaderField:@"Authorization"];
    
    //NSData*paramData= [paramStr dataUsingEncoding:NSUTF8StringEncoding];
    NSString *sign = [paramStr stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet characterSetWithCharactersInString:@"#%<>[\\]^`{|}\"]+"].invertedSet];
    NSData*paramData= [sign dataUsingEncoding:NSUTF8StringEncoding];
   
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
                                   if(json!=nil){
                                       NSString *mCode = [dicjson objectForKey:@"code"];
                                       NSString *mCodeStr = [NSString stringWithFormat:@"%@",mCode];
                                       
                                       if([mCodeStr isEqualToString:@"200000"]){
                                           
                                           NSDictionary *datajson = [dicjson objectForKey:@"data"];
                                           
                                           NSString *result = [datajson objectForKey:@"result"];
                                           
                                           NSString *resultStr = [NSString stringWithFormat:@"%@",result];
                                           
                                           if([resultStr isEqualToString:@"000"]){
                                               if ([NSThread isMainThread])
                                                  {
                                                      [self.navigationController popViewControllerAnimated:YES];
                                                      
                                                      PAWebView *webView = [PAWebView shareInstance];

                                                      NSString *path = [[NSBundle mainBundle] bundlePath];

                                                      NSString * htmlPath = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"];

                                                      // 拼接参数
                                                      htmlPath = [htmlPath stringByAppendingString:@"#/authentication-success"];
                                                      htmlPath = [@"file://" stringByAppendingString:htmlPath];

                                                      NSURL *url = [NSURL URLWithString:htmlPath];
                                                                                                       NSLog(@"path：%@， url：%@", path, url);
                                                                                                       NSURLRequest *request = [NSURLRequest requestWithURL:url];
                                                      
                                                      [webView loadRequestURL:request];
                                                          
                                               
                                                  }
                                                  else
                                                  {
                                                   dispatch_sync(dispatch_get_main_queue(), ^{
                                                          //Update UI in UI thread here

                                                       
                                                       [self.navigationController popViewControllerAnimated:YES];
                                                       
                                                          PAWebView *webView = [PAWebView shareInstance];

                                                          NSString *path = [[NSBundle mainBundle] bundlePath];
                                                          NSURL *baseURL = [NSURL fileURLWithPath:path];
                                                          NSString * htmlPath = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"];

                                                          // 拼接参数
                                                          htmlPath = [path stringByAppendingString:@"#/authentication-success"];
                                                          htmlPath = [@"file://" stringByAppendingString:path];


                                                          NSString * htmlCont = [NSString stringWithContentsOfFile:htmlPath
                                                                                                          encoding:NSUTF8StringEncoding
                                                                                                             error:nil];
                                                          [webView loadLocalHTML:htmlCont :baseURL];



                                                      });
                                                  }
                                           }else{
                                               [Toast.makeText(@"活体认证异常，请重试！") showOnDismiss:nil];
                                                                                         
                                                                                         [self.navigationController popViewControllerAnimated:YES];
                                           }
                                           
                                           
                                       }else{
                                           
                                           [Toast.makeText(@"活体认证异常，请重试！") showOnDismiss:nil];
                                           
                                           [self.navigationController popViewControllerAnimated:YES];
                                           
                                       }
                                   }
                        

                               }
                           }];



}




@end
