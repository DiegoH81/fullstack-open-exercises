const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/for_testing')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

test("of empty list is 0", () => {
    const blogs = []
    const result = listHelper.likes_dummy(blogs)
    assert.strictEqual(result, 0);
})

test("with only 1 blog", () => {
    const blogs = [{title: "test",
                    author: "test",
                    url: "test",
                    likes: 1
    }]

    const result = listHelper.likes_dummy(blogs)
    assert.strictEqual(result, blogs[0].likes);
})

test("with multiple blogs", () => {
    const blogs = [{title: "test",
                    author: "test",
                    url: "test",
                    likes: 5},
                    {title: "test",
                    author: "test",
                    url: "test",
                    likes: 4}]

    const result = listHelper.likes_dummy(blogs)
    assert.strictEqual(result, 9);
})

describe('favourite blog', () => {
  test('returns null if the list is empty', () => {
    const blogs = []

    const result = listHelper.favouriteBlog(blogs)
    assert.strictEqual(result, null)
  })

  test('when list has only one blog, returns that blog formatted', () => {
    const blogs = [
      {
        title: 'Canonical string reduction',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.cs.utexas.edu/~routing',
        likes: 12
      }
    ]

    const result = listHelper.favouriteBlog(blogs)
    assert.deepStrictEqual(result, {
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12
    })
  })

  test('when list has multiple blogs, returns the one with the most likes', () => {
    const blogs = [
      {
        title: 'React patterns',
        author: 'Michael Chan',
        url: 'https://reactpatterns.com/',
        likes: 7
      },
      {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5
      },
      {
        title: 'Canonical string reduction',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.cs.utexas.edu/users/utdc/cs350/Dijkstra350.pdf',
        likes: 12
      }
    ]

    const result = listHelper.favouriteBlog(blogs)
    assert.deepStrictEqual(result, {
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12
    })
  })
})

describe('most blogs', () => {
    test('returns null if the list is empty', () => {
        const blogs = []

        const result = listHelper.mostBlogs(blogs)
        assert.strictEqual(result, null)
    })

    test('when list has only one blog, returns that author with 1 blog', () => {
        const blogs = [
        {
            title: 'Canonical string reduction',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.cs.utexas.edu/~routing',
            likes: 12
        }
        ]

        const result = listHelper.mostBlogs(blogs)
        assert.deepStrictEqual(result, {
        author: 'Edsger W. Dijkstra',
        blogs: 1
        })
    })

    test('when list has multiple blogs, returns the author with most blogs', () => {
        const blogs = [
        {
            title: 'React patterns',
            author: 'Michael Chan',
            url: 'https://reactpatterns.com/',
            likes: 7
        },
        {
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5
        },
        {
            title: 'Canonical string reduction',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.cs.utexas.edu/users/utdc/cs350/Dijkstra350.pdf',
            likes: 12
        },
        {
            title: 'First class tests',
            author: 'Robert C. Martin',
            url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDrivenDevelopment.html',
            likes: 10
        },
        {
            title: 'TDD harms architecture',
            author: 'Robert C. Martin',
            url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
            likes: 0
        },
        {
            title: 'Type wars',
            author: 'Robert C. Martin',
            url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
            likes: 2
        }
        ]

        const result = listHelper.mostBlogs(blogs)
        assert.deepStrictEqual(result, {
        author: 'Robert C. Martin',
        blogs: 3
        })
    })
})

describe('most likes', () => {
    test('returns null if the list is empty', () => {
        const blogs = []

        const result = listHelper.mostLikes(blogs)
        assert.strictEqual(result, null)
    })

    test('when list has only one blog, returns the author and its likes', () => {
        const blogs = [
        {
            title: 'Canonical string reduction',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.cs.utexas.edu/~routing',
            likes: 12
        }
        ]

        const result = listHelper.mostLikes(blogs)
        assert.deepStrictEqual(result, {
        author: 'Edsger W. Dijkstra',
        likes: 12
        })
    })

    test('when list has multiple blogs, returns the author with the most total likes', () => {
        const blogs = [
        {
            title: 'React patterns',
            author: 'Michael Chan',
            url: 'https://reactpatterns.com/',
            likes: 7
        },
        {
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5
        },
        {
            title: 'Canonical string reduction',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.cs.utexas.edu/users/utdc/cs350/Dijkstra350.pdf',
            likes: 12
        },
        {
            title: 'First class tests',
            author: 'Robert C. Martin',
            url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDrivenDevelopment.html',
            likes: 10
        },
        {
            title: 'TDD harms architecture',
            author: 'Robert C. Martin',
            url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
            likes: 0
        },
        {
            title: 'Type wars',
            author: 'Robert C. Martin',
            url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
            likes: 2
        }
        ]

        const result = listHelper.mostLikes(blogs)
        assert.deepStrictEqual(result, {
        author: 'Edsger W. Dijkstra',
        likes: 17
        })
    })
})