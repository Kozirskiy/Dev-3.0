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
//     return `Привет, ${name}!`;
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
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
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
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;
    
//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }
// console.log(calculateVolumeAndArea(52));
//____________


// function getCoupeNumber(seatNumber) {
//     if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     for (let i = 4; i <= 36; i = i + 4) {
//         if (seatNumber <= i) {
//             return Math.ceil(i / 4);
//         }
//     }
//     // тут очень много вариантов решения, но выбрал один из элегантных :)
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

// Место для первой задачи

// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0: 
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
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
//             hoursStr = 'часов';
//             break;
//         case 1 :
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default: 
//             hoursStr = 'часов';
//     }
//     return `This is ${hours} ${hoursStr} and ${minutes}`;
// }

// console.log(getTimeFromMinutes(553));
//______________________________________________
// function findMaxNumber(a, b ,c, d) {
//     // Самое простое - это использовать Math.max :)
//     // А оптимизировать такую проверку мы научимся совсем скоро
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


function findMaxNumber(a, b, c, d) {
    if ( typeof(a) !=='number' || 
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' || 
        typeof(d) !== 'number') {
            return 0;
        } else {
            return Math.max(a, b, c, d);
        }
}

console.log(findMaxNumber(3, 4, 55, 22));

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
//         console.log(`Властивість ${i} має значення ${options[key][i]}`);
//         counter++;
//         }
//     } else {
//          console.log(`Властивість ${key} має значення ${options[key]}`);
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
//         let str = `Мне ${age} и я владею языками: `;

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
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }

//     return str;
// }

// showProgrammingLangs(personalPlanPeter);
//______________________________________________________

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

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
//         return "Ошибка!";
//     }
//     // Самый оптимальный вариант решения
//     return console.log(str.split('').reverse());

    

//     // Решение при помощи цикла
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
//     //  arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

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

//     //Или
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








































//___________________________________________practica____________________________________________________



// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('How many movies have you watched?', '');

//     while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many movies have you watched?', '');
//     }

// }
// start();


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('one of the last movies watched?', '').trim(),
//               b = prompt('How much do you rate it?', '');
//               if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('Well done');
//               } else {
//                 console.log('Erro hmhmhmhmh');
//                 i--;
//               }
//     }
// }
// rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10 ) {
//         console.log('Cool');
//     } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
//         console.log('Cool 2');
//     } else if (personalMovieDB.count >= 30 ) {
//         console.log('You like movies');
//     } else {
//         console.log('Try again later');
//     }
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for ( let i = 1; i <= 3; i++) {
        
//         personalMovieDB.genres[i - 1] = prompt(`Your favorite genre have a number: ${i}`);
//     }
// }
// writeYourGenres();

