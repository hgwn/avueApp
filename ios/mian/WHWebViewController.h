//
//  WHWebViewController.h
//  baiwang
//
//  Created by dht_pro on 2019/10/25.
//  Copyright © 2019 llyouss. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface WHWebViewController : UIViewController

/**
 请求的url
 */
@property (nonatomic,copy) NSString *urlString;

/**
 请求的title
 */
@property (nonatomic,copy) NSString *titleString;


/**
 请求的content
 */
@property (nonatomic,copy) NSString *contentString;

/**
 要注入的js方法
 */
@property (nonatomic,copy) NSString *jsString;

/**
 进度条颜色
 */
@property (nonatomic,strong) UIColor *loadingProgressColor;

/**
 是否下拉重新加载
 */
@property (nonatomic, assign) BOOL canDownRefresh;

@end
