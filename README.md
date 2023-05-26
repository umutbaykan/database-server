# database-server tech test

This is a very simple server which aims to satisfy the requirements set out in the brief here;
https://github.com/makersacademy/course/blob/main/individual_challenges/database_server.md
In addition to the brief, get returns a status code of 404 if you try to retrieve a key that does not exist in memory.

Installation
---
```terminal
git clone https://github.com/umutbaykan/database-server.git
cd database-server
npm install
```
Starting the server
---
This launches the server with nodemon for development 
```terminal
npm run start
```
If you want to launch it without refreshing on changes
```terminal
node config.js
```
Once server is launched, you can use postman to get / set requests on the url's determined on the brief.

Testing
---
```terminal
jest
```

Approach
---
The program is split into a traiditonal MVC pattern in the folder structure to allow easier development on the long run.
Since there is currently no database, the 'model' in itself is an object that lives in memory. 

<h3>What happens when we want to plug in a database?</h3>

Once we know the database type we would first need to update the models to reflect the state of entries in the database.
Controllers need to be updated to retrieve the information from the database, and possibly would need to account for the syntax of ORM / ODM that we are using.
Configuration file needs to be updated to launch the server on test / production mode to use two different databases during deployment / testing.
Tests need to be configured to be applied on the test database.
