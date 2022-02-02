const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()
const path = require('path')
// const db = require('./data/db-config')

const usersRouter = require("./users/users-router.js");



const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/users", usersRouter);

server.use(express.static(path.join(__dirname, 'client/build')))
server.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.get('/hello', (req, res) => {
  res.status(200).json('hello world!!!!!!')
})


module.exports = server
