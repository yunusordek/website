const express = require('express')
const app = express()
const router = express.Router()

app.use(express.static(__dirname + '/'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/indexTr.html')
})

var server = app.listen(3000, function() {
    console.log('Yayın Adresi : http://localhost:3000');
});


