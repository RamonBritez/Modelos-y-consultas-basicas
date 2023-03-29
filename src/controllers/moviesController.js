const db = require('../database/models')
const Movie = require('../database/models/Movie')
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) =>{
        //retorna la vista moviesList con las movies
        
        db.Movie.findAll()
        .then((movies) => {
            return res.render('moviesList', {movies})
        })
    },
    detail: (req, res) => {
        const movieId = req.params.id
        db.Movie.findByPk(movieId)
        .then((movie) => {
            return res.render('moviesDetail', {movie})
        })
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC'],
            ],
        })
        .then((movies) =>{
            return res.render('newestMovies', {movies})
        })
    },
    recomended: (req, res) => {
        db.Movie.findAll({
            where: {
                rating:{[Op.gte]: 8},
            },
            order: [
                ['rating', 'DESC'],
            ],
            limit: 5,
        })
        .then((movies) =>{
            return res.render('recommendedMovies', {movies})
        })
    }
}