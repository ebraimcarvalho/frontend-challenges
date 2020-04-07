# CodeWars - Training!

CodeWars training and challenges in javascript. In order to explore new ways to solve the same problem, I will use my solutions and others that I find most interesting to explore!

![Design preview for the Base Apparel coming soon page coding challenge](https://www.codewars.com/users/ebraimcarvalho/badges/large)


## Problems

### 1 - Methods of Number object--toFixed(), toExponential() and toPrecision().
<a href="https://www.codewars.com/kata/57256064856584bc47000611/train/javascript" target="_blank">Link of Problem</a> 

Coding in function ```howManySmaller```, function accept 2 parameter:```arr``` and ```n```. ```arr``` is a decimal array. ```n``` is a decimal. 

The first mission: let all elements in the array keep two decimal places(No need to convert number n). 

The second mission: Traversal arr, count the number of the element which smaller than n and return it.

for example:

```
howManySmaller([1.234,1.235,1.228],1.24) should return 2
howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2
```

```js
// My first solution
function howManySmaller(arr,n){
  var newArr = [];
  var count = 0;
  for (var i = 0, arrLeng = arr.length; i < arrLeng; i++) {
    var item = arr[i].toFixed(2);
    newArr.push(item);
  }
  var map = newArr.map(item => {
    item < n ? count+=1 : '';
  })
  return count;  
}

// Little Better then my
function howManySmaller(arr,n){
  total = 0;  
  for (i = 0; i < arr.length; i++){    
    if (arr[i].toFixed(2) < n)    
      total++;      
  }  
  return total;  
}

// Best Practices
function howManySmaller(arr,n){
  return arr.filter(x => +x.toFixed(2) < n).length;
}

// Using Reduce
function howManySmaller(arr,n){
  return arr.reduce((a, b) => a + (b.toFixed(2) < n), 0);
}

```

### 2 - Coding 3min : Jumping Dutch act.
<a href="https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript" target="_blank">Link of problem</a>

Mr. despair wants to jump off Dutch act, So he came to the top of a building.

Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

Input: floor, The height of the building (floor)

Output: a string, The voice of despair(When jumping Dutch act)

Example:
sc(2) should return "Aa~ Pa! Aa!"

It means:

Mr. despair jumped from the 2 floor, the voice is "Aa~"
He fell on the ground, the voice is "Pa!"
He did not die immediately, and the final voice was "Aa!"
sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

if floor<=1, Mr. despair is safe, return ""

The final advice
Just play in this kata, Don't experiment in real life ;-)

```js
// My Solution
function sc(floor){
  let sound = '';
  const soundVoice = 'Aa~';
  const soundFloor = 'Pa!';
  for (let i = 1; i < floor; i++) {  
    sound += `${soundVoice} `;
    if(i == floor-1){
      sound += `${soundFloor}`;
    };
    if(floor <= 6 && i == floor-1){
      sound += ` Aa!`;
    }
  }
  return sound;
}

// Best Practices
function sc(floor){
  if(floor <= 1) return "";
  
  return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');
}

// or

function sc(floor){
  return floor < 2 ? '' : 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor < 7 ? ' Aa!' : '');
}

// or
const sc = (floor) => floor > 1 ? new Array(floor).join('Aa~ ')+'Pa!'+(floor>6?'':' Aa!'):'';

//or you can use the ES6 new API array.from;
const otherSc=(floor)=>floor>1?Array.from({length:floor-1}).map(a=>'Aa~ ').join('')+'Pa!'+(floor>6?'':' Aa!'):'';

```

### 3 - Convert to Binary.
<a href="https://www.codewars.com/kata/59fca81a5712f9fa4700159a/javascript" target="_blank">Link of problem</a>

Task Overview
Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.

to_binary(1)  /* should return 1 */
to_binary(5)  /* should return 101 */
to_binary(11) /* should return 1011 */

```js
// My Solution
function toBinary(n){
  return Number(parseInt(n, 10).toString(2));
}

// Best Practices
function toBinary(n){
  return +n.toString(2)
}

// or
function toBinary(n){
  return parseInt(n.toString(2));
}

// interesting
function toBinary(n){
  var binary = ""
  var i = 2
  
  if (n==0){
  binary = 0
  }
  
  while(n > 0){
    if(n % i == 0){
      binary = "0" + binary 
    }
    else{
      binary = "1" + binary 
      n = n - (i/2)
    }
    i = i * 2
  }
  return parseInt(binary);

```

### 4 - Be Concise IV - Index of an element in an array.
<a href="https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript" target="_blank">Link of problem</a>

Task
Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. You may assume that all array elements are unique and should contain no more than 85 characters.

```js
// First Solution to refactoring
function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}

// My Solution
const find = (arr, elem) => arr.indexOf(elem) > -1 ? arr.indexOf(elem) : 'Not found';

// Other Solution
const find = (a, x) => (x = a.indexOf(x)) < 0 ? 'Not found' : x;

// or
var find = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";
```

### 5 - Is your period late?
<a href="https://www.codewars.com/kata/578a8a01e9fd1549e50001f1/train/javascript" target="_blank">Link of problem</a>

In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

If the today is later from last than the cycleLength, the function should return true. We consider it to be late if the number of passed days is larger than the cycleLength. Otherwise return false.

``` js
Test.assertEquals(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35), false);
Test.assertEquals(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28), true);

// My first Solution
function periodIsLate(last, today, cycleLength) {
  const dayHasMilisecond = 8.64e+7;
  return ((today - last) / dayHasMilisecond) > cycleLength;
}

// Other solution
const periodIsLate=(last, today, cycleLength)=> 86400000 * cycleLength < today - last;

```

### 6 - Converting Binary to text
<a href="https://stackoverflow.com/questions/21354235/converting-binary-to-text-using-javascript/21354328" target="_blank">Link of problem</a>

``` js
// My first solution
function binaryAgent3(str) {
  return str.split(" ").map(function(elem) {
    return String.fromCharCode(parseInt(elem, 2));
  }).join("")
}

// other solution
function binaryToHuman(str) {
  // split string into an array so we can loop through it
  var newStr=str.split(" ");
  // declare a new array to later push "translated" values into
  var sArr=[];
  // loop through binary array, translate and push translated values into the new array
  newStr.forEach(function(item){
  sArr.push(String.fromCharCode(parseInt(item,2)));
  });
  // join the array back into a string
  return sArr.join("");
}
console.log(binaryToHuman("01001001 00100000 01101100 01101111 01110110 01100101 00100001"));
// returns:
// I love!

```

### 7 - Is it a number?
<a href="https://www.codewars.com/kata/57126304cdbf63c6770012bd/train/javascript" target="_blank">Link of problem</a>

Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")

``` js
// My first Solution
function isDigit(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}

// Best Practices
function isDigit(s) {
 return s==parseFloat(s);
}

// other solution
function isDigit(s) {
  return parseFloat(s) === Number(s)
}

```

### 8 - Friend or Foe?
<a href="https://www.codewars.com/kata/55b42574ff091733d900002f/solutions/javascript" target="_blank">Link of problem</a>

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

``` js
 friend ["Ryan", "Kieran", "Mark"] shouldBe ["Ryan", "Mark"]

```
Note: keep the original order of the names in the output.

``` js
// My first Solution
function friend(friends){
  return friends.filter(item => item.length == 4 && item.match(/\D/gmi));
}

// other solution
function friend(friends){
  return friends.filter(name => {
    return /^[A-Za-z]{4}$/.test(name)
  })
}

// or
function friend(friends){
  return friends.filter(item => item.length == 4 && !Number(item));
}

```

### 9 - IP Validation
<a href="https://www.codewars.com/kata/515decfd9dcfc23bb6000006/javascript" target="_blank">Link of problem</a>

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

Examples
Valid inputs:

1.2.3.4
123.45.67.89
Invalid inputs:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note that leading zeros (e.g. 01.02.03.04) are considered invalid.

``` js
// My first solution
function isValidIP(str) {
  return /^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/.test(str);
}

// other solution
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}

//  or
function isValidIP(str) {
  return str.split('.').filter(function(v){return v==Number(v).toString() && Number(v)<256}).length==4;
}

// using require net
const net = require('net');
const isValidIP = (s) => net.isIP(s);

// using every
function isValidIP(str) {
  var p = str.split('.');
  return p.length == 4 && p.every(function(s) {
    return /^\d+$/.test(s) && s >= 0 && s <= 255;
  });
}

```

### 10 - Training JS #14: Methods of Number object--toString() and toLocaleString()
<a href="https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript" target="_blank">Link of problem</a>

#Task
Coding in function ```colorOf```. function accept 3 parameter:```r``` ```g``` ```b```. It means value of color red green and blue. the value range is 0-255.

Use ```toString(16)``` Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

the color code should starting with "#". and then use 2 characters per color.

for example:

```
colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"

```

That's all of your work. My work is print your color code on your screen.

``` js
// my first solution
function colorOf(r,g,b){
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex
  }).join('');
}

// more clearer
function colorOf(r,g,b)
{
   return "#" + toHex(r)+ toHex(g)+ toHex(b);  
}

function toHex(n)
{
  var result = n.toString(16);
  return result.length == 1 ? "0" + result : result;  
}

// other solution
function colorOf(r,g,b){
  r.toString(16).length < 2 ? r = '0' + r.toString(16) : r = r.toString(16);
  g.toString(16).length < 2 ? g = '0' + g.toString(16) : g = g.toString(16);
  b.toString(16).length < 2 ? b = '0' + b.toString(16) : b = b.toString(16);
  
  return '#' + r + g + b;
}
```

### 11 - Compare within margin
<a href="https://www.codewars.com/kata/56453a12fcee9a6c4700009c/javascript" target="_blank">Link of problem</a>

Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b. a is "close to" b if margin is higher than or equal to the difference between a and b.

When a is lower than b, return -1.

When a is higher than b, return 1.

When a is close to b, return 0.

If margin is not given, treat it as zero.

Example: if a = 3, b = 5 and the margin = 3, since a and b are no more than 3 apart, close_compare should return 0. Otherwise, if instead margin = 0, a is lower than b and close_compare should return -1.

Assume: margin >= 0

Tip: Some languages have a way to make arguments optional.

``` js 
// My first Solution
function closeCompare(a, b, margin){
  if (!margin) 
    margin = 0;
  console.log(a,b,margin);
  if (a + margin < b)
    return -1
  if (margin >= a - b)
    return 0
  if (a + margin > b)
    return 1
}

// or
function closeCompare(a, b, margin = 0) {
  if (a < b - margin) return -1;
  if (a - margin > b) return 1;
  return 0;
}

// Best Practices
function closeCompare(a, b, m = 0){
  return Math.abs(a - b) <= m? 0: Math.sign(a - b);
}

// other
function closeCompare(a, b, margin = 0) {
  return Math.abs(a - b) <= margin ? 0 : a < b ? -1 : 1;
}

```

### 12 - Generate range of integers
<a href="https://www.codewars.com/kata/56453a12fcee9a6c4700009c/javascript" target="_blank">Link of problem</a>

Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)

