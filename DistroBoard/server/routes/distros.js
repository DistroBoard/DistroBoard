// this file contains all the routes that will be used to display the distros page
import express from 'express';

// get handlers for our route
import {getDistros, getRandom, createDistro, updateDistro, deleteDistro, likeDistro} from '../controllers/distros.js';

const router = express.Router();

router.get('/', getDistros);
router.get('/random', getRandom);
router.post('/', createDistro);
router.patch('/:id', updateDistro);
router.delete('/:id', deleteDistro);
router.patch('/:id/likeDistro', likeDistro)

export default router;
