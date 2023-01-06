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

let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}

console.log(result);


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


//_______________________________________________________________________________________________


const numberOfFilms = +prompt('How many movies have you watched?', '');

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('one of the last movies watched?', ''),
          b = prompt('How much do you rate it?', '');
          if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log('Well done');
          } else {
            console.log('Erro hmhmhmhmh');
            i--;
          }
}


if (personalMovieDB.count < 10 ) {
    console.log('Cool');
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    console.log('Cool 2');
} else if (personalMovieDB.count >= 30 ) {
    console.log('You like movies');
} else {
    console.log('Try again later');
}

console.log(personalMovieDB);
