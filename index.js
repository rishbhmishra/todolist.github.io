
const inputIemValue = document.getElementById("itemValue");
const addBtn = document.getElementById("Button");
const todoList = document.getElementById("listItem");


addBtn.addEventListener("click", () => {
    if(inputIemValue.value==="")
{
    alert("Please Enter Some Value");
    return;
}
const li = document.createElement("li");
li.innerText = inputIemValue.value;
todoList.appendChild(li);
const deleteBtn = document.createElement("button");
deleteBtn.innerText = "-";
li.appendChild(deleteBtn);
deleteBtn.classList.add("deleteBtn");
deleteBtn.addEventListener("click",() =>
{
    li.remove();
    taskValue.innerText=i--;
});
inputIemValue.value = "";
});

