---
title: FPGA实现循迹小车
date: 2023-12-19 15:02:44
permalink: /pages/ceec8d/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
create date: 2022-12-12 00:37  
modify date: 2022-12-19 14:20  
Status: #notes #project 
tag:  [[FPGA]] [[循迹]]  

---

#  FPGA实现循迹小车

>在阅读这部分之前，请先理解前面的51单片机中对各个模块的解释，原理是一样的，所以这部分不会对原理进行过多的解释。另外，FPGA设计其实更加简单，但软件的操作却更复杂，如果有不熟悉的操作，可以查看老师发的资料中开发指南第五章里面关于quartus的相关操作。与51单片机作为主控相似，FPGA实现循迹小车的方式是一样的，都是根据红外循迹模块检测的结果来对电机进行相应的控制。当然，51单片机和FPGA在底层上是有很大区别的，大家感兴趣可能自行查阅相关资料。

## 输入输出关系分析
如果将前面的51单片机看成一个黑匣子，只关心输入与输出，我们可以得到下面的输入输出对应表：
![](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img20221212010614.png)
实际的输入除了上面提到的还需要有：系统的时钟与复位信号。这样，循迹小车这个系统就有4个输入，6个输出了。
### 硬件设计
**引脚连接**
除开，系统时钟和复位信号外，其它的输入输出的引脚可以根据资料中的开发指南部分2.4节进行分配即可。系统时钟和复位信号必须为`PIN17`和`PIN_90`，不过这两个引脚在开发板上已经连接上了，无须手动连接。其它的引脚可以在下表中“FPGA引出I/O”部分选择即可，然后参照之间的51单片机进行连接。
![](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img20221212014911.png)
我们选择引脚如下：
| IN4    | IN3    | IN2    | IN1    | ENA    | ENB    | 红外（左） | 红外（右） |
| ------ | ------ | ------ | ------ | ------ | ------ | ---------- | ---------- |
| PIN_59 | PIN_63 | PIN_65 | PIN_69 | PIN_53 | PIN_57 | PIN_47     | PIN_51
**VCC与GND**
除开上面的几个引脚，L298N驱动模块以及红外循迹模块中的`VCC`和`GND`还需要供电，这里我们可以直接使用电池盒引出的供电线与它们对应相连。在这几个引脚对应连接好之后一定要记住再将地线与FPGA开发板上的地连接。连接关系如下：
![](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img20221212211228.png)

**实物图如下：**
![](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img6F4F2B3E621098E61EDE2B28A4B0E6FC.jpg)
上图即为小车以`FPGA`为主控的连线方式，但上面的连线还缺少为开发板供电的连线。因为电池的引出线无法直接用于为开发板供电，大家可以使用包装中的电源适配器供电或使用USB转DC的线连接充电宝供电。
电源适配器：
![](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img20221212212606.png)
USB转DC的线连接充电宝：
![](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img20221212213123.png)
### 软件设计：
以`FPGA`为主控的软件设计流程与前面以51单片机为主控是一致的。
1. 首先，导入对应的`VHDL`库和软件包，这里用到了软件包`std_logic_1164`，是为了使用`STD_LOGIC`和`STD_LOGIC_VECTOR`这两种数据类型；然后定义实体指定输入输出类型：
```vhdl
LIBRARY ieee;
   USE ieee.std_logic_1164.all;

ENTITY cartracking IS
   GENERIC (
      --时钟为50MHz，为了产生100Hz的PWM波，设置计数值为500000
      cnt_meta   : INTEGER := 500000;
      --对应了停止、前进、左转、右转状态IN4到IN1的输出
      StopCar       : STD_LOGIC_VECTOR(3 DOWNTO 0) := "0000";
      Forward    : STD_LOGIC_VECTOR(3 DOWNTO 0) := "1001";
      Left_Go    : STD_LOGIC_VECTOR(3 DOWNTO 0) := "0101";
      Right_Go   : STD_LOGIC_VECTOR(3 DOWNTO 0) := "1010"
   );
   --******************输入输出端口***********************
   PORT (
      sys_clk    : IN STD_LOGIC;
      sys_rst_n  : IN STD_LOGIC;
      infrared   : IN STD_LOGIC_VECTOR(1 DOWNTO 0);
      pwm_left   : OUT STD_LOGIC;
      pwm_right  : OUT STD_LOGIC;
      in_motor   : OUT STD_LOGIC_VECTOR(3 DOWNTO 0)
   );
END cartracking;
```
2. 在小车电源打开后，不停地检测红外循迹模块传来的数据，并完成对应的转向与转速的设置：
```vhdl
PROCESS (sys_rst_n, infrared)
   BEGIN
      IF (sys_rst_n = '0') THEN
         duty_right <= 60;
         duty_left <= 60;
      ELSE
         CASE infrared IS
            WHEN "00" =>
               in_motor <= StopCar;
            WHEN "01" =>
               in_motor <= Right_Go;
               --PWM波的占空比，设置合适的值来控制小车的转速，这里为了在仿真时可以对比，我将左右轮设置了不同的占空比，你可以在调试时尝试更合适的值。
               duty_left <= 35;
               duty_right <= 55;
            WHEN "10" =>
               in_motor <= Left_Go;
               duty_left <= 55;
               duty_right <= 35;
            WHEN OTHERS =>
               in_motor <= Forward;
               duty_left <= 50;
               duty_right <= 50;
         END CASE;
      END IF;
   END PROCESS;
   
```
3. 为了产生`PWM`波，需要用到与前面以51单片机为主控时一样的原理，也就是通过对时钟信号上升沿计数，计数到一定值重新计数。并在计数的过程中不断将当前计数值与设定的某个值进行对比，小于则输出低电平，大于则输出高电平。最终生成`PWM`波，详细的过程可能参考前面以51单片机为主控的部分。代码如下：
```vhdl
PROCESS (sys_clk, sys_rst_n)
   BEGIN
      IF (sys_rst_n = '0') THEN
         cnt <= 0;
      ELSIF (sys_clk'EVENT AND sys_clk = '1') THEN
         IF (cnt = cnt_meta) THEN
            cnt <= 0;
         ELSE
            cnt <= cnt + 1;
         END IF;
      END IF;
   END PROCESS;
   
   
   PROCESS (sys_clk, sys_rst_n)
   BEGIN
      IF (sys_rst_n = '0') THEN
         pwm_left <= '0';
      ELSIF (sys_clk'EVENT AND sys_clk = '1') THEN
         IF (cnt >= (cnt_meta / 100)* duty_left) THEN
            pwm_left <= '0';
         ELSE
            pwm_left <= '1';
         END IF;
         
         IF (cnt >= (cnt_meta / 100) * duty_right) THEN
            pwm_right <= '0';
         ELSE
            pwm_right <= '1';
         END IF;
      END IF;
   END PROCESS;
```

