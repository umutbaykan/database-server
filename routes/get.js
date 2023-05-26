const express = require("express");
const router = express.Router();

const GetController = require('../controllers/get')

router.get('/', GetController.Index);

module.exports = router;