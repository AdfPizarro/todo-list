const taskList = [];
const projectList = [];

const taskSubmit = document.querySelector('#taskSubmit');
taskSubmit.addEventListener('click', () => {
  const name = document.getElementById('taskName').value;
  const description = document.getElementById('taskDescription').value;
  const priority = document.getElementById('taskPriority').value;
  const project = document.getElementById('taskProject').value;
  const dueDate = document.getElementById('taskDueDate').value;
  addTask(name, description, priority, project, dueDate);
});

function addTask(name, description, priority, project, dueDate) {
  const task = Task(name, description, priority, project, dueDate);
  taskList.push(task);
};

const Task = (name, description, priority, project, dueDate) => {
  return {name, description, priority, project, dueDate};
};

const projectSubmit = document.querySelector('#projectSubmit');
projectSubmit.addEventListener('click', () => {
  const name = document.getElementById('projectName').value;
  addTask(name);
});

function addTask(name) {
  const project = Task(name);
  projectList.push(project);
};

const Project = (name) => {
  return {name};
};
