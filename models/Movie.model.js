const { Schema, model } = require('mongoose')

const schema = new Schema({
    title: { type: String, unique: true },
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
  })
  
  const Movie = model('Movie', schema)
  
  module.exports = Movie