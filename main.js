window.addEventListener('load', () => {
    
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const tasksContainer = document.querySelector("#tasks");

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop form from submitting
        
        const taskText = input.value;
        if (taskText === "") return; // Ignore empty tasks

        // Create task elements
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskContentElement = document.createElement('div');
        taskContentElement.classList.add('content');
        taskElement.appendChild(taskContentElement);

        const taskInputElement = document.createElement('input');
        taskInputElement.classList.add('text');
        taskInputElement.type = 'text';
        taskInputElement.value = taskText;
        taskInputElement.setAttribute('readonly', 'readonly');
        taskContentElement.appendChild(taskInputElement);

        const taskActionsElement = document.createElement('div');
        taskActionsElement.classList.add('actions');
        
        const taskEditButton = document.createElement('button');
        taskEditButton.classList.add('edit');
        taskEditButton.innerText = 'Edit';

        const taskDeleteButton = document.createElement('button');
        taskDeleteButton.classList.add('delete');
        taskDeleteButton.innerText = 'Delete';

        taskActionsElement.appendChild(taskEditButton);
        taskActionsElement.appendChild(taskDeleteButton);
        taskElement.appendChild(taskActionsElement);
        tasksContainer.appendChild(taskElement);

        input.value = ''; // Clear input

        // Toggle edit/save
        taskEditButton.addEventListener('click', () => {
            if (taskEditButton.innerText.toLowerCase() === "edit") {
                taskEditButton.innerText = "Save";
                taskInputElement.removeAttribute("readonly");
                taskInputElement.focus();
            } else {
                taskEditButton.innerText = "Edit";
                taskInputElement.setAttribute("readonly", "readonly");
            }
        });

        // Delete task
        taskDeleteButton.addEventListener('click', () => {
            tasksContainer.removeChild(taskElement);
        });
    });
});
