---
title: printf在clion编程嵌入式程序的实现
date: 2024-03-14 20:04:54
permalink: /pages/90102a/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2024-03-07 15:35  
Status: #idea  
Tags: [[嵌入式]] [[C语言]]

---

# printf在clion编程嵌入式程序的实现
```c
#include "stdio.h"  
  
#ifdef __GNUC__  
#define PUTCHAR_PROTOTYPE int __io_putchar(int ch)  
#else  
#define PUTCHAR_PROTOTYPE int fputc(int ch, FILE *f)  
#endif  
  
PUTCHAR_PROTOTYPE {  
    HAL_UART_Transmit(&huart3, (uint8_t *) &ch, 1, 0xFFFF);  
  
    return ch;  
}
```
## 计算波特率
不要有误差，对于STM32f103来说有：
$$
\frac{F_{主频}}{16*分频系数} = 波特率
$$
其中，分频系数使用一个三个字节的寄存器存储，两个字节为整数，一个字节为小数，所以为了避免误差，应选择合适的频率
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20240307155517.png)
## 对于clion来说：
嵌入式串口交互：在CLion中链接的是GNU-Tools-ARM-Embedded\arm-none-eabi\include里面的stdio.h，需重构syscalls.c中以下回调函数或者在项目中添加retarget.h和.c文件并注释掉syscalls.c中同名函数：
```c
int _isatty(int fd)
int _write(int fd, char *ptr, int len)
int _close(int fd)
int _lseek(int fd, int ptr, int dir)
int _read(int fd, char *ptr, int len)
int _fstat(int fd, struct stat *st)
```
新建一个retarget.h文件内容如下：
```c
#ifndef _RETARGET_H__  
#define _RETARGET_H__  
  
#include "stm32f1xx_hal.h"  
#include <stdio.h>  
  
void RetargetInit(UART_HandleTypeDef *huart);  
  
int _write(int fd, char *ptr, int len);  
int _read(int fd, char *ptr, int len);  
  
#endif //#ifndef _RETARGET_H__
```
再新建一个retarget.c文件内容如下：
```c
#include <errno.h>  
#include <sys/times.h>  
#include <retarget.h>  
  
#if !defined(OS_USE_SEMIHOSTING)  
  
#define STDIN_FILENO  0  
#define STDOUT_FILENO 1  
#define STDERR_FILENO 2  
  
UART_HandleTypeDef *gHuart;  
  
void RetargetInit(UART_HandleTypeDef *huart)  
  
{  
    gHuart = huart;  
    /* Disable I/O buffering for STDOUT stream, so that  
     * chars are sent out as soon as they are printed. */    setvbuf(stdout, NULL, _IONBF, 0);  
}  
  
  
  
int _write(int fd, char *ptr, int len)  
{  
    HAL_StatusTypeDef hstatus;  
    if (fd == STDOUT_FILENO || fd == STDERR_FILENO)  
    {  
        hstatus = HAL_UART_Transmit(gHuart, (uint8_t *) ptr, len, HAL_MAX_DELAY);  
        if (hstatus == HAL_OK)  
            return len;  
        else  
            return EIO;  
    }  
    errno = EBADF;  
    return -1;  
}  
  
  
  
  
  
int _read(int fd, char *ptr, int len)  
{  
    HAL_StatusTypeDef hstatus;  
    if (fd == STDIN_FILENO)  
    {  
        hstatus = HAL_UART_Receive(gHuart, (uint8_t *) ptr, 1, HAL_MAX_DELAY);  
        if (hstatus == HAL_OK)  
            return 1;  
        else  
            return EIO;  
    }  
    errno = EBADF;  
    return -1;  
}  
  
  
#endif //#if !defined(OS_USE_SEMIHOSTING)

```


需要注意的是：printf()和scanf()都是用轮询方式，没有使用中断。调用scanf()在串口助手中输入数据时，必须以空格或回车结束，然后点击发送，否则无法完成发送（mcu会认为串口一直没有收到数据）,一直处于判断串口Flag的状态（__HAL_UART_GET_FLAG()），陷入UART_WaitOnFlagUntilTimeout()函数下的while循环当中出不来。

附上调试成功后的效果：串口交互 Hello world！
$$
F_{5}(x)=-20 \exp \left(-0.2 \sqrt{\frac{1}{n} \sum_{i=1}^{n} x_{i}^{2}}-\exp \left(\sqrt{\frac{1}{n} \sum_{i=1}^{n} \cos 2 \pi x_{i}}\right)\right)+20+e
$$
main.c中添加代码：
```c
#include "retarget.h"
 
UART_HandleTypeDef huart1;    //声明串口句柄
MX_USART1_UART_Init();        //STM32CubeMX生成
 

 
int main(void)
{
    // 此处省略初始化代码
    RetargetInit(&huart1);
    while (1)
    {
        char buff[100];
        printf("\r\n Your name:");
        scanf("%s",buff);
        printf("\r\nHello,%s!\r\n",buff);
        return 0;
    }
}
```
对于float的输入，需要在cmake中添加，不过我好像没添加也没有：
```c
set(COMMON_FLAGS "-specs=nosys.specs -specs=nano.specs -u _printf_float -u _scanf_float")
```
# references
[在CLion中重定向scanf()和printf()函数至串口#STM32_mx_usart1_uart_init retargetinit-CSDN博客](https://blog.csdn.net/iyt2017/article/details/132637582)