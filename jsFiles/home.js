

// console.log('This is from console');
// document.write('This is from document');
// document.getElementById('navbar').innerHTML = 'Dipu';
// alert('This is from alert');

// function sleep(){
//     console.log('Dipu is sleeping!!\n');
// }
// console.log('My name is Dipu Mondal.\n');
// sleep();



// -------------------------------------------------
//function with parameter//
//--------------------------------------------------
// function sleep(names, times){
//     console.log(names + ' is sleeping from '+ times + '\n');
// }
// sleep('Dipu Mondal', '8pm');
// sleep('Rita Biswas', '10pm');



// -------------------------------------------------
// Function with return value 
//--------------------------------------------------
// function multiplication(firstVal, lastVal){
//     return firstVal * lastVal;
// }
// console.log(multiplication(10, 23));



//-------------------------------------
// JAVASCRIPT INTERPOLATION PRACTICE 
//--------------------------------------

// let person = 'Dipu Mondal';
// let age  = 28;
// let country = 'Bangladesh';

// let statement = `My name is ${person}. I am ${age} years old and living in ${country} for ${age} years.`;
// console.log(statement);



// JAVASCRIPT Switch statement testing
// let number_got = prompt('Enter your number: ');
// let status_exam; 
// if(number_got >= 33 && number_got <= 50){
//     status_exam = 'Got D grade. Best of luck for your future days.';
// } else if(number_got >= 51 && number_got <= 65){
//     status_exam = 'Got C grade. Best of luck for your future days.';
// }else if(number_got >= 66 && number_got <= 75){
//     status_exam = 'Got B grade. Best of luck for your future days.';
// }else if(number_got >= 76 && number_got <= 79){
//     status_exam = 'Got A grade. Best of luck for your future days.';
// }else if(number_got >= 80 && number_got <= 100){
//     status_exam = 'Got A+ grade. Best of luck for your future days.';
// }else{
//     status_exam = 'Please input a valid exam number.';
// }

// console.log(status_exam);


// ------------------------------------
// javascript loop practice
// -----------------------------------
// let target = prompt('Please enter your number: ');
// let summation = 0;
// for (let counter = 1; counter <= target; counter++){
//     summation = summation + counter;
// }
// console.log(`Summation upto ${target} is: `, summation);




// for (let counter =1; counter<=100; counter++){
//     if(counter % 2 === 0 ){
//         console.log(counter, 'is Even.');
//     }
// }


// const students = {
//     name : 'Dipu Mondal',
//     id : 114,
//     subject : 'Accounting',
//     year : 'Fourth'
// };

// for (let key in students){
//     console.log(students[key]);
// }


// let gameNum = 12;
// let userNum = prompt('Guess the number: ');
// while(gameNum != userNum){
//     userNum = prompt('Wrong Guess!! Try again: ');
// }
// console.log('Congratulations!!!');


// const mulArrow = (val1, val2) => {
//     return val1 * val2;
// }
// console.log(mulArrow(12,24));


// const valArr = Array(1,2,3,4,5,6,7,8);
// valArr.forEach((val) => console.log(`${val}^2 = ${val**2}`));
// let newArr = valArr.map((val) => {return val**2});
// console.log(newArr);

// const evenNum = valArr.filter((val) => {return val % 2 === 0});
// console.log(evenNum);






// let userNum = prompt('Enter a number: ');
// let counter = 1;
// const newArr = Array();
// while(counter <= userNum){
//     newArr.push(counter);
//     counter++;
// }

// const evenMaker = (val)=>{return val % 2 == 0};
// const sumMaker = (res, current) => {return res + current;}
// const factoMaker = (res, current) => {return res * current;}


// const evenArr = newArr.filter(evenMaker);
// let summation = newArr.reduce(sumMaker);
// let factorial = newArr.reduce(factoMaker);

// console.log(evenArr);
// console.log(summation);
// console.log(factorial);