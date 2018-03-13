
import * as express from 'express';
import { join } from 'path';
const port = 8080;
const app = express();

import initializeRoutes from './routes';

// include statistics
app.use('/target', express.static(join(__dirname, '../../', 'dist')));

// set up template engine
app.set('views', join(__dirname, 'views'));

initializeRoutes(app);

app.listen(port, () => {
    console.log(`Now listening on ${port}`);
});