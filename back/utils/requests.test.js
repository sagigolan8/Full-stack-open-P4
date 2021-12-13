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

test("verify that a blog added to DB", async () => {
    const blogs1 = await api
      .get("/api/blogs")
  
    await api.post("/api/blogs").send({
      "title": "test",
      "author": "test",
      "url": "test",
      "likes": 0,
    }).expect(200)
  
    const blogs2 = await api
      .get("/api/blogs")
  
    expect(blogs1.body.length + 1).toBe(blogs2.body.length);
  })
  

test('DB is defined and got property id', async () => {
    const result = await api
   .get('/api/blogs')
   expect(result.body[0].id).toBeDefined()
})



afterAll(() => {
  mongoose.connection.close()
})