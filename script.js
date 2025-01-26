let elemInput = document.getElementById('ToDo__input');
let elemToDoTasks = document.getElementById('ToDo__tasks');
let elemToDoButton = document.getElementById('ToDo__button');
let i = 0;
function createTasks() {
    let p = document.createElement("p");
    i++;
    p.innerHTML = i + ". " + elemInput.value;
    elemToDoTasks.append(p);

let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Удалить';
    deleteButton.classList.add('delete-button');
deleteButton.addEventListener('click', function () {
    taskItem.remove(); 
});
taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
    elemToDoTasks.appendChild(taskItem);
    elemInput.value = '';
}
elemToDoButton.addEventListener('click', createTasks);

/*
function showTasks () {
    let taskText = elemInput.value.trim();
}
let liToDo = document.createElement('li');
    liToDo.classList.add('ToDo__task');
    liToDo.innerHTML = `
    <span>${taskText}</span> 
    <button class="delete__button">Удалить</button>`;
    elemToDoTasks.appendChild(liToDo);
showTasks();*/