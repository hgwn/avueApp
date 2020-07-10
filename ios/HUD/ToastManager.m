//
//  ToastManager.m
//  baiwang
//
//  Created by dht_pro on 2019/12/4.
//  Copyright © 2019 llyouss. All rights reserved.
//

#import "ToastManager.h"
#import <objc/runtime.h>


@interface ToastManager ()
/**文字存储*/
@property (nonatomic, strong) NSString *labelText;
/**window*/
@property (nonatomic, strong) UIWindow *window;
/**父控制器*/
@property (nonatomic, strong) UIViewController *parentController;

+ (void)registerViewControllerClass:(Class)cls;

@end

#pragma mark - viewDidDisappear 勾子
@implementation UIViewController (ToastDisappear)

- (void)registerToastController {
    // 为防止重复 勾 viewDidDisappear 用 dispatch_once 确保每个类只勾 1 次
    __block Class cls = [self class];
    dispatch_once_t onceToken = [objc_getAssociatedObject(cls, "toastRegisterOnceToken") longValue];
    dispatch_once(&onceToken, ^{
        [ToastManager registerViewControllerClass:cls];
    });
    objc_setAssociatedObject(cls, "toastRegisterOnceToken", @(onceToken), OBJC_ASSOCIATION_RETAIN_NONATOMIC);
}

- (void)toastDidDisappearAndReCall:(BOOL)animated {
    // 回调原 Controller 的 viewDidDissappear
    [self _selfDidDisappear:animated];
    [self toastDidDisappear:animated];
}

- (void)toastDidDisappear:(BOOL)animated {

    [[ToastManager shared] dismiss];
    
}

- (void)_selfDidDisappear:(BOOL)animated {
    NSLog(@"此方法用于回调原 ViewController 的 viewDidDisappear 函数指针被替换");
}

@end


@implementation ToastManager

- (TOAST_TEXT)makeText {
    return ^(NSString *text) {
        self.labelText = text;
        return self;
    };
}

- (TOAST_CTLR)dismissWhenWillDisappear {
    __weak typeof(self) weakSelf = self;
    return ^(UIViewController *controller) {
        [controller registerToastController];
        weakSelf.parentController = controller;
        return weakSelf;
    };
}

