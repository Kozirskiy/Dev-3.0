'use strict';

// if ( 5 == 6 ) {
//     console.log('ok');
// } else {
//     console.log('no ok');
// }
// let num = 57;

// (num ===50) ? console.log('ok') : console.log('not ok'); 

// switch (num) {
//     case 49: 
//         console.log('Wrong');
//         break;
//     case 56: 
//         console.log("It's more than to need");
//         break;
//     case 55: 
//         console.log("Exectly");
//         break;
//     default:   
//         console.log('you must find more');
//         break;
// }


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 5; j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }

// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if ( k === 2 ) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }



// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fifthTask();


// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     console.log(result);
//     return result;
// }

// firstTask();

// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }

//     console.log(data);
//     return data;
// }

// secondTask();

// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;
// }

// thirdTask();

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);


// function 

// function showFirstMessage(text) {
//     console.log(text);
// }
// showFirstMessage('webDev');

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 6));
// console.log(calc(5, 64));

// console.log(calc(54, 6));


// const kalk = (s, sd) => {
//     console.log('sdfs');
//     return s + sd;
// }; 


// const cursUsd = 28;

// function convert (amount, cursNbu) {
//     console.log(cursNbu * amount);
// }
// convert(250, cursUsd);


// function retunFrase(name) {
//     return `Hello: ${name}`;
// } 
// console.log(retunFrase('Olex'));


// function sayHello(name) {
//     return `????????????, ${name}!`;
// }
// console.log(sayHello('Alex'));


// function retNumArr(number) {
//     return  [number -1, number, number +1];
// }

// console.log(retNumArr(3));

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // ?????? ?????? ???????????????? ?? ??????????
//         } else {
//             str += `${num * i}---`;
//             // ?????? ???????? ??????????, ?????? ??
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// getMathResult(10, 5);

// function getMathResult(num, times) {
//     if(typeof(times) !=='number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for ( let i = 1; i <= times; i ++) {
//         if ( i === times) {
//             str += `${num * i}`;
//         } else {
//             str += `${ num * i}---`;
//             //str = str + num * i + "---"
//         }
//     }
//     return str;
// }

// console.log(getMathResult(5, 15));

// const str = 'Test'; 

// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('q'));

// const logg = 'Hello developer';

// console.log(logg.slice(6, 15));

// console.log(logg.substring(6, 15));

// console.log(logg.substr(6, 8));

// const num = 12.2;

// console.log(Math.round(num));

// const numTest = '12.2px';

// console.log(parseInt(numTest));

// console.log(parseFloat(numTest));

//____________
// function calculateVolumeAndArea(length) {
//     if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "?????? ???????????????????? ?????????????????? ????????????";
//     }

//     let volume = 0,
//         area = 0;
    
//     volume = length * length * length;
//     // length ** 3 - ?????? ???????? ??????????, ?????? ?? ???????? ?????? ???????????????? ?????????? ????????.
//     // ** - ?????? ???????????????? ??????????????, ??????????????????. ???? ???????????? ???????????????? ?????? ???? ?????????????????? =/
//     area = 6 * (length * length);

//     return `?????????? ????????: ${volume}, ?????????????? ???????? ??????????????????????: ${area}`;
// }
// console.log(calculateVolumeAndArea(52));
//____________


// function getCoupeNumber(seatNumber) {
//     if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "????????????. ?????????????????? ???????????????????????? ???????????????????? ???????????? ??????????";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "?????????? ???????? ?? ???????????? ???? ????????????????????";
//     }

//     for (let i = 4; i <= 36; i = i + 4) {
//         if (seatNumber <= i) {
//             return Math.ceil(i / 4);
//         }
//     }
//     // ?????? ?????????? ?????????? ?????????????????? ??????????????, ???? ???????????? ???????? ???? ???????????????????? :)
// }

// console.log(getCoupeNumber(28));

// function getCoupNumber(seatNumber) {
//     if (typeof(seatNumber) !=='number' || seatNumber == "" || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return 'Error. Please, check your writing number';
//     }

//     if (seatNumber === 0 || seatNumber > 36 ) {
//         return "This seat does'n exist";
//     }
//      for (let i = 4; i <= 36; i= i + 4) {
//         if (seatNumber <= i) {
//             return Math.ceil(i / 4);
//         }
//      }
// }

