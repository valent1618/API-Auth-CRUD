# API - Authentication and CRUD stuff

## Description

API for authentication and handle stuff with file.

- **MongoDB** Atlas is used for the database.
- **bcrypt** is used to encrypt the user's password before saving it to the DDB.
- **jsonwebtoken** is used to create a token to replace userId and improve security.
- **multer** is used to handle file.

I created a script to configure access to MongoDB Atlas.

## Routes

You can look at the routes at : https://valent1618.github.io/API-Auth-CRUD/

## Getting Started

### Dependencies

You need **NodeJs / NPM**

### Installing

1. **Clone this repo** with the command

```
git clone https://github.com/valent1618/AuthCRUD-API.git
```

2. **Check** if you have the latest version of **NodeJs and npm**

```
node -v && npm -v
```

Or install it : <https://nodejs.org/en/>

3. **Install** all the dependencies with **NPM**

```
npm install
```

4. **Create** an account on MongoDB Atlas

Create an account : <https://www.mongodb.com/cloud/atlas/register>

5. **Create** user for the databse

Create user in Security => Database Access => Add new.

> Select 'Read and write' for the Built-in Role

6. **Connect** MongoDB to API

```
npm run config
```

> Your cluster is something like : 'cluster0.aaaa.mongodb.net'

## RUN

```
node server
```

> This command runs the app at port 3000.

**OR**

You can install **nodemon** and run

```
nodemon server
```

> This command runs the app at port 3000 and will reload when you make changes.

Open [http://localhost:3000/api](http://localhost:3000/api) to view the swagger in your browser.
