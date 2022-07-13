


![Amuse logo 1](https://user-images.githubusercontent.com/55769045/158077190-cae7fcfa-3693-4ffb-a442-6b05f534c8f2.png)

# Amuse

Amuse is a soundcloud clone where users can share their original music and other users can comment on their posts.

## Link to live site
https://amuse-app.herokuapp.com/

## Technologies used
![image](https://user-images.githubusercontent.com/55769045/158077336-42abae5d-5d9c-4283-9172-3f0c0c4bac79.png)
![image](https://user-images.githubusercontent.com/55769045/158077345-d81dc631-e5bd-4300-ae54-017c7790708c.png)
![image](https://user-images.githubusercontent.com/55769045/158077351-2577b3e5-a257-4871-ab35-4391a6ee43a8.png)
![image](https://user-images.githubusercontent.com/55769045/158077355-9918d271-854d-4636-b8dc-236cecc1cca9.png)
![image](https://user-images.githubusercontent.com/55769045/158077365-124b78bd-1084-4599-a5b3-d6c918c71ab3.png)
![image](https://user-images.githubusercontent.com/55769045/158077375-898fb063-db42-4d4a-ab44-49836079f7e1.png)
![image](https://user-images.githubusercontent.com/55769045/158077401-9125b47a-3399-4e17-bdb7-2c5701efa1cf.png)
![image](https://user-images.githubusercontent.com/55769045/158077408-b81bb3b1-db8a-40c7-a606-9853ccee643b.png)
![image](https://user-images.githubusercontent.com/55769045/158077413-b93ce13a-7fe4-453e-9dc2-7c98c5e25d22.png)
![image](https://user-images.githubusercontent.com/55769045/158077456-ba4d497a-be52-4b4b-866c-9e28fc0db2fd.png)

## Features

- The home page shows the most recent songs posted to the site
- Users can post songs and edit their titles as well as delete the song entirely
- Users can post edit and delete comments on songs
- Logged out users can see the main feed and comments but can not make or edit comments

## Getting Started
- Clone this repository:

   git clone https://github.com/arn1215/Amuse_v2.git

- Install dependencies from the root directory.

    npm install

- Create a user on PostgreSQL (psql) with a PASSWORD and CREATEDB privileges. Remember to include the semicolon ; at the end of the line.

   CREATE USER [username] WITH PASSWORD [password] CREATEDB;

- In the backend directory, create a .env file based on the .env.example file also found in the backend directory.

- Enter your chosen username and password into the respective fields in the .env file you just created. Enter your chosen database name and PORT. You may enter a secure combination of characters into JWT_SECRET or use the following in node in your terminal to generate a secure string.

require("crypto").randomBytes(32).toString("hex")

- Add a numeric value to JWT_EXPIRES_IN. By default, you may use 604800 which is the number of seconds in a week.


- Add the following proxy code to your package.json file in the frontend directory. If you chose any port other than 5000, replace the port number there now.

"proxy": "http://localhost:5000"

- Run the following code in your backend directory to run the creation of the database and migrations as well as to seed the database.

npx dotenv sequelize db:create
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all

- Start the backend and frontend servers in the backend and frontend directories, respectively. After starting the frontend server, your browser should open the application automatically. If not, navigate to http://localhost:3000

npm start

You can choose to login as a demo user to try out the sites functionality.





