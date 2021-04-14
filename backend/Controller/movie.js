const express = require('express');
const { body } = require('express-validator/check');

const Movie = require('../models/movie');

exports.addMovietest = (req, res, next) => {
    console.log("you are in controller addMovie");
    const title = req.body.title;
    const genre = req.body.genre;
    const description = req.body.description;
    const imageURL = req.body.imageURL;
    const rating = req.body.rating;

    const movie = new Movie({
        title: title,
        genre: genre,
        description: description,
        imageURL: imageURL,
        rating: rating
    });

    movie.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Movie added successfully!',
            Movie: result
        });
    }).catch(err => {
        console.log(err);
    });

};


