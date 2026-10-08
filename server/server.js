const http = require("http");
const { WebSocketServer, WebSocket } = require("ws");

const httpServer = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });

    response.end("Serwer czatu działa");
});

const webSocketServer = new WebSocketServer({
    server: httpServer
});

webSocketServer.on("connection", (client) => {
    console.log("Nowy użytkownik połączył się z czatem");

    client.on("message", (message) => {
        // Przekazujemy wiadomość do wszystkich połączonych użytkowników
        webSocketServer.clients.forEach((recipient) => {
            if (recipient.readyState === WebSocket.OPEN) {
                recipient.send(message.toString());
            }
        });
    });

    client.on("close", () => {
        console.log("Użytkownik opuścił czat");
    });
});

httpServer.listen(8080, () => {
    console.log("Serwer działa pod adresem http://localhost:8080");
});