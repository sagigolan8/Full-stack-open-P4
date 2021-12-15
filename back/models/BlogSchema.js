const mongoose = require('mongoose')
const BlogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  })
  
  BlogSchema.set("toJSON", {
    transform: (_, returnedObject) => {
      returnedObject.id = (returnedObject._id.toString());
      delete returnedObject._id;
    },
  });

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;