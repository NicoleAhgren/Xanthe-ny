const express = require('express')
const app = express()
const port = 2002
const path = require('path')


app.use(express.static('public'))

app.get('/views/:filename', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', req.params.filename))
})


app.listen(port, () => {
    console.log(`Servern körs på http://localhost:${port}`)
})