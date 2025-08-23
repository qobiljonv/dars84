"use strict";
// const input = document.querySelector("input")as HTMLInputElement
Object.defineProperty(exports, "__esModule", { value: true });
// input.addEventListener(("input", (e)=>{
//   console.log(e.target.valeu)
// }))
const form = document.querySelector("form");
let users = [];
function renderUsers(users) {
    users.forEach((item) => {
        const { id, name, age };
    });
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const age = formData.get("age");
    users.push({
        id: Math.random(),
        name: (name ?? "").toString,
        age: (age ?? "").toString,
    });
});
//# sourceMappingURL=app.js.map