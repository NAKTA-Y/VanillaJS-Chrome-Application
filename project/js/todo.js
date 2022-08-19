const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function DeleteToDo(event) {
    const li = event.target.parentElement;
    const id = parseInt(li.id);

    toDos = toDos.filter(toDo => toDo.id !== id);
    
    console.log(toDos);

    li.remove();
    
    saveToDos();
}

function paintToDo(newToDoObj) {
    const toDoThing = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.addEventListener("click", DeleteToDo)

    span.innerText = newToDoObj.text;
    button.innerText = "X";

    toDoThing.id = newToDoObj.id;

    toDoThing.appendChild(span);
    toDoThing.appendChild(button);
    toDoList.appendChild(toDoThing);
}

function onToDoSubmit(event) {
    const newToDo = toDoInput.value;
    const newToDoObj = {
        id: Date.now(),
        text: newToDo
    };

    event.preventDefault();

    toDos.push(newToDoObj);

    toDoInput.value = "";

    paintToDo(newToDoObj);

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