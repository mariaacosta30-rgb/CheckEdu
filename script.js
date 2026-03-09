let taskCount = 0;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const profInput = document.getElementById('profInput');
    const reviewInput = document.getElementById('reviewInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value === "") {
        alert("Ei, Brawler! Dê um nome ao seu trabalho!");
        return;
    }

    const card = document.createElement('div');
    card.className = 'task-card';

    card.innerHTML = `
        <button class="delete-btn" onclick="removeTask(this)">FINALIZAR</button>
        <h3>🏆 ${taskInput.value}</h3>
        <p>👤 Professor(a): ${profInput.value || 'Não informado'}</p>
        <div class="review-box">
            <strong>📝 REVISÃO:</strong><br>
            ${reviewInput.value || 'Nenhuma anotação...'}
        </div>
    `;

    taskList.appendChild(card);
    
    taskCount++;
    updateCount();
    taskInput.value = "";
    profInput.value = "";
    reviewInput.value = "";
}

function removeTask(btn) {
    btn.parentElement.remove();
    taskCount--;
    updateCount();
}

function updateCount() {
    document.getElementById('count').innerText = taskCount;
}