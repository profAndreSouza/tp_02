import express from 'express';
import routes from './routes';

const site = express();
site.use(routes);

site.listen(3333);