``` js
// My first Solution
function generateRange(min, max, step){
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

// interesting
function generateRange(min, max, step){
  return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}

```

### 13 - Bit Counting
<a href="https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript" target="_blank">Link of problem</a>

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

``` js
// My first Solution
var countBits = function(n) {
  return n.toString(2).split('').reduce((acc, att) => acc + (att == '1'), 0);
}

// interesting
countBits = n => n.toString(2).split('0').join('').length;

// or
var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
}

// other
var countBits = function(n) {
  a = n.toString(2).match(/1/g);
  return a == null ? 0 : a.length;
}

```

### 14 - Validate code with simple regex
<a href="https://www.codewars.com/kata/56a25ba95df27b7743000016/train/javascript" target="_blank">Link of problem</a>

Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number.

``` js 
// My first solution
function validateCode (code) {
  return /^[123]/.test(code);
}
```

### 15 - Logical calculator
<a href="https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript" target="_blank">Link of problem</a>

Your task is to calculate logical value of boolean array. Test arrays are one-dimensional and their size is in the range 1-50.

Links referring to logical operations: AND, OR and XOR.

You should begin at the first value, and repeatedly apply the logical operation across the remaining elements in the array sequentially.

First Example:
Input: true, true, false, operator: AND
Steps: true AND true -> true, true AND false -> false
Output: false

