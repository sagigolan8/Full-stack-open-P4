require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const apiRouter = require('./routers/apiRouter') 

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
app.use('/api',apiRouter)

const PORT = 3003
const listener = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.killServer = ()=>{
  listener.close()
}

module.exports = app