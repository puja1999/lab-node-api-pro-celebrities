const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const {mongoose} = require('./connection/mongo.js')
var celebrity = require('./controller/celebrityController.js')

var app = express()
app.use(bodyParser.json())
app.use(cors({ origin: '*' }))

app.get("/", (req,res)=>{
  res.send("Server Started")
});

app.listen(3000, () => console.log('Server Started at port 3000'))

app.use("/celebrities", celebrity)