require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cors = require("cors");
const blogsRouter = require('./routers/blogsRouter') 
const usersRouter = require('./routers/usersRouter') 
const loginRouter = require('./routers/loginRouter') 
const { userExtractor } = require('./middleware/usersAuth')
const PORT = 3003

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database successfully");
  })
  .catch(() => {
    console.log("connection to database failed");
  });
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/blogs', userExtractor ,blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)


 app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app