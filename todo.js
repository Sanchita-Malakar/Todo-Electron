const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") return; // ignore empty input

  // Create <li>
  const li = document.createElement("li");

  // Add text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "✖";
  delBtn.classList.add("deleteBtn");

  // Append span + button inside li
  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";

  // Mark as completed
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete task
  delBtn.addEventListener("click", () => {
    li.remove();
  });
});

let draggable = false;

document.addEventListener("dblclick", () => {
  draggable = !draggable; // toggle state

  if (draggable) {
    document.body.style.webkitAppRegion = "drag";
    document.body.classList.add("drag-mode");
    console.log("Dragging enabled");
  } else {
    document.body.style.webkitAppRegion = "no-drag";
    document.body.classList.remove("drag-mode");
    console.log("Dragging disabled");
  }
});

