const inputBox = document.querySelector("#inputBox");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector(".to-do-list");

let editToDo = null;

const addToDo = () => {
  const inputText = inputBox.value.trim();

  if (inputText.length <= 0) {
    alert("You must write something in your To-Do");
    return false;
  }

  if (addBtn.value === "Edit") {
    editToDo.target.previousElementSibling.innerText = inputText;
    addBtn.value = "Add";
    inputBox.value = "";
  } else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "edit");
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "remove");
    li.appendChild(deleteBtn);

    list.appendChild(li);
    inputBox.value = "";
  }
};

const updateToDo = (e) => {
  if (e.target.innerHTML === "Remove") {
    e.target.parentElement.remove();
  }
  if (e.target.innerHTML === "Edit") {
    inputBox.value = e.target.previousSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit";
    editToDo = e;
  }
};

addBtn.addEventListener("click", addToDo);
list.addEventListener("click", updateToDo);
