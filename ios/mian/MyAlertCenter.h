//
//  Header.h
//  baiwang
//
//  Created by dht_pro on 2019/10/19.
//  Copyright © 2019 llyouss. All rights reserved.
//


#import <UIKit/UIKit.h>
 
@interface MyAlert : UIView
 
-(id)init;
- (void) setMessageText:(NSString *)message;
@end
 
 
 
@interface MyAlertCenter : NSObject{
    
    MyAlert *myAlertView;//alertView
    BOOL active;//当前是否在用
    
    
}
 
+ (MyAlertCenter *) defaultCenter;//单例 生成alert控制器
- (void) postAlertWithMessage:(NSString*)message;//弹出文字
 
@end

