var express = require('express');
var router = express.Router();
import { getUsers, getUser, deleteUser, createUser, updateUser } from '../controller/users';
const  { validate } = require("../Validation/inputValidation")

// var database = require('../database.json');

/* GET users listing. */

router.get('/', getUsers);

// router.post('/', validate, createUser);

router.route('/').post(validate, createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.put('/:id', updateUser);

export default router;