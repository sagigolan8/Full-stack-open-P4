const mongoose = require('mongoose')
const Blog = require('../models/BlogSchema')
const supertest = require('supertest')
const app = require('../server')
const api = supertest(app)

test('notes are returned as json', async () => {
     const result = await api
    .get('/api/blogs')
    expect(result.body.length).toBe(0)
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

test('If the likes property is missing from the request, it will default to the value 0', async () => {
    const result = await api
   .post('/api/blogs')
   .send(
    {
        "title": "Mystery egg1",
        "author": "antonymous",
        "url": "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html"
    })
   expect(result.body.likes).toBe(0)
})

test('If title and url properties are missing from the request data,the responds status code 400 Bad Request', async () => {
    await api
   .post('/api/blogs')
   .send(
    {
        "author": "antonymous",
        "likes":5
    }).expect(400)
})

test("verify that a chosen blog deleted from DB", async () => {
  const blogs1 = await api.get("/api/blogs");

  await api.delete("/api/blogs/61b85dd7bd63a1c493029494");

  const blogs2 = await api.get("/api/blogs");

  expect(blogs1.body.length).toBe(blogs2.body.length);
});

test("should verify that a chosen blog updated in DB", async () => {
  const blogs1 = await api.get("/api/blogs");
  const firstBlog = blogs1.body[0] 
//   console.log(blogs.body[0].id);
  await api
  .put('/api/blogs')
  .send(
    {
        _id: firstBlog.id,
        likes: 821
    }
  )
  .expect(200)
  const blogs2 = await api.get("/api/blogs");
  const updatedBlog = blogs2.body[0]
  expect(updatedBlog.likes).toBe(821);
});

afterAll( async() => {
  await Blog.deleteMany()
  mongoose.connection.close()
// app.killServer()
})
