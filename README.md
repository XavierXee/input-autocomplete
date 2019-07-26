# AutoComplete Input
~~~~
node v10.15.3
npm v6.4.1
typescript v3.5.3
~~~~

### Notes:
The solution consist on a small React app running on localhost:8000 using yarn package manager and jest for testing.
The use of React alongside with Axios is justified by the need in this app to dynamically manipulate the DOM based on
an external API calls.

### Install, Build and Start:
Go to the source folder: /app
After dependencies are installed, 'yarn run start' command will run the react-app script to start the app.
~~~~
cd app
yarn install
yarn run start
~~~~
Then connect to :
~~~~
http://localhost:8080 
~~~~

### Tests:
Run unit tests
~~~~
cd app
yarn run test
~~~~
Run integration tests
~~~~
cd app
yarn run test:e2e
~~~~
