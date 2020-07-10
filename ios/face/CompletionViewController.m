//
//  CompletionViewController.m
//  SDKDemo
//
//  Created by zj_baiyijing on 2017/11/15.
//  Copyright © 2017年 zj_baiyijing. All rights reserved.
//

#import "CompletionViewController.h"

@interface CompletionViewController ()

@end

@implementation CompletionViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"完成";
    UIBarButtonItem * leftBarBtn = [[UIBarButtonItem alloc]initWithTitle:@"返回" style:UIBarButtonItemStylePlain target:self action:@selector(clickBack)];
    self.navigationItem.leftBarButtonItem = leftBarBtn;
}

-(void)clickBack {
    [self.navigationController popToRootViewControllerAnimated:YES];
}


-(instancetype)init{

    UIStoryboard *sb = [UIStoryboard storyboardWithName:@"Main" bundle:[NSBundle mainBundle]];
    self = [sb instantiateViewControllerWithIdentifier:@"CompletionViewController"];
    return self;
}
@end
