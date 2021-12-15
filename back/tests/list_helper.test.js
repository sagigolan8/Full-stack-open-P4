const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]
  
    test('when list has only one blog, equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      expect(result).toBe(5)
    })
  })

  describe('best blog' ,()=>{
    const listBlogs = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 5,
          __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f7',
            title: 'Mystery egg',
            author: 'annonymus',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 2,
            __v: 0
          },
          {
            _id: '5a422aa71b54a676234d17f9',
            title: 'Mystery egg',
            author: 'annonymus',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 89,
            __v: 0
          }
      ]
    test('should return the blog with the most likes', () => {
        const result = listHelper.favoriteBlog(listBlogs)
        expect(result).toEqual(
            {
                title: 'Mystery egg',
                author: 'annonymus',
                likes: 89,
            }
            )
    })
  })

  describe('the authors with the most blogs',()=>{
    let listBlogs = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 5,
          __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f7',
            title: 'Mystery egg',
            author: 'annonymus',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 2,
            __v: 0
          },
          {
            _id: '5a422aa71b54a676234d17f9',
            title: 'Mystery egg2',
            author: 'annonymus',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 8,
            __v: 0
          }
      ]
      test('shuold returns the author who has the largest amount of blogs ',()=>{
        const result = listHelper.mostBlogs(listBlogs)
        expect(result).toEqual(
            {
                author: 'annonymus',
                blogs: 2,
            }
            )
      })
  })

  describe("most likes", () => {
    const listBlogs = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 52,
          __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f7',
            title: 'Mystery egg',
            author: 'annonymus',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 22,
            __v: 0
          },
          {
            _id: '5a422aa71b54a676234d17f9',
            title: 'Mystery egg2',
            author: 'annonymus',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 8,
            __v: 0
          }
      ]
    test("most likes", () => {
      const result = listHelper.mostLikes(listBlogs);
      expect(result).toEqual({
        author: "Edsger W. Dijkstra",
        likes: 52,
      });
    });
  });