# E-commerce Back-end

## Description
This Node application was created to serve as the backend for an E-commerce website.

## Installation
This application requires several npm packages: express, sequelize, mysql2, and dotenv. 

To get started, run `npm init -y` to set up a package.json file for your dependencies. Then run `npm i 'package name'` where 'package name' is express, sequelize, mysql2, and dotenv. You'll also need to set up your own .env file with the variables DB_NAME, DB_USER, and DB_PASSWORD. DB_NAME should be set to `'ecommerce_db'` while DB_USER and DB_PASSWORD will depend on the user name and password set up in your local MySQL environment.

## Usage
To run the application you'll first need to create the database by starting your MySQL environment. Once you're in the environment run `source db/schema.sql` to create the ecommerce_db. Exit the MySQL environment and run `npm run seed` to populate the database. Then run `npm run start` to spin up the server.

Once the server is up and running you are able to use the api routes to perform CRUD operations on the database. I used Insomnia to test the API requests, which include viewing the contents of each table, viewing the details about one item in a table, adding a new item to each table, updating an item in the table, and deleting an item from the table. 

You can view a walkthrough video of how to setup and run the application at the link below:

https://drive.google.com/file/d/12sJwRre9lYA84fDKRtBsiZPWylxsr2t2/view

## License
Please refer to the LICENSE in the repo.
