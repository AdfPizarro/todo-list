import {addProject, getProjects, drawProjects} from './projects.js';
import {addTask, drawTasksByProject, changeTask, dltTask, changePriority} from './tasks.js';

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
    refreshEventListener();
});

const projectSubmit = document.querySelector('#projectSubmit');

projectSubmit.addEventListener('click', () => {
  const projectContainer = document.querySelector('#projectContainer');
  const name = document.getElementById('projectName').value;
  projectContainer.innerHTML = '';
  projectContainer.append(addProject(name))
  getProjects();
  refreshEventListener();
});

window.addEventListener("DOMContentLoaded", function(){
  const projectContainer = document.querySelector('#projectContainer');
  const taskContainer = document.querySelector('#taskContainer');
  taskContainer.innerHTML = '';
  projectContainer.innerHTML = '';
  projectContainer.append(drawProjects());
  taskContainer.append(drawTasksByProject("all"));
  getProjects();
  refreshEventListener();
});

function refreshEventListener(){
  const projectButton = document.querySelectorAll('.projectButton');
  projectButton.forEach((button) => {
    button.addEventListener('click', () => {
      taskContainer.innerHTML = '';
      taskContainer.append(drawTasksByProject(button.textContent));
      completTask();
      deleteTask();
      modifyPriority()
    });
  });
  completTask();
  deleteTask();
  modifyPriority()
}

function completTask(){
  const completTask = document.querySelectorAll('.completTask');
  completTask.forEach((check) => {
    check.addEventListener('click', () => {

      changeTask(parseInt(check.id.match(/\d+/gm)));
    });
  });
}

function modifyPriority(){

  const priorityDropdown = document.querySelectorAll('.changePriority');
  priorityDropdown.forEach((dropDown) => {
    dropDown.addEventListener('change', () => {

      changePriority(parseInt(dropDown.id.match(/\d+/gm)),dropDown.value);
    });
  });
}

function deleteTask(){
  const deleteTask = document.querySelectorAll('.deleteTask');
  deleteTask.forEach((button) => {
    button.addEventListener('click', () => {
      taskContainer.innerHTML = '';
      taskContainer.append(dltTask(parseInt(button.id.match(/\d+/gm))));
      refreshEventListener();
    });
  });
}
