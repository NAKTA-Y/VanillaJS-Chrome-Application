const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
    const value = loginInput.value;
}

loginButton.addEventListener("click", onLoginBtnClick);