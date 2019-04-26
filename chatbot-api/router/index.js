const router = require('express').Router();
const cors = require('cors');

const chatbotController = require('../controllers/chatbotController');
const baseController = require('../controllers/baseController');

// Allow CORS for all routes
router.use(cors());

// Chatbot Answer
router.get('/api/v1/welcome', chatbotController.welcomeMessage);
router.post('/api/v1/answer', chatbotController.generateAnswer);

// Not Found
router.get('*', baseController.notFound);
router.post('*', baseController.notFound);

module.exports = router;
