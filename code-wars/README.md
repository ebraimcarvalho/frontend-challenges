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

### 29 - Pre-FizzBuzz Workout #1
<a href="https://www.codewars.com/kata/569e09850a8e371ab200000b/train/javascript" target="_blank">Link of problem</a>

This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.

``` js
Test.describe('Fixed Tests', _ => {
  Test.it("Test", __ => {
    Test.assertSimilar(preFizz(1), [1], `Array should be from 1 to 1`);
    Test.assertSimilar(preFizz(2), [1,2], `Array should be from 1 to 2`);
    Test.assertSimilar(preFizz(3), [1,2,3], `Array should be from 1 to 3`);
    Test.assertSimilar(preFizz(4), [1,2,3,4], `Array should be from 1 to 4`);
    Test.assertSimilar(preFizz(5), [1,2,3,4,5], `Array should be from 1 to 5`);
  });
});
```

``` js
// my first solution
function preFizz(n) {
  return Array.from({length: n}, (e, i) => i + 1);
}

// or
let preFizz = n => [...Array(n)].map((x, i) => i+1);

// other
function preFizz(n) {
  var output = [];
  for(var i = 0; i < n; i++){
    output.push(i+1);
  }
  return output
}
```

### 30 - Short Long Short
<a href="https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript" target="_blank">Link of problem</a>

Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

For example:

solution("1", "22") // returns "1221"
solution("22", "1") // returns "1221"

``` js
// my first solution
function solution(a, b){
  return a.length < b.length ? `${a}${b}${a}` : `${b}${a}${b}`; 
}

// other solution
function solution(a, b){
  return a.length < b.length ? a + b + a : b + a + b;
}

```

### 31 - Exclamation marks series #2: Remove all exclamation marks from the end of sentence
<a href="https://www.codewars.com/kata/57faece99610ced690000165/train/javascript" target="_blank">Link of problem</a>

Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

``` js
// my first solution
function remove(s){
  return s.replace(/[!]+$/g, '');  
}

// other solution
const remove = s => s.replace(/!+$/, '');

// or
function remove(s){
  return s.charAt(s.length - 1) === '!' ? remove(s.slice(0, s.length - 1)) : s;
}

```

### 32 - Total amount of points
<a href="https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript" target="_blank">Link of problem</a>

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

``` js
// tests
describe("Basic tests", function(){
  it("Testing for points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])", function(){
    Test.assertEquals(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
  });  
  it("Testing for points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4'])", function(){
    Test.assertEquals(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
  });
  it("Testing for points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4'])", function(){
    Test.assertEquals(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
  });
  it("Testing for points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4'])", function(){
    Test.assertEquals(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
  });
  it("Testing for points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4'])", function(){
    Test.assertEquals(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
  });
});
```

``` js
// my first solution
function points(games) {
  var points = 0;
  games.map(game => {
    var a = game.split(':')[0];
    var b = game.split(':')[1];
    (+a > +b) ? points += 3 : (+a == +b) ? points += 1 : points += 0;
  });
  return points;
}

// other solution
const points=games=>games.reduce((output,current)=>{
  return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0);

// or 
function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

// interesting
const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0);
```

### 33 - Remove First and Last Character Part Two
<a href="https://www.codewars.com/kata/570597e258b58f6edc00230d/javascript" target="_blank">Link of problem</a>

This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.
``` js
// my first solution
function array(arr){
arr = arr.split(',');
return (arr.length<3)?null:arr.slice(1,arr.length-1).join(' '); 
}

// other solution
function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}
```

### 34 - Is the string uppercase?
<a href="https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript" target="_blank">Link of problem</a>

Is the string uppercase?
Task
Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true

``` js
// my first solution
String.prototype.isUpperCase = function() {
  var str = [];
  if(this[0] === undefined) {
    return "Must define the prototype isUpperCase";
  } else {
    for(let i = 0, len = this.length; i < len; i++){
      str.push(this[i]);
    }
    str = str.toString().replace(/[,\s]*/g, '')
    var test = str.toUpperCase();
    return str === test
  }
}

// just this solve
String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}

// or this
String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this);
};

```

### 35 - Sum of positive
<a href="https://www.codewars.com/kata/5715eaedb436cf5606000381/javascript" target="_blank">Link of problem</a>

You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.

