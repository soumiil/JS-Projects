let body = document.querySelector("body");
const button = document.getElementById("btn");
let hexCode = document.getElementById("hexCode");
let color = "#";
const colorString = "0123456789ABCDEF";

function colorGenerator() {
    for (let i = 0; i < 6; i++) {
        color += colorString[Math.floor(Math.random() * colorString.length)];
    }
    hexCode.innerText = color;
    body.style.backgroundColor = color;
    color = "#";
}

button.addEventListener("click", () => {
    colorGenerator();
});
