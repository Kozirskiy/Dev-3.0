'use strict';



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
