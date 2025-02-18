## 常用等价无穷小证明过程
### 概念
* 要证明两个无穷小等价，其实也就是证明无穷小除另一个无穷小等于1。

---
### 重要极限
#### $\sin x\sim x$
* 这是一个重要无穷小，没办法通过公式正常推导，需要用到几何辅助圆构造线段，通过夹逼准则，去推导。
![](images/20220425142139.png)

---
#### $\lim_{x\to\infin}(1+\frac{1}{x})^x=e$
1. 先证明该函数有界
* 构造数列 $x_n=(1+\frac{1}{n})^n$
$x_n=C_n^01^n(\frac{1}{n})^0+C_n^11^{n-1}(\frac{1}{n})^1+C_n^21^{n-2}(\frac{1}{n})^2+\cdot\cdot\cdot++C_n^n1^0(\frac{1}{n})^n$
$=1 + 1 + \frac{1}{2!}(1-\frac{1}{n})+\frac{1}{3!}(1-\frac{1}{n})(1-\frac{2}{n})+\cdot\cdot\cdot+\frac{1}{n!}(1-\frac{1}{n})(1-\frac{2}{n})\cdot\cdot\cdot(1-\frac{n-1}{n})<2+\frac{1}{2!}+\frac{1}{3!}+\cdot\cdot\cdot+\frac{1}{n!}<2+\frac{1}{2}+\frac{1}{2^2}+\frac{1}{2^3}+\cdot\cdot\cdot+\frac{1}{2^{n-1}}=3-\frac{1}{2^{n-1}}<3$

2. 再证明该函数单调递增
* 由等比数列求和公式可知：$\frac{1}{2^2}+\frac{1}{2^3}+\cdot\cdot\cdot+\frac{1}{2^{n-1}}=1-\frac{1}{2^{n-1}}$
同理构造数列 $x_{n+1}=(1+\frac{1}{n+1})^{n+1}$
可得 $x_{n+1}=2 + \frac{1}{2!}(1-\frac{1}{n})+\frac{1}{3!}(1-\frac{1}{n})(1-\frac{2}{n})+\cdot\cdot\cdot+\frac{1}{n!}(1-\frac{1}{n})(1-\frac{2}{n})\cdot\cdot\cdot(1-\frac{n-1}{n})+\frac{1}{(n+1)!}(1-\frac{1}{n+1})(1-\frac{2}{n+1})\cdot\cdot\cdot(1-\frac{n}{n+1})$
$x_{n+1}-x_n=\frac{1}{(n+1)!}(1-\frac{1}{n+1})(1-\frac{2}{n+1})\cdot\cdot\cdot(1-\frac{n}{n+1})>0$
此数列是递增的
$\therefore$ 此函数单调递增且极限存在, 极限为 $3-\frac{1}{2^{n-1}} = e$

---
### 三角函数
#### $\sin x\sim{x}$
[$\sin x\sim x$](#sin-xsim-x)

---
#### $\tan x\sim x$
* $\lim_{x\rightarrow 0}\frac{\tan x}{x}=1$
$\Rightarrow \lim_{x\rightarrow 0}\frac{\sin x}{x\cdot\cos x}$
$\Rightarrow \lim_{x\rightarrow 0}\frac{1}{\cos x}$
$\Rightarrow \lim_{x\rightarrow 0}\frac{1}{1}$
$\Rightarrow \lim_{x\rightarrow 0}\frac{\sin x}{x\cdot\cos x}=1$
其中用到了另一个重要极限公式 $\sin x\sim{x}$

---
#### $\arcsin x\sim x$
* $\lim_{x\rightarrow 0}\frac{\arcsin x}{x} = 1$
设 $t=\arcsin x$ 则 $x=\sin t$ 进行换元
$\lim_{t\rightarrow 0}\frac{t}{\sin t} = 1$
同时也用到了 $\sin x \sim x$

---
#### $\arctan x\sim x$
* $\lim_{x\rightarrow 0}\frac{\arctan x}{x}=1$
换元得: $\lim_{t\rightarrow 0}\frac{t}{\tan t}=1$

---
#### $\tan x- \sin x\sim \frac{1}{2}x^3$
* $\tan x - \sin x$
$= \tan x(1-\cos x)$
$= \tan x \cdot 2\cdot (\frac{1-\cos{2\cdot\frac{x}{2}}}{2})$
$= \tan x \cdot 2 \cdot \sin^2\frac{x}{2}$
用等价无穷小替换一下
$\lim_{x\rightarrow 0} \frac{2 \cdot x \cdot \frac{x}{2}^2}{\frac{1}{2}x^3} =1$

---
#### $1-\cos x \sim \frac{x^2}{2}$
$1-\cos x \Rightarrow 2\sin^2\frac{x}{2} \Rightarrow \frac{x^2}{2}$ 

---
### 对数
#### $\ln(1+x)\sim x$
* $\lim_{x\to0}\frac{\ln (1+x)}{x}=1$
$\Rightarrow \lim_{x\to0}\ln{(1+x)^{\frac{1}{x}}}$
$\Rightarrow \lim_{x\to0}\ln e = 1$
其中用到了另一个重要极限公式 $\lim_{x\to0}(1+x)^{\frac{1}{x}}=e$

---
#### $\log_a(1+x) \sim \frac{x}{\ln a} $
* 对数公式带入
$= \frac{\ln(1+x)}{\ln a}$

其中用到了 $\ln(1+x)\sim x$, 

---
### 指数
#### $e^x-1\sim x$
* 设 $e^x-1=t$ 则 $x=\ln(t+1)$
$\Rightarrow \lim_{t\to0}\frac{t}{\ln (t+1)}$
$\Rightarrow \lim_{t\to0}\frac{t}{t} = 1$
其中用到了 $\ln(1+x)\sim x$

---
#### $a^x - 1 \sim x\ln a$
* $Proof \lim_{x\rightarrow 0} \frac{a^x-1}{x\ln a} =1$
$assume: t=a^x-1 \Rightarrow x=\log_a(1+t)$
$then \lim_{t\rightarrow 0}\frac{t}{\ln(1+t)} = 1$

* 直接求

---
### 其它
#### $(1+x)^{\mu}-1\sim\mu x$

* 根据概念其实就是证明 $\lim_{x\to0}\frac{(1+x)^{\mu}-1}{\mu x}=1$
$\lim_{x\to0}\frac{e^{\ln{(1+x)^{\mu}}}-1}{\mu x}=1$
$\Rightarrow\lim_{x\to0}\frac{e^{\mu\ln{(1+x)}}-1}{\mu x}=1$
$\Rightarrow\lim_{x\to0}\frac{\mu\ln{(1+x)}}{\mu x}=1$
$\Rightarrow\lim_{x\to0}\frac{\mu x}{\mu x}=1$
其中用到了 [$e^x-1\sim x$](#ex-1sim-x) 和 [$\ln(1+x)\sim x$](#ln1xsim-x)
