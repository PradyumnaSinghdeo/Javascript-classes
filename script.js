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
