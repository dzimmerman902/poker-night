import db from '../db.js';
import logger from '../logger.js';

export const getAll = async (req, res) => {
    const [results, fields] = await db.execute('select * from event');
    logger.info(`Get Events\n${JSON.stringify(results)}`);

    res.json(results);
};

export const create = async (req, res) => {
    logger.info(`Creating Event\n${JSON.stringify(req.body)}`);
    const [results, fields] = await db.execute(
        `
insert into event (season)
values (?)
    `,
        [req.body.season]
    );
    logger.info(`Event Created\n${JSON.stringify(results)}`);

    res.json(results);
};
