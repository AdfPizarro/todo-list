import addProject from './projects';
const taskList = [];


const taskSubmit = document.querySelector('#taskSubmit');

function addTask(name, description, priority, project, dueDate) {
  const task = Task(name, description, priority, project, dueDate);
  taskList.push(task);
};

taskSubmit.addEventListener('click', () => {
  const name = document.getElementById('taskName').value;
  const description = document.getElementById('taskDescription').value;
  const priority = document.getElementById('taskPriority').value;
  const project = document.getElementById('taskProject').value;
  const dueDate = document.getElementById('taskDueDate').value;
  addTask(name, description, priority, project, dueDate);
  drawTask(taskList)
});

const Task = (name, description, priority, project, dueDate) => {
  return {name, description, priority, project, dueDate};
};



const projectSubmit = document.querySelector('#projectSubmit');
projectSubmit.addEventListener('click', () => {
  const name = document.getElementById('projectName').value;
  const projectContainer = document.querySelector('#projectContainer');
  projectContainer.innerHTML = '';
  projectContainer.append(addProject(name))

});

const TaskHTML = (task) => {
  const taskItem = document.createElement('div');
  taskItem.setAttribute('class', 'd-flex flex-column');

  const itemName = document.createElement('h2');

  const itemBottom = document.createElement('div');
  itemBottom.setAttribute('class', 'd-flex justify-content-between');

  const itemDescription = document.createElement('p');
  const itemDueDate = document.createElement('p');

  itemName.textContent = task.name;
  itemDescription.textContent = task.description;
  itemDueDate.textContent = task.dueDate;

  itemBottom.appendChild(itemDescription);
  itemBottom.appendChild(itemDueDate);

  taskItem.appendChild(itemName);
  taskItem.appendChild(itemBottom);

  return taskItem;
};

function drawTask(taskList) {
  const taskView = document.querySelector('#taskView');
  taskView.innerHTML = '';
  for (let i = 0; i < taskList.length; i += 1) {
    const task = TaskHTML(taskList[i])
    taskView.appendChild(task);
  }
}
