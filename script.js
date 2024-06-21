const programmingLanguages = ["JavaScript", "Python", "Java"];
let data = "";

for (let i = 0; i < 3; i++) {
  data += `<li>${programmingLanguages[i]}</li>`;
}
const list = document.querySelector("ul");

list.innerHTML = data;
