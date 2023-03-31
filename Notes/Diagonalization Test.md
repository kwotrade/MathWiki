<div class="topSpace"></div>

Date Created: 16/03/2023 18:38:56
Tags: #Theorem #Topics/Linear_Algebra

Proved by: [[Distinct eigenvalues implies linearly independent eigenvectors]], [[Geometric multiplicity no more than algebraic multiplicity]], [[Linearly independent set with same cardinality as dimension (finite) is a basis]], [[Unique Representation Theorem (Basis)]], [[Basis slash dimension for direct sum]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Diagonalization Test).

_Let $T:V\to V$ be a linear operator on a finite-dimensional $K$-vector space $V$. Let $\lambda_1,\dots,\lambda_k\in K$ be the eigenvalues of $T$ and suppose that $\cchi_T$ splits. Then the following are equivalent._
1. _$T$ is diagonalizable; that is, there is a basis $\mc{B}$ of $V$ such that_ $\l[T\r]_\mc{B}$ _is a diagonal matrix._
2. _There is a basis $\mc{B}$ of $V$ consisting of eigenvectors of $T$._
3. _For all $1\leq i\leq k$, the algebraic multiplicity of $\lambda_i$ is_ $\dim E_{\lambda_i}$_._
4. $V=\bigoplus_{i=1}^{k}E_{\lambda_i}$_._

_If any of the above hold, then_ $\l[T\r]_\mc{B}=\diag\l(\lambda_1,\dots,\lambda_k\r)$ _and_ $\mc{B}=\coprod_{i=1}^{k}\mc{B}_i$ _where each $\mc{B}_i$ is a basis for_ $E_{\lambda_i}$_._

```

_Proof_. Let $n\coloneqq\dim V$. For all $1\leq i\leq k$, let $m_i$ and $d_i\coloneqq\dim E_{\lambda_i}$ denote the algebraic and geometric multiplicities of $\lambda_i$, respectively.
* ($1\Leftrightarrow2$): Since $T$ is diagonalizable, there exists a basis $\mc{B}\coloneqq\l\{v_1,\dots,v_n\r\}$ of $V$ such that $\l[T\r]_\mc{B}$ is a diagonal matrix, say $\l[T\r]_\mc{B}\coloneqq\l[t_{ij}\r]$ for some $t_{ij}\in K$. Then
$$\begin{equation}
        T\l(v_j\r)=\sum_{i=1}^nt_{ij}v_i=t_{jj}v_j,
\end{equation}$$
so $\lambda_j=t_{jj}$ and hence $\l[T\r]_\mc{B}=\diag\l(\lambda_1,\dots,\lambda_k\r)$. Conversely, let $\mc{B}\coloneqq\l\{v_1,\dots,v_n\r\}$ be a set of eigenvectors of $T$. Then $T\l(v_j\r)=\lambda_{j'}v_j$ for some $1\leq j'\leq k$, so the $\l(i,j\r)^\textrm{th}$-entry of $\l[T\r]_\mc{B}$ is $\lambda_{j'}\delta_{ij}$. Thus $\l[T\r]_\mc{B}$ is a diagonal matrix.

* ($2\Leftrightarrow3$): For each $1\leq i\leq k$, set $\mc{B}_i\coloneqq\mc{B}\cap E_{\lambda_i}$ and $n_i\coloneqq\l|\mc{B}_i\r|$. Note that $\mc{B}_i$ is the set of vectors in $\mc{B}$ that are eigenvectors corresponding to $\lambda_i$, so, since $\mc{B}_i$ is linearly independent, we see that $n_i\leq d_i\leq m_i$.
    * Clearly $E_{\lambda_j}\cap E_{\lambda_{j'}}=\l\{0\r\}$ for all $1\leq j,j'<k$, so the union $\bigcup_{i=1}^{k}\mc{B}_i$ is disjoint and hence $\sum_{i=1}^{k}n_i=n$. Also, since $\cchi_T$ splits, we also have that $\sum_{i=1}^{k}m_i=n$.

  It follows then that
        $$\begin{equation}
            n=\sum_{i=1}^{k}n_i\leq\sum_{i=1}^{k}d_i\leq\sum_{i=1}^{k}m_i=n,
        \end{equation}$$
  so $\sum_{i=1}^{k}\l(m_i-d_i\r)=0$. Since $d_i\leq m_i$ for all $1\leq i\leq k$, we see that they coincide for all $1\leq i\leq k$. Conversely, suppose that $m_i=d_i$ for all $1\leq i\leq k$. For each $1\leq i\leq k$, let $\mc{B}_i$ be an ordered basis for $E_{\lambda_i}$, and set $\mc{B}\coloneqq\coprod_{i=1}^{k}\mc{B}_i$. Observe then that $\sum_{i=1}^{k}d_i=\sum_{i=1}^{k}m_i=n$, so $\l|\mc{B}\r|=n$. Clearly $\mc{B}$ is linearly independent, so this shows that $\mc{B}$ is a basis for $V$.
* ($2\Leftrightarrow4$): Let $\mc{B}$ be a basis consisting of eigenvectors of $T$, so $\mc{B}=\bigcup_{i=1}^{k}\mc{B}_i$ where each $\mc{B}_i$ is a basis for $E_{\lambda_i}$. Then
$$\begin{equation}
    V=\span\mc{B}=\span\bigcup_{i=1}^{k}\mc{B}_i=\sum_{i=1}^{k}\span\mc{B}_i=\sum_{i=1}^{k}E_{\lambda_i},
\end{equation}$$
so it remains to show that the sum is direct. Indeed, fix $1\leq j\leq k$ and take $v\in E_{\lambda_j}\cap\sum_{i\neq j}E_{\lambda_i}$. If $v\neq0$, then $v\in\span\mc{B}_j$ and $v\in\span\bigcup_{i\neq j}E_{\lambda_i}$ show that $v$ admits two non-trivial linear combinations of $\mc{B}$, contradicting the fact that $\mc{B}$ is a basis. Conversely, if $V=\bigoplus_{i=1}^{k}E_{\lambda_i}$, then $\mc{B}\coloneqq\coprod_{i=1}^{k}\mc{B}_i$ is a basis for $V$. But $\mc{B}$ is a basis consisting of eigenvectors of $T$, so we are done.<span style="float:right;">$\blacksquare$</span>