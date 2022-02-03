const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../users/users-model.js')
const { BCRYPT_ROUNDS } = require('../../config')
const makeToken = require('./auth-token-builder')
const { validateCredentials, checkUserValid, checkUsernameTaken, validateRole } = require("./auth-middleware")


// http post :9000/api/auth/register username=foo password=1234
router.post('/register', 
    validateCredentials,
    checkUsernameTaken,
    // validateRole,    
    async(req, res, next)=>{
    let user = req.body
    // console.log("register user ",user)
    const hash = bcrypt.hashSync(user.password , BCRYPT_ROUNDS)
    user.password = hash
    User.add(user)
     .then( saved => {
        res.status(201).json({massage: `Account successfully created. Please login: ${saved.username}`  })
     })
     .catch(next)


    // try {
    //     const { username, password, role_id } = req.body
    //     const hash = bcrypt.hashSync(password, 8) // 2 ^ 8
    //     const newUser = {username, password: hash, role_id}
    //     const data = await User.add(newUser)
    //     res.status(201).json(data)
    //     // res.json(data)
    //   } catch (err) {
    //     next(err)
    //   }

})


router.post('/login',
    validateCredentials, 
    // checkUserValid, 
    async (req, res, next) => {
    let { username, password } = req.body
  
    // User.findBy({ username })
    //   .then(([user]) => {
    //       console.log(user)
    //     if (user && bcrypt.compareSync(password, user.password)) {
    //        // here we make token and send it to client in res.body
    //        const token = makeToken(user)
    //       res.status(200).json({ message: `Welcome back ${user.username}...` , token})
    //     } else {
    //       next({ status: 401, message: 'Invalid Credentials' })
    //     }
    //   })
    //   .catch(next)

    try {
        const user = await User.findBy({username})
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
         return next({ status: 401, message: "Invalid credentials"})
        }
        req.user = user
        // console.log(user)
        const token = makeToken(user)
        res.status(200).json({ message: `Welcome ${user.username}!`, token})
      } catch (err) {
        next(err)
      }
  })

module.exports = router