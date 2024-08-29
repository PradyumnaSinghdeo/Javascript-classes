// console.log("Hello") ;//Used To display Text on your Console

// Introduction to javascript Switch case

// ** Write an If -else Statement to say if the person is senior citizen Or not::
//     Input: age
//     Output when True Condition: " Senior Citizen"
//     Output when False condition : " not a senior Citizen"
//  Sol: let age = 50;
//  if (age >= 60){
//      console.log("Senior Citizen");
//  }
//  else{
//      console.log("Not a Senior Citizen");
//  }

// Multiple Conditions based on Matches We Use --> Switch Case
// The Switch Statement Is used to perform different actions based on different conditions.

// Syntax : switch(condition variable to match){
//     case <VALUE1>:
//         <Actiom/logic for Value1>  
    
//     case <VALUE2>:
//         <Actiom/logic for Value2>  
    
//     case <VALUE3>:
//         <Actiom/logic for Value3>  
    
//         break;
//         default:
            
        
// Commonly used methods on Arrays

// Introduction to highrt order functions
// Object Declaration and accessing properties
// Objects methods and their use cases
// In depth look at array methods.

// Write an if else statement to say if the person is senior citizen or not. 
//     Input : age
//     Output when True Condition : " Senior Citizen"
//     Output when False condition : : " Not a senior citizen "
    
//     let age = 15;
//     if(age >= 60){
//         console.log("Senior Citizen")
//     }
//     else{
//         console.log("Not a senior citizen");}
    

//     Multiple conditions based on Matches --> Switch Case
//     syntax:: switch  (condition Variable to Match )
//                     case<value1>:
//                     <Action/Logic for VALUE1>
//                     break;
//                     case<value2>:
//                     <Action/Logic for VALUE2>
//                     break;
//                     case<value3>:
//                     <Action/Logic for VALUE3>
//                     break;
//                     default:
//                         <Action/Logic For Default>

// `Write a switch case to check the day of the week and print if it is a week day or weekend.


// Arrays
//array.join -- it joins all the elements with the delimiter of your choise.
// console.log(fruits.join(" "));

// ** Create an array of your favourite movies and perform various operations like: 
// ADDING,:: Push()adds an array at the end  , unshift()adds the array at the start
//  REMOVING :: pop() to remove from the last element of the array, shift()to remove the last element from the array
//  JOINING.:: join()
// let fruits=["apple", "Banana", "grape"];
// fruits.push("orange");
// fruits.unshift("Litchi");
// console.log(fruits.join(", "));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// // Imagine u have 2 arrays but u have to process all the elements via 1 array.
// // concat
// let finalArray = arr1.concat(arr2);
// console.log(finalArray);

// Merge two arrays of day names containing weekwnds and weekdays of the week.
// let weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
// let weekEnds = ["saturday", "sunday"];
// let result = weekDays.concat(weekEnds);
// console.log(result);

// let fruits = ["apple", "banana", "grape"];
// // insert 1 more fruit -peach - after banana.
// // splice():: Inserts at a index.
// fruits.splice(2, 0, "peach");
// console.log(fruits);

//Create a list of roll no. and insert a new roll no. at the position 4 and remove position 2nd using splice.
// let rollNo = ["1", "2", "3", "4", "5", "6", "7"];
// rollNo.splice(4, 2, 23);
// console.log(rollNo);

// //slice:: Extract a sub array
// let fruits = ["apple", "banana", "orange", "grape"];
// niceFruits = fruits.slice(1,3);
// console.log(niceFruits);

//length :: Property of an array , not a function..
// var fingers = [1, 2, 3, 4, 5];
// var numberOfFingers = fingers.length;
// console.log(numberOfFingers);
//create an array of seasons and print its length.
// var seasons = ["summer", "winter", "Rainy", "Spring", "Autumn"];
// console.log(seasons.length);

//Sorting:: Arranging of data i.e members of the array in an increasing or ascending or decreasingor decending order.. 
// let fruits = ["apple", "banana", "orange", "grape"];
// //Sorted in ascending order..
// fruits.sort();// Ascending Order by default...
// fruits.reverse();//Made to reverse or desending order....
// console.log(fruits)

