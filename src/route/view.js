import { Router } from 'express';
import logger from '../logger.js';

const router = new Router();

router.get('/', (req, res) => {
    res.render('layout', { partial: 'home' });
});

router.get('/event', (req, res) => {
    logger.info('Getting Event Page');

    res.render('layout', { partial: 'event' });
});

export default router;
