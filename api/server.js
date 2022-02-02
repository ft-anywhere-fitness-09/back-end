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

// server.use(express.static(path.join(__dirname, 'client/build')))
server.use(express.static(path.join(__dirname, '../client')))
server.get('/', (req, res)=>{
  // res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  res.sendFile(path.join(__dirname, '../client', 'index.html'))
})

server.get('/hello', (req, res) => {
  res.status(200).json('hello world!!!!!!')
})

// server.use((err, req, res, next) => { // eslint-disable-line
//   res.status(err.status || 500).json({
//     message: err.message,
//     stack: err.stack,
//   })
// })
module.exports = server
