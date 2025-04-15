
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// const arnabMiddleware = (req,res,next)=>{
//   console.log(req)
//   next()
// }
// app.use(arnabMiddleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!'+req.params.name)
})

app.get('/about', (req, res) => {
    // res.send('Hello World about')
    // res.sendFile(path.join(__dirname,'index.html'));
    // res.status(500)
    res.json({"Arnab":34})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})