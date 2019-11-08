import express from 'express';

import {GamePlayController} from '../controller/index.js';

const router = express.Router();
const controller = new GamePlayController();

router.get('/', controller.listAllGamePlays);
router.post('/', controller.insertGamePlay);
// Búsqueda
router.get('/id/:id', controller.getGamePlayById);
router.get('/today', controller.getGamePlaysFromToday);
router.get('/week', controller.getGamePlaysFromLastWeek);
router.get('/month', controller.getGamePlaysFromLastMonth);
router.get('/game/:id', controller.getGamePlaysByGame);
router.get('/game/:id/highest', controller.getHighestScoreGamePlayForGame);
router.get('/player/:id', controller.getGamePlaysByPlayer);
// Modificar/borrar
router.put('/:id', controller.editGamePlay);
router.delete('/:id', controller.deleteGamePlay);

export default router;