// Searching for Elements

// GET All Element of h1 Tags 
const title = document.getElementsByTagName("h1");

title.innerText = "Got It";

console.log(title);

// GET One Element of h1 Tags By Specific Class Name

const h1Title = document.querySelector(".divClass h1")

console.log(h1Title);

// GET One Element of h1 Tags By Specific Class Name

const h1Titles = document.querySelectorAll("div.divClass:first-child h1")

console.log(h1Titles);

// GET All Tags By Specific Class Name

const hellos = document.getElementsByClassName("classTitle");

console.log(hellos);

// -------------------------------------------------------------------------

// Events

// Mouse Event Listener
function handleTitleClick() {
    const clickedClass = "clicked";

    // Toggle 
    h1Title.classList.toggle(clickedClass);

    // if (h1Title.classList.contains(clickedClass)) {
    //     h1Title.classList.remove(clickedClass);
    // } else {
    //     h1Title.classList.add(clickedClass);
    // }


    // -- No recommend change style in javascript --
    // const currentColor = h1Title.style.color;
    // let newColor;
    // if (currentColor === "blue") {
    //     newColor = "tomato";
    // } else {
    //     newColor = "blue";
    // }
    // h1Title.style.color = newColor;
}

function handleMouseEnter() {
    h1Title.innerText = "Mouse in here";
}

function handleMouseLeave() {
    h1Title.innerText = "Mouse is gone";
}

h1Title.addEventListener("click", handleTitleClick);
// h1Title.onclick = handleTitleClick;
h1Title.addEventListener("mouseenter", handleMouseEnter);
h1Title.addEventListener("mouseleave", handleMouseLeave);

// Window Event Listener
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOD");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

// -------------------------------------------------------------------------

