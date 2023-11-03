//[convert celsius to fereniate]
// function cToF(n){
//   return n * 9/5 + 32 ;

// }
// const celsius = cToF(30);

// console.log(celsius)

//[convert farenhete to  celcius]

// function fToc(n){
//   return n - 32 * 9/5
// }

// const feren = fToc(86) ;

// console.log(feren)

// PRINT 1 TO 10 IN REVERSE ORDER

// for(let i=10 ; i >= 1 ; i--){
//   console.log(i)
// }

//PRINT 1 TO 10 IN JS

// for(let i=1 ; i <=10 ; i++ ){
//   console.log(i)
// }

// ADD SUM OF 1 TO 10

// let sum =  0 ;

// for (let i=1 ;  i<=10 ; i++)
// {
//   sum += i
// }

// console.log(sum);

// ADD SUM OF ODD NUMBER BETWEEN 11 TO 30

// let sum =  0 ;

// for (let i = 11 ; i<= 30 ; i += 2){
//   sum += i ;
// }

// console.log(sum)

// ADD SUM OF EVEN NUMBER BETWEEN 10 TO 30

// let sum =  0 ;

// for (let i = 10 ; i<= 30 ; i += 2){
//   sum += i ;
// }

// console.log(sum)

// CALCULATE THE SUM OF ARRAY
// function sum(arr){
//   let sum = 0 ;
// //array lenth is not lesser than equal to it should lesser than
//   for (let i=0 ; i < arr.length ; i++){
//     sum += arr[i]
//   }
//   return sum
// }

// let array = [ 1 ,2, 3,4, 5 , 6] ;

// let sumArray = sum(array);

// console.log(sumArray);


//CALCULATE THE AVERAGE OF THE SUM OF ARRAY

// function sumAvg(arr){

//   let sum = 0 ;

//   let n = arr.length

//   for(let i=0 ; i < n ; i++){
//     sum += arr[i]
//   }
//   return sum / n
// }

// let array = [1,2,3,4,5,6,6,]

// let avg = sumAvg(array) ;

// console.log(avg) ;

//SHOW THE ARRAY OF ELEMENT WHICH CONTAIN ONLY POSITIVE ELEMENT

// function positiveArray(arr){

//   let a1 = []

//   for (let i=0 ; i < arr.length ; i++){
//     let el = arr[i]
//     if(el >=0 ){
//       a1.push(el)
//     }
//   }
//   return a1
// }

// let array = [-1 , -2 ,-3 , -4 , 1 ,2 ,3 ,4]

// let newarr = positiveArray(array);

// console.log(newarr)

//[Solution 2]
// function positiveArray(arr){
//   let a1 = []

//   for(let el of arr){

//     if (el >= 0 ){
//       a1.push(el)
//     }
//   }
//   return a1
// }

// let array = [-1 , -2 ,-3 , -4 , 1 ,2 , 4] ;

// let newarr =  positiveArray(array)

// console.log(newarr)

//SOLUTON 3

// const positiveArray = () => array.filter((val) => val >= 0)
// let array = [-1 , -2 ,-3 , -4 , 1 ,2 , 4] ;

// let newarr =  positiveArray(array)

// console.log(newarr)

//FIND THE MAXMIMUM NUMBER OF AN ARRAY

// function maxNum(arr) {
//   let max  = arr[0] ;

//   for (let i = 0 ;  i < arr.length ;  i++){
//     if(arr[i] > max ){
//       max = arr[i]
//     }
//   }
//   return max
// }

// let array =  [22 ,33 , 44 ,55, 66, 77];

// let output  =  maxNum(array)

// console.log(output)

//Solution 2 using reduce

// function maxNum(arr) {
//   return  arr.reduce((max , curr) => {
//     return curr > max ? curr : max
//   } , arr[0])
// }

// let array =  [11 , 99  , 88 , 65 ] ;

// let output = maxNum(array);

// console.log(output)

