const router = require('express').Router();
const { generateAnswer, notFound, welcomeMessage } = require('../utils/response');

// Allow CORS
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Chatbot Answer
router.get('/api/v1/welcome', welcomeMessage());
router.post('/api/v1/answer', generateAnswer());

// Not Found
router.get('*', notFound());
router.post('*', notFound());

module.exports = router;
