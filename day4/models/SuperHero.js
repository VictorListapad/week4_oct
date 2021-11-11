const mongoose = require('mongoose');

const superHeroSchema = mongoose.Schema(
  {
    name: {type: String, required: true},
    superpower: {type:String, required: true},
    age: {type: Number},
    suit: {type: String}
  }
)

module.exports = mongoose.model('SuperHero', superHeroSchema,);