//FIBONACCI SERIES
// let f0 = 0 ;
// let f1 = 1 ;
// for(let i=0 ; i < 10 ; i++){
//   let fi = f1 + f0 ;
//   console.log(fi);
//   f0 = f1 ;
//   f1 = fi ;
// }

//function that will find the nth Fibonacci number

// function findFibonacci(n)
// {
//     if (n == 0)
//         return 0;

//     if (n == 1)
//         return 1;

//     return findFibonacci(n - 1) + findFibonacci(n - 2);
// }

// let n = findFibonacci(10);
// console.log(n)

// KAKA

// 1 ) WRITE A FUNCTION TO CALCULATE THE SUM  OF TWO NJUMBER

// function sum(a , b){
//   return a + b ;
// }

// const output =  sum(5 ,  10);

// console.log(output)

// 2) WRITE A JS PROGRAM TO FIND THE MAX NUM IN THE ARRAY

// const maxNum = (arr) => arr.reduce((max , curr) => {
//   return curr > max ? curr : max
// } , arr[0] )

// let array = [22 ,33, 66, 99]

// const output = maxNum(array)

// console.log(output)

// 3 ) CHECK WHETHER THE STRING IS PALINDROME OR NOT

// function palindrome(){

//   const str = "amma"

//   const str1 = str.split("").reverse().join("")

//   if (str === str1){
//     console.log("it is palindrome ")

//   }
//   else{
//     console.log("not palindrome")
//   }
// }

// palindrome()

//4) WRITE A JS PROGRAM TO REVERSE A STRING and reverse each word

// function reverseStr(str) {
//    return str.split("").reverse().join("").split(" ").reverse().join(" ")
// }

// let str = " hello this is reverse"

// console.log(reverseStr(str))

// 5 ) TAKE ARRAY OF NUMBER AND RETUURN A NEW ARRAY ONLY WITH EVEN NUMBER

// function filterEvenNumbers(numbers) {

//  return numbers.filter(num => num % 2 === 0)

// }

// let array = [ 2 ,3 ,4, 5, 6 ,7, 8 ,10]

// console.log(filterEvenNumbers(array))

// 6) Factorial of given number

// function factorial(n){
//   if (n ===  0 || n === 1){
//     return 1
//   }
//   else{
//     return n * factorial(n-1)
//   }
// }
// console.log(factorial(10))

// 7 ) checking the given is Prime or not

// function prime(number){
//   if (number <= 0){
//     return false
//   }
//   for(let i=2 ; i <= Math.sqrt(number) ; i++){
//     if( number % i === 0  ){
//       return false
//     }
//   }
//   return true
// }

// console.log(prime(10))

// 8) Finding largest number in nested array

// function findLargestElement(arr) {
//   let largest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       // If the element is an array, recursively find the largest within it
//       const maxInSubArray = findLargestElement(arr[i]);
//       largest = Math.max(largest, maxInSubArray);
//     } else if (arr[i] > largest) {
//       // If the element is a number and it's larger than the current largest
//       largest = arr[i];
//     }
//   }

//   return largest;
// }

// const nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8, 9]];

// console.log(findLargestElement(nestedArray));

// 9) Fibonacci series

// let f0 = 0 ;
// let f1 = 1 ;

// for(let i=0 ; i <10 ; i++){
//  let fi = f0 + f1 ;

//  console.log(fi)

//  f0 = f1 ;

//  f1 = fi ;
// }

//10) Each word is upper case

// function uppercase(str) {
//   return str.replace(/\b\w/g , w => w.toUpperCase())

// }
// console.log(uppercase("heloo world"))

// ADVANCED QUESTIONS

// function anagram(str1 , str2){
//     if(str1.split("").sort().join("") === str2.split("").sort().join("") ){
//        console.log("it is anagram")
//     }
//     else{
//       console.log("it is anagram")
//     }
//   }

//   anagram("army" , "mary")

//REMOVE DUPLICATE WORD IN STRING

// function removeDuplicateChar(){
//     let str =" this is sample sentance"

