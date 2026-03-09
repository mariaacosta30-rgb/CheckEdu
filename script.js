
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <span class="delete-btn" onclick="removeTask(this)">✖</span>
    `;

    taskList.appendChild(li);
    
    input.value = "";
}

function toggleTask(element) {
    element.parentElement.classList.toggle('completed');
}
function removeTask(element) {
    element.parentElement.remove();
}