``` js
// my first solution
function positiveSum(arr) {
  return arr.filter(item => item > 0).reduce((acc, att) => acc + att, 0);
}

// other
function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

```

### 36 - Basic Calculator
<a href="https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/javascript" target="_blank">Link of problem</a>

Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null

``` js
// my first solution
function calculate(num1, operation, num2) {
  const oper = {
    "+": num1 + num2,
    "-": num1 - num2,
    "*": num1 * num2,
    "/": num1 / num2,
  };
  return operation == "/" && num2 == 0 ? null : oper[operation] == undefined ? null : oper[operation]
}

// other solution
function calculate(a, o, b) {
 switch(o) {
    case '+':
        return a+b;
    case '-':
        return a-b;
    case '*':
        return a*b;
    case '/':
        return b===0?null:a/b;
    default:
        return null;
  }
}

```

### 37 - Basic Calculator
<a href="https://www.codewars.com/kata/5413759479ba273f8100003d/javascript" target="_blank">Link of problem</a>

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)

``` js
// my first solution
reverse = function(array) {
  let output = [];
  for(let i = array.length - 1; i >= 0; i--){
    output.push(array[i]);
  }
  return output;
}

// other solution
function reverse(array) {
  return array.reduce(function(a, b) {
    return [b].concat(a)
  }, []);
}

// or
reverse = function(array) {
  var result = [];
  array.forEach(function(value) { result.unshift(value); });
  return result;
}

// interesting
reverse = function(array) {
  return array.map((c, i) => array[array.length - 1 - i]);
}

```

### 38 - Be Concise II - I Need Squares
<a href="https://www.codewars.com/kata/56f4f7cfaf5b1f8cd100060e/javascript" target="_blank">Link of problem</a>

You are given a program squaresOnly that accepts an array of natural numbers up to and including
100
(and including 0) of length >= 1, array, and returns a new array containing only square numbers that have appeared in the input array.

Refactor the solution to use as few characters as possible. There is a maximum character limit of 127. Here are a few hints:

There are a lot of handy built-in Array methods in Javascript that you may have never heard of even after completing a basic course in Javascript (e.g. those provided by Codecademy) - well, at least I haven't heard of until quite recently. You may also want to research any new built-in methods offered by ES6, the newest specification of Javascript at the time of writing.
Don't you think the array parameter is a bit wordy? ;)

``` js
// my first solution
var squaresOnly=a=>{
let s=[0,1,4,9,16,25,36,49,64,81,100]
let r=[]
a.filter(i=>{s.includes(i)?r.push(i):0;})
return r}

// best practice
function squaresOnly(a) {
  return a.filter(x => x ** 0.5 % 1 == 0);
}

// or
function squaresOnly(array) {
  return array.filter(n => Number.isInteger(Math.sqrt(n)))
}

// other
var squaresOnly = array => array.filter(number => Math.sqrt(number) % 1 === 0);

// or
let squaresOnly = a => a.filter(e => !(e ** 0.5 % 1));

```

### 39 - My Languages
<a href="https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript" target="_blank">Link of problem</a>

Your task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

``` js
// my first solution
function myLanguages(results) {
  var sortable = [];
  var result = [];
  for (var item in results) {
      sortable.push([item, results[item]]);
  };

  sortable.sort(function(a, b) {
      return a[1] < b[1];
  });
  sortable.filter(item => item[1] >= 60 ? result.push(item[0]) : '');
  return result;
}

// best practices 
function myLanguages(results) {
  return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}

// other solution
myLanguages = r => Object.keys(r).sort((a,b) => r[b]-r[a]).filter(k => r[k] >= 60)

// or
const myLanguages = results => Object.entries(results)
  .filter(([name, points]) => points >= 60)
  .sort(([name1, points1], [name2, points2]) => points2 - points1)
  .map(([name, points]) => name);

```

### 40 - Powers of 2
<a href="https://www.codewars.com/kata/57a083a57cb1f31db7000028/javascript" target="_blank">Link of problem</a>

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

``` js
// my first solution
function powersOfTwo(n){
    var result = [];
    for (var i = 0; i <=n; i++) {
        result.push(2 ** i);
    }
    return result;
}

// other solution
function powersOfTwo(n) {
  return Array.from({length: n + 1}, (v, k) => 2 ** k);
}

// or
function powersOfTwo(n) {
  return [...Array(n + 1)].map((_, i) => 2 ** i)
}

```