//     let output = str.split("").filter((item , index , arr) => {
//         return arr.indexOf(item) === index ;
//     }).join("")
//     return output ;
// }

// console.log(removeDuplicateChar())

// Remove Duplicate characters from array of element and find the count of an elements using set object

// let array = [11 ,11 ,22 ,"a", 22 ,"a" , 33 ,44 ,55, 55 ,66,77]

// let unique = [...new Set(array)]

// console.log(unique)

// console.log(unique.length)

//STRIND REVERSE WITHOUT THE INDIVIDUAL WORD

// function strReverse(){
//     let str = "this is reversed string"

//     let reversed = str.split("").reverse().join("").split(" ").reverse().join(" ")

//     return reversed
// }

// console.log(strReverse())

//STRING REVERSE WITHOUT USING INBUILT FUNCTION

// function strReverse(){
//     let str = "this is the reversed string "
//     let reversed = ""
//     for(let i = str.length -1 ; i >= 0 ; i--){
//          reversed = reversed + str[i]
//     }
//     return reversed
// }
// console.log(strReverse())

//FIND FACTORIAL OF USER INPUT

// function factorial(n){
//     if (n === 0 || n === 1){
//         return 1 ;
//     }
//   return n * factorial(n-1)
// }

// console.log(factorial(10))

//ANAGRAM

// function anagram() {
//     var a = "Army"
//     var b = "Mary"
//     let str1 =  a.toLowerCase().split('').sort().join('');
//     let str2 =  b.toLowerCase().split('').sort().join('');

//     str1 === str2 ? console.log("anagram") : console.log("not anagram") ;

// }

// anagram()

//Swapping 2 number

// let a = 10 ;
// let b = 20 ;
// c= a ;
// a= b ;
// b = c;

// console.log(a , b)

//SWAPPING WITHOUT THIRD VARIABLE
// let a = 10 ;
// let b = 20 ;

// a= a+ b ;
// b= a - b ;
// a = a- b ;
// console.log(a , b)

// Palindrome

// function palindrome(){
//     let str1 = "AmmA"

//     let str2 = str1.split("").reverse().join("")

//     str1 === str2 ? console.log("palindrome") : console.log("not palindrome")

// }

// palindrome()

// FINDING THE LARGEST WORD IN A STRING
// function longestWord(){
//     let str = "supriya is a hahahahaha good girl"

//     let arr = str.split(" ")

//     let longest = ""

//     for(let i = 0 ;  i < arr.length ; i++){
//         if(arr[i].length > longest.length){
//             longest = arr[i]
//         }
//     }
//     return longest
//  }
//  console.log(longestWord())

// FINDING THE LARGEST WORD IN A STRING USING INBUILT FUNC

// function largestWord(){

//     let str = "supriya is a hahahahaha good girl"

//    let longest  = str.split(" ").sort((a,b) =>   { return b.length - a.length})

//    console.log(longest[0]);
//      console.log(longest[0].length);

// }

// largestWord()

//Vowels Check

// function vowels(){
//     let vowels = ["a", "e" ,"i", "o" , "u"]

//     let str = "srinath"

//     let count =  0 ;

//     for(let word of str){
//         if(vowels.includes(word)){
//             count++
//             console.log(word)
//             }

//     }
//     console.log(count)
//     return count
// }
// vowels()

// WORD OCCURANCE

// function occurance(str , letter){

//     let count = 0 ;

//     for(let i=0 ; i<str.length ; i++ ){
//         if(str[i] === letter){
//             count ++
//         }
//     }
//     console.log(count)
//    return count
// }

// occurance("philliphines" , "p")

// Code 19: To find a first pair whose sum is zero

// function getSumPairZero(array)
// {
//   for(let i=0 ; i<= array.length ; i++){

//     for(let j=0; j<=array.length ; j++){
//         if(array[i] + array[j] === 0){
//             return [array[i] , array[j]]
//         }
//     }
//   }
// }
// const result = getSumPairZero([-4,-3,-2,-1,0,1,2,3,4,5])
// console.log(result)

