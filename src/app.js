const express = require('express')
const app = express()
const { default: rateLimit } = require('express-rate-limit')

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    limit: 5, 
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 56, 
    message : "eto bar keno bhai"
})

app.get('/', limiter, (req, res) => {
  res.send('Hello Worldss!')
})




module.exports = app