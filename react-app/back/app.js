require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cors = require("cors");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const blogsRouter = require('./routers/blogsRouter') 
const usersRouter = require('./routers/usersRouter') 
const loginRouter = require('./routers/loginRouter') 

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

app.use('/api/blogs',blogsRouter)
app.use('/api/users',usersRouter)
app.use('/api/login',loginRouter)

const PORT = 3000
const listener = app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`)
})

app.killServer = ()=>{
  listener.close()
}

module.exports = app