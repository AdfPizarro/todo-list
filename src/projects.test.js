// eslint-disable-next-line no-unused-vars
import { screen } from '@testing-library/jest-dom';
import htmlBody from './html.js';

const project = require('./projects');

test('Add project to array', () => {
  project.addProject('project');
  const projectList = JSON.parse(localStorage.getItem('projectList'));
  expect(projectList[projectList.length - 1].name).toEqual('project');
});

test('Add empty project to array', () => {
  expect(project.addProject('')).toBe('error');
});

test('Create projects', () => {
  document.body.innerHTML = htmlBody;
  const projectContainer = document.querySelector('#projectContainer');
  projectContainer.appendChild(project.drawProjects());
  expect(projectContainer).not.toBeEmptyDOMElement();
});

test('Create a list of projects for the form', () => {
  document.body.innerHTML = htmlBody;
  project.getProjects('#taskProject');
  const taskProject = document.querySelector('#taskProject');
  expect(taskProject).toContainHTML('<option>Default</option>');
});
