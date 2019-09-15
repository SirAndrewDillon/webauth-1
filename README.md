# Authentication Project

# Overview

This repository holds all backend files for the FoodieFun application. You can find it deployed [here](https://foodiefun-api.herokuapp.com/api/).

## TECH USED

- Node.js
- Express
- Helmet & Cors
- Knex
- SQLite3 (development)
- MySQL (production)
- Jest & Supertest

## API URL

## Installation

Fork/Clone the repository. In the same directory as the package.json, run:

`npm install`

This will install all packages. To start the server:

`npm start`

To start the server using nodemon:

`npm run dev`

To test the repository:

`npm test`

## Test Accounts

`username: admin`

`password: password`

## SCHEMA

`users`

```
{
  "id": 1,                             // Integer [Primary key]
  "username": "admin",                 // String [Required, Unique]
  "password": "password"               // String [Required]
}
```

# AUTH ROUTES

## **REGISTER**

### **Registers a user**

_Method Url:_ `https://foodiefun-api.herokuapp.com/api/auth/register`

_HTTP method:_ **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description    |
| ---------- | ------ | -------- | -------------- |
| `username` | String | Yes      | Must be unique |
| `password` | String | Yes      |                |

_example:_

```
{
  "username": "admin",
  "password": "password"
}
```

#### Response

##### 201 (Created)

> If you successfully register a user the endpoint will return an HTTP response with a status code `201` and a body as below.

```
{
    "message": "Created user",
    "user": {
        "id": 1,
        "username": "admin"
    }
}
```

##### 400 (Bad Request)

> If you send in invalid/incomplete, the endpoint will return an HTTP response with a status code `400` and a body as below.

```
{
    "message": "Required parameter missing"
}
```

##### 422 (Unprocessable Entity)

> If the username already exists, the endpoint will return an HTTP response with a status code `422` and a body as below.

```
{
    "message": "Username already exists"
}
```

---

## **LOGIN**

### **Logs a user in**

_Method Url:_ `http://localhost:4949/api/auth/login`

_HTTP method:_ **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description                                                  |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| `username` | String | Yes      | Must match a username in the database                        |
| `password` | String | Yes      | Must match a password in the database corresponding username |

_example:_

```
{
  "username": "admin",
  "password": "password"
}
```

#### Response

# Overview

This repository holds all backend files for the Authentication Project. You can find it deployed [here](http://localhost:4949/api/).

## TECH USED

- Node.js
- Express
- Helmet & Cors
- Knex
- SQLite3
- MySQL
- Express Session
- Bcryptjs

## API URL

## Installation

Fork/Clone the repository. In the same directory as the package.json, run:

`npm i`

This will install all packages. To start the server:

`npm start`

To start the server using nodemon:

`npm run server`

To test the repository:

`npm test`

## Test Accounts

`username: admin`

`password: password`

## SCHEMA

`users`

```
{
  "id": 1,                             // Integer [Primary key]
  "username": "admin",                 // String [Required, Unique]
  "password": "password"               // String [Required]
}
```

# AUTH ROUTES

## **REGISTER**

### **Registers a user**

_Method Url:_ `http://localhost:4949/api/auth/register`

_HTTP method:_ **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description    |
| ---------- | ------ | -------- | -------------- |
| `username` | String | Yes      | Must be unique |
| `password` | String | Yes      |                |

_example:_

```
{
  "username": "admin",
  "password": "password"
}
```

#### Response

##### 201 (Created)

> If you successfully register a user the endpoint will return an HTTP response with a status code `201` and a body as below.

```
{
    "message": "Created user",
    "user": {
        "id": 1,
        "username": "admin"
    }
}
```

##### 400 (Bad Request)

> If you send in invalid/incomplete, the endpoint will return an HTTP response with a status code `400` and a body as below.

```
{
    "message": "Required parameter missing"
}
```

##### 422 (Unprocessable Entity)

> If the username already exists, the endpoint will return an HTTP response with a status code `422` and a body as below.

```
{
    "message": "Username already exists"
}
```

---

## **LOGIN**

### **Logs a user in**

_Method Url:_ `https://localhost:4949/api/auth/login`

_HTTP method:_ **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description                                                  |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| `username` | String | Yes      | Must match a username in the database                        |
| `password` | String | Yes      | Must match a password in the database corresponding username |

_example:_

```
{
  "username": "admin",
  "password": "password"
}
```

#### Response

##### 200 (OK)

> If you successfully login, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
##### 200 (OK)
>If you successfully login, the endpoint will return an HTTP response with a status code `200` and a body as below.
```

{
"message": "You have been identified successfuly",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhdmlkIiwiaWF0IjoxNTY0Mzk3ODYyLCJleHAiOjE1NjQ2NTcwNjJ9.\_wanT3asvdrD-O4qFJhCqCDBFZbDnLFNVETZPaQJ52M"
}

```
##### 400 (Bad Request)
>If you send in invalid fields, the endpoint will return an HTTP response with a status code `400` and a body as below.
```

{
"message": "Missing required credentials"
}

```
##### 401 (Not Found)
>If you send in a username that does not match one in the database, the endpoint will return an HTTP response with a status code `401` and a body as below.
```

{
"message": "Wrong credentials"
}

```

```
