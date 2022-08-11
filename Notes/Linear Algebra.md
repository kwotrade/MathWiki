<div class="topSpace"></div>

Date Created: 07/08/2022 14:28:31
Tags: #MOC

Context: [Zermelo Fraenkel Set Theory](Zermelo%20Fraenkel%20Set%20Theory.md)
Extensions: [Functional Analysis](Functional%20Analysis.md), [Multilinear Algebra](Multilinear%20Algebra.md)
Abstractions: [Category Theory](Category%20Theory.md)

$\huge\rm\bf{L}\normalsize\rm\bf{INEAR ALGEBRA}\huge\rm\bf{ | }\Large\rm\bf{A }\normalsize\rm\bf{THEORY OF VECTOR SPACES}$

_Linear Algebra_ is the study of the [$\catvect$](Category%20of%20Vector%20Spaces.md); that is, the study of [vector spaces](obsidian://open?file=Vector%20Space.md) and [linear maps](obsidian://open?file=Linear%20Map.md) between them.

## $\ul{\textbf{Constructions:}}$

As with most categories, the [category of vector spaces](obsidian://open?file=Category%20of%20Vector%20Spaces.md) has [subobjects](obsidian://open?file=Linear%20Subspace.md), [products](obsidian://open?file=Direct%20Product%20(Vector%20Space)), [direct sums](obsidian://open?file=Internal%20Direct%20Sum%20(Linear%20Algebra).md), and [quotients](obsidian://open?file=). Unique to Linear Algebra is the concept of the [dimension](obsidian://open?file=Dimension%20(Linear%20Algebra).md) of a [vector space](obsidian://open?file=Vector%20Space.md), defined as the cardinality of any [linearly independent](obsidian://open?file=Linear%20Independence.md) [spanning set](obsidian://open?file=Spanning%20Set.md), aka any [basis](obsidian://open?file=Hamel%20Basis.md), thereof.

Similarly, as with most categories, we can define the [kernel](obsidian://open?file=Kernel;%20Null%20Space.md) of a [linear map](obsidian://open?file=Linear%20Map.md) $T:V\to W$. Unique to Linear Algebra is its [rank](obsidian://open?file=Rank.md) (defined as $\dim\im T$); together, they satisfy the [Dimension Theorem](obsidian://open?file=Dimension%20Theorem.md) which states that
$$\begin{equation}
    \dim\ker T+\dim\im T=\dim V.
\end{equation}$$

## $\ul{\textbf{Characterizations:}}$

Vector spaces are characterized by their dimension, in the sense that they are [linearly isomorphic $\Leftrightarrow$ their dimensions coincide](obsidian://open?file=Linearly%20isomorphic%20iff%20dimensions%20coincide%20(finite-dim.).md). Thus in the finite-dimensional case, we can, under a choice of basis:
* Represent vectors by tuples in $K^n$ (thereby establishing a [coordinate system](Coordinate%20Representation%20of%20Finite-dim.%20Vector%20Spaces.md)).
* Represent linear maps by [matrix](Matrix.md) (their actions on a vector [are represented by](Action%20of%20linear%20map%20repr%20under%20basis%20left-multiplication%20of%20matrix%20representation.md) matrix-vector multiplication, and compositions between linear maps [are represented by](Composition%20of%20linear%20maps%20repr%20under%20basis%20matrix%20product%20of%20representations.md) matrix multiplication).

If a concept is defined via a choice of basis, we must ensure that it is invariant under a [change of basis](Basis%20Transition%20Map;%20Change%20of%20Basis%20Matrix.md).

Bases themselves can be characterized as both maximally linearly independent sets and as minimal spanning sets. Indeed, every linearly independent set [extends to](Linearly%20independent%20set%20extends%20to%20a%20basis.md) a basis, and every spanning set [cuts down](Spanning%20set%20cuts%20down%20to%20a%20basis.md) to a basis. This shows, under the assumption of Choice, that [every vector space has a basis](Every%20vector%20space%20has%20a%20basis.md).

## $\ul{\textbf{Computations:}}$

Most computations boil to down to solving a [system of linear equations](Linear%20System%20of%20Equations.md), which can be reformulated as the problem of finding all $\v{x}\in K^n$ such that $A\v{x}=\v{b}$. [Elementary row operations](Elementary%20Matrices%20and%20Operations.md), executed in accordance to the [Gaussian Algorithm](obsidian://open?file=Gaussian%20Algorithm.md), reduces the system to [reduced row-echelon form](obsidian://open?file=Reduced%20Row-echelon%20Matrix.md) from which solutions can simply be read off.
* The rank of a linear map, when represented by a matrix $A$, can be computed by [counting](obsidian://open?file=Rank%20of%20matrix%20in%20RREF%20is%20number%20of%20pivot%20columns%20of%20non-zero%20rows.md) the number of pivot columns or non-zero rows of $\rref{A}$.

[Other methods](obsidian://open?file=Solutions%20of%20linear%20system%20of%20equations.md) include finding a particular solution or inverting the coefficient matrix ([if possible](obsidian://open?file=Matrix%20Invertibility%20Theorem.md)).