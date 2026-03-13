const date = new Date();


const currentyear = date.getFullYear();


const today = date.toLocaleDateString();

document.getElementById("currentyear").textContent = currentyear;
document.getElementById("today").textContent = today;