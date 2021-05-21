// this file contains all the routes that will be used to display the distros page
import express from 'express';

// get handlers for our route
import {getDistros, addDistros} from '../controllers/distros.js';

const router = express.Router();

router.get('/', getDistros);
router.post('/', addDistros);

export default router;
