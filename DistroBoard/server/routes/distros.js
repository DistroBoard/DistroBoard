// this file contains all the routes that will be used to display the distros page
import express from 'express';

// get handlers for our route
import {getDistros, createDistro, updateDistro} from '../controllers/distros.js';

const router = express.Router();

router.get('/', getDistros);
router.post('/', createDistro);
router.patch('/:id', updateDistro);

export default router;
