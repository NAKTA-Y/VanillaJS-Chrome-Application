const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function DeleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const toDoThing = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.addEventListener("click", DeleteToDo)

    span.innerText = newToDo;
    button.innerText = "X";

    toDoThing.appendChild(span);
    toDoThing.appendChild(button);
    toDoList.appendChild(toDoThing);
}

function onToDoSubmit(event) {
    const newToDo = toDoInput.value;

    event.preventDefault();

    toDos.push(newToDo);

    toDoInput.value = "";

    paintToDo(newToDo);

    saveToDos();
}

toDoForm.addEventListener("submit", onToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    // JSON String To Array
    const parseToDos = JSON.parse(savedToDos);

    toDos = parseToDos;

    parseToDos.forEach(paintToDo);
}