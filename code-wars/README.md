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