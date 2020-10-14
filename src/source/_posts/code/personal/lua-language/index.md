---
layout: _pages/post
title: LUA Language
date: '2016-11-27'
code: 'https://github.com/htkoca/lua-language'
categories:
  - code
tags:
  - lua
cover: cover.jpg
---
# Journal
A journal of my learning progress and solutions in the LUA language.

## Self Learning
I am currently using github's version tracking as a way to track my progress through [Programming in Lua: First Edition](http://www.lua.org/pil/contents.html) as my guide to learning LUA. Version tracking allows me to show to myself and other the actual progress of my work including revisions to my code. I chose the first edition because it is constant, readily available, and most importantly, free for all to enjoy. I intend this repository to be a learning reference for myself and others.

## Attribution
* Code samples examples are derived and/or paraphrased in my own language from [Programming in Lua: First Edition](http://www.lua.org/pil/contents.html).

## Table Of Contents.
Course `Parts` are organized as folders, with `Chapters` in individual markdown `.md` files within for easy reading.

### Part 1 - The Language
<details><summary>01 - [Complete](https://github.com/htkoca/lua-language/blob/master/Part%201%20-%20The%20Language/01%20-%20Getting%20Started.md) - Getting Started</summary>
  <ul><li>1.1 - Chunks</li><li>1.2 - Global Variables</li><li>1.3 - Some Lexical Conventions</li><li>1.4 - The Stand-Alone Interpreter</li></ul>
</details><details><summary>02 - [Complete](https://github.com/htkoca/lua-language/blob/master/Part%201%20-%20The%20Language/02%20-%20Types%20and%20Values.md) - Types and Values</summary>
  <ul><li>2.1 - Nil</li><li>2.2 - Booleans</li><li>2.3 - Numbers</li><li>2.4 - Strings</li><li>2.5 - Tables</li><li>2.6 - Functions</li><li>2.7 - Userdata and Threads</li></ul>
</details><details><summary>03 - [Complete](https://github.com/htkoca/lua-language/blob/master/Part%201%20-%20The%20Language/03%20-%20Expressions.md) - Expressions</summary>
  <ul><li>3.1 - Arithmetic Operators</li><li>3.2 - Relational Operators</li><li>3.3 - Logical Operators</li><li>3.4 - Concatenation</li><li>3.5 - Precedence</li><li>3.6 - Table Constructors</li></ul>
</details><details><summary>04 - [Complete](https://github.com/htkoca/lua-language/blob/master/Part%201%20-%20The%20Language/04%20-%20Statements.md) - Statements</summary>
  <ul><li>4.1 - Assignment</li><li>4.2 - Local Variables and Blocks</li><li>4.3 - Control Structures</li><li>4.3.1 - if then else</li><li>4.3.2 - while</li><li>4.3.3 - repeat</li><li>4.3.4 - Numeric for</li><li>4.3.5 - Generic for</li><li>4.4 - break and return</li></ul>
</details><details><summary>05 - [Complete](https://github.com/htkoca/lua-language/blob/master/Part%201%20-%20The%20Language/05%20-%20Functions.md) - Functions</summary>
  <ul><li>5.1 - Multiple Results</li><li>5.2 - Variable Number of Arguments</li><li>5.3 - Named Arguments</li></ul>
</details><details><summary>06 - [Complete](https://github.com/htkoca/lua-language/blob/master/Part%201%20-%20The%20Language/06%20-%20More%20about%20Functions.md) - More about Functions</summary>
  <ul><li>6.1 - Closures</li><li>6.2 - Non-Global Functions</li><li>6.3 - Proper Tail Calls</li></ul>
</details><details><summary>07 - [Complete](https://github.com/htkoca/lua-language/blob/master/Part%201%20-%20The%20Language/07%20-%20Iterators%20and%20the%20Generic%20For.md) - Iterators and the Generic `for`</summary>
  <ul><li>7.1 - Iterators and Closures</li><li>7.2 - The Semantics of the Generic for</li><li>7.3 - Stateless Iterators</li><li>7.4 - Iterators with Complex State</li><li>7.5 - True Iterators</li></ul>
</details><details><summary>08 - [Complete](https://github.com/htkoca/lua-language/blob/master/Part%201%20-%20The%20Language/08%20-%20Compilation%2C%20Execution%2C%20and%20Errors.md) - Compilation, Execution, and Errors</summary>
  <ul><li>8.1 - The require Function</li><li>8.2 - C Packages</li><li>8.3 - Errors</li><li>8.4 - Error Handling and Exceptions</li><li>8.5 - Error Messages and Tracebacks</li></ul>
</details><details><summary>09 - [Complete](https://github.com/htkoca/lua-language/blob/master/Part%201%20-%20The%20Language/09%20-%20Coroutines.md) - Coroutines</summary>
  <ul><li>9.1 - Coroutine Basics</li><li>9.2 - Pipes and Filters</li><li>9.3 - Coroutines as Iterators</li><li>9.4 - Non-Preemptive Multithreading</li></ul>
</details><details><summary>10 - [None](#) - Complete Examples</summary>
  <ul><li>10.1 - Data Description</li><li>10.2 - Markov Chain Algorithm</li>
  </ul></details>

### Part 2 - Tables and Objects
<details><summary>11 - [None](#) - Data Structures</summary>
  <ul><li>11.1 - Arrays</li><li>11.2 - Matrices and Multi-Dimensional Arrays</li><li>11.3 - Linked Lists</li><li>11.4 - Queues and Double Queues</li><li>11.5 - Sets and Bags</li><li>11.6 - String Buffers</li></ul>
</details><details><summary>12 - [None](#) - Data Files and Persistence</summary>
  <ul><li>12.1 - Serialization</li><li>12.1.1 - Saving Tables without Cycles</li><li>12.1.2 - Saving Tables with Cycles</li></ul>
</details><details><summary>13 - [None](#) - Metatables and Metamethods</summary>
  <ul><li>13.1 - Arithmetic Metamethods</li><li>13.2 - Relational Metamethods</li><li>13.3 - Library-Defined Metamethods</li><li>13.4 - Table-Access Metamethods</li><li>13.4.1 - The `__index` Metamethod</li><li>13.4.2 - The `__newindex` Metamethod</li><li>13.4.3 - Tables with Default Values</li><li>13.4.4 - Tracking Table Accesses</li><li>13.4.5 - Read-Only Tables</li></ul>
</details><details><summary>14 - [None](#) - The Environment</summary>
  <ul><li>14.1 - Accessing Global Variables with Dynamic Names</li><li>14.2 - Declaring Global Variables</li><li>14.3 - Non-Global Environments</li></ul>
</details><details><summary>15 - [None](#) - Packages</summary>
  <ul><li>15.1 - The Basic Approach</li><li>15.2 - Privacy</li><li>15.3 - Packages and Files</li><li>15.4 - Using the Global Table</li><li>15.5 - Other Facilities</li></ul>
</details><details><summary>16 - [None](#) - Object-Oriented Programming</summary>
  <ul><li>16.1 - Classes</li><li>16.2 - Inheritance</li><li>16.3 - Multiple Inheritance</li><li>16.4 - Privacy</li><li>16.5 - The Single-Method Approach</li></ul>
</details><details><summary>17 - [None](#) - Weak Tables</summary>
  <ul><li>17.1 - Memoize Functions</li><li>17.2 - Object Attributes</li><li>17.3 - Revisiting Tables with Default Values</li>
  </ul></details>

### Part 3 - The Standard Libraries
<details><summary>18 - [None](#) - The Mathematical Library</summary>
  <ul><li>18 - The Mathematical Library</li></ul>
</details><details><summary>19 - [None](#) - The Table Library</summary>
  <ul><li>19.1 - Array Size</li><li>19.2 - Insert and Remove</li><li>19.3 - Sort</li></ul>
</details><details><summary>20 - [None](#) - The String Library</summary>
  <ul><li>20.1 - Pattern-Matching Functions</li><li>20.2 - Patterns</li><li>20.3 - Captures</li><li>20.4 - Tricks of the Trade</li></ul>
</details><details><summary>21 - [None](#) - The I/O Library</summary>
  <ul><li>21.1 - The Simple I/O Model</li><li>21.2 - The Complete I/O Model</li><li>21.2.1 - A Small Performance Trick</li><li>21.2.2 - Binary Files</li><li>21.3 - Other Operations on Files</li></ul>
</details><details><summary>22 - [None](#) - The Operating System Library</summary>
  <ul><li>22.1 - Date and Time</li><li>22.2 - Other System Calls</li></ul>
</details><details><summary>23 - [None](#) - The Debug Library</summary>
  <ul><li>23.1 - Introspective Facilities</li><li>23.1.1 - Accessing Local Variables</li><li>23.1.2 - Accessing Upvalues</li><li>23.2 - Hooks</li><li>23.3 - Profiles</li>
  </ul></details>

### Part 4 - The C API
<details><summary>24 - [None](#) - An Overview of the C API</summary>
  <ul><li>24.1 - A First Example</li><li>24.2 - The Stack</li><li>24.2.1 - Pushing Elements</li><li>24.2.2 - Querying Elements</li><li>24.2.3 - Other Stack Operations</li><li>24.3 - Error Handling with the C API</li><li>24.3.1 - Error Handling in Application Code</li><li>24.3.2 - Error Handling in Library Code</li></ul>
</details><details><summary>25 - [None](#) - Extending your Application</summary>
  <ul><li>25.1 - Table Manipulation</li><li>25.2 - Calling Lua Functions</li><li>25.3 - A Generic Call Function</li></ul>
</details><details><summary>26 - [None](#) - Calling C from Lua</summary>
  <ul><li>26.1 - C Functions</li><li>26.2 - C Libraries</li></ul>
</details><details><summary>27 - [None](#) - Techniques for Writing C Functions</summary>
  <ul><li>27.1 - Array Manipulation</li><li>27.2 - String Manipulation</li><li>27.3 - Storing State in C Functions</li><li>27.3.1 - The Registry</li><li>27.3.2 - References</li><li>27.3.3 - Upvalues</li></ul>
</details><details><summary>28 - [None](#) - User-Defined Types in C</summary>
  <ul><li>28.1 - Userdata</li><li>28.2 - Metatables</li><li>28.3 - Object-Oriented Access</li><li>28.4 - Array Access</li><li>28.5 - Light Userdata</li></ul>
</details><details><summary>29 - [None](#) - Managing Resources</summary>
  <ul><li>29.1 - A Directory Iterator</li><li>29.2 - An XML Parser</li>
  </ul></details>
