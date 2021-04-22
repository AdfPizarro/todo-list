const taskList = [];

const Task = (name, description, priority, project, dueDate) => {
  return {name, description, priority, project, dueDate};
};

const TaskHTML = (task) => {
  const taskItem = document.createElement('div');
  taskItem.setAttribute('class', 'd-flex flex-column');

  const itemName = document.createElement('h2');

  const itemBottom = document.createElement('div');
  itemBottom.setAttribute('class', 'd-flex justify-content-between');

  const itemDescription = document.createElement('p');
  const itemProject = document.createElement('p');
  const itemDueDate = document.createElement('p');

  itemName.textContent = task.name;
  itemDescription.textContent = task.description;
  itemProject.textContent = task.project;
  itemDueDate.textContent = task.dueDate;

  itemBottom.appendChild(itemDescription);
  itemBottom.appendChild(itemProject);
  itemBottom.appendChild(itemDueDate);

  taskItem.appendChild(itemName);
  taskItem.appendChild(itemBottom);

  return taskItem;
};

function addTask(name, description, priority, project, dueDate) {
  const task = Task(name, description, priority, project, dueDate);
  taskList.push(task);
  const taskView = document.createElement('div');
  for (let i = 0; i < taskList.length; i += 1) {
    const task = TaskHTML(taskList[i])
    taskView.appendChild(task);
  }
  return taskView;
};

export default addTask;
