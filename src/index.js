import express from 'express';
import logger from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import routes from './route/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

// Routes
app.use(routes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
