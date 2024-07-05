# Miles-Map

<p align="center">
  <img src="/frontend/src/assets/images/miles-map-logo.png" alt="miles-map-logo">
</p>

## Background and Overview

Miles-Map is a project management application where users can create projects and tasks for themselves or team members, as well as visualize the completion status of said project. This app provides you the opportunity to get and stay organized with others!

## Technologies Used
* Miles-Map was built using a MongoDB NoSQL database, Express web application framework, React-Redux frontend, and Node.js backend.
* We also used Axios for API calls, Rechart.js for the progress chart, and Material UI for autocomplete functionality.

## Functionality and MVP

### User Authentication
* Users will be able to sign up and create a new account, as well as log in to existing accounts (also accessible via demo login). Only logged in users will be able to use the functionality of the app.

<img width="800" src="/frontend/src/assets/images/login-demo.gif" alt="">

### Projects
* Users are able to view all projects in the project drawer. Upon clicking on a project, the user will be redirected to a project show page that details all the project's tasks.
* Users are able to add, edit and delete existing projects.

<img width="800" src="/frontend/src/assets/images/create-project.gif" alt="">

### Tasks
* Users can view all of the tasks related to a project, as well as add, edit and delete projects.
* Users will also have the ability to mark a task as complete or incomplete, which will update the project's completeness status.

<img width="800" src="/frontend/src/assets/images/create-task.gif" alt="">
<img width="800" src="/frontend/src/assets/images/task-completion.gif" alt="">

### Assign Tasks
* Users will have the ability to assign tasks that are not completed to anyone in the app. Upon assigning a task, the user who the task is assigned to will be able to see the task in their tasks show page.

<img width="800" src="/frontend/src/assets/images/assign-task.gif" alt="">
