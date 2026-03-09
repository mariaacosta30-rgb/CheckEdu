// Função principal para adicionar a missão
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value;

    if (taskText.trim() === "") {
        alert("⚠️ ERRO DE SISTEMA: Digite uma tarefa primeiro!");
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');

    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn" onclick="removeTask(event, this)">ABORTAR</button>
    `;

    li.onclick = function() {
        this.classList.toggle('completed');
    };

    taskList.appendChild(li);

    input.value = "";
    input.focus();
}
function removeTask(event, button) {
    event.stopPropagation();
    
    const li = button.parentElement;
    
    li.style.opacity = "0";
    li.style.transform = "translateX(20px)"; 
    
    setTimeout(() => {
        li.remove();
    }, 200);
}

document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});