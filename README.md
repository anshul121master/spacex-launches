GET STARTED: In the project directory, you can run:

Available Scripts:-

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### Folder Structure:-
The entire app is placed inside spacex-mission/src

/src/Components => This includes all the presentational Components.
/src/Container => This includes the stateful container Components.
/src/services/api.js => This file includes the fetch calls to an api.
/src/services/endpoints.js => This file includes all the endpoints as per requirements.

/App.js => This includes a parent component in which all sub-components in the app gets rendered.
/index.css => This majorly includes the css for setting up app layout as per requirements.

### Approach.

The entire app is divided into two major components:-
1. FilterComponent => includes the Filter options
2. MissionDetails => includes the Spacex Mission Cards.

=> Whenever any filter gets applied the state of FilterComponent gets changed which causes only the FilterComponent to re-render and the applied filter button background-color changes to orange.

=> Whenever Apply Filter button gets clicked the entire app gets re-render i.e App.js which fetches the relevant data as per filters applied from api end-point.

=> Components for generating cards and buttons are created seperately for reuse purposes.

### Thanks a lot

### Developed By: Anshul Agarwal.