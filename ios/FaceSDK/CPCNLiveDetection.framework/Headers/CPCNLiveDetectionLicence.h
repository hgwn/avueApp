//
//  CPCNLiveDetectionLicence.h
//  CPCNLiveDetection
//
//  Created by zj_baiyijing on 2018/11/26.
//  Copyright © 2018年 bin xie. All rights reserved.
//

#import <Foundation/Foundation.h>



@interface CPCNLiveDetectionLicence : NSObject

/**
 *  请求网络授权 
 */
+ (void)licenseForNetWorkFinish:(void(^)(bool isSuccess))finish;


/**
 *  SDK是否授权
 *
 *  @return 是否授权
 */
+ (BOOL)getLicense;
@end


