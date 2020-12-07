const checkToken = (req, res, next) => {
  if (req.headers.autorization && req.headers.autorization !== '') {
    return next();
  }
  return next('You have to provider a token');
};

module.exports = { checkToken };