//FIND THE SUM OF LARGEST PAIR OF TWO ELEMENT

// function largestSum(array) {

//     const num =  array.sort((a,b) => b - a)

//     console.log(num)

//     return num[0] + num[1]
// }

// console.log(largestSum([5, 6, 7,8,9,10]))

//To find the index of an element from an array

// function elementIndex(){

//     const array = ["a" , "b" , "c" , "d"]

//     const index =  array.indexOf("d")

//     console.log(index)
// }
// elementIndex()

//FIbonacci series

// function fibonacci(arr) {
//   let f0 = 0;
//   let f1 = 1;

//   for (let i = 0; i <= arr; i++) {
//     let fi = f0 + f1;
//     console.log(fi);
//     f0 = f1;
//     f1 = fi;
//   }

// }

// fibonacci(10);


// make an array for fibonacci series

// function fibonacci(n) {
//     let array = [0 ,1]

//     for(let i=0 ; i < n ; i++){
//         array.push(array[i] + array[i + 1])
//     }

// return array

// }
// console.log(fibonacci(10))


// find the missing element in an array an add with existing array 

// function missingElement(){
//     let arr =  [2 , 4 , 6 ]
//     let missing = []

//     for (let i=1 ; i<=6 ; i++){
//         if (arr.indexOf(i) === -1){
//             missing.push(i)
//         }
//     }
//     console.log(missing)
//     console.log(arr.concat(missing).sort())

   
//   }
//   missingElement()



// Code 27: Find the missing no. in an array

// function missing(arr) {
//     var x = 0;
//     for (var i = 0; i < arr.length; i++) {
//         x = x + 1;
//         if (arr[i] != x) {
//             return(x); //9
//         }
//     }
// }
// console.log(missing([1, 2, 3, 4, 5,6 , 7, 8, 10]))





// Code 28: Sorting of an string/character


// function sortArray(){
//     let str = ["d","g","y","e","r","p"]

//     return str.sort()
// }

// console.log(sortArray())


// Code 28: Sorting of an number

// function sort(){
//     let str = [1,23,34,2,76,78]

//     return str.sort((a,b) => a - b) 
// }

// console.log(sort())

//Code 30: To check if given number is prime or not

// function primeNumber(number){
//     if (number <= 0){
//         return false
//     }
//     for(let i=2 ; i <= Math.sqrt(number) ;  i++){
//         if(number % i === 0){
//             return false
//         }
        
//     }
//     return console.log("prime number")
// }
// console.log(primeNumber(4) )


//Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". 
// For numbers which are multiples of both three and five, print "FizzBuzz"

// var fizzBuzz = function(n) {
//     let arr =[]
//     for (let i=1 ; i <= n ; i++){
//         if (i % 3 === 0){
//              arr.push("Fizz")
//         }
//          if(i % 5 === 0){
//             arr.push("Buzz")
//         }
//            if(i % 15 === 0){
//              arr.push("FizzBuzz")
//         }
//         else {
//             arr.push(String(i))
//         }
//     }
//    console.log(arr)
// };


// fizzBuzz(15)


//  Each word of sentance in uppercase 

// function uppercase(){

//     let str = " hello world "

//     let result = str.replace(/\b\w/g , w => w.toUpperCase())

// console.log(result)

// }

// uppercase() 





// //  Each word of sentance in uppercase  usin map function


// function upperCaseFirsstLetter(){
//     var string ="India is my country";
//     var words = string.toLowerCase().split(" ").map( ele => {
//      return   ele[0].toUpperCase() +  ele.slice(1)
//     }) 
//     return words.join(" ")
//  }
//  console.log(upperCaseFirsstLetter()) 



//  To check ending of the string with given character/s using inbuild function

// function checkEndWord(str , target)
// {

//     return str.substr(-target.length)===target
// }
// console.log(checkEndWord("srinath" , "h"))