// Arrow Syntax in ES6.
//function(a,b){
//       return b-a;
//      }
// (a,b) => {
//     return b-a;
// }

// Falsy and Truthy value............................
// Function(BOOLEAN)- Provide a Negative Number : Treated as False -> Behaviour Falsy value
//                 - Provide a  pOSITIVE nUMBER : tREATED AS True -> Behaviour Truthy value 

//Normal Function...............................
// function funcName(a){
//     //Logic
//     return result;
// }
//Arrow Function.....................
// const funcName(a)=>{
//     //Logic
//     return result;
// }

//Array Destructuring and Operator
// Array = [......] || [1, 2, 3, 4] - Destructuring
// let ranks = [1, 2, 3, 4];
// You want all 4 ranks in 4 different variables..
// lot of similar code// prone to error // Bad reliability // Not concise
// let rank1 = ranks[0]
// let rank2 = ranks[1]
// let rank3 = ranks[2]
// let [rank1, rank2, rank3] = ranks;
// console.log(rank1);
// Mapping of array of variable names to an array of elements :: Array Destructuring..

//De-structure an array of animals into seperate pet-names i.e. variables . Min. Length of the array is 3.
// const petNames = ["Lion", "Tiger", "Cat", "Boa"];
// let[ajay, srinu, ashu, asu] = petNames;
// console.log(ajay);
// console.log(srinu);
// console.log(ashu);
// console.log(asu);

//Spread Operator = ...<arrayName>|| It spreads the members of an array / gets rid of the boundaries of the array.
// let fruits = ["apple", "banana", "grape"];
//I want to add another fruit - peach, pineapple.
// let moreFruits = ["peach", "pineapple", ...fruits];
// console.log(moreFruits);
//Use the spread operator to combine two arrays of male and female actors into one . Min. length of each array is 3.
// const maleActor = ["Varun", "Kartik"];
// let allActor = ["Kriti", "Sunny", ...maleActor];
// console.log(allActor);

//LOOPS-----AND ITERATORS ON ARRAYS---
//Means/tools/programming constructs; We use to traverse over a data structure i.e. currently an array.
//Print all fruits using loop - use for loop
//Basic for loop using indexes.
//for(let <initialIteratorVariable>=<initialValue>, <EndCondition>, <UpdateLogic>){// recuring logic}
// let fruits = ["apple", "banana", "grape"]
// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }
//Using for loop with Iterator-------------Ease of Readiability
// let fruits = ["apple", "banana", "grape"]
// for(let fruit of fruits){
//     console.log(fruit);
// }
//Use a for...of / Iterator Based for for loop to iterate over an array of colours and log each one. min length of array = 3.
// let colours = ["orange" ,"red", "Black", "Green"];
// for(let color of colours){
//     console.log(color);
// }

//forEach -> Property of Arrays. Also called as an iterative method.
//we provide a method as a argument which accepts/provides us access to each element and its index of the array.
// let colours = ["orange" ,"red", "Black", "Green"];
// colours.forEach(function(color, index){
//     console.log(color + " has index of " + index);
// })
//Using arrow function
// colours.forEach((color, index)=>{
//     console.log(color + " has index of " + index);
// })

//Use while loop and do-while loop to print Vegetables and their indexes.


//All the Loops that we discussed so far; didn't return anything.
//map() ->Iterative method which returns a result which is modified array.
//map((item, index) => {//Logic}) --> Higher Order Function..
// let ages = [23, 27, 19, 43, 72];//Assume to be database
//An year has passed. Everyone's birthday have also passed.
// let newAges = ages.map((age, index) => ++age);
// console.log(newAges);
// ages.forEach((age, index) => ++age);
// console.log(ages);
//Use Map to square each number in an array . muin length of the array should be 3.
// let number =[1,2,3,4];
// let sqNum = number.map((num) => num*num);
// console.log(sqNum);
//or
// number.forEach((num) => console.log(num*num));


//Higher-order Functions: Map(),  Filter(), and Reduce()
//Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In JavaScript, three commonly used higher-order functions are map....
//Function {function2}

