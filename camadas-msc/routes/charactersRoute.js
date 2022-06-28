const express = require('express');
const charactersController = require('../controllers/charactersController');

const router = express.Router();

router.get('/', charactersController.getCharacters);

module.exports = router;