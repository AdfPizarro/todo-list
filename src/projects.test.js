const project = require('./projects');

test('Add project to array', () => {
  project.addProject('project');
  const projectList = JSON.parse(localStorage.getItem('projectList'));
  expect(projectList[projectList.length - 1].name).toEqual('project');
});

test('Add empty project to array', () => {
  expect(project.addProject('')).toBe('error');
});
