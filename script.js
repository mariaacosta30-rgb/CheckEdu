function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value;

    if (taskText.trim() === "") {
        alert("Digite uma tarefa primeiro!");
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="removeTask(this)">Remover</button>
    `;

    taskList.appendChild(li);

    input.value = "";
}

function removeTask(button) {
    const li = button.parentElement;
    li.style.opacity = "0";
    setTimeout(() => li.remove(), 200);
}