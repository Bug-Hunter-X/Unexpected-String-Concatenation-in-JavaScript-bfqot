# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript pitfall: unexpected string concatenation due to loose typing.  The `+` operator behaves differently depending on the data types of its operands.

## Bug

The `foo` function attempts to add a number and a string. JavaScript's loose typing system interprets this as string concatenation, resulting in the output "12" instead of 3.

## Solution

The `bar` function correctly adds two numbers, producing the expected numerical result.  Explicit type checking or conversion can prevent this issue in more complex scenarios.