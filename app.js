const express = require('express');
const app = express();
const port = 2002;

app.use(express.static('src'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.listen(port, () => {
    console.log(`Servern körs på http://localhost:${port}`)
})