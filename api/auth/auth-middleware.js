const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../../config')

const restricted = (req, res, next) => {
    // console.log("restricted middleware")
    // next()
    const token = req.headers.authorization
    console.log(token)
    
    // next()
    if (!token) {
      next({ status: 401, message: 'not pass, You need token!' }) 
    }else {
      jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
          next({ status: 401, message: `Your token sucks: ${err.message}` })
        } else {
          req.decodedJwt = decoded
          next()
        }
      })
    }
  }
  
  const validateRole = (req, res, next) => {
    console.log("checkRole middleware")
    next()
  }

  const checkUsernameTaken = (req, res, next) => {
    console.log("checkUsernameTaken middleware")
    next()
  }
  const checkUserValid = (req, res, next) => {
    console.log("checkUserValid middleware")
    next()
  }
  const validateCredentials = (req, res, next) => {
    console.log("validateCredentials middleware")
    next()
  }
  
  module.exports = {
    validateCredentials,
    checkUserValid,
    checkUsernameTaken,
    restricted,
    validateRole
  };
  