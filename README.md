# Interview Scheduler
  a modern client application using the React view library.

## Functionalty
A single page application (SPA) called Interview Scheduler, built using React.
Data is persisted by the API server using a PostgreSQL database.
The client application communicates with an API server over HTTP, using the JSON format.
Jest tests are used through the development of the project.

## Behavioural Requirements
- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many spots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data.

## Technical Specifications
- React
- Webpack, Babel
- Axios, WebSockets
- Axios
- Storybook, Webpack Dev Server, Jest, Testing Library

## Setup

Install dependencies with `npm install`.

## Screenshots
!["add new appointment"] https://github.com/SwaniEryani/scheduler/blob/master/docs/AddAppointment.png?raw=true
!["list of appoinyments"] https://github.com/SwaniEryani/scheduler/blob/master/docs/listOfAppointments.png?raw=true
!["validation"] https://github.com/SwaniEryani/scheduler/blob/master/docs/Validation.png?raw=true
!["Error_save"] https://github.com/SwaniEryani/scheduler/blob/master/docs/error_save.png?raw=true
!["Error_delete"] https://github.com/SwaniEryani/scheduler/blob/master/docs/error_delete.png?raw=true
## Reference
- React Documentation
- Storybook Documentation
- Jest Documentation
- Axios Example
