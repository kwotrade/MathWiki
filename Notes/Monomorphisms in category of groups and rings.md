---
mathLink: Monomorphisms in $\catgrp$/$\catring$
---

<div class="topSpace"></div>

Date Created: 18/07/2023 10:37:08
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Injection iff monomorphism (Set Theory)]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\phi:G\to H$ be a group homomorphism. Then $\phi$ is a monomorphism iff $\ker\phi=\l\{e\r\}$ iff $\phi$ is injective. Similarly in $\catring$.

```

<i>Proof.</i> That $\phi$ is injective implies that it is a monomorphism holds in $\catset$, so applying this result to group homomorphisms shows that they hold in $\catgrp$ too. That $\ker\phi=\l\{e\r\}$ implies that $\phi$ is injective is also easy, for if $\phi\l(g_1\r)=\phi\l(g_2\r)$ for $g_1,g_2\in G$, then $\phi\l(g_1g_2^{-1}\r)=e$ and hence $g_1g_2^{-1}=e$. Thus $g_1=g_2$, as desired. Finally, if $\phi$ is a monomorphism, we consider the parallel homomorphisms
![[Images/2023-07-18_104055/image.svg|175]]where $\iota$ is the inclusion map and $e$ is the trivial map. Then $\phi\circ\iota=\phi\circ e$ is the trivial map, so $\iota=e$ and hence $\ker\phi=\l\{e\r\}$, as desired.<span style="float:right;">$\blacksquare$</span>