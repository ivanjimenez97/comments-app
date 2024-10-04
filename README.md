# Gym Management API

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

## Setting up the local environment

### Backend Server (API)

1. Clone this repository on a specific path.
2. Copy the .env.example file and and rename it as `.env`.
3. Update the `.env` file with the data you will use for this project.
4. Open the terminal and run `npm install` to install all the project dependencies for the API.
5. Setting up database, we have two options:
   1. Run `node ./src/database/seeders/DatabaseSeeder.js`.
   2. if you need test records to review the users or comments module, run `node ./src/database/seeders/ReplaceBySeederName.js`
   3. Import the SQL File that is located under `./src/database/commentsdb` on your mysql environment (phpmyadmin, mysql cli, mysql workbench, etc).
6. Then, run `npm run dev` to execute the project environment.
7. Now the entire backend should be working correctly!.

### App (Frontend)

1. Open the terminal and go to the Frontend Directory `cd ./frontend`.
2. Run `npm install` to install all the project dependencies of the application.
3. Then, run `npm run dev` to execute the project environment.
4. On the Login Screen, please enter the following credentials:
   1. Email: `johndoe@test.com`
   2. Password: `abc123`
5. You will be redirected to the Dashboard screen. Now you will be able to go to The Comments and User Modules.