// Code 40: To find the largest elements fro the 2 dimensional array in another wayd
// function largestFromArray(arr){
//    var max=[0,0,0,0];
//    for(var i=0; i<arr.length;i++){
//       for(var j=0; j<arr[i].length; j++) 
//       {
//           if(arr[i][j]>=max[i]){
//           max[i] = arr[i][j]
//         }
//       }
//    }
//   console.log(max)
//   return max;
// }
// largestFromArray([[1,2,3,4],[5,6,7,9],[45,76,2,1],[89,90,87,9]])




// Print string in n tims

// function repeatStrinNumTimes(str, num){
//     return str.repeat(num)
//     }
//     console.log(repeatStrinNumTimes("priya ",3))
 


//Print string in n tims using for loop

// function repeatStrinNumTimes(str , num){
//     let string = ""
    
//     for(let i = 0 ;  i < num ; i++){
//         string = string + str
//         }
//     return string
// }

// console.log(repeatStrinNumTimes("srinath " , 3))


// function chunkArrayInGroup(arr, size){
//     var group=[]
//     while(arr.length>0){
//     group.push(arr.splice(0, size))
//     }
//     return group
//   }
//   console.log (chunkArrayInGroup(['a','b','c','d'],2)) //[["a", "b"], ["c", "d"]]






// To find only truthy values using filter
// function truthy(arr){
//     return arr.filter((item )=>{
//         if(item){
//          return item
//         } })
// }

// console.log(truthy(["priya", 0 ,"", false, null,undefined, "ate", 9 ]))



//Unique values only from 2 arrays


// function diffArrayElement(arr1, arr2){
//     let combine = arr1.concat(arr2)

//     return combine.filter((num)=> {
//         if(arr1.indexOf(num) === -1 || arr2.indexOf(num) == -1) return num 
//     })
//     }
//     console.log(diffArrayElement([1,2,3,4], [2,3,4,5])) 



// Code 55: Remove Duplicates from 2 arrays using Set
// function uniquefromArrays(arr1, arr2){
// let array = [...arr1 , ...arr2]
// let output  = [...new Set(array)]
// console.log(output)
// }
// uniquefromArrays([1,2,3,4], [2,3,4,5])


// function sumFromStartToEnd(){

//     sum =0
//     for(var i= 1; i<=10; i++){
//       sum+=i
//     }
//     return sum
//   }
//   console.log(sumFromStartToEnd())



// var ar = ['zero', 'one', 'two', 'three'];
// ar.splice( 3); // returns "zero"
// console.log( ar ); // ["one", "two", "three"]


//removing specific value from an array 
// function removeElement(){
//     let array = [1,2,3,4,5,6,7,8,9,]

//     for (let i=0 ; i < array.length ; i++){
//         if(array[i] === 5){
//          array.splice(i , 1)
//         }
//     }
//  console.log(array)
// }
// removeElement()




// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//         var filtered = array.filter(function(value){ 
//         return value > 5;
//         }); //filtered => [6, 7, 8, 9]

// console.log(filtered)



// currying 

// const currying = (a) => (b) => (c) => (d) => a*a*c*d 

// console.log(currying(1)(2)(3)(4) )


//converting 2d /3d array in single dimensional array

// const arr =  [
//     ['a','b'],
//     ['c','d'],
//     ['e',['f','g']],
//     ]
// const flatArr = arr.flat(2)
// console.log(flatArr) //["a", "b", "c", "d", "e", "f"]




// code 62: Reverse of a nuber using converting into string


// function reverseNumber(input){
// return(
//     parseFloat(input.toString().split('').reverse().join(''))*Math.sign(input)
// )
// }
// console.log(reverseNumber(123)) //321



// code 66: To find the second largest number

// function findSecondLarge(){
//     let arr =  [ 22 ,33,55, 66,88,99]

//     let output =  arr.sort((a ,b) => b- a)[1]

//     console.log(output)


// }

// findSecondLarge()


// code 67: To check whether particular word/number present in sentence or not using inbuilt function