Second Example:
Input: true, true, false, operator: OR
Steps: true OR true -> true, true OR false -> true
Output: true

Third Example:
Input: true, true, false, operator: XOR
Steps: true XOR true -> false, false XOR false -> false
Output: false

``` js
// Solution
const operations = {
  AND: (a, b) => a && b,
  OR: (a, b) => a || b,
  XOR: (a, b) => a !== b,
}

const logicalCalc = (array, op) => array.reduce(operations[op]);

// other solution
const logicalCalc = (array, op) => {
  return array.reduce((acc, cur) => {
    if (op === 'AND') return acc && cur;
    if (op === 'OR') return acc || cur;
    if (op === 'XOR') return acc != cur;
  });
};

```

### 16 - Exclamation marks series #1: Remove a exclamation mark from the end of string
<a href="https://www.codewars.com/kata/57fae964d80daa229d000126/javascript" target="_blank">Link of problem</a>

Description:
Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

``` js
// My first solution
function remove(s){
  return s.replace( /!$/, '') 
}

// Other solution
function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}
```

### 17 - Convert string to camel case
<a href="https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript" target="_blank">Link of problem</a>

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

``` js
// Solution
function toCamelCase(str){
  var regExp =/[-_]\w/ig;
  return str.replace(regExp,function(match){
    return match.charAt(1).toUpperCase();
  });
}

// other solution
function toCamelCase(str){
  return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
}

// interesting
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
```

