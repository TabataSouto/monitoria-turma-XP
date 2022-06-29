const express = require('express');
const charactersController = require('../controllers/charactersController');
const characterValidation = require('../middlewares/characterValidation')

const router = express.Router();

router.get('/',  charactersController.getCharacters);
router.post('/', characterValidation, charactersController.createCharacter);

module.exports = router;