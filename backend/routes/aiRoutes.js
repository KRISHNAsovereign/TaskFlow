const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { generatePlan } = require('../controllers/aiController');

router.post('/plan', auth, generatePlan);

module.exports = router;