### 18 - Perimeter of squares in a rectangle with fibonacci
<a href="https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript" target="_blank">Link of problem</a>

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216

``` js
// My first solution
function perimeter(n) {
  if(n == 0) return 4;
  var result = [1, 1];
  for (let i = 2; i <= n; i++){
    result[i] = result[i - 1] + result[i - 2];
  }
  return result.reduce((acc,att) => acc + att)*4;
}

// or
function perimeter(n) {
  let arr = [1, 1];
  for(let i = 0; i < n - 1; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return 4 * arr.reduce((sum, num) => sum + num, 0);
}
```

### 19 - SpeedCode #2 - Array Madness
<a href="https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript" target="_blank">Link of problem</a>

Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

array_madness(3, {4, 5, 6}, 3, {1, 2, 3}) == true;
// because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

``` js
// My first Solution
function arrayMadness(a, b) {
  var sumA = a.map(a => a ** 2).reduce((acc, att) => {
    return acc + att
  }, 0);
  var sumB = b.map(b => b ** 3).reduce((acc, att) => {
    return acc + att
  }, 0);
  return sumA > sumB
}

// using just reduce
const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0);

// or
function arrayMadness(a, b) {
  return a.reduce( (sum, el) => sum + el ** 2, 0) >
         b.reduce( (sum, el) => sum + el ** 3, 0);
}

// interesting
const sumPwrs = (a, p) => a.reduce( (s, n) => s + n ** p, 0);
const arrayMadness = (a, b) => sumPwrs(a, 2) > sumPwrs(b, 3);
```

### 20 - Row Weights
<a href="https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript" target="_blank">Link of problem</a>

Scenario
Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)

``` js
// My first solution
function rowWeights(array){
  var length = array.length - 1;
  var arr1 = [];
  var arr2 = [];
  for(var i = 0; i <= length; i++) {
    if( length == 0) {
      arr1.push(array[0]);
    } else {
      if( i % 2 == 1 )
        arr2.push(array[i]);
      if( i % 2 == 0 )
        arr1.push(array[i]);
    }
  }
  arr1 = arr1.reduce((acc, att) => acc + att, 0);
  arr2 = arr2.reduce((acc, att) => acc + att, 0);
  return [arr1, arr2]
}

// best practice
function rowWeights(array){
  let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
  let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
  
  return [t1, t2]
}

// or
function rowWeights(array){
  let team1 = array.reduce((sum,x,i)=>i%2==0? sum=sum+x:sum,0);
  let team2 = array.reduce((sum,x,i)=>i%2!=0? sum=sum+x:sum,0);
  
  return [team1, team2];
}

// other solution
function rowWeights(array){
  var arr = [0, 0];
  for (var i = 0; i < array.length; i++) {
    i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
  }
  return arr;
}

// clever
const rowWeights = arr => arr.reduce((acc, att, i) => (acc[i%2]+=att, acc), [0, 0]);

```

