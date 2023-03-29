const express = require('express');
const router = express.Router();
const genresController = require('../controllers/actorsController');

router.get('/actors', genresController.list);
router.get('/actors/detail/:id', genresController.detail);


module.exports = router;