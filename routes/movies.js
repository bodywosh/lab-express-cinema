const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js')

/* GET home page */
//route préfixée dans app.js

router.get('/', async (req, res, next) => {
    
    const movies = await Movie.find()
    res.render('movies',{movies})
});

router.get('/:id', async (req, res, next) => {
    try {
      const movie = await Movie.findById(req.params.id)
      console.log(movie)
      res.render('movie', { movie })
    } catch (error) {
      next(error)
    }
})

module.exports = router;