### 41 - Rock Paper Scissors!
<a href="https://www.codewars.com/kata/5672a98bdbdd995fad00000f" target="_blank">Link of problem</a>

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

``` js
// my first solution
const rps = (p1, p2) => {
  if(p1 == p2) {
    return 'Draw!'
  } else if(p1 == 'paper' && p2 == 'scissors'){
    return 'Player 2 won!';
  }
  else {
    return p1 < p2 
    || (p1 == 'paper' && p2 == 'scissors') 
    || (p1 == 'scissors' && p2 == 'paper') 
    ? 'Player 1 won!' 
    : 'Player 2 won!';
  }
};

// best soluton
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};

// or more interesting
const rps = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!'
  }; 
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}

```


### 42 - To square(root) or not to square(root)
<a href="https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript" target="_blank">Link of problem</a>

#To square(root) or not to square(root)

Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

[4,3,9,7,2,1] -> [2,9,3,49,4,1]
The input array will always contain only positive numbers and will never be empty or null.

The input array should not be modified!

``` js
// my first solution
function squareOrSquareRoot(array) {
  return array.map(item => Math.sqrt(item) % 1 == 0 ? Math.sqrt(item) : item**2);  
}

// other solution
function squareOrSquareRoot(array) {
  return array.map(x => {
    const n = Math.sqrt(x)
    return Number.isInteger(n) ? n : x * x
  })
}

// or
function squareOrSquareRoot(array) {
  return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e*e);  
}

```

### 43 - Grasshopper - Summation
<a href="https://www.codewars.com/kata/55d24f55d7dd296eb9000030/javascript" target="_blank">Link of problem</a>

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

``` js
// my first solution
var summation = function (num) {
  return Array.from(Array(num), (_, i) => i + 1).reduce((acc, att) => acc + att, 0)
}

// other solution
var summation = function f(num) {
  return num ? num + f(num-1) : 0;
}

// or
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}
```

### 44 - Regex count lowercase letters
<a href="https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript" target="_blank">Link of problem</a>

Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

``` js
// my first solution
function lowercaseCount(str){
  return str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0
}

// other solution
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}

// or
function lowercaseCount(str){
    return str.replace(/[^a-z]/g, "").length;
}

```

### 45 - Find the smallest integer in the array
<a href="https://www.codewars.com/kata/55a2d7ebe362935a210000b2/javascript" target="_blank">Link of problem</a>

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

``` js
// my first solution
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// other solution
class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function(a, b) {
    return a - b; } )
    return args[0];
  }
}

// or
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b)=>a-b)[0];
  }
}

// other
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(Math, args)
  }
}

// interesting
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce(function(prev, curr, index, array) {
      return prev < curr ? prev : curr;
    });
  }
}
```

### 46 - Area or Perimeter
<a href="https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript" target="_blank">Link of problem</a>

You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(4, 4) --> 16
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

``` js
// my first solution
const areaOrPerimeter = function(l , w) {
  return l == w ? l * w : 2 * (l + w)
}
```

### 47 - Count by X
<a href="https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript" target="_blank">Link of problem</a>

Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

``` js
// my first solution
function countBy(x, n) {
  return Array.from({length: n}, (_, i) => x * (i + 1));
}

// other solution
function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

// or
function countBy(x, n){
  return Array.apply(0, Array(n)).map(function(v, i){
    return (i + 1) * x;
  });
}

```

### 48 - Counting sheep...
<a href="https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript" target="_blank">Link of problem</a>

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

``` js
// my first solution
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((acc, att) => att === true ? +acc + +att : +acc, 0)
}

// other solution
function countSheeps(arr) {
  return arr.filter(Boolean).length;
}

// or
let countSheeps = x => x.filter( s => s ).length;

```

### 49 - Training JS #16: Methods of String object--slice(), substring() and substr()
<a href="https://www.codewars.com/kata/57274562c8dcebe77e001012/javascript" target="_blank">Link of problem</a>

Coding in function ```cutIt```, function accept 1 parameter:```arr```. ```arr``` is a string array.

The first mission: Traversing ```arr```, find the shortest string length.

The second mission: Traversing ```arr``` again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

for example:

```
cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
```