// function checkValue(){
//     let arr = ["a" ,"b" , "c" , "d" , "e"]

//     let output = arr.includes("c")

//     console.log(output)
// }

// checkValue()



// or


// function checkValue(val){
//     let arr = ["a" ,"b" , "c" , "d" , "e"]
    
//     let str = val
//     let output = arr.some((x) => x === str )

//     console.log(output)
// }

// checkValue("c")



// code 68: To check whether particular word/number present in sentence or not using custom function


// function checkValueExist(item){
//     let arr = ["srinath" , "sneha", "preethi" ,"gayathri"]

//     let status = "not exist"

//     for(let i=0 ; i <arr.length ; i++){
//         if(arr[i] === item){
//             status = "exist"
//         }
//     }
//     return status
// }

// console.log(checkValueExist("sneha"))  




//code 69: To check wheather property exist or not in object 

// let student = {
//     name: "srinath" ,
//     age : 23   
// }

// console.log("name" in student)


// code 70: To dlete and add  the property of an object
// let student ={
//   name : "priya",
//   age: 20,
//   city: "pune"
// }
// delete student.age;
// student.status = "single"
// console.log(student)



// code 71: To find the length of the array in custom way

// function findLength(arr) {
//     let len = 0 ; 

//     for(let i=0 ; i < arr.length ; i++){
//       if(arr.length > len){
//         len++
//       }
//     }

//     return len
// }

// console.log(findLength([1,2,3,4,5,5,5,5]))  




// or



// function findLength(arr) {
//     let len = arr.length ; 
//     console.log(len)

// }
// findLength([1,2,3,4,5,5,5,5])
// console.log()  




// code 72: Star Pattern

// for (let i=5 ; i >=1  ; i--){
//     for(let j=i ; j<=5 ;  j++){
//         document.write("*")
//     }
//     document.write("</br>")
// }


// code 77: To find the square root
// let sqrt = [4, 9, 16, 25, 36]

// let output  = sqrt.map(Math.sqrt)


// console.log(output)



// code 78: Make alternate character to upper case 

// function alternatText(str) {
    
//     let char = str.toLowerCase().split("")
//     for (let i=0 ; i < char.length ; i = i + 2){
//         char[i] = char[i].toUpperCase()
//     }
//     return char.join("")

// }


// console.log(alternatText("Srinathu "))


// or 


// let  alt= "Srinathu" 

// alt = alt.split("").map((letter,index) => (index % 2 === 0) ? letter.toUpperCase() : letter.toLowerCase()).join('')

// console.log(alt) 



// code 79:  To find the negative values in an array or 2D Array
// function countNegative(arr){
//     let count = 0; 
//     let minusVal = []
//     for(let i=0;i<arr.length; i++){
//       for(let j=0; j<arr[i].length; j++){
//         if(arr[i][j]<0){
//           minusVal.push(arr[i][j])
//           count++
//         }
//       }
//     }
//     console.log(minusVal)
//     return count;
//   }
//   console.log(countNegative([[1,-1],[-3,-4]]))



// code 80: Find first repeating character with its index from an array

// function firstRepeatingIndex(arr){
//     let count = {};
//     for(let i=0;i<arr.length; i++){
//         if(count[arr[i]])
//         {
//           console.log("character", arr[i])
//           console.log("index", count[arr[i]])
//           return count[arr[i]] //if exist
//         }
//         else
//         {
//           count[arr[i]]=i //if not exist keep at count
//         }
//         console.log("count", count) 
//       }
//     return count   
//   }
//   firstRepeatingIndex([1,0,2,3,4,4,5,7,7])




// Code 82: To find the maximum repetation of the character in a string  
//  function maxRepeating(str)
//     {
//         let count = 0;
//         let character = str[0];
//         for (let i=0; i<str.length; i++)
//         {
//             let tempCount = 1;
//             for (let j=i+1; j<str.length; j++)
//             {
//                 if (str[i] == str[j]) //if a is equal to a
//                 tempCount++; //use to find out the counts of character i.e a
//             }
//             if (tempCount > count)
//             {
//                 count = tempCount;
//                 character = str[i];
//             }
//         }
//         console.log(count, character)
//         return character;
//     }
// maxRepeating("aaaabbaaccccccccccccccccde");  




