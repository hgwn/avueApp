//
//  WebViewController.h
//  baiwang
//
//  Created by dht_pro on 2019/10/24.
//  Copyright © 2019 llyouss. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface WebViewController : UIViewController
//网页链接
@property(nonatomic,copy)NSString *urlStr;
//html内容
@property(nonatomic,copy)NSString *content;
@end
