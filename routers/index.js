const routes = require('express').Router();

routes.get('/', (req, res, next) => {
  res.status(200).send({ msg: 'main page' });
});

routes.get('/:urlParam', (req, res, next) => {
  res.status(200).send({ msg: `Url param is ${req.params.urlParam}` });
});

routes.post('/', (req, res, next) => {
  res.status(201).send({ msg: 'this is post' });
});

routes.put('/', (req, res, next) => {
  res.status(200).send({ msg: 'this is put' });
});

routes.delete('/', (req, res, next) => {
  res.status(200).send({ msg: 'this is delete' });
});

module.exports = { routes };
