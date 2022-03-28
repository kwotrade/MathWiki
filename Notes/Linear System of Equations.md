<br />
<br />

Date Created: 22/03/2022 16:53:18
Tags: #Definition #Closed 

Types: [[Homogeneous Linear System]]
Examples: _Not Applicable_
Constructions: [[Augmented Matrix]], [[Linear Combination (System of Equation)]]
Generalizations: _Not Applicable_

Properties: [[Classification of linear systems of equations (infinite field)]], [[Gaussian Elimination]], [[Gauss-Jordan Elimination]], [[Solution of system of linear combinations contains solution of original system]]
Sufficiencies: [Row-equivalent augmented matrices $\Rightarrow$ equivalent linear systems](Row-equivalent%20augmented%20matrices%20implies%20equivalent%20linear%20systems.md)
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and let $f_i\l(x_1,\dots,x_n\r)=b_i$ be linear equations over $K$ for all $i\in\l\{1,\dots,m\r\}$. The **linear system of $m$ equations constructed from $f_i\l(x_1,\dots,x_n\r)=b_i$** is the collection of all such equations, written as_
$$\begin{equation}
    \l\{\begin{alignedat}{7}
        &a_{11}x_1&&\,+&&\,\cdots\,&&\,+\,&&a_{1n}x_n&&=\ &&b_1\\
        &\vdotswithin{a_{11}x_1}&&&&&&&&\vdotswithin{a_{1n}x_n}&&&&\vdotswithin{b_1}\\
        &a_{m1}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&a_{mn}x_n&&=&&b_m.
    \end{alignedat}\r.
\end{equation}$$

```

**Remark.** Letting
$$\begin{equation}
    A\coloneqq
        \begin{bmatrix}
            a_{11} & \cdots & a_{1n} \\
            \vdotswithin{a_{11}} & \ddots & \vdotswithin{a_{1n}} \\
            a_{m1} & \cdots & a_{mn} \\
        \end{bmatrix},\ \ \ \ \ \ \ \ \v{x}\coloneqq
        \begin{bmatrix}
            x_1 \\
            \vdots\\
            x_n
        \end{bmatrix},\ \ \ \ \textrm{and}\ \ \ \ \v{b}\coloneqq
        \begin{bmatrix}
            b_1 \\
            \vdots\\
            b_m
        \end{bmatrix},
\end{equation}$$
we can write the linear system as $A\v{x}=\v{b}$.