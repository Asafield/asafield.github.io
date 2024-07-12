---
title: obsidian中使用vim
date: 2023-12-19 15:02:44
permalink: /pages/5fdbc2/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-03-16 19:38  
Status: #notes 
Tags: [[vim]]

---

# obsidian中使用vim
## 问题描述
问题描述：vim适用于英文输入法，因此在中文输入有如下的困扰：
- 切换问题：命令模式与输入模式之间切换时自动完成输入法的切换
- 进入命令模式：无法使用`jk`快速进行切换，因为中文的输入j与k不会上屏
- 移动问题：在输入状态下进行移动的问题，用按键映射好像会失灵。

## 方案设计
- 用已有方案进行设计：插件Vim Input Method Switch


当前探索结果，待整理
```ahk
  

GetGUIThreadInfo_hwndActive(WinTitle="A")

{

  ControlGet, hwnd, HWND,,, %WinTitle%

  if (WinActive(WinTitle)) {

    ptrSize := !A_PtrSize ? 4 : A_PtrSize

    VarSetCapacity(stGTI, cbSize:=4+4+(PtrSize*6)+16, 0)

    NumPut(cbSize, stGTI,  0, "UInt")

    return hwnd := DllCall("GetGUIThreadInfo", "Uint", 0, "Ptr", &stGTI)

         ? NumGet(stGTI, 8+PtrSize, "Ptr") : hwnd

  }

  else {

    return hwnd

  }

}

;-----------------------------------------------------------

; IME状态的获取

;  WinTitle="A"    対象Window

;  返回值          1:ON / 0:OFF

;-----------------------------------------------------------

IME_GET(WinTitle="A")  {

    hwnd :=GetGUIThreadInfo_hwndActive(WinTitle)

    return DllCall("SendMessage"

          , Ptr, DllCall("imm32\ImmGetDefaultIMEWnd", Ptr,hwnd)

          , UInt, 0x0283  ;Message : WM_IME_CONTROL

          , UPtr, 0x005   ;wParam  : IMC_GETOPENSTATUS

          ,  Ptr, 0)      ;lParam  : 0

}

  

;-----------------------------------------------------------

; IME状态的设置

;   SetSts          1:ON / 0:OFF

;   WinTitle="A"    対象Window

;   返回值          0:成功 / 0以外:失败

;-----------------------------------------------------------

IME_SET(SetSts, WinTitle="A")    {

    hwnd :=GetGUIThreadInfo_hwndActive(WinTitle)

    return DllCall("SendMessage"

          , Ptr, DllCall("imm32\ImmGetDefaultIMEWnd", Ptr, hwnd)

          , UInt, 0x0283  ;Message : WM_IME_CONTROL

          , UPtr, 0x006   ;wParam  : IMC_SETOPENSTATUS

          ,  Ptr, SetSts) ;lParam  : 0 or 1

}

  

;===========================================================================

;    0000xxxx    假名输入

;    0001xxxx    罗马字输入方式

;    xxxx0xxx    半角

;    xxxx1xxx    全角

;    xxxxx000    英数

;    xxxxx001    平假名

;    xxxxx011    片假名

  

; IME输入模式(所有IME共有)

;   DEC  HEX    BIN

;     0 (0x00  0000 0000)  假名   半英数

;     3 (0x03  0000 0011)         半假名

;     8 (0x08  0000 1000)         全英数

;     9 (0x09  0000 1001)         全字母数字

;    11 (0x0B  0000 1011)         全片假名

;    16 (0x10  0001 0000)   罗马字半英数

;    19 (0x13  0001 0011)         半假名

;    24 (0x18  0001 1000)         全英数

;    25 (0x19  0001 1001)         平假名

;    27 (0x1B  0001 1011)         全片假名

  

;  ※ 区域和语言选项 - [详细信息] - 高级设置

;     - 将高级文字服务支持应用于所有程序

;    当打开时似乎无法获取该值

;    (谷歌日语输入β必须在此打开，所以无法获得值)

  

;-------------------------------------------------------

; 获取IME输入模式

;   WinTitle="A"    対象Window

;   返回值          输入模式

;--------------------------------------------------------

  

; 测试时 win10 x64 自带输入法 中文返回 1, 英文返回 0.

; win7 x32

; 中文简体 美式键盘  返回 0。

;

;               QQ拼音输入法中文输入模式   QQ拼音英文输入模式     搜狗输入法中文      搜狗输入法英文

; 半角+中文标点        1025                                        268436481(1025)

; 半角+英文标点           1　                    1024              268435457(1)        268435456(0)

; 全角+中文标点        1033                                        268436489(1033)

; 全角+英文标点           9                      1032              268435465(9)        268435464(8)

  

;                智能ABC中文输入标准模式    智能ABC中文输入双打模式    智能ABC英文标准   智能ABC英文双打

; 半角+中文标点        1025                   -2147482623(1025)          1024               -2147482624

; 半角+英文标点           1                   -2147483647(1)                0               -2147483648

; 全角+中文标点        1033                   -2147482615(1033)          1032               -2147482616

; 全角+英文标点           9                   -2147483639(9)                8               -2147483640

  
  

IME_GetConvMode(WinTitle="A")   {

    hwnd :=GetGUIThreadInfo_hwndActive(WinTitle)

    return DllCall("SendMessage"

          , "Ptr", DllCall("imm32\ImmGetDefaultIMEWnd", "Ptr", hwnd)

          , "UInt", 0x0283  ;Message : WM_IME_CONTROL

          ,  "Int", 0x001   ;wParam  : IMC_GETCONVERSIONMODE

          ,  "Int", 0) & 0xffff     ;lParam  : 0 ， & 0xffff 表示只取低16位

}

  

;-------------------------------------------------------

; IME输入模式设置

;   ConvMode        输入模式

;   WinTitle="A"    対象Window

;   返回值          0:成功 / 0以外:失败

;--------------------------------------------------------

IME_SetConvMode(ConvMode, WinTitle="A")   {

    hwnd :=GetGUIThreadInfo_hwndActive(WinTitle)

    return DllCall("SendMessage"

          , "Ptr", DllCall("imm32\ImmGetDefaultIMEWnd", "Ptr", hwnd)

          , "UInt", 0x0283      ;Message : WM_IME_CONTROL

          , "UPtr", 0x002       ;wParam  : IMC_SETCONVERSIONMODE

          ,  "Ptr", ConvMode)   ;lParam  : CONVERSIONMODE

}

  
  

im_status := IME_GetConvMode()

  

arg = %1%

  
  

; 获取当前激活窗口所使用的IME的ID

getCurrentIMEID(){

    winID:=GetGUIThreadInfo_hwndActive("A")

    ThreadID:=DllCall("GetWindowThreadProcessId", "UInt", WinID, "UInt", 0)

    InputLocaleID:=DllCall("GetKeyboardLayout", "UInt", ThreadID, "UInt")

    return InputLocaleID

}

SetInputLang(languageIdentifier) {

    WinExist("A")

    ControlGetFocus, CtrlInFocus

    PostMessage, 0x50, 0, % languageIdentifier, %CtrlInFocus%

}

  

ToggleToEnglish() {

    SetInputLang(0x0409)

}

ToggleToChinese() {

    SetInputLang(0x0804)

  

    ; IME_SetConvMode(1025)

}

  

switch arg {

  case "-c":

  ;; inactive im

  ; IME_SetConvMode(0)  

  ToggleToEnglish()

  return

  

  case "-o":

  ;; activate im

  ; IME_SetConvMode(1025)

  ToggleToChinese()

  

  return

  

  case "-t":

  Send, +

  

  return

  case "-T":

  Send, +

  

  return

  default:

  if (IME_GetConvMode() = 0) {

    FileAppend 1`n, *

  } else {

    FileAppend 2`n, *

  }

  ; ;self-defined

  ; case "-m":

  

  ; ToggleToChinese()

  ; ; a := getCurrentIMEID()

  ; ; MsgBox, %a%

  ; return

  

  ; case "-n":

  

  ; ToggleToEnglish()

  ; ; a := getCurrentIMEID()

  ; ; MsgBox, %a%

  ; return

  

}
```
# references
[Obsidian 搭配 Vim Mode，提升中文写作体验 - 少数派 (sspai.com)](https://client.sspai.com/post/78030#!)
[Vim 的中文支持及解决思路 - 少数派 (sspai.com)](https://sspai.com/post/71322)