// console.log(getCoupNumber(20));

// _____________________________

// ?????????? ?????? ???????????? ????????????

// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "????????????, ?????????????????? ????????????";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0: 
//             hoursStr = '??????????';
//             break;
//         case 1:
//             hoursStr = '??????';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = '????????';
//             break;
//         default:
//             hoursStr = '??????????';
//     }

//     return `?????? ${hours} ${hoursStr} ?? ${minutes} ??????????`;
// }
// _____________
// function getTimeFromMinutes(minutesTotal) {
//     if(typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return 'Error';
//     }
//     const hours = Math.floor(minutesTotal / 60),
//           minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0:
//             hoursStr = '??????????';
//             break;
//         case 1 :
//             hoursStr = '??????';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = '????????';
//             break;
//         default: 
//             hoursStr = '??????????';
//     }
//     return `This is ${hours} ${hoursStr} and ${minutes}`;
// }

// console.log(getTimeFromMinutes(553));
//______________________________________________
// function findMaxNumber(a, b ,c, d) {
//     // ?????????? ?????????????? - ?????? ???????????????????????? Math.max :)
//     // ?? ???????????????????????????? ?????????? ???????????????? ???? ???????????????? ???????????? ??????????
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }
// ____________________________________________________


// function findMaxNumber(a, b, c, d) {
//     if ( typeof(a) !=='number' || 
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' || 
//         typeof(d) !== 'number') {
//             return 0;
//         } else {
//             return Math.max(a, b, c, d);
//         }
// }

// console.log(findMaxNumber(3, 4, 55, 22));

//_____________________________

// function fib(a) {
//     if (typeof(a) !== 'number' || !Number.isInteger(a)) {
//         return '';
//     } else {
//         let arr = [0, 1];
//         for (let i = 2; i < a; i++) {
//             arr[i] = arr[i-1] + arr[i-2];
//             }
//             arr = arr.slice(0, a);
//             return arr.join(' ');
//         }
// }

//_____________________

// function fibanachi(a) {
//     if (typeof(a) !== 'number' || !Number.isInteger(a)) {
//         return '';
//     } else {
//         let arr = [0, 1];
//         for (let i = 2; i < a; i++) {
//             arr[i] = arr[i-1] + arr[i - 2];
//         }
//         arr = arr.slice(0, a);
//         return arr.join('');
//     }
// }
// console.log(fibanachi(31));

// ________________________________________

// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 2000);
// } 

// function second() {
//     console.log(2);
// }

// first();
// second();
// ____________________
// function learnJS(lang, callback) {
//     console.log(`I learn: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('I finished this lesson');
// }
// learnJS('Java Script', done);
// _______________________________________

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     color: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest:function () {
//         console.log('Test from metod object');
//     }
// };

// const {border, bg} = options.color;
// console.log(border);

// options.makeTest();

// console.log(Object.keys(options).length);

// console.log(options["color"]["border"]);

// delete options.name;

// console.log(options);


// let counter = 0;

// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let i in options[key]) { 
//         console.log(`?????????????????????? ${i} ?????? ???????????????? ${options[key][i]}`);
//         counter++;
//         }
//     } else {
//          console.log(`?????????????????????? ${key} ?????? ???????????????? ${options[key]}`);
//          counter++;
//     }
// }
// console.log(counter);

//_________________________32 
// const arr = [10, 2, 13, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }


// arr.forEach(function(item, i, ) {
//     console.log(`${i}: ${item} in array ${arr}`);
// });

// const str = prompt('', '');

// const products = str.split(', ');

// products.sort();
// console.log(products.join('; '));








// arr[99] = 0;
// arr.pop();
// arr.push(10);
// console.log(arr.length);
// console.log(arr);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let value of arr ) {
//     console.log(value);
// }

//________35

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key  in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);

// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clon = Object.assign({}, add);
// clon.d = 20;

// console.log(clon);

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();


// newArr[1] = 'ewfweefwf';
// console.log(newArr);
// console.log(oldArr);

// const video = ['youtube', 'vimeo'],
//       blogs = ['wordpress', 'livejournal', 'bloger'],
//       internet = [...video, ...blogs, 'fb'];

