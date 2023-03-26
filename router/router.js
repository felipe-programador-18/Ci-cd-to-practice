const express = require('express');
const router = express.Router();

router.get('/more', (req, res) => {
	res.send('testing another router here');
});

router.get('/', (req, res) => {
	res.send('test to practice a bit more about ci and cd');
});
