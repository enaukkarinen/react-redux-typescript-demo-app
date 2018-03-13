
import { Express, Request, Response } from 'express';

export default function initializeRoutes(app: Express) {
    app.get('/', (req: Request, res: Response) => {
        return res.render('index.pug');
    });
}