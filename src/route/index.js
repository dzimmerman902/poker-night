import { Router } from 'express';

import api from './api/index.js';
import view from './view.js';

const router = new Router();

router.use('/api', api);
router.use('/', view);

export default router;
