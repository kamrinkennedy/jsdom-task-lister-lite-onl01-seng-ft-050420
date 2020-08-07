
const taskForm = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');
const text = document.getElementById('new-task-description');




document.addEventListener("DOMContentLoaded", () => {
  // your code here
  taskForm.children[2].addEventListener('click', (e) => {
    e.preventDefault()
    console.log('This works')
    if (text.value) {
      taskList.innerHTML += `<li>${text.value}</li>`
      text.value = ''
    }
  });
});

