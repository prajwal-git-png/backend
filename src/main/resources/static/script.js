const API_BASE = "http://localhost:8080/api/todos";

// Fetch and display todos on load
window.onload = function () {
    fetchTodos();
};

function fetchTodos() {
    fetch(API_BASE)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("todoList");
            list.innerHTML = '';
            data.forEach(todo => {
                const li = document.createElement("li");
                li.className = todo.completed ? "completed" : "";
                li.innerHTML = `
                    <span onclick="toggleComplete(${todo.id}, ${todo.completed})">${todo.title}</span>
                    <button onclick="deleteTodo(${todo.id})">Delete</button>
                `;
                list.appendChild(li);
            });
        });
}

function addTodo() {
    const input = document.getElementById("todoInput");
    const title = input.value.trim();
    if (!title) return;

    fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title, completed: false })
    }).then(() => {
        input.value = '';
        fetchTodos();
    });
}

function deleteTodo(id) {
    fetch(`${API_BASE}/${id}`, {
        method: "DELETE"
    }).then(() => fetchTodos());
}

function toggleComplete(id, currentStatus) {
    fetch(`${API_BASE}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id, completed: !currentStatus })
    }).then(() => fetchTodos());
}
