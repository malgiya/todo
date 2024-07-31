document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <input type="text" class="edit-input" style="display: none;">
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;

        const editButton = li.querySelector('.edit-button');
        const deleteButton = li.querySelector('.delete-button');
        const taskTextSpan = li.querySelector('.task-text');
        const editInput = li.querySelector('.edit-input');

        editButton.addEventListener('click', () => {
            if (editButton.innerText === 'Edit') {
                editInput.value = taskTextSpan.innerText;
                editInput.style.display = 'inline-block';
                editButton.innerText = 'Save';
                taskTextSpan.style.display = 'none';
            } else {
                taskTextSpan.innerText = editInput.value;
                editInput.style.display = 'none';
                editButton.innerText = 'Edit';
                taskTextSpan.style.display = 'inline';
            }
        });

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }
});
