# 导数
## 导数
### 定义
&emsp;&emsp;设函数 $y=f(x)$ 在点 $x_0$ 的某个邻域内有定义，当自变量 $x$ 在 $x_0$ 处取得增量 $\Delta x$($x+\Delta x$ 仍在该邻域内)时，因变量 $y$ 相应地取得增量:
$\Delta y=f(x_0+\Delta x)-f(x_0)$

&emsp;&emsp;若 $\lim_{x\rightarrow x_0}\frac{\Delta y}{\Delta x}$ 存在，则称函数 $y=f(x)$ 在点 $x_0$ 处**可导**（differentiable），并称该极限为 $y=f(x)$ 在点 $x_0$ 处的**导数**（derivative），记为：$f^{'}(x_0)$ 即
$\begin{aligned}y^{'}(x_0)=\lim_{\Delta x\rightarrow0}\frac{\Delta y}{\Delta x}=\lim_{\Delta x\rightarrow0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}\end{aligned}$
也可记做 $y^{'}|_{x=x_0},\frac{dy}{dx}|_{x=x_0}$ 或 $\frac{df(x)}{dx}|_{x=x_0}$


注: 
1. 函数在点 $x_0$ 处**可导**是指函数在该点，**具有导数**且**导数存在**
2. 导数的定义式可取不同形式，常见：
$\begin{aligned}f^{'}(x_0)\lim_{h\rightarrow0}\frac{f(x_0+h)-f(x_0)}{h}\end{aligned}$ 或 $\begin{aligned}f^{'}(x_0)=\lim_{x\rightarrow x_0}\frac{f(x)-f(x_0)}{x-x_0}\end{aligned}$
3. 导数的概念：**函数的变化率** --各种具有不同意义的变量的变化"快慢"问题。
4. 如果 $\begin{aligned}\lim_{\Delta x\rightarrow0}\frac{\Delta y}{\Delta x}=\lim_{\Delta x\rightarrow0}=\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}\end{aligned}$ 不存在，则说明函数 $y=f(x)$ 在点 $x_0$ 处**不可导**，也可记做
不可导：$\Delta x\rightarrow 0, \frac{\Delta y}{\Delta x}\rightarrow\infty$
也可说成："函数 $y=f(x)$ 在点 $x_0$ 处的导数为无穷大"。

## 导函数
### 定义
&emsp;&emsp;若函数 $y=f(x)$ 在开区间 $I$ 内的每一点处都可导，则称 $f(x)$ **在开区间 $I$ 内可导**，这时，对任意 $x\in I$, 都对应着 $f(x)$ 的一个确定的导数值，这样就构成了一个新的函数，这个函数就称为原来函数 $y=f(x)$ 的**导函数（导数）**, 记为：$f^{'}(x),y^{'},\frac{dy}{dx}$ 或 $\frac{df(x)}{dx}$。
在点 $x_0$ 处的导数的定义式中将 $x_0$ 换成 $x$,
$\begin{aligned}f^{'}(x)&=\lim_{\Delta x\rightarrow0}\frac{\Delta y}{\Delta x}=\lim_{\Delta x\rightarrow0}\frac{f(x+\Delta x)-f(x)}{\Delta x}\\&=\lim_{h\rightarrow0}\frac{f(x+h)-f(x)}{h}\end{aligned}$
注：
1. $x$ 可以取开区间 $I$ 内的任意数值，但在极限过程中，$x$ 是常量，$\Delta x$ 或 $h$ 是变量
2. $f^{'}(x_0)$ 就是导函数 $f^{'}(x)$ 在点 $x_0$ 处的函数值，即 $f^{'}(x_0)=f^{'}(x)|_{x=x_0}$

## 常用求导数过程
### 常数求导
1. 求常数函数 $f(x)=C$ 的导数
解：
$\begin{aligned}f^{'}=\lim_{\Delta x\rightarrow0}\frac{f(x+\Delta x)-f(x)}{\Delta x}=\lim_{\Delta x\rightarrow0}\frac{C-C}{\Delta x}=0\end{aligned}$
即：$(C)^{'}=0$
同时：由常数函数的曲线变化率可知，曲线函数为直线，无变化率，所以任意一点的导数都为0。
---
### 幂函数求导
2. 求幂函数 $f(x)=x^{\mu}(\mu\in R)$的导数
解： 幂函数的定义域与常数 $\mu$ 有关
设 $x$ 在幂函数 $x^{\mu}$ 的定义域内且 $x\neq0$，则
$\begin{aligned}f^{'}(x)&=\lim_{\Delta x\rightarrow0}\frac{f(\Delta x+x)-f(x)}{\Delta x}=\lim_{\Delta x\rightarrow0}\frac{(x+\Delta x)^{\mu}-x^{\mu}}{\Delta x}\\ &=\lim_{\Delta x\rightarrow0}x^{\mu}\cdot\frac{(1+\frac{\Delta x}{x})^{\mu}-1}{\Delta x}=x^{\mu}\cdot\lim_{\Delta x\rightarrow0}\frac{\mu\frac{\Delta x}{x}}{\Delta x}=\mu x^{\mu-1}\end{aligned}$
其中用到了 $\begin{aligned}\lim_{x\rightarrow0}(1+x)^{\mu}-1\sim\lim_{x\to0}\mu x\end{aligned}$
即：$(x^{\mu})^{'}=\mu x^{\mu-1}$
---
### 指数函数求导
3. 求指数函数 $f(x)=a^{x}(a>0,a\neq1)$ 的导数
解：
$\begin{aligned}f^{'}(x)&=\lim_{\Delta x\rightarrow0}\frac{f(\Delta x+x)-f(x)}{\Delta x}=\lim_{\Delta x\to0}\frac{a^{x+\Delta x}-a^{x}}{\Delta x}\\&=a^x\cdot\lim_{\Delta x\to0}\frac{a^{\Delta x}-1}{\Delta x}=a^x\cdot\lim_{\Delta x\to0}\frac{e^{\Delta x\ln a}-1}{\Delta x}\\&=a^x\cdot\lim_{\Delta x\to0}\frac{\Delta x\ln x}{\Delta x}=a^x\ln x\end{aligned}$
其中用到了 $\begin{aligned}\lim_{x\to0}e^x-1\sim\lim_{x\to0} x \end{aligned}$
即 $(a^x)^{'}=a^x\ln a$
若 $a=e$ 则 $(e^x)^{'}=e^x$
---
### 对数函数求导
4. 求对数函数 $\begin{aligned}f(x)=log_a x (a>0,a\neq1)\end{aligned}$ 的导数
解：
$\begin{aligned}f^{'}(x)&=\lim_{\Delta x\rightarrow0}\frac{f(\Delta x+x)-f(x)}{\Delta x}=\lim_{\Delta x\to0}\frac{\log_a(x+\Delta x)-\log_ax}{\Delta x}\\&=\lim_{\Delta x\to0}\frac{\log_a(1+\frac{\Delta x}{x})}{\Delta x}=\lim_{\Delta x\to0}\frac{\ln(1+\frac{\Delta x}{x})}{\ln a\cdot\Delta x}\\&=\frac{1}{\ln_a}\cdot\lim_{\Delta x\to0}\frac{\frac{\Delta x}{x}}{\Delta x}=\frac{1}{x\ln a}\end{aligned}$
其中用到了 $\begin{aligned}\lim_{x\to0}\ln(1+x)\sim\lim_{x\to0} x \end{aligned}$
即  $\begin{aligned}(\log_ax)^{'}=\frac{1}{x\cdot\ln a}\end{aligned}$
若 $a=e$, 则 $\begin{aligned}(\ln x)^{'}=\frac{1}{x}\end{aligned}$
---
### 正弦函数求导
5. 求正弦函数 $f(x)=\sin x$的导数
解：
$\begin{aligned}f^{'}(x)&=\lim_{h\to0}\frac{f(h+x)-f(x)}{h}=\lim_{h\to0}\frac{\sin (x+h)-\sin x}{h}\\&=\lim_{h\to0}\frac{2\sin\frac{h}{2}\cos(x+\frac{h}{2})}{h}=\lim_{h\to0}\frac{\sin\frac{h}{2}\cos(x+\frac{h}{2})}{\frac{h}{2}}\\&=\cos x\end{aligned}$
其中用到了
$\sin(x+h)=\sin(\frac{h}{2})\cos(\frac{h}{2}+x)+\cos(\frac{h}{2})\sin(\frac{h}{2}+x)$
$\sin(x+\frac{h}{2}-\frac{h}{2})=\sin(\frac{h}{2}+x)\cos(\frac{h}{2})-\cos(\frac{h}{2}+x)\sin(\frac{h}{2})$
$\sin x\sim x$
即 $(\sin x)^{'}=\cos x$，$(cos x)^{'}=-\sin x$
---
### 绝对值函数求导
6. 求函数 $f(x)=\mid x\mid$ 在 $x=0$ 处的导数
解：
$\begin{aligned}f^{'}(x)&=\lim_{h\to0}\frac{f(h+0)-f(0)}{h}=\lim_{h\to0}\frac{\mid h\mid-0}{h}=\lim_{h\to0}\frac{\mid h\mid}{h}\end{aligned}$
当 $h<0$ 时，$\frac{\mid h\mid}{h}=-1$，故 $\begin{aligned}\lim_{h\to0^-}\frac{\mid h\mid}{h}=-1\end{aligned}$
当 $h>0$ 时，$\frac{\mid h\mid}{h}=1$，故 $\begin{aligned}\lim_{h\to0^+}\frac{\mid h\mid}{h}=1\end{aligned}$
所以，$\begin{aligned}f^{'}(x)&=\lim_{h\to0}\frac{f(h+0)-f(0)}{h}\end{aligned}$不存在。
$f(x)=\mid x\mid$ 在 $x=0$ 处，不可导
---
## 单侧导数
### 定义
若 $\begin{aligned}\lim_{\Delta x\rightarrow0^-}\frac{f(\Delta x+x)-f(x)}{\Delta x}\end{aligned}$ 存在，则称其为函数 $f(x)$ 在点 $x_0$ 处的左导数，记做 $f_{-}^{'}(x_0)$ 即：
$\begin{aligned}f_{-}^{'}(x_0)=\lim_{\Delta x\rightarrow0^-}\frac{f(\Delta x+x)-f(x)}{\Delta x}\end{aligned}$
若 $\begin{aligned}\lim_{\Delta x\rightarrow0^+}\frac{f(\Delta x+x)-f(x)}{\Delta x}\end{aligned}$ 存在，则称其为函数 $f(x)$ 在点 $x_0$ 处的左导数，记做 $f_{+}^{'}(x_0)$ 即：
$\begin{aligned}f_{+}^{'}(x_0)=\lim_{\Delta x\rightarrow0^+}\frac{f(\Delta x+x)-f(x)}{\Delta x}\end{aligned}$

注：
1. 左导数和右导数统称为**单侧导数**
2. 函数 $f(x)$ 在点 $x_0$ 处可导的充分必要条件是左导数 $f_{-}^{'}(x_0)$ 和右导数 $f_{+}^{'}(x_0)$都存在且相等。
3. 如果函数 $f(x)$ 在开区间 $(a,b)$ 内可导，且$f_{-}^{'}(x_0)$ 和 $f_{+}^{'}(x_0)$ 都存在，那么就称 $f(x)$ **在闭区间$[a,b]$内可导**

## 导数的几何意义
* 平面曲线C: $y=f(x)$
点 $A(x_0,y_0)$ 是曲线 $y=f(x)$ 上一点
且函数 $y=f(x)$ 在 $x_0$ 处可导.

* $y=f(x)$ 在点$A$处的切线斜率:
$k=\tan\alpha=\lim_{\Delta x\rightarrow0}\frac{f(x_0-\Delta x)-f(x_0)}{\Delta x} = f^{'}(x_0)$
* 切线方程为: $y-y_0=f^{'}(x_0)(x-x_0)$
* 过切点$A$且与切线垂直的直线叫做曲线$y=f(x)$在点$A$处的法线.
如果$f^{'}(x_0)\neq0$, 法线方程 $y-y_0=-\frac{1}{f^{'}(x_0)}(x-x_0)$
* 如果$y= f(x)$在点$x$处的导数为无穷大，这时$y= f(x)$的割线以垂直于$x$轴的直线$x=x_0$为极限位置，即$y= f(x)$在点A处具有垂直于$x$轴的切线$x= x_0$，其法线方程为$y= y_0$.

## 函数可导性与连续性的关系
* 若 $y=f(x)$在点$x_0$处可导,
$\lim_{x\rightarrow x_0}\frac{f(x)-f(x_0)}{x-x_0}=f^{'}(x_0)$
$\lim_{x\rightarrow x_0}[f(x)-f(x_0)]=\lim_{x\rightarrow x_0}\frac{f(x)-f(x_0)}{x-x_0}\cdot(x-x_0)=f^{'}(x_0)\cdot 0= 0$
即 $\lim_{x\rightarrow x_0}f(x)=f(x_0)$、故$f(x)$在点$x_0$处连续
<font color="#FF8C00">
* 若 $y=f(x)$在点$x_0$处可导, 则 $y=f(x)$在点$x_0$处连续
* 反之未必成立
* $y=f(x)$在点$x_0$处连续, 则 $y=f(x)$在点$x_0$处未必可导, 绝对值函数$|x|$在$x_0$处连续但不可导

</font>

# 函数和、差、积、商的求导法则
## 四则运算求导法则
* 定理: 如果函数$u=u(x)$和$v=v(x)$都在点$x$可导，那么它们的和、差、积、商(除分母为0的点外)都在点$x$可导，则有:
1. $(u\pm v)^{'} = u^{'}\pm v^{'}$
* 证明: 
$\lim_{\Delta x\rightarrow 0}\frac{[u(x+\Delta x)\pm v(x+\Delta x)]-[u(x)\pm v(x)]}{x-\Delta x}$ 
$=\lim_{\Delta x\rightarrow 0}\frac{[u(x+\Delta x)- u(x)]\pm[v(x+\Delta x)- v(x)]}{x-\Delta x}$
$=\lim_{\Delta x\rightarrow 0}\frac{u(x+\Delta x)- u(x)}{x-\Delta x}\pm\lim_{\Delta x\rightarrow 0}\frac{v(x+\Delta x)- v(x)}{x-\Delta x}$
$=u^{'}\pm v^{'}$
2. $(uv)^{'}=u^{'}v+uv^{'}$
* 证明: 
$\lim_{\Delta x\rightarrow 0}\frac{u(x+\Delta x)v(x+\Delta x)-u(x)v(x)}{x-\Delta x}$ 
$=\lim_{\Delta x\rightarrow 0}\frac{u(x+\Delta x)v(x+\Delta x)-u(x)v(x)+u(x)v(x+\Delta x)-u(x)v(x+\Delta x)}{x-\Delta x}$
$=\lim_{\Delta x\rightarrow 0}\frac{[u(x+\Delta x)-u(x)]v(x+\Delta x)+u(x)[v(x+\Delta x)-v(x)]}{x-\Delta x}$ 
$=\lim_{\Delta x\rightarrow 0}\frac{u(x+\Delta x)-u(x)}{{x-\Delta x}}v(x+\Delta x)+\lim_{\Delta x\rightarrow 0}\frac{v(x+\Delta x)-v(x)}{x-\Delta x}u(x)$ 
$=u^{'}v+uv^{'}$

3. $(\frac{u}{v})^{'}=\frac{u^{'}v-uv^{'}}{v^2}(v(x)\neq0)$
* 证明:
$\lim_{\Delta x\rightarrow 0}\frac{\frac{u(x+\Delta x)}{v(x+\Delta x)}-\frac{u(x)}{v(x)}}{x+\Delta x}$
$=\lim_{\Delta x\rightarrow 0}\frac{u(x+\Delta x)v(x)-u(x)v(x+\Delta x)}{x+\Delta x}\cdot\frac{1}{{v(x+\Delta x)v(x)}}$
$=\lim_{\Delta x\rightarrow 0}\frac{u(x+\Delta x)v(x)-u(x)v(x+\Delta x)+u(x)v(x)-u(x)v(x)}{x+\Delta x}\cdot\frac{1}{v^2}$
$=[\lim_{\Delta x\rightarrow 0}\frac{u(x+\Delta x)-u(x)}{{x-\Delta x}}v(x)-\lim_{\Delta x\rightarrow 0}\frac{v(x+\Delta x)-v(x)}{x-\Delta x}u(x)]\cdot\frac{1}{v^2}$ 
$=\frac{u^{'}v-uv^{'}}{v^2}$

* 其中法则 1 可推广到有限个可导函数的情形
例如: $(u-v+w)^{'}=u^{'}-v^{'}+w^{'}$

* 其中罚则 2 可推广到优先个可导函数的情形
例如: $(uvw)^{'}=u^{'}vw+uv^{'}w+uvw^{'}$

 
# 反函数求导
## 反函数求导法则
* $[f^{-1}(x)]^{'}=\frac{1}{f^{'}(y)}$ 或者 $\frac{dy}{dx}=\frac{1}{\frac{dx}{dy}}$
$$\begin{aligned}
\text{Proof: }& [f^{-1}(x)]^{'}=\frac{1}{f^{'}(y)}\\
\text{assume: }& \phi(y)\text{ is }y=f(x)\text{ Inverse Function}\\ 
\text{then: }: & y=f(\phi(y))\\
& f^{'}(x)=\lim_{\Delta x\rightarrow 0}\frac{f(x+\Delta x)-f(x)}{\Delta x}\\
\text{so: } & \Delta x= \phi(y+\Delta y)-\phi(y)\\
\text{replace: } & f^{'}(x)=\lim_{\Delta x\rightarrow 0}\frac{\Delta y}{\phi(y+\Delta y)-\phi(y)} = \frac{1}{f^{'}(y)}
\end{aligned}$$

### 余弦函数的求导
6. 求余弦函数 $f(x)=\cos x$的导数
$$\begin{aligned}
& \lim_{h\rightarrow0}\frac{\cos(x+h)-\cos h}{h}\\
= &\lim_{h\rightarrow0}\frac{-2\sin\frac{2x+h}{2}\sin\frac{h}{2}}{h}\\
= &\lim_{h\rightarrow0}-\sin(x+\frac{h}{2}) \\
= &-\sin x
\end{aligned}$$

### 正切函数的求导
7. 求正切函数 $f(x)=\tan x$的导数
$$\begin{aligned}
& \lim_{h\rightarrow0}\frac{\tan(x+h)-\tan x}{h}\\
= &\lim_{h\rightarrow0}\frac{\frac{\sin(x+h)}{\cos(x+h)}-\frac{\sin x}{\cos x}}{h}\\
= &\lim_{h\rightarrow0}\frac{\frac{\sin(x+h)\cos x -\cos(x+h)\sin x}{\cos(x+h)\cdot\cos x}}{h}\\
= &\lim_{h\rightarrow0}\frac{\frac{\sin h}{\cos(x+h)\cdot\cos x}}{h}\\
= &\frac{1}{\cos^2 x}\\
= &\sec^2 x
\end{aligned}$$

### 余切函数的求导
8. 求余切函数 $f(x)=\cot x$的导数
$$\begin{aligned}
& \lim_{h\rightarrow0}\frac{\cot(x+h)-\cot x}{h}\\
= &\lim_{h\rightarrow0}\frac{\frac{\cos(x+h)}{\sin(x+h)}-\frac{\cos x}{\sin x}}{h}\\
= &\lim_{h\rightarrow0}\frac{\frac{-[\sin(x+h)\cos x -\cos(x+h)\sin x]}{\sin(x+h)\cdot\sin x}}{h}\\
= &\lim_{h\rightarrow0}\frac{-\frac{\sin h}{\sin(x+h)\cdot\sin x}}{h}\\
= &-\frac{1}{\sin^2 x}\\
= &-\csc^2 x
\end{aligned}$$

### 正割函数的求导
9. 求正割函数 $f(x)=\sec x$的导数
$$\begin{aligned}
& \lim_{h\rightarrow0}\frac{\sec(x+h)-\sec x}{h}\\
= &\lim_{h\rightarrow0}\frac{\frac{1}{\cos(x+h)}-\frac{1}{\cos x}}{h}\\
= &\lim_{h\rightarrow0}\frac{\frac{-[\cos(x+h) -\cos x]}{\cos(x+h)\cdot\cos x}}{h}\\
= &\lim_{h\rightarrow0}\frac{\frac{2\sin(x+\frac{h}{2})\sin \frac{h}{2}}{\cos(x+h)\cdot\cos x}}{h}\\
= &\frac{\sin x}{\cos^2 x}\\
= &\tan x\sec x
\end{aligned}$$

### 余割函数的求导
10. 求余割函数 $f(x)=\csc x$的导数
$$\begin{aligned}
& \lim_{h\rightarrow0}\frac{\csc(x+h)-\csc x}{h}\\
= &\lim_{h\rightarrow0}\frac{\frac{1}{\sin(x+h)}-\frac{1}{\sin x}}{h}\\
= &\lim_{h\rightarrow0}\frac{\frac{-[\sin(x+h) -\sin x]}{\sin(x+h)\cdot\sin x}}{h}\\
= &\lim_{h\rightarrow0}\frac{-2\frac{\cos(x+\frac{h}{2})\sin \frac{h}{2}}{\sin(x+h)\cdot\sin x}}{h}\\
= &-\frac{\cos x}{\sin^2 x}\\
= &-\cot x\csc x
\end{aligned}$$

### $\arcsin x$ 求导函数
$$\begin{aligned}
\text{Proof: } & \lim_{h\rightarrow0}\frac{\arcsin (x+h)-\arcsin x}{h}\\
\text{assume: } & y = \arcsin x \text{ so Inverse Function is } x = \sin y\\
\text{and: } & h=\sin(y+h^{'})-\sin y \text{ and } h^{'}\rightarrow 0\\
\text{so: } & \lim_{h^{'}\rightarrow 0}\frac{h^{'}}{\sin(y+h^{'})-\sin y}\\ = & \lim_{h^{'}\rightarrow 0}\frac{h^{'}}{2\cos(y+\frac{h^{'}}{2})\sin\frac{h^{'}}{2}}\\
= & \frac{1}{\cos(\arcsin x)}\\
\text{because: } & \sin^2(\arcsin x)+\cos^2(\arcsin x)=1\\
\text{so: } & \arcsin x = \frac{1}{\sqrt{1-x^2}}
\end{aligned}$$

### $\arccos x$ 求导函数
$$\begin{aligned}
\text{Proof: } & \lim_{h\rightarrow0}\frac{\arccos (x+h)-\arccos x}{h}\\
\text{assume: } & y = \arccos x \text{ so Inverse Function is } x = \cos y\\
\text{and: } & h=\cos(y+h^{'})-\cos y \text{ and } h^{'}\rightarrow 0\\
\text{so: } & \lim_{h^{'}\rightarrow 0}\frac{h^{'}}{\cos(y+h^{'})-\cos y}\\ = & \lim_{h^{'}\rightarrow 0}\frac{h^{'}}{-2\sin(y+\frac{h^{'}}{2})\sin\frac{h^{'}}{2}}\\
= & -\frac{1}{\sin(\arccos x)}\\
\text{because: } & \sin^2(\arccos x)+\cos^2(\arccos x)=1\\
\text{so: } & \arccos x = -\frac{1}{\sqrt{1-x^2}}
\end{aligned}$$

### $\arctan x$ 求导函数
$$\begin{aligned}
\text{Proof: } & \lim_{h\rightarrow0}\frac{\arctan (x+h)-\arctan x}{h}\\
\text{assume: } & y = \arctan x \text{ so Inverse Function is } x = \tan y\\
\text{and: } & h=\tan(y+h^{'})-\tan y \text{ and } h^{'}\rightarrow 0\\
\text{so: } & \lim_{h^{'}\rightarrow 0}\frac{h^{'}}{\tan(y+h^{'})-\tan y}\\ = & \lim_{h^{'}\rightarrow 0}\cos(y+h^{'})\cos y\\
= & \cos^2(\arctan x)\\
\text{because: } & \sin^2(\arctan x)+\cos^2(\arctan x)=1\\
\text{and: } & \frac{\sin(\arctan x)}{\cos(\arctan x)}=\tan(\arctan x)=x\\
\text{so: } & \arctan x = \frac{1}{1+x^2}
\end{aligned}$$

### $\text{arccot }x$ 求导函数
$$\begin{aligned}
\text{Proof: } & \lim_{h\rightarrow0}\frac{\text{arccot }(x+h)-\text{arccot }x}{h}\\
\text{assume: } & y = \text{arccot } x \text{ so Inverse Function is } x = \cot y\\
\text{and: } & h=\cot(y+h^{'})-\cot y \text{ and } h^{'}\rightarrow 0\\
\text{so: } & \lim_{h^{'}\rightarrow 0}\frac{h^{'}}{\cot(y+h^{'})-\cot y}\\ = & \lim_{h^{'}\rightarrow 0}-\sin(y+h^{'})\sin y\\
= & -\sin^2(\text{arccot } x)\\
\text{because: } & \sin^2(\text{arccot } x)+\cos^2(\text{arccot } x)=1\\
\text{and: } & \frac{\cos(\text{arccot } x)}{\sin(\text{arccot } x)}=\cot(\text{arccot } x)=x\\
\text{so: } & \text{arccot } x = -\frac{1}{1+x^2}
\end{aligned}$$

# 复合函数求导
## 复合函数的求导法则 
* 设$g(x)$在点$x$可导, 而$f(u)$在点$u=g(x)$可导, 那么复合函数 $f[g(x)]$在点$x$可导, 则有:
$$\frac{dy}{dx}=f^{'}(u)g^{'}(x)\text{ 或 }\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$$

$$\begin{aligned}
\text{Proof: } & u=g(x) \text{ so } y=f(u)\\
\text{then: } & \frac{df(g(x))}{dx} = \lim_{\Delta x\rightarrow 0}\frac{f(g(x+\Delta x))-f(g(x))}{\Delta x}\\
= &  \lim_{\Delta x \rightarrow 0}\frac{f[g(x+\Delta x)]-f(g(x))}{ g(x+\Delta x)- g(x)}\cdot\lim_{\Delta x\rightarrow0}\frac{ g(x+\Delta x)- g(x)}{\Delta x}\\
\text{because: } & u=g(x) \text{ and } \Delta u = g(x+\Delta x)- g(x)\\
\text{so: } & y^{'}= \lim_{\Delta x \rightarrow 0}\frac{f[g(x+\Delta x)]-f(g(x))}{ g(x+\Delta x)- g(x)}\\
\text{so: } & \frac{df(g(x))}{dx} = f^{'}(u)g^{'}(x)
\end{aligned}$$

* 复合函数的求导法则可以推广到多个中间变量的情形. 
* 设 $y=f(u), u=\varphi(v), v=\psi(x)$ 则复合函数 $y=f\{\varphi[\psi(x)]\}$ 的导数为
$$\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dv}\cdot\frac{dv}{dx}$$