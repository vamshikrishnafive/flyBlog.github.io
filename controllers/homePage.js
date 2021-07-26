const Post = require('../dataBase/models/post')

module.exports = async (req, res) => {
    try {
        const posts = await (await Post.find({})).populate('author')
        res.render('index', { posts })
    } catch (error) {
        console.error(error.message)
    }
}