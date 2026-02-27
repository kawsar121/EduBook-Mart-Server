const getUser = (req, res) => {
  try {
    res.send('Hello Worldss!')
  } catch (error) {
    console.log(error, 'message of error')
  }
}

module.exports = getUser