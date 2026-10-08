const form = document.getElementById("username-form");
const usernameInput = document.getElementById("username");
const chat = document.querySelector(".mainChat");

const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message");
const chatMessages = document.getElementById("chatMessages");

const socket = new WebSocket("ws://localhost:8080");

chat.hidden = true;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();

    if (username === "") {
        return;
    }

    localStorage.setItem("username", username);

    form.hidden = true;
    chat.hidden = false;
});

messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const message = messageInput.value.trim();
    const username = localStorage.getItem("username");

    if (message === "") {
        return;
    }

    if (socket.readyState !== WebSocket.OPEN) {
        console.log("Brak połączenia z serwerem");
        return;
    }

    socket.send(JSON.stringify({
        username: username,
        text: message
    }));

    messageInput.value = "";
    messageInput.focus();
});

socket.addEventListener("message", function (event) {
    const receivedMessage = JSON.parse(event.data);

    const messageElement = document.createElement("p");
    messageElement.textContent =
        `${receivedMessage.username}: ${receivedMessage.text}`;

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

socket.addEventListener("open", function () {
    console.log("Połączono z serwerem");
});

socket.addEventListener("error", function () {
    console.log("Błąd połączenia z serwerem");
});