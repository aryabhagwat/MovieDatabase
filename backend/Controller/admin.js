
const Movie = require('../Models/movie');

exports.addMovie = (req, res, next) => {
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

exports.getLogin = (req, res, next) => {
    console.log("you are in controller getLogin");
    res.send("Log in page");
};


exports.getMovies = (req, res, next) => {
    console.log("you are in getMovies ");

    Movie.find()
        .then(movies => {
            console.log("In get movies");
            console.log(movies);
            res.status(200).json({ message: 'Movies Received', movies: [...movies] });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

    /* res.status(200).json({
         user: [{ "name": "arya", "email": "testemail@test.com" }]
     })*/
};

exports.getMovieByID = (req, res, next) => {
    const movieId = req.params.movieId;
    console.log("in getMovieByID")
    Movie.findById(movieId)
        .then(movie => {
            if (!movie) {
                const error = new Error('Cannot find the movie.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({ message: 'Movie found.', movie: movie });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.gettestLogin = (req, res, next) => {
    /*  console.log("you are in controller postLogin");*/
    res.status(200).json({
        user: [{ "name": "arya", "email": "testemail@test.com" }]
    })
    /* res.send("gettestLogin  page");*/
};

exports.postLogin = (req, res, next) => {
    /*  console.log("you are in controller postLogin");*/
    const email = req.body.email;
    const password = req.body.password;

    res.status(201).json({
        message: 'User created successfully!',
        User: { id: new Date().toISOString(), email: email, password: password }
    });
};


exports.deleteMovieByID = (req, res, next) => {
    const movieId = req.params.movieId;
    console.log("in getMovieByID")
    Movie.findById(movieId)
        .then(movie => {
            if (!movie) {
                const error = new Error('Cannot find the movie.');
                error.statusCode = 404;
                throw error;
            }
            return Movie.findByIdAndDelete(movieId);
        })
        .then(moviedeleted => {
            console.log("Movie deleted");
            res.status(200).json({ message: 'Movie deleted.' });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

}

exports.updateMovieByID = (req, res, next) => {
    
    console.log("requrest body:");
    console.log(req.body);
    console.log("requrest body end");
    const movieId = req.body._id;
    const title = req.body.title;
    const description = req.body.description;
    const genre = req.body.genre;
    const imageURL = req.body.imageURL;
    console.log("in updateMovieByID");
    Movie.findById(movieId)
        .then(movie => {
            if (!movie) {
                const error = new Error("Cannot find the movie");
                error.statusCode = 404;
                throw error;
            }
            movie.title = title;
            movie.description = description;
            movie.genre = genre;
            movie.imageURL = imageURL;

            return movie.save();
        })
        .then(movieupdated => {
            res.status(200).json({ message: 'Movie updated',movie:movieupdated });
        }
        )
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}