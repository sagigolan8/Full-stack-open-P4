const dummy = (blogs) => {
    return 1
  }
  
const totalLikes = (blogs)=>{
    let likes = 0
    for (const blog of blogs) {
        likes+= blog.likes
    }
    return likes
}

const favoriteBlog = (blogs) => {
    let max = 0;
    let blogMax = {};
    for (const blog of blogs) {
      if (blog.likes > max) {
        max = blog.likes;
        blogMax = { title: blog.title, author: blog.author, likes: blog.likes };
      }
    }
    return blogMax;
  };

  const mostBlogs = (blogs)=>{
      let count = []
      let uniqIds = {}
    for (const blog of blogs) {
        count.push({author: blog.author ,blogs: blogs.filter((blogObj)=>blogObj.author === blog.author).length})
    }
    count = count.filter(obj => !uniqIds[obj.author] && (uniqIds[obj.author] = true));
    return findMax(count)
  }

  const findMax = (authors)=>{
    let max = 0;
    let blogMax = {};
    for (const author of authors) {
      if (author.blogs > max) {
        max = author.blogs;
        blogMax = { author: author.author, blogs: author.blogs };
      }
    }
    return blogMax;
  }

  const mostLikes = (blogs)=>{
    let likesOfAuthor = [],count = [],uniqIds = {},like = 0
  for (const blog of blogs) {
      count.push({
          author: blog.author ,
          likes: blog.likes
    })
  }
  for (let i = 0; i < count.length; i++) {
    for (let k = 0; k < count.length; k++) {
      if (count[i].author === count[k].author)
        like += count[k].likes;
    }
    likesOfAuthor.push({ author: count[i].author, likes: like });
    like = 0;
  }
  likesOfAuthor = likesOfAuthor.filter(
    (obj) => !uniqIds[obj.author] && (uniqIds[obj.author] = true)
  );
  let max = 0;
  let blogMax = {};
  for (const author of count) {
    if (author.likes > max) {
      max = author.likes;
      blogMax = { author: author.author, likes: author.likes };
    }
  }
  return blogMax
}


  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
  }