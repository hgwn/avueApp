//
//  ToastManager.h
//  baiwang
//
//  Created by dht_pro on 2019/12/4.
//  Copyright © 2019 llyouss. All rights reserved.
//
#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#define Toast [ToastManager shared]

#define Twidth [UIScreen mainScreen].bounds.size.width
#define Theight [UIScreen mainScreen].bounds.size.height

#define K_Toast_incalidTime 3.0 //显示时间
#define K_Toast_centerY Theight / 2 //中心Y的位置
#define K_Toast_cornerRadius 3 //圆角大小
#define K_Toast_shake YES //动画设置
#define K_dismissWhenDidDisappear YES

@class ToastManager;

typedef ToastManager * (^TOAST_TEXT)(NSString * text);
typedef ToastManager * (^TOAST_CTLR)(UIViewController * controller);


@interface ToastManager : NSObject

@property (nonatomic, assign) CGFloat invalidTime;

@property (nonatomic, assign) CGFloat centerY;
///传入要显示的内容
@property (nonatomic, readonly) TOAST_TEXT makeText;
///传入当前控制器
@property (nonatomic, readonly) TOAST_CTLR dismissWhenWillDisappear;
///显示方法
- (instancetype)showOnDismiss:(dispatch_block_t)onDismiss;
///立即消失的方法
- (void)dismiss;


@end

#pragma mark - 单利相关

@interface ToastManager (Once)

+ (instancetype)shared;
///销毁单利方法
//- (void)destoryToastManager;
@end
