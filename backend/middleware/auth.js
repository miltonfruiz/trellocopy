const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).send({ error: 'Por favor, inicia sesión para acceder' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send({ error: 'Por favor, inicia sesión para acceder' });
  }
};

module.exports = auth;