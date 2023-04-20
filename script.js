// alert("Hello!");

// create variable for button
    let btn = document.getElementById("myBtn");

// create variable to captrure text in input box
    let inputField = document.getElementById("input-field");

// create variable for task list
    let tasks = document.getElementById("tasks");

// create event listener
    btn.addEventListener("click", function() {
        let newTaskItem = document.createElement("li");
        newTaskItem.textContent = inputField.value;
        tasks.appendChild(newTaskItem);
        inputField.value = "";
     });
    
// create function to add delete button for new task
     let deleteBtn = document.createElement("button")