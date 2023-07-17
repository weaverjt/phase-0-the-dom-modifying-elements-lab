// Write your code here!
const re = document.getElementById("main");
re.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Jake is the champion";
document.body.append(newHeader);
