const { Router } = require('express');
const { createNewUser, getEveryone, getByID, removeMySelf } = require('../controllers');
const { validUser, Auth, checkIfUserExists } = require('../middlewares');

const router = Router();

router.post('/', validUser, createNewUser);
router.get('/', Auth, getEveryone);
router.get('/:id', Auth, checkIfUserExists, getByID);
router.delete('/me', Auth, removeMySelf);

module.exports = router;