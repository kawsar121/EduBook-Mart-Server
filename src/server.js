const app = require("./app")
const serverPort = require("./screet")
app.listen(serverPort, () => {
  console.log(`Example app listening on port ${serverPort}`)
})