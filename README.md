<h1 align="center">Wellness Technical Test 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

I use this repo and its different versions to practice new stuff I'm learning.

Data is stored in MongoDB Atlas and served through an API REST built using Express.js and Node.js, and deployed to Heroku.

Client was built with React using Hooks, React Bootstrap components and some Saas, and also deployed to Heroku.

App can be accessed in the link below👇

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[Jaime's Playground](https://jaimes-playground.herokuapp.com/)

<br/>

## Install

```sh
cd client; npm install; cd ../server; npm install;
```
Paste the following in the <code>.env</code> file:

```sh
PORT=5000

DB_NAME=wellness_data
DB_HOST=mongodb://localhost

DOMAIN=http://localhost:3000
```

## Usage

<br/>
Seed DB from .csv files:

```sh
cd server/bin; node seed.js;
```

In different terminals:

```sh
cd server; npm run dev;
```
```sh
cd client; npm start;
```
<br/>
<hr>
<br/>

## Endpoints Table

<br/>

### Client

| Verb | Endpoint         | Result        |
| ---- | ---------------- | ------------- |
| GET  | "/"              | Home page     |

<br/>

### Server

| Verb | Endpoint            | Result                              |
| ---- | ------------------- | ----------------------------------- |
| GET  | "/api/uses"         | All uses json                       |

<br/>
<hr>
<br/>

## Author

<br/>

👤 **Jaime Fernández-Castaño**

* Github: [@jaimeferncast](https://github.com/jaimeferncast)
* LinkedIn: [@jaimeferncast](https://linkedin.com/in/jaimeferncast)

<br/>
<br/>
<br/>

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_