//function hof(anotherFunction){anotherFunction(..)} // Taking as arguments
// function hof() { return anotherFunc} //Returning them


// Filter Method :: Iterative Method Of Arrays
// Filter create/ returns a new array with all elements that pass the test{condition holds true}
//implemented by the provided function

//Create a Number Of arrays and find even elements.
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter((number) => {return (number%2 === 0)});
// console.log(evenNumbers);
//In filter, if supplied condition{Inside callback function} value is true; the item becomes a part of the result..
                                                                //Else, the item is discarded..
//Use filter to extract all numbers which are positive from an array. Min length of the array is 6.
//Make sure to include both Negative, positive and zero Elements..
// let numbers =[1, -4, 2, 5, -9, 0, 12, 6];
// let positives = numbers.filter((number)=> number < 0);
// console.log(positives);

//reduce :: Iterative Method || Args.- Item, index
//Map returns::? Array
//Filter returns? Array
// Reduce returns a single value

//What operation can create a singular output?
// You can do - sum | multiplication | picking the first one | picking a random item 
//accumulator :: Accumuilates the callback's return values;
//it is accumulated value previously returned in the last invocation.
// let numbers =[1, 2, 3, 4];
// let sum = numbers.reduce((accumulator, number) => {
//     console.log("accumulator is currently", accumulator);
//     console.log("current number is" ,number);
//     return accumulator + number;
// })
// console.log(" SUM is ", sum); 

// Reduce a list of numbers to a single product. min length of array = 4.
// let numbers =[1, 2, 3, 4, 5];
// const product = numbers.reduce(((accumulator, currentNumber)=> accumulator * currentNumber), 1);
// console.log("The product of the list is:", product);

//Find the use , and write simple 1-linear examples of 
// Find---
        // Locates the first item for which the supplied condition is true
        // let numbers =[1, 2, 3, 4];
        // let firstEven = numbers.find(num => num % 2 === 0);
        // console.log(firstEven);
// Includes----
            //checks whether an item is member of the array or not
            // let fruits = ["apple", "banana", "grape"];
            // console.log(fruits.includes("banana")); //true
            // console.log(fruits.includes("orange"));//false
// indexOf---
            // returns the first index at which a  given element can be found in the Array, or -1 if it is not present
//lastIndexOf---
            //Returns the last index at ehich a given element can be found in the array, or -1 if it is not present.
            // let fruits = ["apple", "banana", "grape", "coconut", "grape"];
            // console.log(fruits.indexOf("banana")); //1
            // console.log(fruits.indexOf("orange"));//-1
            // console.log(fruits.lastIndexOf("grape")); //1
            // console.log(fruits.lastIndexOf("orange"));//-1
// some---
        //Tests whether atleast on element in the array passes the conditions true if the provided function.
        //some checks whether there exists a member in the array; which sacrifies the supplied condition.
    //     let numbers =[1, 2, 3, 4, 5];
    //     let hasEven = numbers.some( num => num%2 === 0);
    //     let hasNegative = numbers.some(num => num<0);

    // //Conditionin hasEven | num % 2 === 0.
    // console.log(hasEven); //true
    // console.log(hasNegative);//False

//-----------------OBJECTS---------------------
//What are Objects??
// Car :: Properties && Behaviours

// Properties:: In Form of Key-Value Pairs delimited by ‘:’!!

// car is a variable called Reference to the Object
// car holds the memory address which points to the actual object stored in memory/heap
// Object Literal Syntax

// let car = {
//     color: "Black",
//     type: "SUV",
//     engineCapacity: "1200",
//     numberOfSeats: "12",
//     engine: {
//       valveCount: 4,
//       moduleType: "v4"
//     },
//     pastOwners: ["Sumit", "Radhika", "John"]
//   };

//Accessing Object Properties
//If I want to access the property - typt - from above car object
//1. use "." operator
//console.log(car.type);
//If i want to access the property- numberof Seats - from above car object without using '.' operator.
//2. Use bracket notation
//console.log(car["numberOfSeats"]);


//   new Object() Syntax
// let car = new Object();
// Use . operator or ____ way to assign values || Create Properties

car.color = 