``` js
// my first solution
function cutIt(arr){
  var minLength = Math.min(...arr.map(string => string.length))
  return arr.map(item => item.slice(0, minLength))
}

// other solution
function cutIt(arr) {
  var smallest = arr[0].length;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length < smallest) {
      smallest = arr[i].length;
    }
  }
  var map = arr.map(function(x) {
    return x.slice(0, smallest);
  });
  return map;
};

```

### 50 - Find Multiples of a Number
<a href="https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript" target="_blank">Link of problem</a>

In this simple exercise, you will build a program that takes a value, integer, and returns a list of its multiples up to another value, limit. If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.

``` js
// my first solution
function findMultiples(integer, limit) {
  var n = Math.floor(limit / integer)
  return Array.from({length: n}, (_, i) => integer * (i + 1))
}

// other solution
function findMultiples(int,limit){
  let result = [];  
  for (let i = int; i<=limit ; i+=int) {
    result.push(i)
  }
  return result
}

// or
function findMultiples(int,limit){
  return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
}

```

### 51 - Hello, Name or World!
<a href="https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript" target="_blank">Link of problem</a>

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

hello "john"   => "Hello, John!"
hello "aliCE"  => "Hello, Alice!"
hello          => "Hello, World!" # name not given
hello ''       => "Hello, World!" # name is an empty String

``` js
// my first solution
function hello(name) {
  name = name ? (name[0].toUpperCase() + name.slice(1).toLowerCase()) : 'World'
  return `Hello, ${name}!`
}

// other solution
function hello(name) {
  return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}

```

### 52 - Pirates!! Are the Cannons ready!??
<a href="https://www.codewars.com/kata/5748a883eb737cab000022a6/train/javascript" target="_blank">Link of problem</a>

Your task is to check if the gunners are loaded and ready, if they are: Fire!

If they aren't ready: Shiver me timbers!

Your gunners for each test case are 4 or less.

When you check if they are ready their answers are in a dictionary and will either be: aye or nay

Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

``` js
// my first solution
const cannonsReady = (gunners) => {
  var arr = Object.keys(gunners).map(item => gunners[item])
  return arr.every(item => item === 'aye') ? 'Fire!' : 'Shiver me timbers!'
}

// other solution
const cannonsReady = (gunners) => {
  return Object.values(gunners).some(m => m === 'nay') ? 'Shiver me timbers!' : 'Fire!';
}

// or
const cannonsReady = function(gunners){
 return Object.keys(gunners).map(pirate => gunners[pirate]).includes('nay') ? 'Shiver me timbers!' : 'Fire!'
};

// for in
const cannonsReady = (gunners) => {
    for (var i in gunners) {
        if (gunners[i] == "nay") {
          return "Shiver me timbers!"
        }
    }
  return "Fire!"
}

```

### 53 - Double Char
<a href="https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript" target="_blank">Link of problem</a>

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "

``` js
// my first solution
function doubleChar(str) {
  return str.split('').map(letter => `${letter}${letter}`).join('')
}

// other solution using regex
function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}

// imperative
function doubleChar(str) {
  var word = '';
  for (var i = 0; i < str.length; i++){
    word = word + str[i] + str[i];
  };
  return word;
};

```

### 54 - Lario and Muigi Pipe Problem
<a href="https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript" target="_blank">Link of problem</a>

#Issue Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you recieve any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

#Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

#Example:

Input: 1,3,5,6,7,8

Output: 1,2,3,4,5,6,7,8

``` js
// my first solution
function pipeFix(numbers){
  let first = +numbers.slice(0,1)
  let last = +numbers.slice(-1)
  return Array.from({length: last - first + 1}, (_, i) => first + i)
}

// other solution
function pipeFix(numbers){
  var first = numbers[0];
  var last = numbers[numbers.length-1];
  
  var arr = [];
  for(var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}
```

### 55 - Training JS #13: Number object and its properties
<a href="https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript" target="_blank">Link of problem</a>

#Task
Coding in function ```whatNumberIsIt```. function accept 1 parameter:```n```. it's a number.

To judge the number ```n```. If n is one of the above five constants, return one of these string:

```
"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
```

Other values should return ```"Input number is xxx"```. xxx means this number.

For example:
```
whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"
```
What you need to think about is how to judge it correctly and effectively and don't forget isNaN().