// console.log(internet);


// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const numb = [2, 5, 6];
// log(...numb);

// const ara = ['a', 'b'];
// const araCopy = [...ara];

// console.log(ara);

// araCopy[0] = 2;
// console.log(araCopy);

// const oldObject = {
//     one: 1, 
//     two: 2 
// };

// const newObject = {
//     ...oldObject
// };

// console.log(newObject);


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `?????? ${age} ?? ?? ???????????? ??????????????: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// showExperience(personalPlanPeter);

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }
// showExperience();

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `???????? ${key} ???????????? ???? ${programmingLangs[key]}\n`;
//     }

//     return str;
// }

// showProgrammingLangs(personalPlanPeter);
//______________________________________________________

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = '?????????? ??????????' : str = '?????????? ?????????????? ????: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return str;
// }
// showFamily(family);

// function showFamily(arr) {
//     let str = '';

   // arr.lenght === 0 ? str = 'Family is empty' : str = 'Family consist of: ';

//     if(arr.length === 0 ) {
//         str = 'Family is empty';
//     } else {
//         str = 'Family consist of: ';
//     }
//     arr.forEach(member => {
//         str += `${member} `;
//     });

//     return str;
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     });
// }

// standardizeStrings(favoriteCities);

// function size(arr) {
//     arr.forEach(element => {
//         console.log(element.toLowerCase());
       
//     });
// }
// size(favoriteCities);


//+_______________________________________________

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "????????????!";
//     }
//     // ?????????? ?????????????????????? ?????????????? ??????????????
//     return console.log(str.split('').reverse());

    

//     // ?????????????? ?????? ???????????? ??????????
//     // let newStr = '';
//     // for (let i = str.length - 1; i >= 0; i--) {
//     //     newStr += str[i];
//     // }
//     // return newStr

//     // let strNew = '';
//     // for (let i = str.length - 1; i >=0; i--) {
//     //     strNew += str[i];
//     // }
//     // return console.log(strNew);
    
// }

// reverse(someString);

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     // let str = '';
//     //  arr.length === 0 ? str = '?????? ?????????????????? ??????????' : str = '?????????????????? ????????????:\n';

//     // arr.forEach(function(curr, i) {
//     //     if (curr !== missingCurr) {
//     //         str += `${curr}\n`;
//     //     }
//     // });

//     let str = '';
//     arr.length === 0 ? str = 'No avaliable curency' : str = 'Avaliable curency: \n';

//     arr.forEach(function (curr) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });

//     //??????
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === missingCurr) {
//     //         continue;
//     //     }
//     //     str += `${arr[i]}\n`;
//     // }

//     return str;
// }
//  console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

// console.dir([1, 2, 3]);

// const solder = {
//     helth: 400,
//     armor: 200,
//     sayHello: function() {
//         console.log('hello');
//     }
// }; 

// const john = Object.create(solder);
// const john = {
//     helth: 100
// };

// john.__proto__ = solder;
// console.log(john.armor);
// Object.setPrototypeOf(john, solder);



// john.sayHello();


//____________________

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {

//     let square = 0;
//     let volume = 0;


//     data.shops.forEach(item => {
//         square += item.width * item.length;
//     });
//     volume = data.height * square;

//     if(data.budget - (volume * data.moneyPer1m3) >= 0 ) {
//         return 'Budget is enough';
//     } else {
//         return 'Budget is not enough';
//     }
//  }

//  console.log(isBudgetEnough(shoppingMallData));


//_______________________________
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Loli'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `???????????????????? ????????????????: ${rest.length === 0 ? '-' : rest.join(', ')}`];
// }

// console.log(sortStudentsByGroups(students));

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [],
//           b = [], 
//           c = [],
//           rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if ( i < 3) {
//             a.push(arr[i]);
//         } else if ( i < 6 ) {
//             b.push(arr[i]);
//         } else if ( i < 9 ) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a, b, c, `Last students are: ${rest.length === 0 ? '-' : rest.join(', ')}`];
// }

// console.log(sortStudentsByGroups(students));
// // _________________________________


// function createCounter() {
//    let counter = 0;

//    const myFunction = function() {
//       counter = counter + 1;
//       return counter;

      
//    };
//    return myFunction;
// }

// const icrement = createCounter();
// const c1 = icrement();
// const c2 = icrement();
// const c3 = icrement();

// console.log(c1, c2, c3);
//__________________

// const restorantData = {
//    menu: [
//        {
//            name: 'Salad Caesar',
//            price: '14$'
//        },
//        {
//            name: 'Pizza Diavola',
//            price: '9$'
//        },
//        {
//            name: 'Beefsteak',
//            price: '17$'
//        },
//        {
//            name: 'Napoleon',
//            price: '7$'
//        }
//    ],
//    waitors: [
//        {name: 'Alice', age: 22}, {name: 'John', age: 24}
//    ],
//    averageLunchPrice: '20$',
//    openNow: false
// };
// function isOpen(prop) { 
//     let  answer;
//     if ( prop === true ) {
//       return answer = 'Open';
//     } else { 
//          return answer = 'Close';
//     }

//  }

//  function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors[0] = [{name: 'Mike', age: 32}];
//     return copy;
// }

// console.log(transferWaitors(restorantData));

// const firstObj = {
//     nameOfPeopple:  [{ name: 'Jon', age: 25 }, { name: 'Bob',  age: 23 }] 
// };
// function copyName(it) {
//     const copy = Object.assign({}, it);
//     copy.nameOfPeopple[0] = [{name: 'Kaban', age: 35}];
//     return copy;
// }
// console.log(copyName(firstObj));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     // ?????? ???????????? ?????????? ???????????? ???????? ???????????? ????????????,
//     // ?? ???? ?????????? ???????????????? ???????????? ?????????????? ???? ??????????????????????
//     // ?????? ?????? ?????? ?????????????? ?????????????? ??????????????, ???? ???????????????? 
//     // ?????????? ???????????????? ???????????? ?? ??????????
//     copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }



//  console.log(isOpen(restorantData.openNow));

//  or

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = '??????????????' : answer = '??????????????';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));





// function isAverageLunchPriceTrue(fDish, sDish, average) {
//    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
//        return '???????? ???????? ??????????????';
//    } else {
//        return '???????? ???????? ??????????????';
//    }
// }
// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice)); 






//__________________________________________
// let x = 5;
// alert(++x);

// [] + false - null + true;

// console.log([] + false - null + true); =====NaN

// let y = 1;
// let x = y = 2;
// alert(x);

// console.log([] + 1 + 2);
//alert('1'[0]);

// console.log(2 && 1 && null && 0 && undefined);

// if(!!(1 && 3) == (1 && 3)) {
//     console.log('100%');
// } else {
//     console.log('0%');
// }

//alert(null || 2 && 3 || 4);

// let a = [1, 2, 3];
// let b = [1, 2, 3];

// if (a === b) {
//     console.log('yes');
// } else {
//     console.log('no');
// }


// alert(+'Infinity');


// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circle = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('div');
      

//     //   box.style.backgroundColor = 'blue';
//     //   box.style.width = '500px';
//       box.style.cssText = `background-color: pink; width: 500px`;


//       btns[1].style.borderRadius = '100%';
//     //   circle[1].style.backgroundColor = 'red';

//     //   for (let i = 0; i < hearts.length; i++) {
//     //     hearts[i].style.backgroundColor = 'pink';
//     //   }
// hearts.forEach(item => {
//     item.style.backgroundColor = 'yellow';
// });


// const div = document.createElement('div');

// const text = document.createTextNode('I was here');

// div.classList.add('black');

// // document.body.append(div);


// wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[1]);

// wrapper.prepend(div);

// hearts[1].before(div);
// hearts[1].after(div);

// circle[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circle[0]);

// wrapper.replaceChild(circle[0], hearts[0]);
// div.innerHTML =`<h1>developer</h1>`;

// div.textContent = `developer`;

// div.insertAdjacentHTML('beforeend', `<h2>web</h2>`);


// _______________________________________________________RECURSION_________________

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x; 
//   }
//   return result;
// }
// function pow(x, n) {
//   if (n === 1 ) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// pow(2, 1);//2
// pow(2, 2);//4
// pow(2, 3);//8
// pow(2, 4);//16

// let students = {
//   js: [{ name: 'John', progres: 100 },
//        { name: 'Ivan', progres: 100
//        }],

//   html: {
//     basic:[{ name: 'Peter', progres: 20 },
//            { name: 'Ann', progres: 18 }],

//     pro:  [{ name: 'Sam', progres: 10 }],
//     semi: {students:[{
//       name: 'Test',
//       progres: 100
//     }]    }
//     }
// };

// function getTotalProgressByIteration(data) {
//   let total = 0;
//   let students = 0;

//   for (let course of Object.values(data)) {
//     if (Array.isArray(course)) {
//       students += course.length;

//       for (let i = 0; i < course.length; i++) {
//         total += course[i].progres;
//       }
//     } else {
//       for (let subCourse of Object.values(course)) {
//         students += subCourse.length;

//         for (let i = 0; i < subCourse.length; i++) {
//           total += subCourse[i].progres;
//         }
//       }
//     }
//   }

//   return total / students;
// }

// // console.log(getTotalProgressByIteration(students));



// function getTotalProgressByRecursion(data) {
//   if (Array.isArray(data)) {
//     let total = 0;

//     for (let i = 0; i < data.length; i++) {
//       total += data[i].progres;
//     }
//     return [total, data.length]; 
//   } else {
//     let total = [0, 0];
//     for (let subData of Object.values(data)) {
//        const subDataArray = getTotalProgressByRecursion(subData);
//        total[0] += subDataArray[0];
//        total[1] += subDataArray[1];
//     }
//     return total;
//   }
// }

// const result = getTotalProgressByRecursion(students);
// console.log(result[0]/result[1]);

// _________________________________

// function factorial(n) {
//   if (typeof(n) !== 'number' || !Number.isInteger(n)) {
//       return "????????????, ?????????????????? ????????????";
//   }

//   if (n >= 1) {
//       return n * factorial(n - 1);
//   } else {
//       return 1;
//   }

//   // ?????????? ???????????????? ??????????????, ?????????????? ???? ???????????? ??????????????????
//   // ???? ???? ?????????????????? ?????????????????????????? ????????????????
//   // return n ? n * factorial(n - 1) : 1;
// }

// factorial(5);

// function factorial(n){
//   if (typeof(n) !== 'number' || !Number.isInteger(n)) {
//     return 'Error!';
//   }

//   if( n >= 1) {
//     return n * factorial(n - 1);
//   } else {
//     return 1;
//   }
// }
// console.log(factorial(9));

// ____________________________



//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel


window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box1');

  box.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log('Start');
    console.log('e.touches');
    

  });

  // box.addEventListener('touchmove', (e) => {
  //   e.preventDefault();

  //   console.log('Move');
  // });
  // box.addEventListener('touchend', (e) => {
  //   e.preventDefault();

  //   console.log('end');
  // });
});





































//___________________________________________practica____________________________________________________



// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: ()  => {
//         personalMovieDB.count = +prompt('How many movies have you watched?', '');
    
//         while (personalMovieDB.count =='' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('How many movies have you watched?', '');
//         }
    
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('one of the last movies watched?', '').trim(),
//                   b = prompt('How much do you rate it?', '');
//                   if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//                     personalMovieDB.movies[a] = b;
//                     console.log('Well done');
//                   } else {
//                     console.log('Erro hmhmhmhmh');
//                     i--;
//                   }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10 ) {
//             console.log('Cool');
//         } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
//             console.log('Cool 2');
//         } else if (personalMovieDB.count >= 30 ) {
//             console.log('You like movies');
//         } else {
//             console.log('Try again later');
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for ( let i = 1; i <= 2; i++) {
//             // let genre = prompt(`Your favorite genre have a number: ${i}`);

//             // if (genre === '' || genre == null) {
//             //     console.log('You entered incorrect data or did not enter it at all');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres[i - 1] = genre;
//             // }

//             //another variant

//             let genre = prompt(`Enter your genres with commas`).toLowerCase();
//             if (genre === '' || genre == null) {
//                 console.log('You entered incorrect data or did not enter it at all');
//                 i--;
//             } else {
//                 personalMovieDB.genres.split(', ');
//                 personalMovieDB.genres.sort()
//             }
//         }  

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Favorite genre ${i + 1} this is ${item}`);
//         });
//     }

// };


