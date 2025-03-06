import { dropdownCreator } from "./dropdown";

const button = document.getElementById("dropdown-button");
const content = document.getElementById("dropdown-content");
console.log(button);
console.log(content);
dropdownCreator(button, content);
