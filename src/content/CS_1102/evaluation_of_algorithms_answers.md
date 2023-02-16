---
title: "Evaluation of Algorithms"
description: "Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro."
# pubDate: "Jul 01 2022"
subtitle: "Chapter "
subtitle_number: 2.3
order: 3.2
answers: true
objective: true
long_response: true
heroImage: "/cs-image-1.jpg"
---

#### How to get started...

<!-- > The following notes are **_general-purpose_**.
> They may be examinable in both objective-type and long-response-type questions. -->

> ✅ When you are finished checking an answer, please click **Go Back**.

<br>

1.  _How many algorithm evaluation criteria are there?_

    - Three

2.  _What are the three algorithm evaluation criteria?_

    - Evaluation by computional complexity
    - Evaluation by validity
    - Evaluation by representation

3.  _Define evaluation by computational complexity._
    - (criterion for) Evaluating efficiency
4.  _Define evaluation by validity._
    - (criterion for) Evaluating reliability
5.  _Define evaluation by representation._
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

1. _Linear search (sequential search) time complexity (number of comparisons)_
   - _Best case/ minimum_ O(1)
   - _Average case_ O(n)
   - _Worst case/ maximum_ O(n)
1. _Binary search time complexity (number of comparisons)_
   - _Best case/ minimum_ O(n)
   - _Average case_ O(n<sup>2</sup>)
   - _Worst case/ maximum_ O(n<sup>2</sup>)
   <!-- 2. _What are the minimum, average, and maximum number of times of comparisons (best case, average case, worst case complexities) for binary search algorithm?_
   - O(n)
   - O(n<sup>2</sup>)
   - O(n<sup>2</sup>) -->

## 2.3.2 &nbsp;&nbsp; Evaluation by validity (p-85)

1. _Name and define the three types of validity?_
   - Partial validity (whether segments satisfy specifications or not)
   - Terminability validity (whether a program can terminate or not. Infinite loops must not occur)
   - Total validity (whether the whole program satisfy specifications or not)

## 2.3.3 &nbsp;&nbsp; Evaluation by representation (p-85)

1. _Give two examples of evaluation by representation._
   - Using functions for repeatedly executing steps
   - Increasing the processing speed