``` js
// my first solution
function whatNumberIsIt(n){
  const test = {
    'Infinity': 'Input number is Number.POSITIVE_INFINITY',
    '1.7976931348623157e+308': 'Input number is Number.MAX_VALUE',
    '5e-324': 'Input number is Number.MIN_VALUE',
    '-Infinity': 'Input number is Number.NEGATIVE_INFINITY',
    'NaN': 'Input number is Number.NaN'
  }
  return test[n] || `Input number is ${n}`
}

// other solution
function whatNumberIsIt(n){
  switch (true) {
    case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
    case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
    case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
    case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
    case (isNaN(n)): return "Input number is Number.NaN";
    default: return "Input number is " + n;
  }
}

```

### 56 - Training JS #9: loop statement --while and do..while
<a href="https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript" target="_blank">Link of problem</a>

``` js
  Test.assertSimilar(padIt("a",1),"*a");
  Test.assertSimilar(padIt("a",2),"*a*");
  Test.assertSimilar(padIt("a",3),"**a*");
  Test.assertSimilar(padIt("a",4),"**a**");
  Test.assertSimilar(padIt("a",5),"***a**");
```

``` js
// my first solution
function padIt(str,n){
  for(let i = 1; i <= n; i++) {
    i % 2 ? str = '*' + str : str = str + '*'
  }
  return str
}

// other soltuion
function padIt(str,n){
  var i = 1
  do {
    i % 2 ? str = '*' + str : str = str + '*'
    i++
  } while (i <= n)
  return str
}
```

### 57 - Duck Duck Goose
<a href="https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript" target="_blank">Link of problem</a>

The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name

``` js
//my first solution
function duckDuckGoose(players, goose) {
  while(goose > players.length){
    goose = goose - players.length
  }
  return players[goose-1].name
}

// other solution
function duckDuckGoose(players, goose) {  
  return players[(goose-1)%players.length].name
}

```

### 58 - Multiplication table for number
<a href="https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript" target="_blank">Link of problem</a>

Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

``` js
// my first solution
function multiTable(number) {
  let result = '';
  for(let i = 1; i <= 10; i++) {
    if(i === 10) {
      result += `${i} * ${number} = ${(i) * number}`
    } else {
      result += `${i} * ${number} = ${(i) * number}\n`
    }
  }
  return result
}

// other solution
function multiTable(n) {
  return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
}

// or
const multiTable = (number) => {
  let table = '';  
  for(let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
  }
  return table;
}

// other
function multiTable(n, i = 1) {
   if (i === 10) {
     return `10 * ${n} = ${n}0`;
   }
   return `${i} * ${n} = ${n * i}\n` + multiTable(n, i + 1);
}
```

### 59 - Draw stairs
<a href="https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript" target="_blank">Link of problem</a>

Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in "I\n I\n I", or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I

``` js
// my first solution
function drawStairs(n) {
  return Array.from({length: n}, (_, i) => `${' '.repeat(i)}I`).join(`\n`)
}

// other solution
const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n")

// or
function drawStairs(n) {
  let result = []  
  for (let i = 0; i < n; i++) {
    result[i] = `${' '.repeat(i)}I`
  }  
  return result.join('\n');
}

// other
function drawStairs(n) {
  return Array(n).fill("I").map((e,i)=>e.padStart(i+1," ")).join("\n")
}
```

### 60 - Fake Binary
<a href="https://www.codewars.com/kata/57eae65a4321032ce000002d/javascript" target="_blank">Link of problem</a>

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

``` js
// my first solution
function fakeBin(x){
  return x
    .replace(/[01234]/g, '0')
    .replace(/[56789]/g, '1');
}

// other solution
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// or
function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

// interesting
function fakeBin(x) {
  return x.replace(/\d/g, n => "0000011111"[n])
}
```

### 61 - Fake Binary
<a href="https://www.codewars.com/kata/56efc695740d30f963000557/javascript" target="_blank">Link of problem</a>

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

``` js
// my first solution
String.prototype.toAlternatingCase = function () {
  return this.split('').map(i => i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()).join('');
}

// other
String.prototype.toAlternatingCase = function () {
  return this.replace(/[A-Za-z]/g, x => x > "Z" ? x.toUpperCase() : x.toLowerCase()) 
}

// or
String.prototype.toAlternatingCase = function () {
  return this.replace(/./g, function (match) {
    return /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase();
  });
}

```

### 62 - Pillars
<a href="https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript" target="_blank">Link of problem</a>