- (instancetype)showOnDismiss:(dispatch_block_t)onDismiss {
    NSLog(@"%@",self.labelText);
    
    UIView *bgView = [_window.rootViewController.view viewWithTag:2018121501];
    if (!bgView) {
        bgView = [UIView new];
        bgView.alpha = 0;
    }

    dispatch_async(dispatch_get_main_queue(), ^{
        bgView.tag = 2018121501;
        bgView.frame = CGRectMake(0, 0,Twidth ,Theight);

        bgView.autoresizingMask = UIViewAutoresizingFlexibleWidth |
        UIViewAutoresizingFlexibleHeight |
        UIViewAutoresizingFlexibleTopMargin |
        UIViewAutoresizingFlexibleLeftMargin |
        UIViewAutoresizingFlexibleRightMargin |
        UIViewAutoresizingFlexibleBottomMargin;
        
        UIView *contenter = [bgView viewWithTag:2018121503];
        if (!contenter) {
            contenter = [UIView new];
        }
        contenter.backgroundColor = [UIColor colorWithRed:0 green:0 blue:0 alpha:0.7];
        contenter.layer.cornerRadius = 3;
        contenter.tag = 2018121503;
        
        UILabel *label = [contenter viewWithTag:2018121502];
        if (!label) {
            label = [UILabel new];
        }
        label.tag = 2018121502;

        label.textColor = [UIColor whiteColor];
        if ([self.labelText isEqualToString:label.text] && K_Toast_shake) {
            CABasicAnimation* shake = [CABasicAnimation animationWithKeyPath:@"transform.translation.x"];
            shake.fromValue = [NSNumber numberWithFloat:-5];
            shake.toValue = [NSNumber numberWithFloat:5];
            shake.duration = 0.1;//执行时间
            shake.autoreverses = YES; //是否重复
            shake.repeatCount = 2;//次数
            [contenter.layer addAnimation:shake forKey:@"shakeAnimation"];

        }
        label.text = self.labelText;
        label.numberOfLines = 0;
        label.textAlignment = NSTextAlignmentLeft;
        label.font = [UIFont systemFontOfSize:20];
        CGSize expectSize = [label sizeThatFits:CGSizeMake(Twidth - 30, 0)];
        label.frame = CGRectMake(0, 0, expectSize.width, expectSize.height);

        contenter.frame = CGRectMake(label.frame.origin.x, label.frame.origin.y , label.frame.size.width + 10, label.frame.size.height + 8);
        [contenter addSubview: label];
        
        [bgView addSubview:contenter];
        label.center = contenter.center;
        contenter.center = CGPointMake(Twidth / 2, K_Toast_centerY);
        
        UIViewController *vc = [UIViewController new];
        [vc.view addSubview:bgView];
        
        //创建window
        self->_window = [[UIWindow alloc] initWithFrame:CGRectMake(0, 0, Twidth, Theight)];
        self->_window.windowLevel = UIWindowLevelStatusBar;
        self->_window.rootViewController = vc;
        //不影响主window的交互事件
        self->_window.rootViewController.view.userInteractionEnabled = NO;
        self->_window.userInteractionEnabled = NO;
        [self->_window makeKeyAndVisible];
       
        if (self->_invalidTime <= 0) {
            [UIView animateWithDuration:0.15 delay:0 options:UIViewAnimationOptionShowHideTransitionViews animations:^{
                bgView.alpha = 1;
            } completion:nil];

        }

        // 创建GCD定时器
        /**
         当有效时间内再次触发方法，计时器不会被销毁和创建多次，仅仅是有效时间被重置。
         */
        
        dispatch_queue_t queue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
        
        dispatch_source_t _timer = dispatch_source_create(DISPATCH_SOURCE_TYPE_TIMER, 0, 0, queue);
        
        dispatch_source_set_timer(_timer, dispatch_walltime(NULL, 0), 0.5 * NSEC_PER_SEC, 0); //每秒执行
        
        // 事件回调
        dispatch_source_set_event_handler(_timer, ^{
            if (self->_invalidTime <= 0.0) {
                dispatch_source_cancel(_timer);
                //回到主线程
                dispatch_async(dispatch_get_main_queue(), ^{
                    //消失的动画
                    [UIView animateWithDuration:0.2 delay:0 options:UIViewAnimationOptionShowHideTransitionViews animations:^{
                        bgView.alpha = 0;
                        
                    } completion:^(BOOL finished) {
                        if (onDismiss) {
                            onDismiss();
                        }
                        self->_window.hidden = YES;
                        self->_window = nil;
                        
                    }];
                });
            }
            self->_invalidTime -= 0.5;
        });
        
        if (self->_invalidTime <= 0) {
            dispatch_resume(_timer);
        }
        self->_invalidTime = K_Toast_incalidTime;

    });
    
    return self;
}
//消失
- (void)dismiss {
    self.invalidTime = 0.0;
    _window.hidden = YES;
    _window = nil;
    
}
// 给 viewDidDisappear 注入勾子 勾到函数toastDidDisappear上
+ (void)registerViewControllerClass:(Class)cls {

    if (cls == [UIImagePickerController class]) {
        return;
    }
    
    Method toastDidDisappearMethod = class_getInstanceMethod([UIViewController class], @selector(toastDidDisappear:));
    IMP toastDidDisappearIMP = method_getImplementation(toastDidDisappearMethod);
    
    const char *viewDidDisappearTypes = method_getTypeEncoding(class_getInstanceMethod([UIViewController class], @selector(viewWillDisappear:)));
    
    // 如果对象 没有 override func viewDidDisappear 则创建一个 并跳转到 taskDidDisappear
    if (!class_addMethod(cls, @selector(viewWillDisappear:), toastDidDisappearIMP, viewDidDisappearTypes)) {
        // 条件成功表明 对象已 override viewDidDisappear
        Method toastDidDisappearAndRecallMethod = class_getInstanceMethod(cls, @selector(toastDidDisappearAndReCall:));
        IMP taskDidDisappearAndRecallIMP = method_getImplementation(toastDidDisappearAndRecallMethod);
        
        IMP viewDidDisappearIMP = class_replaceMethod(cls, @selector(viewWillDisappear:), taskDidDisappearAndRecallIMP, viewDidDisappearTypes);
        
        const char *selfDidDisappearTypes = method_getTypeEncoding(class_getInstanceMethod([UIViewController class], @selector(_selfDidDisappear:)));
        // 并且 创建/替换 一个 __selfDidDisappear 函数为原 override func viewDidDisappear 的指针, 用于回调
        if (!class_addMethod(cls, @selector(_selfDidDisappear:), viewDidDisappearIMP, selfDidDisappearTypes)){
            class_replaceMethod(cls, @selector(_selfDidDisappear:), viewDidDisappearIMP, selfDidDisappearTypes);
        }
    }
}


@end

//单利相关
@implementation ToastManager (Once)
static ToastManager *toast;
static dispatch_once_t onceToken;

+ (instancetype)shared {
    return [ToastManager new];
}

+ (instancetype)allocWithZone:(struct _NSZone *)zone {
    dispatch_once(&onceToken, ^{
        toast = [super allocWithZone:zone];
    });
    return toast;
}
- (instancetype)init {
    dispatch_once(&onceToken, ^{
        toast = [super init];
    });
    self = toast;
    return self;
}
- (id)copy {
    return self;
}
- (id)mutableCopy {
    return self;
}

@end
