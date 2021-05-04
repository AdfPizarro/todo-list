import { screen } from '@testing-library/jest-dom'
const project = require('./projects');
const body = require('./html.js')

test('Add project to array', () => {
  project.addProject('project');
  const projectList = JSON.parse(localStorage.getItem('projectList'));
  expect(projectList[projectList.length - 1].name).toEqual('project');
});

test('Add empty project to array', () => {
  expect(project.addProject('')).toBe('error');
});

test('Create projects', () => {
  document.body.innerHTML = body.htmlBody
  const projectContainer = document.querySelector('#projectContainer')
  let projectList = JSON.parse(localStorage.getItem('projectList'));
  projectContainer.appendChild(project.drawProjects());
  projectList = JSON.parse(localStorage.getItem('projectList'));
  expect(projectContainer).not.toBeEmptyDOMElement();
});

test('Create a list of projects for the form', () => {
  document.body.innerHTML = body.htmlBody
  let projectList = JSON.parse(localStorage.getItem('projectList'));
  project.getProjects('#taskProject');
  const taskProject = document.querySelector('#taskProject')
  expect(taskProject).toContainHTML('<option>Default</option>');
});
