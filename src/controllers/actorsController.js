const db = require('../database/models')

module.exports = {
    list: (req, res) =>{
        //retorna la vista actorsList con los generos
        
        db.Actor.findAll()
        .then((actors) => {
            return res.render('actorsList', {actors})
        })
    },
    detail: (req, res) => {
        const actorId = req.params.id
        db.Actor.findByPk(actorId)
        .then((actors) => {
            return res.render('actorsDetail', {
                actors
            })
        })
    }
}