综上，得到最终代码如下： 
```vhdl
LIBRARY ieee;
   USE ieee.std_logic_1164.all;

ENTITY cartracking IS
   GENERIC (
      --时钟为50MHz，为了产生100Hz的PWM波，设置计数值为500000
      cnt_meta   : INTEGER := 500000;
      --对应了停止、前进、左转、右转状态IN4到IN1的输出
      StopCar       : STD_LOGIC_VECTOR(3 DOWNTO 0) := "0000";
      Forward    : STD_LOGIC_VECTOR(3 DOWNTO 0) := "1001";
      Left_Go    : STD_LOGIC_VECTOR(3 DOWNTO 0) := "0101";
      Right_Go   : STD_LOGIC_VECTOR(3 DOWNTO 0) := "1010"
   );
   --******************输入输出端口***********************
   PORT (
      sys_clk    : IN STD_LOGIC;
      sys_rst_n  : IN STD_LOGIC;
      infrared   : IN STD_LOGIC_VECTOR(1 DOWNTO 0);
      pwm_left   : OUT STD_LOGIC;
      pwm_right  : OUT STD_LOGIC;
      in_motor   : OUT STD_LOGIC_VECTOR(3 DOWNTO 0)
   );
END cartracking;

ARCHITECTURE trans OF cartracking IS
   
   SIGNAL cnt        : INTEGER;
   SIGNAL duty_left  : INTEGER;
   SIGNAL duty_right : INTEGER;
BEGIN
   PROCESS (sys_rst_n, infrared)
   BEGIN
      IF (sys_rst_n = '0') THEN
         duty_right <= 60;
         duty_left <= 60;
      ELSE
         CASE infrared IS
            WHEN "00" =>
               in_motor <= StopCar;
            WHEN "01" =>
               in_motor <= Right_Go;
               --PWM波的占空比，设置合适的值来控制小车的转速，这里为了在仿真时可以对比，我将左右轮设置了不同的占空比，你可以在调试时尝试更合适的值。
               duty_left <= 35;
               duty_right <= 55;
            WHEN "10" =>
               in_motor <= Left_Go;
               duty_left <= 55;
               duty_right <= 35;
            WHEN OTHERS =>
               in_motor <= Forward;
               duty_left <= 50;
               duty_right <= 50;
         END CASE;
      END IF;
   END PROCESS;
   
   PROCESS (sys_clk, sys_rst_n)
   BEGIN
      IF (sys_rst_n = '0') THEN
         cnt <= 0;
      ELSIF (sys_clk'EVENT AND sys_clk = '1') THEN
         IF (cnt = cnt_meta) THEN
            cnt <= 0;
         ELSE
            cnt <= cnt + 1;
         END IF;
      END IF;
   END PROCESS;
   
   
   PROCESS (sys_clk, sys_rst_n)
   BEGIN
      IF (sys_rst_n = '0') THEN
         pwm_left <= '0';
      ELSIF (sys_clk'EVENT AND sys_clk = '1') THEN
         IF (cnt >= (cnt_meta / 100)* duty_left) THEN
            pwm_left <= '0';
         ELSE
            pwm_left <= '1';
         END IF;
         
         IF (cnt >= (cnt_meta / 100) * duty_right) THEN
            pwm_right <= '0';
         ELSE
            pwm_right <= '1';
         END IF;
      END IF;
   END PROCESS;
   
   
END trans;

```
利用Quartus进行仿真和程序固化在资料中第五章有详细的教程，请参考完成，这里对注意事项进行说明：
1. 仿真时，因为按照实际的情况，红外模块检测到出线与否的时间（ms级）相对于时钟周期（ns级）差距太大，因此为了完成仿真可以对程序中的计数周期和红外模块检测周期进行适当的缩小（**注：程序在最后烧录时记得改回来**）。
	程序修改部分：
	```vhdl
	...
	GENERIC (
      --时钟为50MHz，为了产生100Hz的PWM波，设置计数值为500000
      cnt_meta   : INTEGER := 500; --为了仿真改为500，烧录时需改回去
    ...
	```
2. 仿真的输入信号设置（可以作为参考，你可能自行设置合适的输入波形）：
	![](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img20221212223835.png)
	仿真结果如下：
	![](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img20221212224734.png)

3. 程序烧录前，记得将仿真修改的部分改回去，重新编译后再进行下载。
完成仿真与程序烧录后，可以通过充电宝或者电源适配器为`FPGA`开发板进行供电，然后对循迹小车进行测试。小车正常循迹后，以`FPGA`为主控的循迹小车的设计完成。
![](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img20221212230245.png)
