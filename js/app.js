const form = document.getElementById("username-form");
const usernameInput = document.getElementById("username");
const chat = document.querySelector(".mainChat");

chat.hidden = true;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();

    localStorage.setItem("username", username);

    form.hidden = true;
    chat.hidden = false;
});
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message");
const chatMessages = document.getElementById("chatMessages");

messageForm.addEventListener("submit" , function (event){
event.preventDefault();

const message = messageInput.value.trim();
const username = localStorage.getItem("username");

if (message === ""){
    return;
}
const messageElement = document.createElement("p");
messageElement.textContent = `${username}: ${message}`;

chatMessages.append(messageElement);

messageInput.value = "";
messageInput.focus();
});
