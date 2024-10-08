# Comments App

This project was built by using the following tools and dependencies:

### Backend

- Node.js
- Express.js
- Cors
- DotEnv
- MySQL (mysql2)
- Nodemon
- Morgan
- Sequelize
- Cookie-parser
- Faker-js
- JsonWebToken
- bcryptjs
- Jest for Unit Testing

## Setting up the local environment

### Backend Server (API)

1. Clone this repository on a specific path.
2. Copy the .env.example file and and rename it as `.env`.
3. Update the `.env` file with the data you will use for this project.
4. Open the terminal and run `npm install` to install all the project dependencies for the API.
5. Setting up database, we have two options:
   1. Import the SQL File that is located under `./src/database/backup/commentsdb` on your mysql environment (phpmyadmin, mysql cli, mysql workbench, etc). This is the faster and easy way to generate the whole DB, Tables and Records because in that file they were already generated.
   2. Run `node ./src/database/seeders/DatabaseSeeder.js`. This will Insert Roles and a Test User manually.
   3. if you need more test records to review the users or comments module, run `node ./src/database/seeders/ReplaceBySeederName.js` depending the Seeder you use, it will insert multiple records to the table.
6. Then, run `npm run dev` to execute the project environment.
7. Now the entire backend should be working correctly!.

### Run Unit Tests with Jest

File Location: `comments-app/src/tests/comment.test.js`

This test will verify that all the Comment endpoints are working as expected.

1. Open The terminal.
2. Go to the root directory (Project).
3. Run `npm test`.
4. And that will run the unit test. Once the test has finished it will return a status about the results.

### App (Frontend)

1. Open the terminal and go to the Frontend Directory `cd ./frontend`.
2. Run `npm install` to install all the project dependencies of the application.
3. Then, run `npm run dev` to execute the project environment.
4. On the Login Screen, please enter the following credentials:
   1. Email: `johndoe@testmail.com`
   2. Password: `abc123`
5. You will be redirected to the Dashboard screen. Now you will be able to go to The Comments and User Modules.

#### NOTE:

I built a TypeScript Version for the Comment Screen. So in the frontend project You'll find a jsx version and a tsx version. I already generated a route for each one and those links were added on the sidebar and on the navbar (mobile).

- TS Files and directories
  - `./src/ts-components/`: Here are located the components that I used to interact with each action of the crud and to display information like Formatted Dates, Icons, Titles and alerts.
  - `./src/views/comments-ts/`: Here is located the TS Version for the Comment Index component.
  - `./src/AxiosClient.ts`: this is a ts version for the axios client configuration.

### Preview

![Alt text](/screenshot.jpg?raw=true "Comments App By Ivan Jimenez")
