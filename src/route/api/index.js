import { Router } from 'express';

import event from './event.js';

const router = new Router();

router.get('/', (req, res) => res.send(true));
router.use('/event', event);

export default router;
