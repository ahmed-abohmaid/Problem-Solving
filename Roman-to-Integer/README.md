https://leetcode.com/problems/roman-to-integer/description/

# Discription:
## Roman Numerals
Roman numerals are a system of numerical notation used in ancient Rome and adopted into many other cultures. They use combinations of letters to represent different values. 

## Symbols and Values
The seven symbols used in Roman numerals are I, V, X, L, C, D and M. Each symbol has a specific value associated with it: 
- I = 1 
- V = 5 
- X = 10 
- L = 50 
- C = 100 
- D = 500 
- M = 1000  

### For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

## Usage
Roman numerals are typically written from left to right, largest to smallest. For example, the number 27 would be written as XXVII (10 + 10 + 5 + 1 + 1). The number 4 is not written as IIII; instead it is written as IV (5 - 1). This subtraction principle applies to numbers 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).

###Example 1:

`Input: s = "III"
Output: 3
Explanation: III = 3.`

###Example 2:

`Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.`

###Example 3:

`Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.`
