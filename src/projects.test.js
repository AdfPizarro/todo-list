const project = require('./projects');
const tasks = require('./tasks');


test('Add project to array', () => {
  project.addProject('project');
  const projectList = JSON.parse(localStorage.getItem('projectList'));
  expect(projectList[projectList.length - 1].name).toEqual('project');
});

test('Add task to array', () => {
  tasks.addTask('name', 'description', 'priority', 'project', '2021-05-03T20:29:38.472Z');
  const taskList = JSON.parse(localStorage.getItem('taskList'));
  expect(taskList[taskList.length - 1].name).toEqual('name');
  expect(taskList[taskList.length - 1].description).toEqual('description');
  expect(taskList[taskList.length - 1].priority).toEqual('priority');
  expect(taskList[taskList.length - 1].project).toEqual('project');
  expect(taskList[taskList.length - 1].dueDate).toEqual('2021-05-03T20:29:38.472Z');
});