There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

``` js
// my first solution
function pillars(num_pill, dist, width) {
  return num_pill === 1 ? 0 :
    num_pill === 2 ? (dist * 100) :    
    (dist * (num_pill - 1) * 100) + ((num_pill - 2) * width)
}
```

### 63 - Remove duplicates from list
<a href="https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript" target="_blank">Link of problem</a>

Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

``` js
// my first solution
function distinct(a) {
  return a.filter((item, index) => a.indexOf(item) == index)
}

// or
function distinct(a) {
  return [...new Set(a)];
}

// other
function distinct(a) {
  return Array.from(new Set(a));
}

// logic
function distinct(arr) {
  let res = [];  
  for(let i = 0; i < arr.length; i++){
    if(!res.includes(arr[i])){
      res.push(arr[i]);
    }
}
return res;
}
```

### 64 - Sort and Star
<a href="https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript" target="_blank">Link of problem</a>

You will be given an vector of string(s). You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

``` js
// my first solution
function twoSort(s) {
  s = s.sort()
  return `${s[0].split('').join('***')}`
}

```

### 65 - Blood-Alcohol Content
<a href="https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8/train/javascript" target="_blank">Link of problem</a>

BAC calculator Formula:

BAC% = (A × 5.14 / W × r) - .015 × H 

A: Total alcohol consumed, in ounces (oz)
W: Body weight, in pounds (lbs)
r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
H: Time passed since drinking, in hours

Alcohol consumed will be passed as a drinks object with two properties: ounces (the total volume of beverage consumed in ounces), and abv (the % of alcohol by volume of the beverage as a floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). For simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.

The gender will be passed as a string, either "male" or "female".

Output must be returned as a number data-type, greater than or equal to 0, with up to 4 decimal places. No error handling will be required.

``` js
// my first solution
function bloodAlcoholContent(drinks, weight, sex, time){
  sex = `${sex == 'male' ? 0.73 : 0.66}`;
  let BAC = ((drinks.ounces * drinks.abv) * 5.14 / weight * +sex) - (.015 * time);
  return +BAC.toFixed(4)
}

// other solution
function bloodAlcoholContent(drinks, weight, sex, time){
  return parseFloat(((drinks.ounces * drinks.abv * 5.14 / weight * (sex == 'male' ? 0.73 : 0.66)) - 0.015 * time).toFixed(4));
}

```

### 66 - Arguments to Binary addition
<a href="https://www.codewars.com/kata/57642a90dee2da8dd3000161/javascript" target="_blank">Link of problem</a>

Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

``` js

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

```

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base

``` js
// my first solution
function arr2bin(arr){
  arr = arr.filter(item => typeof item === 'number')
  return arr ? arr.reduce((acc, att) => acc + att, 0).toString(2) : 0
}

// other solution
function arr2bin(arr) {
  return arr.reduce((sum, cur) => typeof(cur) === 'number' ? sum + cur : sum, 0).toString(2);
}
```

### 67 - Unicode Total
<a href="https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript" target="_blank">Link of problem</a>

You'll be given a string, and have to return the total of all the unicode characters as an int. Should be able to handle any characters sent at it.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291

``` js
// my first solution
function uniTotal (s) {
  var length = s.length
  var str = s.split('')
  var result = []
  for(let i = 0; i < length; i++){
    result.push(str[i].charCodeAt())
  }
  return result.reduce((acc, att) => acc + att, 0)
}

// other solution
function uniTotal(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count += str.charCodeAt(i);
  }
  return count;
}

// or
const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

// or
function uniTotal(str){
  return str.split('').reduce(function(last,now){
    return last+now.charCodeAt();
  },0);
}

```

### 68 - Is there a vowel in there?
<a href="https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript" target="_blank">Link of problem</a>

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

``` js
// my first solution
function isVow(a){
  return a.map(item => (/[aeiou]/).test(String.fromCharCode(item)) ? String.fromCharCode(item) : item)
}

// other solution
const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)

```

### 69 - Collatz Conjecture (3n+1)
<a href="https://www.codewars.com/kata/577a6e90d48e51c55e000217/javascript" target="_blank">Link of problem</a>

The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

``` js
[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1
#Task

Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

#Examples

hotpo(1) returns 0
(1 is already 1)

hotpo(5) returns 5
5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(6) returns 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(23) returns 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
```

