const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input[type=text]");
const resetBtn = document.querySelector(".reset-btn");

const title = document.querySelector(".greeting")

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    loginForm.classList.add("hidden")
    resetBtn.classList.remove("hidden");
    paintGreeting(username);
};

function paintGreeting(username) {
    title.innerText = `Hello ${username}`;
    title.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if(savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintGreeting(savedUsername);
    resetBtn.classList.remove("hidden");
};

function resetAll(){
    localStorage.clear();
    location.reload();
}
resetBtn.addEventListener("click", resetAll);