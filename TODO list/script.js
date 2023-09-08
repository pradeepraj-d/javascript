const input = document.getElementById("todo");
const list = document.getElementById("list");
const add = document.getElementById("add");

add.addEventListener("click", function () {
    const todo = input.value;
    if (todo !== "") {
        const listitem = document.createElement("li");
        listitem.innerText = todo;

        const deletebtn = document.createElement("button");
        deletebtn.innerText = "X";

        deletebtn.classList.add("delete-todo");
        deletebtn.addEventListener("click", function () {
            listitem.remove();
        });

        listitem.appendChild(deletebtn);
        list.appendChild(listitem);
        input.value = "";
    }

});

document.addEventListener("keypress", (event) => {
    var key = event.key || event.keyCode;
    if(key === 'Enter') {
       add.click();
    }
});
