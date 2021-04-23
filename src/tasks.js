let taskList = [];

if (localStorage.getItem('taskList') === null) {
  taskList = [];
} else {
  taskList = JSON.parse(localStorage.getItem('taskList'));
}

const Task = (name, description, priority, project, dueDate, completed) => ({
  name, description, priority, project, dueDate, completed,
});

const TaskHTML = (task, i) => {
  const taskItem = document.createElement('tr');
  taskItem.setAttribute('id', `tr${i}`);

  const tdName = document.createElement('td');
  const tdDescription = document.createElement('td');
  const tdPriority = document.createElement('td');
  const tdDueDate = document.createElement('td');
  const tdCompleted = document.createElement('td');
  const chkCompleted = document.createElement('button');
  const dltButton = document.createElement('button');
  const priorityDropdown = document.createElement('select');
  const pLow = document.createElement('option');
  const pNormal = document.createElement('option');
  const pUrgent = document.createElement('option');

  pLow.textContent = 'Low';
  pNormal.textContent = 'Normal';
  pUrgent.textContent = 'Urgent';

  pLow.setAttribute('value', 'Low');
  pNormal.setAttribute('value', 'Normal');
  pUrgent.setAttribute('value', 'Urgent');

  priorityDropdown.appendChild(pLow);
  priorityDropdown.appendChild(pNormal);
  priorityDropdown.appendChild(pUrgent);
  priorityDropdown.value = task.priority;

  priorityDropdown.setAttribute('class', 'form-select changePriority');
  priorityDropdown.setAttribute('id', `changePriority${i}`);

  tdName.textContent = task.name;
  tdDescription.textContent = task.description;
  tdPriority.appendChild(priorityDropdown);
  tdDueDate.textContent = task.dueDate;

  dltButton.setAttribute('id', `dlt${i}`);
  dltButton.setAttribute('class', 'mx-2 btn btn-danger deleteTask');
  dltButton.textContent = 'Delete';

  const btnColor = (task.completed) ? 'btn-success' : 'btn-danger';
  const btnText = (task.completed) ? 'Completed' : 'Pending';

  chkCompleted.setAttribute('class', `completTask btn ${btnColor}`);
  chkCompleted.setAttribute('id', `btnCompleted${i}`);
  chkCompleted.textContent = btnText;

  tdCompleted.appendChild(chkCompleted);
  taskItem.appendChild(tdName);
  taskItem.appendChild(tdDescription);
  taskItem.appendChild(tdPriority);
  taskItem.appendChild(tdDueDate);

  taskItem.appendChild(tdCompleted);
  tdCompleted.appendChild(dltButton);

  return taskItem;
};

function drawTasksByProject(projectName) {
  const taskView = document.createElement('table');
  const thead = document.createElement('thead');
  const thRow = document.createElement('tr');
  const headName = document.createElement('th');
  const headDescription = document.createElement('th');
  const headPriority = document.createElement('th');
  const headDueDate = document.createElement('th');
  const headCompleted = document.createElement('th');

  const tbody = document.createElement('tbody');
  tbody.setAttribute('id', 'tableBody');

  taskView.setAttribute('class', 'table');
  thead.setAttribute('class', 'thead-dark');
  headName.textContent = 'Name';
  headDescription.textContent = 'Description';
  headPriority.textContent = 'Priority';
  headDueDate.textContent = 'Due date';
  headCompleted.textContent = 'Options';

  thRow.appendChild(headName);
  thRow.appendChild(headDescription);
  thRow.appendChild(headPriority);
  thRow.appendChild(headDueDate);
  thRow.appendChild(headCompleted);

  thead.appendChild(thRow);
  taskView.appendChild(thead);

  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].project === projectName || projectName === 'all') {
      const task = TaskHTML(taskList[i], i);
      tbody.appendChild(task);
    }
  }

  taskView.appendChild(tbody);
  return taskView;
}

function addTask(name, description, priority, project, dueDate) {
  const task = Task(name, description, priority, project, dueDate, false);
  taskList.push(task);
  localStorage.setItem('taskList', JSON.stringify(taskList));

  return drawTasksByProject('all');
}

function changeTask(index) {
  if (taskList[index].completed) {
    taskList[index].completed = false;
    const chkCompleted = document.getElementById(`btnCompleted${index}`);
    chkCompleted.setAttribute('class', 'completTask btn btn-danger');
    chkCompleted.textContent = 'Pending';
  } else {
    taskList[index].completed = true;
    const chkCompleted = document.getElementById(`btnCompleted${index}`);
    chkCompleted.setAttribute('class', 'completTask btn btn-success');
    chkCompleted.textContent = 'Completed';
  }
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

function changePriority(index, priority) {
  taskList[index].priority = priority;
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

function dltTask(index) {
  const taskRow = document.getElementById(`tr${index}`);
  const tBody = document.getElementById('tableBody');
  tBody.removeChild(taskRow);
  taskList.splice(index, 1);
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

export {
  addTask, drawTasksByProject, changeTask, dltTask, changePriority,
};
