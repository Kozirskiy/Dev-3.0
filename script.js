'use strict';

// if ( 5 == 6 ) {
//     console.log('ok');
// } else {
//     console.log('no ok');
// }
let num = 57;

// (num ===50) ? console.log('ok') : console.log('not ok'); 

switch (num) {
    case 49: 
        console.log('Wrong');
        break;
    case 56: 
        console.log("It's more than to need");
        break;
    case 55: 
        console.log("Exectly");
        break;
    default:   
        console.log('you must find more');
        break;
}



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

const a = prompt('one of the last movies watched?', ''),
      b = prompt('How much do you rate it?', ''),
      c = prompt('one of the last movies watched?', ''),
      d = prompt('How much do you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