// Code 85: Create a new array by adding one to each elements of the existing array  

// function sumArr(){

//     let array = [1,2,3,4,5,6]

//     for (let i=0 ; i <array.length ; i++){
//         array[i] += 1
//     }
//     console.log(array)
//     return array
// }

// sumArr()



// Code 86: To find kth smallest or largest element in an array


// function findKthSmallestOrLargest(arr, num) {
  
//     arr.sort((a,b) => a-b)

//     console.log(arr)

//     console.log("kth smallest :" , arr[num - 1] )
//     console.log("kth largesrt :" , arr[arr.length - num]  )
// };
// findKthSmallestOrLargest([2,1,4,3,6,5,7], 3)



// Code 90: To find the power of x

// function findPow(num , pow){
//     let power =  (num ** pow)
//     console.log(power)
//     console.log(Math.pow(num , pow))
// }

// findPow(3 , 4)




// Code 91: To find even and odd number by user input

// const oddOrEven = (num)=> {

//     if(num % 2 === 0 ){
//         return console.log("given number is even")
//     }
//     else{
//         return  console.log("given number is odd")
//     }
// }

// oddOrEven(6)


// Code 93: Sort an array of an element by parity means even then odd elements


// function sortByParity(arr){
//  let even =[]
//  let odd =[]
//  let result=[]
//  for(let i=0; i<arr.length; i++){
//    if(arr[i]%2 ===0 ) even.push(arr[i]) 
//    else odd.push(arr[i])
//  }
// result = even.concat(odd)
// return result
// }
// console.log(sortByParity([1,2,3,4,5,6,7,8,9]))


// Code 94: Move all the zeroes at the end of an elements


// const moveZeroToEnd= () =>{
//      let arr = [0,1,0,2,3,0,5,0,6,7,0,9]
//     for(let i=0 ;i<arr.length ; i++){
//         if(arr[i]=== 0){
//             arr.splice(i , 1)
//             arr.push(0)
//         }
//     }
//     console.log(arr)
//     return arr
// }


// moveZeroToEnd()



// Code 95: Print consecutive numbers

// const range = (num) => {
//     let arr = []

//     for(let i=1 ; i<=num ; i++ ){
//         arr.push(i)
//     }
//     console.log(arr)
// }

// range(15)



// Code 97: Create a function to calculate the sum of all the numbers in a jagged array
// function sumArray()
// {
//     let arr = [1, 2, [3, [4], [5, 6]], [7]];
//     let flattenedArr = arr.flat(Infinity);
//     console.log(flattenedArr);
//     let sum = 0
//     for(let i=0 ; i <= flattenedArr.length ; i++){
//      sum = sum + i
//     }
//     console.log(sum)
//     return sum
    
    
// }

// sumArray()


// Code 99: Number of days between 2 dates calculation   
// function daysBetweenDates (date1, date2) {
//  const days  =  (new Date(date2) - new Date(date1) )  / (1000 * 60 * 60  * 24)
//  console.log(days)
// }
// daysBetweenDates("2020-01-01","2020-01-30")


// Code 100: To find todays date

// var today = new Date();
// console.log(today)
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// console.log(date)



// 103. Find common elements: 

// function commonElements(a, b){
//  return a.filter((item) => b.includes(item))
// }
// A = [1.2,3,4,5 ,8];
// B = [4, 5, 6, 7, 8];
// console.log(commonElements(A, B)); //[4,5 , 8]



// //Code : JAVASCRIPT splice concept i.e, it changes the original array
// var sentence =['a','b','c','d']
// console.log(sentence.splice(1,2)) //['a','b']
// console.log(sentence) //['c','d']


