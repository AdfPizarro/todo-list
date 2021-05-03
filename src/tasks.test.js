const tasks = require('./tasks');

test('Add task to array', () => {
  tasks.addTask('name', 'description', 'priority', 'project', '2021-05-03T20:29:38.472Z');
  const taskList = JSON.parse(localStorage.getItem('taskList'));
  expect(taskList[taskList.length - 1].name).toEqual('name');
  expect(taskList[taskList.length - 1].description).toEqual('description');
  expect(taskList[taskList.length - 1].priority).toEqual('priority');
  expect(taskList[taskList.length - 1].project).toEqual('project');
  expect(taskList[taskList.length - 1].dueDate).toEqual('2021-05-03T20:29:38.472Z');
});

test('Add task with empty name', () => {
  expect(tasks.addTask('', 'description', 'priority', 'project', '2021-05-03T20:29:38.472Z')).toBe('error');
});

test('Add task with empty description', () => {
  expect(tasks.addTask('name', '', 'priority', 'project', '2021-05-03T20:29:38.472Z')).toBe('error');
});

test('Add task with empty priority', () => {
  expect(tasks.addTask('name', 'description', '', 'project', '2021-05-03T20:29:38.472Z')).toBe('error');
});

test('Add task with empty project', () => {
  expect(tasks.addTask('name', 'description', 'priority', '', '2021-05-03T20:29:38.472Z')).toBe('error');
});

test('Add task with empty date', () => {
  expect(tasks.addTask('name', 'description', 'priority', 'project', '')).toBe('error');
});

test('Change task status to completed', () => {
  tasks.addTask('name', 'description', 'priority', 'project', '2021-05-03T20:29:38.472Z');
  let taskList = JSON.parse(localStorage.getItem('taskList'));
  tasks.changeTask(taskList.length - 1);
  taskList = JSON.parse(localStorage.getItem('taskList'));
  expect(taskList[taskList.length - 1].completed).toEqual(true);
});

test('Change task status to Pending', () => {
  tasks.addTask('name', 'description', 'priority', 'project', '2021-05-03T20:29:38.472Z');
  let taskList = JSON.parse(localStorage.getItem('taskList'));
  tasks.changeTask(taskList.length - 1);
  tasks.changeTask(taskList.length - 1);
  taskList = JSON.parse(localStorage.getItem('taskList'));
  expect(taskList[taskList.length - 1].completed).toEqual(false);
});

test('Change task priority', () => {
  tasks.addTask('name', 'description', 'priority', 'project', '2021-05-03T20:29:38.472Z');
  let taskList = JSON.parse(localStorage.getItem('taskList'));
  tasks.changePriority(taskList.length - 1, 'Urgent');
  taskList = JSON.parse(localStorage.getItem('taskList'));
  expect(taskList[taskList.length - 1].priority).toEqual('Urgent');
});

test('Delete task', () => {
  tasks.addTask('name', 'description', 'priority', 'project', '2021-05-03T20:29:38.472Z');
  let taskList = JSON.parse(localStorage.getItem('taskList'));
  const taskCount = taskList.length;
  tasks.dltTask(taskList.length - 1);
  taskList = JSON.parse(localStorage.getItem('taskList'));
  expect(taskList.length).toBe(taskCount - 1);
});

test('Update task', () => {
  tasks.addTask('name', 'description', 'priority', 'project', '2021-05-03T20:29:38.472Z');
  let taskList = JSON.parse(localStorage.getItem('taskList'));
  tasks.updateTask(taskList.length - 1, 'Updated name', 'Updated description', 'Updated priority', 'Updated project', '2021-05-03T20:29:38.472Z');
  taskList = JSON.parse(localStorage.getItem('taskList'));
  expect(taskList[taskList.length - 1].name).toEqual('Updated name');
  expect(taskList[taskList.length - 1].description).toEqual('Updated description');
  expect(taskList[taskList.length - 1].priority).toEqual('Updated priority');
  expect(taskList[taskList.length - 1].project).toEqual('Updated project');
  expect(taskList[taskList.length - 1].dueDate).toEqual('2021-05-03T20:29:38.472Z');
});
