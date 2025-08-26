const input = document.querySelector(".todo__inut");
const container = document.querySelector(".todo__container");
const list = document.querySelector(".todo__list");
const counter = document.querySelector(".active__title");
const themeBtn = document.querySelector(".todo__sun");
function updateCounter() {
    const count = list.children.length;
    counter.textContent = `${count} items left`;
}
// 🔥 Dark / Light toggle
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const img = themeBtn.querySelector("img");
    if (document.body.classList.contains("dark-mode")) {
        img.src = "./images/icon-sun.svg"; // agar dark bo‘lsa -> quyosh
    }
    else {
        img.src = "./images/icon-moon.svg"; // agar light bo‘lsa -> oycha
    }
});
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
        if (container.classList.contains("hidden")) {
            container.classList.remove("hidden");
        }
        const li = document.createElement("li");
        li.classList.add("todo__item");
        const span = document.createElement("span");
        span.textContent = input.value.trim();
        span.classList.add("todo__text");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✕";
        deleteBtn.classList.add("delete__btn");
        deleteBtn.addEventListener("click", () => {
            li.remove();
            if (list.children.length === 0) {
                container.classList.add("hidden");
            }
            updateCounter();
        });
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = "";
        updateCounter();
    }
});
export {};
//# sourceMappingURL=app.js.map