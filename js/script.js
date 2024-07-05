"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    private: false
};

let a = prompt("Один из полседних просмотреных фильмов?"),
    b = prompt("На сколько оцените его?"),
    c = prompt("Один из полседних просмотреных фильмов?"),
    d = prompt("На сколько оцените его?");


    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);

