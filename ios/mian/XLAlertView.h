//
//  XLAlertView.h
//
//  Created by tian jian on 2017/9/7.
//

#import <UIKit/UIKit.h>

typedef void(^AlertResult)(NSInteger index);

@interface XLAlertView : UIView

@property (nonatomic,copy) AlertResult resultIndex;

- (instancetype)initWithTitle:(NSString *)title message:(NSString *)message sureBtn:(NSString *)sureTitle cancleBtn:(NSString *)cancleTitle;

- (void)showXLAlertView;

@end

