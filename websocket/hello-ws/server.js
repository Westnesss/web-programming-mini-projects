const { WebSocketServer } = require('ws')
const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', (socket) => {
    console.log('Client connected')
    socket.on('message', (msg) => {
        // Broadcast the message to every connected client
        wss.clients.forEach((client) => client.send(`Echo: ${msg}`))
    })
})