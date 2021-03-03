const mongoose = require('mongoose')

// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
   title: String,
   miles: Number,
   body: String,
   date: {
       type: String,
       default: Date.now()
   } 
});

// Model
const BlogPost = mongoose.model('Blogpost', BlogPostSchema)

module.exports = BlogPost;
