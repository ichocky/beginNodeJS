Example: Listening to each connection

var net = require('net')

var chatServer = net.createServer()

chatServer.on('connection', function(client) {
  client.write('Hi!\n');

  client.on('data', function(data) {
    console.log(data)
  })

})

chatServer.listen(9000)
    
    
