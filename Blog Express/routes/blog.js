const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')
const router = express.Router()

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../template/index.html'))
})

router.get('/blog',(req,res)=>{
    // blogs.forEach(e => {
    //     console.log(e.title)
    // });
    res.sendFile(path.join(__dirname,'../template/bloghome.html'))
})

router.get('/blogpost/:slug',(req,res)=>{
  myBlog=  blogs.filter((e)=>{
        return e.slug==req.params.slug
    })
    console.log(myBlog)
    res.sendFile(path.join(__dirname,'../template/blogPage.html'))
})

module.exports = router