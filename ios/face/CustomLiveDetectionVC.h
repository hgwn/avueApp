//
//  CustomLiveDetectionVC.h
//  SDKDemo
//
//  Created by zj_baiyijing on 2018/11/26.
//  Copyright © 2018年 zj_baiyijing. All rights reserved.
//  

#import <UIKit/UIKit.h>
#import <CPCNLiveDetection/CPCNLiveDetection.h>



@interface CustomLiveDetectionVC : CPCNLiveDetectionViewController

-(void)setValue:(NSString*)name :(NSString*)idcrdNO :(NSString*)phone :(NSString*)acNO :(NSString*)token :(NSString *)authUrl;

@end