### 21 - Geometry Basics: Distance between points in 2D
<a href="https://www.codewars.com/kata/58dced7b702b805b200000be/train/javascript" target="_blank">Link of problem</a>

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.

``` js
// first solution
function distanceBetweenPoints(a, b) {
  console.log(a['x'] - b['x'])
  var a1 = a['x'] - b['x'];
  var b1 = a['y'] - b['y'];
  var result = Math.sqrt( a1*a1 + b1*b1 );
  return result;
}

// other solution
function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}
```

### 22 - simple calculator
<a href="https://www.codewars.com/kata/5810085c533d69f4980001cf/javascript" target="_blank">Link of problem</a>

You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument will be numbers.
The third argument will represent a sign indicating the operation to perform on these two numbers.

Example:
calculator(1,2,"+"); //=> result will be 3
if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"

``` js
// My first Solution
function calculator(a,b,sign){
 if (isNaN(a) || isNaN(b) ) return "unknown value";
 switch (sign) {
   case '+': return a + b;
   case '-': return a - b;
   case '*': return a * b;
   case '/': return a / b;
   default:  return "unknown value";
 }
}

// other solution
function calculator(a,b,sign){
  var oper = {
    "+": a + b,
    "-": a - b,
    "*": a * b,
    "/": a / b
  }
  return oper[sign] ? oper[sign] : "unknown value"
}

```

### 23 - sRegular Ball Super Ball
<a href="https://www.codewars.com/kata/53f0f358b9cb376eca001079/solutions/javascript" target="_blank">Link of problem</a>

Regular Ball Super Ball
Create a class Ball.

Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"

``` js
// first solution
var Ball = function(ballType) {
  if (ballType === undefined){
    this.ballType = 'regular';
  }
  else {
    this.ballType= 'super';
  }
};

// other solution
var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};

// or
class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

```

### 24 - Enumerable Magic #3 - Does My List Include This?
<a href="https://www.codewars.com/kata/545991b4cbae2a5fda000158/javascript" target="_blank">Link of problem</a>

Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

``` js
// My first solution
function include(arr, item){
  return arr.includes(item);
}

// other
function include(arr, item) {
  return arr.indexOf(item) !== -1;
}
```

### 25 - Vowel remover
<a href="https://www.codewars.com/kata/5547929140907378f9000039/solutions/javascript" target="_blank">Link of problem</a>

Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby

``` js
// My first solution
function shortcut(string){
  return string.match(/[^aeiou]/g).join('');
}

// other solution
function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}

// or
function shortcut(str) {
  return str.split('').filter(function(e) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
  }).join('')
}

```

### 26 - What is between?
<a href="https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript" target="_blank">Link of problem</a>

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

``` js
// my first solution
function between(a, b) {
  var dif = b - a;
  var arr = [];
  for (var i = 0; i <= dif; i++){
    arr.push(a+i)
  }
  return arr;
}

// or
function between(a, b) {
  // your code here
  arr = []
  for(i = a;i <= b; i++){ 
      arr.push(i)
  }
  return arr
}

// other solution
function between(a, b) {
  return Array.from( {length: (b-a+1)}, (v, i) => a+i );
}

```

### 27 - Extract the domain name from a URL
<a href="https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript" target="_blank">Link of problem</a>

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

``` js
// my first solution
function domainName(url){
   return url.replace(/(http:\/\/)?(https)?(www.)?(:\/\/)?/g, "").split('.')[0];
}

// other better
function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}

// or
function domainName(url){  
  return url.replace(/.+\/\/|www.|\..+/g, '')
}

```

### 28 - Responsible Drinking
<a href="https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript" target="_blank">Link of problem</a>

Welcome to the Codewars Bar!
Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

Input 1:
"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"

Output 1:
"10 glasses of water"

``` js
// my first solution
function hydrate(s) {
  const numberDrinks = s.match(/\d+/g).reduce((acc, att) => +acc + +att, 0);
  return numberDrinks === 1 ? '1 glass of water' : `${numberDrinks} glasses of water`;
}

// other solution
function hydrate(s) {
  let res =s.match(/[0-9]/g)
  let sum =0;
  
  for (let  i =0; i<res.length; i++) {
    sum +=+res[i];
  }
  
  let answer  = sum >1 ? sum + ' glasses of water' : sum + ' glass of water'
    return answer;
}

```