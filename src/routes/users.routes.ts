import { Router, Request, Response } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request: Request, response: Response) => {
    response.json({});
})

usersRouter.post('/', (request: Request, response: Response) => {
    response.json({});
})

export default usersRouter;