---
title: "Evaluation of Algorithms (answers)"
description: "Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro."
# pubDate: "Jul 01 2022"
chapter: 2.3
answers: true
heroImage: "/cs-image-1.jpg"
---

#### Quick Notice

> The following notes are **_general-purpose_**.
> They may be examinable in both objective-type and long-response-type questions.

<br>

1.  _How many algorithm evaluation criteria are there?_

    - Three

2.  _What are the three algorithm evaluation criteria?_

    - Evaluation by computional complexity
    - Evaluation by validity
    - Evaluation by representation

3.  _Define evaluation by computational complexity._
    - (criterion for) Evaluating efficiency
4.  Define evaluation by validity.
    - (criterion for) Evaluating reliability
5.  Define evaluation by representation.
    - (criterion for) Evaluating elimination of redundancy and improving processing speed

<br>

## 2.3.1 &nbsp;&nbsp; Evaluation by computational complexity (p-84)

1.  _What is computational complexity?_
    - A measure for clarifying how much time and memory area a particular algorithm uses.
2.  _How is computational complexity expressed?_
    - In Big O notation

### (1) &nbsp;&nbsp; Types of computational complexity (p-84)

1. _What are the two types of computational complexity?_
   - Space complexity
   - Time complexity
2. _Define time complexity._
   - How much time an algorithm needs
3. _Define space complexity._
   - How much (memory space) area an algorithm needs

### (2) &nbsp;&nbsp; Computation example (p-84)

1. _What are the minimum, average, and maximum number of times of comparisons (best case, average case, worst case complexities) for linear search (sequential search) algorithm?_
   - O(1)
   - O(n)
   - O(n)
2. _What are the minimum, average, and maximum number of times of comparisons (best case, average case, worst case complexities) for binary search algorithm?_
   - O(n)
   - O(n<sup>2</sup>)
   - O(n<sup>2</sup>)

## 2.3.2 &nbsp;&nbsp; Evaluation by validity (p-85)

1. _Name and define the three types of validity?_
   - Partial validity (whether segments satisfy specifications or not)
   - Terminability validity (whether a program can terminate or not. Infinite loops must not occur)
   - Total validity (whether the whole program satisfy specifications or not)

## 2.3.3 &nbsp;&nbsp; Evaluation by representation (p-85)

1. _Give two examples of evaluation by representation._
   - Using functions for repeatedly executing steps
   - Increasing the processing speed
