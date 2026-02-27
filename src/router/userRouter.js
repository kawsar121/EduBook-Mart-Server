const express = require('express')
const getUser = require('../controllers/userController')
const UserRouter = express.Router()

// Raw pattern
UserRouter.get('/', (req, res) => {
  res.send('Hello Worldss!')
})

// MVC pattern
UserRouter.get('/', getUser)


UserRouter.get('/profile', (req, res) => {
  res.send('Joy Bangla')
})

module.exports = UserRouter