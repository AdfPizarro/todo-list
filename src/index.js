import {addProject, getProjects, drawProjects} from './projects.js';
import {addTask, drawTasks} from './tasks.js';

const taskSubmit = document.querySelector('#taskSubmit');

taskSubmit.addEventListener('click', () => {
  const taskContainer = document.querySelector('#taskContainer');
  const name = document.getElementById('taskName').value;
  const description = document.getElementById('taskDescription').value;
  const priority = document.getElementById('taskPriority').value;
  const project = document.getElementById('taskProject').value;
  const dueDate = document.getElementById('taskDueDate').value;
  taskContainer.innerHTML = '';
  taskContainer.append(addTask(name, description, priority, project, dueDate));
});

const projectSubmit = document.querySelector('#projectSubmit');

projectSubmit.addEventListener('click', () => {
  const projectContainer = document.querySelector('#projectContainer');
  const name = document.getElementById('projectName').value;
  projectContainer.innerHTML = '';
  projectContainer.append(addProject(name))
  getProjects();
});

window.addEventListener("load", function(){
  const projectContainer = document.querySelector('#projectContainer');
  const taskContainer = document.querySelector('#taskContainer');
  taskContainer.innerHTML = '';
  projectContainer.innerHTML = '';
  projectContainer.append(drawProjects());
  taskContainer.append(drawTasks());

  getProjects();

});
