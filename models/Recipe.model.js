const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const {Schema, model} = require('mongoose')

//const recipeSchema = new Schema({
  // TODO: write the schema
  //usernameL {
  //  type: String, 
  //  required: true 
  //}

//  email: String, 
//  phoneNumber: Number
// });

const recipeSchema = new Schema({
  title: {
  type: String, 
  require: true, 
  unique: true,  
  }, 
  level: {
    type: String, 
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
  }, 
  ingredients: {
    type: [ String ]
  }, 
  cuisine: {
    type: String, 
    required: true
  }, 
  dishType: {
    type: String, 
    enum: ["breakfast", "main_course", "soup", "snack", "drink", "dessert", "other"]
  }, 
  image: {
    type: String, 
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  }, 
  duration: {
    type: Number,
    min: 0
  }, 
  creator: {
    type: Date,
    default: Date.now
  }
});

const RecipeModel = mongoose.model('Recipe', recipeSchema);

module.exports = RecipeModel;
