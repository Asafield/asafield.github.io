(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{512:function(a,_,$){"use strict";$.r(_);var t=$(8),v=Object(t.a)({},(function(){var a=this,_=a._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("p",[a._v("create date: 2023-03-14 19:25"),_("br"),a._v("\nStatus: #notes #class"),_("br"),a._v("\nTags:")]),a._v(" "),_("hr"),a._v(" "),_("h1",{attrs:{id:"现代数字信号处理论文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#现代数字信号处理论文"}},[a._v("#")]),a._v(" 现代数字信号处理论文")]),a._v(" "),_("p",[a._v("要求：\n三种类型：")]),a._v(" "),_("ul",[_("li",[a._v("类似读后感的方式, 学后的收获")]),a._v(" "),_("li",[a._v("根据你的研究方向，查找数字信号处理的前沿 撰写论文")]),a._v(" "),_("li",[a._v("结合解决实际问题，撰写论文")])]),a._v(" "),_("hr"),a._v(" "),_("p",[a._v("选择的类型：")]),a._v(" "),_("ul",[_("li",[a._v("读后感加上遇到的实际问题")]),a._v(" "),_("li",[a._v("其中的读后感自然是课程内容，如果能参照本科相关作业就更方便了（其中滤波器的设计可以参考之前本科的知识），而实际问题则是之前基金撰写过程中涉及的噪声外理的问题。")])]),a._v(" "),_("hr"),a._v(" "),_("h2",{attrs:{id:"正文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[a._v("#")]),a._v(" 正文")]),a._v(" "),_("h3",{attrs:{id:"结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[a._v("#")]),a._v(" 结构")]),a._v(" "),_("ul",[_("li",[a._v("学业收获:\n"),_("ul",[_("li",[a._v("基础知识")]),a._v(" "),_("li",[a._v("滤波器的设计与测试，参考之前的本科作业进行设计")])])]),a._v(" "),_("li",[a._v("实际问题的解决\n"),_("ul",[_("li",[a._v("噪声去除的问题")])])])]),a._v(" "),_("h3",{attrs:{id:"问题记录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题记录"}},[a._v("#")]),a._v(" 问题记录")]),a._v(" "),_("ul",[_("li",[a._v("考虑是否使用更合适的二级，标题，如自驱动传感器件中的噪声干扰问题。")]),a._v(" "),_("li",[a._v("格式可以调整，如摘要的字体等等。")]),a._v(" "),_("li",[a._v("是否可以考虑加入概述")]),a._v(" "),_("li",[a._v("最后给出整个学业收获的结构思维导图。")]),a._v(" "),_("li",[a._v("傅立叶与傅里叶")])]),a._v(" "),_("h2",{attrs:{id:"理论知识与个人理解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#理论知识与个人理解"}},[a._v("#")]),a._v(" 理论知识与个人理解")]),a._v(" "),_("p",[a._v("数字信号处理有着悠久的发展历史，在上世纪的50年代，数值积分与奈奎斯特采样定理的理论基础之上，伴随着大型数字计算机的出现而得到了飞速的发展。经历了这么长的发展，积累下了大量的理论与实践成果，本课程主要涉及了数字信号处理的基本概念、离散时间信号与系统的基本理论、离散傅立叶变换及其快速算法、频谱分析以及数字滤波器的设计五个方面的内容，如图1所示。本文对课程知识的心得总结与个人理解阐述也主要按照这几个方面进行。\n"),_("img",{attrs:{src:"https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230314211150.png",alt:"image.png"}})]),a._v(" "),_("h3",{attrs:{id:"数字信号处理的基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数字信号处理的基本概念"}},[a._v("#")]),a._v(" 数字信号处理的基本概念")]),a._v(" "),_("p",[a._v("老师对数字信号基本概念的讲述主要从对“信号”与“系统”这两者概念的介绍出发，这是最基本但也必不可少的概念。其中：")]),a._v(" "),_("ul",[_("li",[a._v("信号：信号是含有信息的载体，有着多样的表示形式，如函数、物理量、等等。其侧重点在于其携带信息的属性而非载体，因为载体是可变换的。")]),a._v(" "),_("li",[a._v("系统：系统是处理信号的物理装置或设备或算法，它也可以是一种抽象的概念，侧重点在于对信号进行加工变换的功能。个人对系统的理解，是可以看作是一个向外部提供输入与输出端口的装置，输入信号与输出信号之间的变换关系就是系统的本质属性。\n综合来看，信号与系统的关系如图2所示。因此，信号处理的概念就清晰起来，即是利用系统对信号进行某种程度的变换的过程。\n"),_("img",{attrs:{src:"https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230314213708.png",alt:"image.png"}}),a._v("\n理解了信号与系统的概念，可以进一步细化至数字信号处理的概念上来。对数字信号的理解可以从模拟信号出发。模拟信号是时间连续、幅值连续的信号，而数字信号则是时间离散、幅值离散的信号，其中由模拟信号转为数字信号的过程也就是模数转换。")])]),a._v(" "),_("h3",{attrs:{id:"离散时间信号与系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#离散时间信号与系统"}},[a._v("#")]),a._v(" 离散时间信号与系统")]),a._v(" "),_("h4",{attrs:{id:"时域分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#时域分析"}},[a._v("#")]),a._v(" 时域分析")]),a._v(" "),_("p",[a._v("离散时间信号与系统的讨论主要是分为时域、频域及Z变换域三个方面进行。其中时域分析是原始的，也是基础。对于一个离散时间信号，用$x(n)$表示，也即是对连续时间信号的采样。同时，对离散信号进行分析必须解决的一个问题就是对实现对任意序列的表示，如式1所示。"),_("br"),a._v("\n$$\nx(n) = \\sum\\limits_{m=-\\infty}^{\\infty}x(m)\\delta(n-m)\n$$\n该式巧妙实现对任意序列的表示，这也是进行数字信号的理论分析的前提。线性时不变系统的时域分析就是建立在该式之上的。线性时不变系统的充分必要条件是系统具有线性与时不变性，线性是指系统需要满足线性叠加原理，而时不变性就代表系统对输入信号的响应不会随着时间发生变化。对线性时不变系统的描述是用单位取样响应$h(n)$来表示。这是因为对线性时不变系统来说，以下式子成立：\n$$\ny(n)=\\sum\\limits_{m=-\\infty}^{\\infty}x(m)h(n-m) = x(n)*h(n)\n$$\n因此，可以理解为单位取样响应$h(n)$从时域描述了一个线性时不变系统。\n有了$h(n)$之后就可以得到LTI系统的稳定性和因果性的时域判据，系统稳定性是指对任意一个有界的输入，其对应的输出都是有界的。其判据为：\n$$\nS = \\sum\\limits_{n=-\\infty}^{\\infty} |h(n)|<+\\infty\n$$\n而系统的因果性指的是当前时刻的输出$y(n)$只与当前时刻的输入$x(n)$以及过去时刻的输入和输出有关，而与未来时刻的输入和输出无关。具有因果性的系统才是一个在物理上可以真正实现的系统。其判据为：\n$$\nh(n) = 0,\\space n<0\n$$\n对离散的LTI系统来说，可用常系数线性差分方程描述，通过求解差分方程可以由输入$x(n)$得到系统对应的输出$y(n)$：\n$$\ny(n)=-\\sum\\limits_{k=1}^{N}a_ky(n-k)+\\sum\\limits_{r=0}^Mb_rx(n-r)\n$$\n在之后还可以通过Z域求解得到系统函数$H(z)$。")]),a._v(" "),_("h4",{attrs:{id:"频域分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#频域分析"}},[a._v("#")]),a._v(" 频域分析")]),a._v(" "),_("p",[a._v("离散时间信号序列的傅立叶变换也称为序列的频谱。在时间序列满足绝对可求和的前提下，有变换对如下：\n$$\n\\begin{aligned}\nx[n] & =\\frac{1}{2 \\pi} \\int_{2 \\pi} X\\left(\\mathrm{e}^{\\mathrm{j} \\omega}\\right) \\mathrm{e}^{\\mathrm{j} \\omega m} \\mathrm{~d} \\omega \\\nX\\left(\\mathrm{e}^{\\mathrm{j} \\omega}\\right) & =\\sum_{m=-\\infty}^{+\\infty} x[n] \\mathrm{e}^{-\\mathrm{j} \\omega n}\n\\end{aligned}\n$$\n值得提及的是, 与连续时间情况一样, 上述离散时间傅里叶变换的推导过程给我们在离散时间傅里叶级数和离散时间傅里叶变换之间提供了一种重要的关系。这就是, 一个周期信号 $x[n]$ 的傅里叶系数 $a_k$ 可以用一个有限长序列 $x[n]$ 的傅里叶变换的等间隔样本来表示, 这个 $x[n]$ 就等于在一个周期上的 $x[n]$, 而在其余地方为零。\n需要注意的是，离散时间傅里叶变换和连续时间情祝相比具有许多类似之处。两者的主要差别在于离散时间变换$X(e^{jw})$的周期性和在公式中的有限积分区间。原因是在频率上相差2π的离散时间复指数信号是完全一样的。对周期离散时间信号而言，这就意味着傅里叶级数系数地是周期的，以及傅立叶级数表示式是一个有限项的和式。对非周期信号而言，这就意味着$X(e^{jw})$也是周期的（周期为2π），以及公式只涉及到在一个频率区间内的积分，这个频率区间就是产生不同复指数信号的那个间隔，即任何2π长度的间隔。\n个人认为，在系统的频域分析中另一个重要的点就是其频率响应特性，它是$h(n)$的离散时间傅立叶变换：\n$$\nH(e^{jw})=\\sum\\limits_{n=-\\infty}^{\\infty}h(n)e^{-jwn}\n$$\n其物理意义的我认为主要有两点：")]),a._v(" "),_("ul",[_("li",[a._v("决定了系统对正弦信号的传输能力。")]),a._v(" "),_("li",[a._v("决定了系统的稳态频率响应")])]),a._v(" "),_("h4",{attrs:{id:"z域分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#z域分析"}},[a._v("#")]),a._v(" Z域分析")]),a._v(" "),_("p",[a._v("在我看来，Z变换本质上就是一种计算工具，能帮助求解系统的响应，就像前面时域分析中提到的可以通过差分方程求解得到$H(z)$与$Y(z)$,为求解频率响应$H(e^{jw})$和差分方程中的$y(n)$提供了非常方便的工具。如下式：\n$$\n\\begin{aligned}\ny(n) &= h(n) * x(n),\\\nY(z) &= H(z)X(z),\\\nH(z) &= \\frac{Y(z)}{X(z)}\n\\end{aligned}\n$$")]),a._v(" "),_("h3",{attrs:{id:"离散傅立叶变换及其快速算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#离散傅立叶变换及其快速算法"}},[a._v("#")]),a._v(" 离散傅立叶变换及其快速算法")]),a._v(" "),_("h4",{attrs:{id:"离散傅立叶变换-dft"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#离散傅立叶变换-dft"}},[a._v("#")]),a._v(" 离散傅立叶变换（DFT)")]),a._v(" "),_("p",[a._v("离散傅立叶变换 (DFT) 是一种将一个有限长序列（或离散时间信号）转换为其频域表示的数学变换。该变换将序列从时域映射到频域，用于分析序列的频谱内容。\n在数学上，给定长度为 N 的离散时间序列 $x(n)$，它的 DFT 表示为 $X(k)$，其中 k = 0, 1, ..., N-1。$X(k)$可以被看作是 $x(n)$的频域表示，它包含了序列 $x(n)$ 中不同频率成分的信息。具体来说，$X(k)$表示了在$k/N$处的离散傅立叶变换系数。DFT 可以通过以下公式计算：\n$$\nX[k] = \\sum_{n=0}^{N-1}x(n)e^{-2\\pi j nk/N}\n$$\n上式表示了对序列 $x(n)$中每个样本进行加权求和，权值由旋转因子 $e^{-2\\pi i nk/N}$ 决定。通过计算 $X(k)$，我们可以了解序列中哪些频率成分存在，并且它们的幅度和相位信息是什么。\n我在学习的过程中对DFT与DTFT之间的区别与联系曾有过疑惑，这是我的理解：\n它们的对象都是时间离散的信号，但经由DTFT变换后的信号频谱是连续的。而对于DFT来说，其信号频谱是离散的。计算方式上DFT 将信号分解成 N 个频率分量，而 DTFT 则分解成无限多个频率分量。对于一个非周期的有限长序列来说，将其周期延拓为一个周期信号，再利用离散傅立叶级数计算周期序列的一个周期，这就可以得到有限长序列的离散傅立变换。此外，从公式的推导过程来看，也可以将DFT看作是对DTFT在$\\omega=2\\pi k/N$处的采样。\n通过对比分析之前上涉及的连续时间周期与非周期的傅立叶变换，有如下特点：")]),a._v(" "),_("table",[_("thead",[_("tr",[_("th",[a._v("时域")]),a._v(" "),_("th",[a._v("频域")])])]),a._v(" "),_("tbody",[_("tr",[_("td",[a._v("连续且非周期")]),a._v(" "),_("td",[a._v("非周期且连续")])]),a._v(" "),_("tr",[_("td",[a._v("连续且周期")]),a._v(" "),_("td",[a._v("非周期且离散")])]),a._v(" "),_("tr",[_("td",[a._v("离散、非周期")]),a._v(" "),_("td",[a._v("周期、连续")])]),a._v(" "),_("tr",[_("td",[a._v("离散、周期")]),a._v(" "),_("td",[a._v("周期、离散")])])])]),a._v(" "),_("h4",{attrs:{id:"快速傅立叶变换-fft"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快速傅立叶变换-fft"}},[a._v("#")]),a._v(" 快速傅立叶变换（FFT)")]),a._v(" "),_("p",[a._v("FFT（快速傅里叶变换）是一种利用对称性和周期性加速计算离散傅里叶变换（DFT）的算法。FFT算法的核心思想是将DFT计算拆分成多个子问题，然后利用子问题之间的关系来减少计算量。\n具体来说，FFT算法将DFT计算分解为两个步骤：首先，将$N$个离散时间域样本分成两个长度为$N/2$的子序列，分别进行DFT计算；然后，将子序列的结果合并为原始序列的DFT结果。这个过程可以递归地进行，直到序列长度为1时，可以直接计算出DFT结果。\n在每个递归级别中，FFT算法利用对称性和周期性将DFT计算拆分成两个相同的子问题，因此可以利用已经计算的结果来减少计算量。这种分治策略和递归计算的方法导致FFT算法的计算复杂度为$O(N log N)$，远远快于直接计算DFT的$O(N^2)$复杂度。\n可以将FFT作为快速计算DFT的算法来进行理解，它并非一种新的傅立叶变换。")]),a._v(" "),_("h3",{attrs:{id:"频谱分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#频谱分析"}},[a._v("#")]),a._v(" 频谱分析")]),a._v(" "),_("h4",{attrs:{id:"频谱分析步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#频谱分析步骤"}},[a._v("#")]),a._v(" 频谱分析步骤")]),a._v(" "),_("p",[a._v("自然界中存在的信号基本都是模拟信号，也就是连续时间信号，而计算机只能利用DFT对其进行频谱分析，其具体的过程如下：")]),a._v(" "),_("ol",[_("li",[a._v("对连续时间信号进行采样：通过采样器对连续时间信号进行采样，将其转换为离散时间域信号。采样后的信号可以用离散时间信号的形式表示。")]),a._v(" "),_("li",[a._v("截断：DFT的对象为有限长的序列，计算机的计算也要求能在有限步内终止，当采样后的信号是无限长是，必须将序列截断为有限长的序列.")]),a._v(" "),_("li",[a._v("对离散时间信号进行DFT变换：将采样后的离散时间域信号进行DFT变换，得到其离散频率域表示。DFT将信号分解为一系列正弦和余弦函数的和，每个正弦和余弦函数对应一个频率.")]),a._v(" "),_("li",[a._v("对DFT结果进行解释：DFT结果表示了信号在不同频率上的分量。通过分析DFT结果，可以确定信号中哪些频率分量具有较高的能量，从而了解信号的频谱特征。")])]),a._v(" "),_("h4",{attrs:{id:"误差分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#误差分析"}},[a._v("#")]),a._v(" 误差分析")]),a._v(" "),_("p",[a._v("由上述过程进行对信号的频谱分析时，往往由于采样和截断而使最后得到的频谱与实际频谱之间存在误差，误差的类型主要有三种，分别是频谱混叠、截断效应以及栅栏效应。")]),a._v(" "),_("ol",[_("li",[_("p",[a._v("频谱混叠： 频谱混叠是一种误差，其中高频成分出现在低频成分的频带内，这可能会导致频率分量被错误地分配到错误的频带中。频谱混叠的主要原因是采样率过低，无法捕获高频成分，从而使其出现在低频成分的频带内。在数字信号处理中，避免频谱混叠的一种方法是使用抗混叠滤波器，该滤波器可将高频信号滤除。还应选择足够高的采样频率以满足采样定理。")])]),a._v(" "),_("li",[_("p",[a._v("截断效应： 截断效应是一种误差，其中频谱分析的时间窗口有限，因此无法捕获完整的信号，从而导致频率分量的精确度受到限制，如下图所示。\n"),_("img",{attrs:{src:"https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/%E7%A8%BF%E5%AE%9A%E8%AE%BE%E8%AE%A1%E5%AF%BC%E5%87%BA-20230315-135359.jpg",alt:"稿定设计导出-20230315-135359.jpg"}}),a._v("\n可以发现，截断效应会使得原本的频谱展宽并出现副瓣，在上图中的正弦信号中表现为频谱的扩展与波动，甚至进一步导致了频谱的混叠，形成谱间干扰。这是因为在截断时相当于添加了一个矩形窗，矩形脉冲信号的频谱特征叠加影响到了信号的频谱。可以通过增加截断的长度或者改变窗的形状来减小截断效应的影响，使主瓣的幅值相比旁瓣更大，从而减小误差。")])]),a._v(" "),_("li",[_("p",[a._v("栅栏效应： 栅栏效应是一种误差，其中频谱分析中的频率分量被限制在离散的频率点上。这意味着，如果信号的频率不恰好等于这些离散的频率点，则频率分量将被错误地分配到最接近的离散频率点上，从而导致精确度下降。栅栏效应可以通过增加离散频率点的数量来减少，但这也会增加计算成本。另一种解决方法是使用窗函数，这可以在一定程度上减少栅栏效应。")])])]),a._v(" "),_("h3",{attrs:{id:"数字滤波器的设计与实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数字滤波器的设计与实现"}},[a._v("#")]),a._v(" 数字滤波器的设计与实现")]),a._v(" "),_("p",[a._v("数字滤波器按其单位采样响应长度可分为有限冲激响应（FIR)滤波器与无限冲激响应滤波器（IIR）两类。而IIR数字滤波器的单位脉冲响应无限的特性与模拟滤波器拥有无限长单位脉冲响应相匹配。因此，设计IIR数字滤波器时，可以根据相应的技术指标选择合适的模拟滤波器进行设计，一般先设计低通滤波器，在最后可以根据需要进行频带变换得到其他类型（如高通、带通、带阻）的滤波器。模拟低通滤波器的设计可以由已知类型的滤波器调整参数得到，参数的调整依据依赖于最开始确定的设计指标，已知可作为参考的滤波模型常用的有三种：")]),a._v(" "),_("ol",[_("li",[_("p",[a._v("巴特沃斯滤波器： 其模平方函数如下 ：\n$$\n|H_a(j\\Omega)|^2=\\frac{1}{1+(\\Omega/\\Omega_c)^2}\n$$\n它的幅频响应是平坦的，通带和阻带都没有波纹，但是过渡带比较宽，阶数越高，过渡带宽度就越窄，滤波器的阶数越高，幅频响应的下降速度越快。")])]),a._v(" "),_("li",[_("p",[a._v("切比雪夫滤波器：其模平方函数如下：\n$$\n|H_a(j\\Omega)|^2=\\frac{1}{1+\\varepsilon^2C_N^2(\\Omega/\\Omega^2)}\n$$\n切比雪夫滤波器的幅频响应在通带内有波纹，波纹的大小取决于通带波纹系数ε，通常情况下，ε的值越小，通带内的波纹越小。在阻带中，幅频响应下降得很快，滤波器的阶数越高，下降速度越快。")])]),a._v(" "),_("li",[_("p",[a._v("椭圆滤波器： 其模平方函数如下：\n$$\n｜H(j\\Omega)｜^2 = \\frac{1}{1 + \\varepsilon^2(\\Omega/\\Omega_c)R_N^2}\n$$\n椭圆滤波器的幅频响应在通带和阻带内都有波纹，而且在通带和阻带中都比切比雪夫滤波器的波纹要大，但在给定的通带波纹系数ε下，椭圆滤波器可以获得最窄的过渡带宽度和最陡的下降速度。椭圆滤波器的阶数越高，波纹的幅度越小，但是阶数越高，计算和实现复杂度也越高。")])])]),a._v(" "),_("p",[a._v("总的来说，三种滤波器的幅频响应都有其独特的特点，需要根据具体的应用场景来选择合适的滤波器进行设计得到模拟滤波器的系统函数$H_a(s)$。接着需要实现$H_a(s)$到$H(z)$的转换，主要有两种方式：")]),a._v(" "),_("ul",[_("li",[a._v("冲激响应不变法：使数字滤波器的单位脉冲响应$h(n)$近似于模拟滤波器的单位脉冲响应$h_a(t)$。有：\n$$\nH(z)=\\sum_{k=1}^N\\frac{TA_k}{1-e^{s_kT}z^{-1}}\n$$")]),a._v(" "),_("li",[a._v("双线性变换法：使描述数字滤波器的差分方近似于描述模拟滤波器的微分方程。有：\n$$\nH(z)=H_a(s)|_{s=\\frac{2}{T}\\frac{1-z^{-1}}{1+z^{-1}}}\n$$\n这样就实现了数字滤波器的设计。当然，如果最后需要的是高通、带通、带阻类型的滤波器，还需要利用s平面变换法或z平面变换法，两种方法使用的时机是不同的，前者在模拟滤波器转换为数字滤波器之前，实现的是模拟域的变换 ；而后者在转换为数字滤波器之后，实现的是数字域的频率转换。\n经历了上述的一系列变换过程，就完成了一般IIR数字滤波器的设计步骤。")])]),a._v(" "),_("h2",{attrs:{id:"自驱动传感器件中信号噪声的去除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自驱动传感器件中信号噪声的去除"}},[a._v("#")]),a._v(" 自驱动传感器件中信号噪声的去除")]),a._v(" "),_("p",[a._v("滑动平均滤波器是一种时域滤波器，其传递函数可以通过对其差分方程进行Z变换得到。")]),a._v(" "),_("p",[a._v("假设输入信号为$x[n]$，输出信号为$y[n]$，滑动窗口大小为$N$，则滑动平均滤波器的差分方程为：")]),a._v(" "),_("p",[a._v("$$y[n]=\\frac{1}{N}\\sum_{i=0}^{N-1}x[n-i]$$")]),a._v(" "),_("p",[a._v("对上式进行Z变换得到：")]),a._v(" "),_("p",[a._v("$$Y(z)=\\frac{1}{N}\\sum_{i=0}^{N-1}X(z)z^{-i}$$")]),a._v(" "),_("p",[a._v("因此，滑动平均滤波器的传递函数为：")]),a._v(" "),_("p",[a._v("$$H(z)=\\frac{1}{N}\\sum_{i=0}^{N-1}z^{-i}$$\n根据滑动平均滤波器的传递函数$H(z)=\\frac{1}{N}\\sum_{i=0}^{N-1}z^{-i}$，可以得到其频率响应为：")]),a._v(" "),_("p",[a._v("$$H(e^{j\\omega})=\\frac{1}{N}\\sum_{i=0}^{N-1}e^{-j\\omega i}$$")]),a._v(" "),_("p",[a._v("其中，$e^{j\\omega}$表示复指数函数，$\\omega$表示角频率。")]),a._v(" "),_("p",[a._v("为了更好地理解上式，我们将其分解为实部和虚部：")]),a._v(" "),_("p",[a._v("$$\\begin{aligned} H(e^{j\\omega})&=\\frac{1}{N}\\sum_{i=0}^{N-1}e^{-j\\omega i} \\ &=\\frac{1}{N}\\sum_{i=0}^{N-1}\\cos(\\omega i)-j\\frac{1}{N}\\sum_{i=0}^{N-1}\\sin(\\omega i) \\ &=\\frac{1}{N}\\left[\\cos(\\omega\\cdot0)+\\cos(\\omega\\cdot1)+\\cdots+\\cos(\\omega\\cdot(N-1))\\right]\\&-j\\frac{1}{N}\\left[\\sin(\\omega\\cdot0)+\\sin(\\omega\\cdot1)+\\cdots+\\sin(\\omega\\cdot(N-1))\\right]\\end{aligned}$$")]),a._v(" "),_("p",[a._v("这里用到了欧拉公式$e^{j\\theta}=\\cos\\theta+j\\sin\\theta$。")]),a._v(" "),_("p",[a._v("由于$\\cos\\theta$和$\\sin\\theta$是周期为$2\\pi$的函数，因此可以将$H(e^{j\\omega})$表示为基波$\\omega_0=2\\pi/N$的线性组合：")]),a._v(" "),_("p",[a._v("$$H(e^{j\\omega})=\\frac{1}{N}\\sum_{k=0}^{N-1}e^{-j\\omega_0k}\\sum_{i=0}^{N-1}e^{-j\\frac{2\\pi k}{N}i}$$")]),a._v(" "),_("p",[a._v("将$k$看做频率，$i$看做时间，则第二个求和式是$N$个相同频率的正弦波的叠加。根据欧拉公式可以得到：")]),a._v(" "),_("p",[a._v("$$\\sum_{i=0}^{N-1}e^{-j\\frac{2\\pi k}{N}i}=\\frac{1-e^{-j\\frac{2\\pi k}{N}N}}{1-e^{-j\\frac{2\\pi k}{N}}}=\\frac{1-e^{-j2\\pi k}}{1-e^{-j\\frac{2\\pi k}{N}}}$$")]),a._v(" "),_("p",[a._v("因为$k$的范围是$0\\le k\\le N-1$，所以$e^{-j2\\pi k}=1$。将上式代入$H(e^{j\\omega})$中，得到：")]),a._v(" "),_("p",[a._v("$$H(e^{j\\omega})=\\frac{1}{N}\\sum_{k=0}^{N-1}\\frac{1-e^{-j2\\pi k}}{1-e^{-j\\frac{2\\pi k}{N}}}e^{-j\\omega_0k}$$")]),a._v(" "),_("p",[a._v("将上式中的$\\frac{1-e^{-j2\\pi k}}{1-e^{-j\\frac{2\\pi k}{N}}}$表示为$\\omega_k$，得到：")]),a._v(" "),_("p",[a._v("$$H(e^{j\\omega})=\\frac{1}{N}\\sum_{k=0}^{N-1}\\omega_ke^{-j\\omega_0k}$$")]),a._v(" "),_("p",[a._v("其中，$\\omega_k$称为窗函数，用来控制幅频响应的形状。")]),a._v(" "),_("p",[a._v("当窗函数为矩形窗时，有$\\omega_k=1$。此时，$H(e^{j\\omega})$的表达式为：")]),a._v(" "),_("p",[a._v("$$H(e^{j\\omega})=\\frac{1}{N}\\sum_{k=0}^{N-1}e^{-j\\omega_0k}=\\frac{\\sin\\frac{N\\omega}{2}}{N\\sin\\frac{\\omega}{2}}e^{-j\\frac{N-1}{2}\\omega}$$")]),a._v(" "),_("p",[a._v("可以看出，当$\\omega=\\frac{2\\pi}{N}m$时，$H(e^{j\\omega})=1$，表示信号在该频率处通过滤波器的增益为1。而在其他频率处，信号的增益则被滤波器抑制。")]),a._v(" "),_("p",[a._v("当窗函数为汉宁窗时，有$\\omega_k=0.5-0.5\\cos\\frac{2\\pi k}{N}$。此时，$H(e^{j\\omega})$的表达式为：")]),a._v(" "),_("p",[a._v("$$H(e^{j\\omega})=\\frac{1}{N}\\sum_{k=0}^{N-1}(0.5-0.5\\cos\\frac{2\\pi k}{N})e^{-j\\omega_0k}=\\frac{1}{N}\\left(\\frac{\\sin\\frac{N\\omega}{2}}{N\\sin\\frac{\\omega}{2}}\\right)\\left(\\frac{1}{2}+\\frac{1}{2}\\cos\\omega\\right)e^{-j\\frac{N-1}{2}\\omega}$$")]),a._v(" "),_("p",[a._v("可以看出，汉宁窗在频域上的响应相比矩形窗更加平滑，具有更好的副瓣抑制性能。但是，由于窗口函数的存在，导致滤波器的时间响应不再是理想的单位脉冲响应，因此会引入一定的幅度和相位失真。因此，在实际应用中，需要在保证滤波性能的前提下，权衡滤波器的时间和频率响应的性能。")])])}),[],!1,null,null,null);_.default=v.exports}}]);