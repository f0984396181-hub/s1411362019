
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

console.log("🏎️  汽車科彈幕伺服器已啟動：ws://localhost:8080");

wss.on('connection', (ws) => {
    console.log("🔧 新的技師已連線");

    ws.on('message', (message) => {
        // 將接收到的 Buffer 轉為字串
        const data = message.toString();
        
        // 廣播給所有在線的使用者
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });

    ws.on('close', () => console.log("🏁 技師已離線"));
});