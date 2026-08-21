const dummy = (blogs) => {
  return 1;
}

const likes_dummy = (blogs) => {
    if (blogs.length === 0)
        return 0;
    else
    {
        let acumulator = 0;

        for (let i = 0; i < blogs.length; i++)
        {
            let cur_blog = blogs[i];
            acumulator += cur_blog.likes;
        }

        return acumulator;
    }
}

const favouriteBlog = (blogs) => {
    if (blogs.length === 0)
        return null

    const topBlog = blogs.reduce((prev, current) => {
        return (prev.likes > current.likes) ? prev : current
    })

    return {
        title: topBlog.title,
        author: topBlog.author,
        likes: topBlog.likes
    }
}

const mostBlogs = (blogs) => {
    if (blogs.length === 0)
        return null

    const authorCounts = blogs.reduce((acc, blog) => {
        acc[blog.author] = (acc[blog.author] || 0) + 1
        return acc
    }, {})

    let topAuthor = ''
    let maxBlogs = 0

    for (const [author, count] of Object.entries(authorCounts))
    {
        if (count > maxBlogs)
        {
        maxBlogs = count
        topAuthor = author
        }
    }

    return {
        author: topAuthor,
        blogs: maxBlogs
    }
}

const mostLikes = (blogs) => {
    if (blogs.length === 0)
        return null

    const likesPerAuthor = blogs.reduce((acc, blog) => {
        acc[blog.author] = (acc[blog.author] || 0) + blog.likes
        return acc
    }, {})

    let topAuthor = ''
    let maxLikes = 0

    for (const [author, likes] of Object.entries(likesPerAuthor))
    {
        if (likes > maxLikes)
        {
            maxLikes = likes
            topAuthor = author
        }
    }

    return {
        author: topAuthor,
        likes: maxLikes
    }
}

module.exports = {
    dummy,
    likes_dummy,
    favouriteBlog,
    mostBlogs,
    mostLikes
}