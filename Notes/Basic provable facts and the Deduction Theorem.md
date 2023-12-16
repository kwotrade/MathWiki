---
mathLink: Basic provable facts/Deduction Theorem
---

<div class="topSpace"></div>

Date Created: 16/12/2023 15:08:38
Tags: #Type/Proposition #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\sigma$ be a signature. The following basic facts are provable from $\Axioms\l(\sigma\r)$ and the empty $\sigma$-theory.
* $\phi\rightarrow\phi$ $\color{gray}{\textrm{\it{(self-implication)}}}$, $\phi\proves\psi\rightarrow\phi$ $\color{gray}{\textrm{\it{(everything-implies-an-axiom)}}}$, and $\lnot\phi\rightarrow\l(\phi\rightarrow\psi\r)$ $\color{gray}{\textrm{\it{(if-false-then-implies)}}}$.
* $\phi\leftrightarrow\lnot\lnot\phi$ $\color{gray}{\textrm{\it{(double-negation)}}}$, $\l(\phi\land\lnot\phi\r)\to\psi$ $\color{gray}{\textrm{\it{(contradiction-implies-everything)}}}$, and $\l(\phi\rightarrow\psi\r)\rightarrow\l(\lnot\psi\rightarrow\lnot\phi\r)$ $\color{gray}{\textrm{\it{(forward-contrapositive)}}}$.
* $\top$, where $\top\coloneqq\fa v\l(v=v\r)$ $\color{gray}{\textrm{\it{(truth)}}}$ and $\bot\rightarrow\psi$, where $\bot\coloneqq\lnot\top$ $\color{gray}{\textrm{\it{(false-implies-everything)}}}$.
* $\l(\phi\l(t/v\r)\rightarrow\ex v\phi\r)$ for any variable symbol $v$ and $\sigma$-term $t$ free in $v$ $\color{gray}{\textrm{\it{(witness-implies-existence)}}}$.

For a $\sigma$-theory $T$, we have $T,\psi\proves\phi$ iff $T\proves\l(\psi\rightarrow\phi\r)$ for all $\sigma$-formulas $\phi,\psi$ $\color{gray}{\textrm{\it{(Deduction Theorem)}}}$, and $T\proves\phi\l(c/v\r)$ iff $T\proves\phi$, where in the first statement $v$ is a free variable in $\phi$, $c$ is a constant symbol not in $\sigma$, and $T$ is a $\sigma\sqcup\l\{c\r\}$-theory. $\color{gray}{\textrm{\it{(Constant Substitution)}}}$.

