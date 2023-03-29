const db = require('../database/models')

module.exports = {
    list: (req, res) =>{
        //retorna la vista genreList con los generos
        
        db.Genre.findAll()
        .then((genres) => {
            return res.render('genresList', {genres})
        })
    },
    detail: (req, res) =>{
        const genreId = req.params.id
        db.Genre.findByPk(genreId)
        .then((genre) => {
            return res.render('genresDetail',{genre})
        })
    }
}