const input = document.querySelector(".todo__inut") as HTMLInputElement;
const container = document.querySelector(".todo__container") as HTMLDivElement;
const list = document.querySelector(".todo__list") as HTMLUListElement;
const counter = document.querySelector(".active__title") as HTMLHeadingElement;
const themeBtn = document.querySelector(".todo__sun") as HTMLButtonElement;

function updateCounter() {
  const count = list.children.length;
  counter.textContent = `${count} items left`;
}

// 🔥 Dark / Light toggle
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const img = themeBtn.querySelector("img") as HTMLImageElement;
  if (document.body.classList.contains("dark-mode")) {
    img.src = "./images/icon-sun.svg"; // agar dark bo‘lsa -> quyosh
  } else {
    img.src = "./images/icon-moon.svg"; // agar light bo‘lsa -> oycha
  }
});

input.addEventListener("keypress", (e: KeyboardEvent) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    if (container.classList.contains("hidden")) {
      container.classList.remove("hidden");
    }

    const li: HTMLLIElement = document.createElement("li");
    li.classList.add("todo__item");

    const span: HTMLSpanElement = document.createElement("span");
    span.textContent = input.value.trim();
    span.classList.add("todo__text");

    const deleteBtn: HTMLButtonElement = document.createElement("button");
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
