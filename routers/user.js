const routes = require('express').Router();

const { checkToken } = require('../helper/middleware');
const { Computer } = require('../models/Comp');
const { User } = require('../models/Users');
const { db } = require('../helper/database');

routes.get('/', checkToken, (req, res, next) => {
  res.status(200).send({ msg: 'main user page' });
});

routes.post('/', checkToken, async (req, res, next) => {
  try {
    const userRes = await db.transaction(async (t) => {
      const { name, age, gender, compNum } = req.body;
      await User.create(
        { name, age, gender, Computer: { number: compNum, type: 'develop' } },
        { transaction: t, include: [Computer] }
      );
      return await User.findOne({
        where: { id: createdUserId },
        include: Computer,
        transaction: t
      });
    });
    res.status(201).send({ data: userRes });
  } catch (e) {
    return next(e);
  }
});

routes.put('/comp/:compId', checkToken, async (req, res, next) => {
  try {
    const userWithUpdatedComp = await db.transaction(async (t) => {
      const compId = req.params.compId;
      const { type, compNum } = req.body;
      await Computer.update({ id: compId }, { number: compNum, type }, { transaction: t });
      return await User.findOne({
        where: {},
        include: {
          model: Computer,
          where: { id: compId }
        },
        transaction: t
      });
    });
    res.status(200).send({ data: userWithUpdatedComp });
  } catch (e) {
    return next(e);
  }
});

routes.delete('/:userId', checkToken, async (req, res, next) => {
  try {
    const deletedUser = await db.transaction(async (t) => {
      const userId = req.params.userId;
      const user = await User.findOne({
        where: { id: userId },
        include: Computer,
        transaction: t
      });
      await User.destroy({ id: userId }, { transaction: t });
      return user;
    });
    res.status(200).send({ data: deletedUser });
  } catch (e) {
    return next(e);
  }
});

routes.get('/raw', checkToken, async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).send({ data: users });
});

routes.get('/all', checkToken, async (req, res, next) => {
  const users = await User.findAll({
    include: Computer
  });
  res.status(200).send({ data: users });
});

module.exports = { routes };
