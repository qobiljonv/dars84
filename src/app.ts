// const input = document.querySelector("input")as HTMLInputElement

// input.addEventListener(("input", (e)=>{
//   console.log(e.target.valeu)
// }))

const form = document.querySelector("form") as HTMLFormElement;

type User = {
  id: number;
  name: string;
  age: number;
};

let users: User[] = [];

function renderUsers(users: User[]) {
  users.forEach((item: User) => {
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
