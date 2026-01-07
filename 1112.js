const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket Server running on ws://localhost:8080');

wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', message => {
    // 廣播給所有連線中的使用者
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
