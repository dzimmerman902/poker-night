import { Router } from 'express';

import * as event from '../../controller/event.js';

const router = new Router();

router.get('/', event.getAll);
router.post('/', event.create);

export default router;
