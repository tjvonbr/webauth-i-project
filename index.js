const server = require('./api/server.js')
const bcrypt = require('bcryptjs');

const port = 8888;
server.listen(port, () => {
  console.log(`\n*** The server is listening on port ${port} *** `)
})