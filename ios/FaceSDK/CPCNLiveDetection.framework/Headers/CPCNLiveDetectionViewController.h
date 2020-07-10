//
//  MyViewController.h
//  MegLiveDemo
//
//  Created by 张英堂 on 16/6/8.
//  Copyright © 2016年 megvii. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <MGLivenessDetection/MGLivenessDetection.h>


typedef NS_ENUM(NSUInteger, CPCN_ERROR_TYPE)
{
    CPCN_SUCCESS = 1, //成功返回
    CPCN_ERROR_AUTHORIZED_FAIL, //链接失败，授权失败
    CPCN_ERROR_DETECT_FAIL, //活体检测失败
    CPCN_ERROR_ACTIONBLEND, //动作错误
    CPCN_ERROR_NOTVIDEO,
    CPCN_ERROR_TIMEOUT,                  ///<超时
    CPCN_ERROR_FACELOSTNOTCONTINUOUS,
    CPCN_ERROR_TOOMANYFACELOST,
    CPCN_ERROR_FACENOTCONTINUOUS,
    CPCN_ERROR_TYPE_MASK
};

typedef void(^CPCNLiveDetectionDetectResultBlock)(NSDictionary *imageDictionary,NSString *delta,CPCN_ERROR_TYPE state);



@interface CPCNLiveDetectionViewController : MGLiveDetectViewController


/**
 人脸占据屏幕的比例，默认是0.4  可以把这个比例调大，就意味着摄像头距离人脸距离拉近才能进行活体，反之拉远才能进行活体，不过不建议把这个参数调太大，否则防攻击能力会下降
 */
@property (nonatomic,assign) float faceMaxSizeRatio;


/**
 活体检测完成回调
 */
@property (nonatomic, strong) CPCNLiveDetectionDetectResultBlock resultBlock;


@end
