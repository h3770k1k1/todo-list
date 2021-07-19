function createListItem(text) {
    const listItem = document.createElement("li");
    const listItemText = document.createElement('div');
    listItemText.innerHTML = text;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.id = "deletebutton";

    deleteButton.addEventListener("click", function() {
        listItem.parentNode.removeChild(listItem);
    })

    const editButton = document.createElement("button");
    editButton.innerHTML = "edit";
    editButton.id = "editbutton";

    editButton.addEventListener("click", function() {
        listItem.parentNode.removeChild(listItem);
        document.getElementById("task-input").value = listItemText.innerHTML;
        document.getElementById("add-button").innerHTML = 'accept changes';
    })
    const finishedCheckbox = document.createElement("input");
    finishedCheckbox.type = "checkbox";
    finishedCheckbox.id = "finished-checkbox";


    finishedCheckbox.addEventListener('change', function() {
        if (this.checked) {
            listItem.parentNode.removeChild(listItem);
            finishedTaskList = document.getElementById("finished-task-list");
            finishedTaskList.appendChild(listItem);

            finishedCheckbox.addEventListener('change', function() {
                if (this.checked) {} else {
                    taskList.appendChild(listItem);

                }
            })
        }
    })

    listItem.appendChild(listItemText);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    listItem.appendChild(finishedCheckbox);

    listItem.appendChild(createDateDiv());
    return listItem;
}

function createDateDiv() {
    const today = new Date();
    const time = "last edit: " + today.getHours() + ":" + today.getMinutes() + " " + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const dateDiv = document.createElement("div");
    dateDiv.id = "datediv";
    dateDiv.innerHTML = time;
    return dateDiv;
}

const taskList = document.getElementById("task-list");


document.getElementById("add-button").addEventListener("click", function() {
    document.getElementById("add-button").innerHTML = 'Add';

    const inputValue = document.getElementById('task-input').value;
    if (inputValue != '') {
        const listItem = createListItem(inputValue);
        taskList.appendChild(listItem);
        document.getElementById('task-input').value = '';
    }
})

////
document.getElementById("task-input").addEventListener('keydown', function(event) {
    console.log('xd');
    if (event.keyCode === 13) {

        event.preventDefault();
        document.getElementById("add-button").click();


    }
})