// docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=ADMIN1!1!1!1root' -p 1433:1433 -d mcr.microsoft.com/mssql/server
// CREATE DATABASE training_db;

const express = require('express');
const bodyParser = require('body-parser');
const { db } = require('./helper/database');

const { routes: mainRouting } = require('./routers');
const { routes: userRouting } = require('./routers/user');

const app = express();

app.use(bodyParser.json());

app.use(mainRouting); // '/'
app.use('/user', userRouting);

app.use((req, res, next) => {
  res.status(404).send({ msg: 'Page Not Found' });
});

app.use((err, req, res, next) => {
  res.status(400).send({ error: err });
});

db.authenticate()
  .then(() => {
    return db.sync();
  })
  .then(() => {
    app.listen(3000, () => {
      console.log('Running on port 3000...');
    });
  })
  .catch((e) => {
    console.error(e);
  });
