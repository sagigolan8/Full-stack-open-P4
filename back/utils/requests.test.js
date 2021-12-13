const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../server')
const { getBlogs } = require('../controllers/blogs')
const api = supertest(app)

test('notes are returned as json', async () => {
     const result = await api
    .get('/api/blogs')
    expect(result.body.length).toBe(2)
})

test('DB is defined and got property id', async () => {
    const result = await api
   .get('/api/blogs')
   expect(result.body[0].id).toBeDefined()
})



afterAll(() => {
  mongoose.connection.close()
})