Solutions
``` js
// my first solution
var hotpo = function(n){
  //if(number is even) number = number / 2
  //if(number is odd) number = 3*number + 1
  if(n <= 1) return 0;
  let result = '';
  while (n > 1) {
    if(n % 2 == 0) {
      n = n / 2;
      result++;
    } else {
      n = 3 * n + 1;
      result++;
    }
  }
  return result;
}

// other solution
var hotpo = function(n, acc = 0) {
  if (n <= 1) {
    return acc;
  } else {
    return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
  }
}

// or
var hotpo = function(n){
  var rs=0;
  while (n>1){
    rs++;
    n=n%2?n*3+1:n/2;
  }
  return rs;
}

```

### 70 - Thinkful - Dictionary drills: Order filler
<a href="https://www.codewars.com/kata/586ee462d0982081bf001f07/train/python" target="_blank">Link of problem</a>

You're running an online business and a big part of your day is fulfilling orders. As your volume picks up that's been taking more of your time, and unfortunately lately you've been running into situations where you take an order but can't fulfill it.

You've decided to write a function fillable() that takes three arguments: a dictionary stock representing all the merchandise you have in stock, a string merch representing the thing your customer wants to buy, and an integer n representing the number of units of merch they would like to buy. Your function should return True if you have the merchandise in stock to complete the sale, otherwise it should return False.

Valid data will always be passed in and n will always be >= 1.

``` py
# my solution
def fillable(stock, merch, n):
  return stock[merch] >= n if merch in stock.keys() else False

# other solution
def fillable(stock, merch, n):
  return stock.get(merch, 0) >= n

# other
def fillable(stock, merch, n):
  return merch in stock and stock[merch] >= n

```

### 71 - Sort My Textbooks
<a href="https://www.codewars.com/kata/5a07e5b7ffe75fd049000051/train/python" target="_blank">Link of problem</a>

HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive

``` python
# my solution
def sorter(textbooks):
  return sorted(textbooks, key=str.casefold)

# other
def sorter(textbooks):
  return sorted(textbooks,key=str.lower)

# or
def sorter(textbooks):
  return sorted(textbooks, key = lambda arg: arg.lower())
```

### 72 - Merging sorted integer arrays (without duplicates)
<a href="https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/python" target="_blank">Link of problem</a>

Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

``` py
# my solution
def merge_arrays(first, second): 
  return sorted(set(first + second))

# other
def merge_arrays(first, second): 
    working = []
    for e in first:
        if e not in working:
            working.append(e)
    for i in second:
        if i not in working:
            working.append(i)
    return sorted(working)

# or
def merge_arrays(first, second): 
    # your code here
    first.extend(second)
    x = list(set(first))
    x.sort()
    return x
```

### 73 - Name Your Python!
<a href="https://www.codewars.com/kata/53cf459503f9bbb774000003/train/python" target="_blank">Link of problem</a>

Python is now supported on Codewars!

For those of us who are not very familiar with Python, let's handle the very basic challenge of creating a class named Python. We want to give our Pythons a name, so it should take a name argument that we can retrieve later.

For example:
`
bubba = Python('Bubba')
bubba.name # should return 'Bubba'
`

``` py
# my solution
class Python:
  def __init__(self, name):
    self.name = name
```

### 74 - Fix the loop!
<a href="https://www.codewars.com/kata/55ca43fb05c5f2f97f0000fd/train/python" target="_blank">Link of problem</a>

Your collegue wrote an simple loop to list his favourite animals. But there seems to be a minor mistake in the grammar, which prevents the program to work. Fix it! :)

If you pass the list of your favourite animals to the function, you should get the list of the animals with orderings and newlines added.

For example, passing in:

animals = [ 'dog', 'cat', 'elephant' ]
will result in:

list_animals(animals) == '1. dog\n2. cat\n3. elephant\n'

``` py
# my solution
def list_animals(animals):
  list = ''
  for i in range(len(animals)):
    list += str(i + 1) + '. ' + animals[i] + '\n'
  return list

# other
def list_animals(animals):
    return ''.join('{}. {}\n'.format(i, x) for (i, x) in enumerate(animals, 1))

# or
def list_animals(animals):
    return ''.join('{0}. {1}\n'.format(i + 1, x) for i, x in enumerate(animals))
```