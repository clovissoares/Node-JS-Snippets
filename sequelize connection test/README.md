# Sequelize connection test

Simple sequelize database connection and migration test.

# How to use

In the main folder
´´´ bash
    npm init
´´´

Change the database.js file inside the config folder to the credentials of your database. 

´´´ javascript
    node index.js
´´´

If connection is ok, then

´´´ bash
    npx sequelize db:create
    npx sequelize db:migrate
´´´

Check the database to see if table test was created.