// function outest(){
//     let a = 10 
//     function outer(){
//       let b = 15
//       function inner(){
//         let sum =  a+ b
//         console.log(sum)
//       }
//       inner()
//         }
//         outer()
// }

// outest()



// IIFE 
// (function hello() {
//     console.log("workattech");
// })();


//THIS KEYWORD 
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getFullName () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person = new Person ('Elon', 'Musk');
// console.log(person.getFullName()); // Elon Musk


//PROTOTYPE

// function Course() {
//     this.name = 'Learn to Code';
//     this.price = '699';
//  }
 
//  Course.prototype.status = 'Active';
//  const courseObjectOne = new Course();
//  Course.prototype.expiry = '4 months';
//  const courseObjectTwo = new Course();
 
//  console.log(courseObjectTwo.status + " - Access for " + courseObjectOne.expiry);    //outputs Active - Access for 4 months



// CALL , APPLY , BIND

//CALL

//syntax:    functionName.call(thisArgument, ...functionArgs);

//The call() is a method in JavaScript that helps us to call a function with a given object as the 'this' value.
//  The call() method takes all the arguments individually.

// const personOne = {
//     firstName : "Elon",
//     secondName : "Musk"
//   }
  

  
//   const personTwo = {
//     firstName : "Mark",
//     secondName : "Zuckerburg"
//   }

//   const getFullName = function(company , country)   {
//     console.log( this.firstName + " " + this.secondName +"," + company + "," + country)
//   }

//   getFullName.call(personOne , "tesla" , "US")
//   getFullName.call(personTwo , "Meta" , "US")



//Apply


// syntax : functionName.apply(thisArgument, functionArgsArray);

//exp : The apply() method is similar to the call() method. The only difference is that the apply() method takes an array as the argument 

// const personOne = {
//     firstName : "Elon",
//     secondName : "Musk"
//   }
  

  
//   const personTwo = {
//     firstName : "Mark",
//     secondName : "Zuckerburg"
//   }

//   const getFullName = function(company , country)   {
//     console.log( this.firstName + " " + this.secondName +" , " + company + " , " + country)
//   }

//   getFullName.call(personOne , ["tesla " , "US " ])
//   getFullName.call(personTwo ,[ "Meta " , "US "])



//Bind

//The bind() method is used to create a new function from another function with a given object as the this argument. 

// const personOne = {
//     firstName : "Elon",
//     secondName : "Musk"
//   }
  
//   const getFullName = function(company, country) {
//     console.log(this.firstName + " " + this.secondName + ", " + company + ", " + country);
//   }
  
//   const getPersonOneDetails = getFullName.bind(personOne, ["Tesla", "United States"]); 
//   getPersonOneDetails();    // outputs Elon Musk, Tesla, United States


//PYRAMID 
// for (let i=1 ; i <=6  ; i++){
//     for(let j=1 ; j<=6-i ;  j++){
//         document.write( "&nbsp;&nbsp;")
//     }
//     for(let k=1 ; k<=i ;  k++){
//         document.write( "*" , "&nbsp;&nbsp;")
//     }
    
//     document.write("</br>")
// }   

// thirsd max val in arr


//  function thirdMax(array) {

//         const num =  array.sort((a,b) => b - a)
    
//         console.log(num[2])
    
//     }

// thirdMax([1,2,3,4,5,6,7,8])


// Memozitation


// const memoization = () => {
//     let cache = {};

//     return (value) => {
//         if (value in cache) {
//             console.log("fetching from cache");
//             return cache[value];
//         } else {
//             console.log("value not in cache");
//             let result = "Hi " + value;
//             cache[value] = result;
//             return result;
//         }
//     };
// };

// const addition = memoization();
// console.log(addition("Srinath")); // Output: value not in cache, Hi Srinath
// console.log(addition("Srinath")); // Output: fetching from cache, Hi Srinath



















//Practice


const debounce = () => {
    setTimeout((event) => {
        console.log(event.target.value)
    }) , 1000
}