const output = document.querySelector("#output");
function handleClick(e) {
output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
e.stopPropagation()
}

let div1 = document.querySelector("#container");
let div2 = document.querySelector("#body");
let div3 = document.querySelector("#button");

div1.addEventListener("click", handleClick); //,{ capture: true }
div2.addEventListener("click", handleClick);
div3.addEventListener("click", handleClick);