document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
            <button class="complete-btn">Complete</button>
        `;
        taskList.appendChild(taskItem);

        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            taskItem.remove();
        });

        const completeBtn = taskItem.querySelector('.complete-btn');
        completeBtn.addEventListener('click', function() {
            taskItem.querySelector('span').classList.toggle('completed');
        });
    }
});
