const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
window.onload = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task) => addTaskToUI(task));
};

// Add Task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    addTaskToUI(taskText);
    saveTask(taskText);
    taskInput.value = '';
});

// Add Task to UI
function addTaskToUI(taskText) {
    const li = document.createElement('li');
    li.className = 'task';

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&#x1F5D1;';
    deleteBtn.addEventListener('click', () => deleteTask(li, taskText));

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Save Task to localStorage
function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete Task
function deleteTask(taskElement, taskText) {
    taskElement.remove();
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter((task) => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