```

<i>Proof.</i> We give a very formal proof of <i>self-implication</i> and write the rest in ‘human form’, which can all be cast in a similar format.
$$\begin{equation}
    \begin{alignedat}{3}
        &\l(1\r) &&\ \ \ \ \ \ \ \ \textrm{\it{Implication-is-transitive}} \ \ \ \ \ \ \ \ &&\proves\l[\phi\rightarrow\l(\phi\rightarrow\phi\r)\r]\rightarrow\l[\l(\phi\rightarrow\l(\l(\phi\rightarrow\phi\r)\rightarrow\phi\r)\r)\rightarrow\l(\phi\rightarrow\phi\r)\r] \\
        &\l(2\r) &&\ \ \ \ \ \ \ \ \textrm{\it{If-true-then-implied}}\ \ \ \ \ \ \ \ &&\proves\phi\rightarrow\l(\phi\rightarrow\phi\r) \\
        &\l(3\r) &&\ \ \ \ \ \ \ \ \textrm{MP (1,2)}\ \ \ \ \ \ \ \ &&\proves\l[\phi\rightarrow\l(\l(\phi\rightarrow\phi\r)\rightarrow\phi\r)\r]\rightarrow\l(\phi\rightarrow\phi\r) \\
        &\l(4\r) &&\ \ \ \ \ \ \ \ \textrm{\it{If-true-then-implied}}\ \ \ \ \ \ \ \ &&\proves\phi\rightarrow\l(\l(\phi\rightarrow\phi\r)\rightarrow\phi\r) \\
        &\l(5\r) &&\ \ \ \ \ \ \ \ \textrm{MP (3,4)}\ \ \ \ \ \ \ \ &&\proves\phi\rightarrow\phi
    \end{alignedat}   
\end{equation}$$
* <i>(Everything-implies-an-axiom)</i>. By <i>if-true-then-implied</i>, we have $\proves\phi\rightarrow\l(\psi\rightarrow\phi\r)$. We also trivially have $\phi\proves\phi$, so an application of MP gives us the desired.
* <i>(Deduction Theorem)</i>. The backwards direction is an application of MP. For the forwards, let $\tpl{\phi_1,\dots,\phi_n}$ be a proof of $\phi$ from $T\cup\l\{\psi\r\}$. We show $T\proves\l(\psi\rightarrow\phi\r)$ by induction on the complexity of $\phi$. If $\phi\in\Axioms\l(\sigma\r)\cup T$ (resp. $\phi=\psi$), then the desired follows from <i>everything-implies-an-axiom</i> (resp. <i>self-implication</i>). Otherwise, there exist $i,j<n$ such that $\phi_i,\phi_j\MP\phi$, so $\phi_i=\phi_j\rightarrow\phi$, and $T\proves\l(\psi\rightarrow\phi_j\r)$ and $T\proves\l(\psi\rightarrow\l(\phi_j\rightarrow\phi\r)\r)$ by induction. The <i>implication-is-transitive</i> axiom gives us that $\l(\psi\rightarrow\phi_j\r)\rightarrow\l[\l(\psi\rightarrow\l(\phi_j\rightarrow\phi\r)\r)\rightarrow\l(\psi\rightarrow\phi\r)\r]$, so two applications of MP gives us the desired.
* <i>(If-false-then-implies)</i>. The Deduction Theorem reduces this to $\phi,\lnot\phi\proves\psi$, for which we use <i>proof-by-contradiction</i> as $\proves\l(\lnot\psi\rightarrow\phi\r)\rightarrow\l[\l(\lnot\psi\rightarrow\lnot\phi\r)\rightarrow\psi\r]$. A couple of MP’s along with <i>everything-implies-an-axiom</i> gives the desired.
* <i>(Double-negation)</i>. By the Deduction Theorem, it suffices to show that $\lnot\lnot\phi\proves\phi$ and $\phi\proves\lnot\lnot\phi$. The <i>proof-by-contradiction</i> $\proves\l(\lnot\phi\rightarrow\lnot\phi\r)\rightarrow\l[\l(\lnot\phi\rightarrow\lnot\lnot\phi\r)\rightarrow\phi\r]$, along with <i>self-implication</i> and <i>everything-implies-an-axiom</i>, gives us the former via a couple of MP’s. For the latter, we use <i>proof-by-contradiction</i> again to get $\proves\l(\lnot\lnot\lnot\phi\rightarrow\phi\r)\rightarrow\l[\l(\lnot\lnot\lnot\phi\rightarrow\lnot\phi\r)\rightarrow\lnot\lnot\phi\r]$. By <i>everything-implies-an-axiom</i> and $\lnot\lnot\psi\rightarrow\psi$ with $\psi\coloneqq\lnot\phi$, a couple of MP’s gives us the desired.
* <i>(Contradiction-implies-everything)</i>. Note that $\phi\land\lnot\phi$ is an abbreviation for $\lnot\l(\phi\rightarrow\lnot\lnot\phi\r)$. By the Deduction Theorem, it suffices to show that $\lnot\l(\phi\rightarrow\lnot\lnot\phi\r)\proves\psi$, for which we use <i>proof-by-contradiction</i> $\l[\lnot\psi\rightarrow\l(\phi\rightarrow\lnot\lnot\phi\r)\r]\rightarrow\l[\l(\lnot\psi\rightarrow\lnot\l(\phi\rightarrow\lnot\lnot\phi\r)\r)\rightarrow\psi\r]$. By <i>everything-implies-an-axiom</i> and <i>double-negation</i>, a couple of MP’s gives the desired.
* <i>(Forward-contrapositive)</i>. It suffices to show that $\l[\l(\phi\rightarrow\psi\r),\lnot\psi\r]\proves\lnot\phi$, for which we use <i>proof-by-contradiction</i> as $\proves\l(\lnot\lnot\phi\rightarrow\psi\r)\rightarrow\l[\l(\lnot\lnot\phi\rightarrow\lnot\psi\r)\rightarrow\lnot\phi\r]$. We have by <i>implication-is-transitive</i> that $\l(\lnot\lnot\phi\rightarrow\phi\r)\rightarrow\l[\l(\lnot\lnot\phi\rightarrow\l(\phi\rightarrow\psi\r)\r)\rightarrow\l(\lnot\lnot\phi\rightarrow\psi\r)\r]$, so <i>double-negation</i>, <i>everything-implies-an-axiom</i>, and a couple of MP’s gives us $\l(\phi\rightarrow\psi\r)\proves\l(\lnot\lnot\phi\rightarrow\psi\r)$. A further application of <i>everything-implies-an-axioms</i> gives us $\lnot\psi\proves\l(\lnot\lnot\phi\rightarrow\lnot\psi\r)$, so a couple of MP’s gives us the desired.