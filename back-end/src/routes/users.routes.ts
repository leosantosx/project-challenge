import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

const usersRouter = Router();

usersRouter.get('/', async (request: Request, response: Response) => {
    const userRepository = getRepository(User)

    const users = await userRepository.find();

    response.json(users);
})

usersRouter.post('/', async (request: Request, response: Response) => {

    const { firstName, lastName, email, age } = request.body

    const userRepository = getRepository(User);

    const emailAlreadyExists = await userRepository.findOne({
        where: { email }
    })

    if(emailAlreadyExists){
        return response.json({ message: 'This email address already exists'});
    }

    const user = userRepository.create({
        firstName,
        lastName,
        email,
        age,
    })

    await userRepository.save(user);

    response.json(user);
})

usersRouter.delete('/:id', async (request: Request, response: Response) => {
    const { id } = request.params;
    const userRepository = getRepository(User);
    await userRepository.delete(id);

    response.status(204).json();
})

usersRouter.put('/:id', async (request: Request, response: Response) => {
    const { id } = request.params;

    const { firstName, lastName, email, age } = request.body

    const user = {
        firstName,
        lastName,
        email,
        age,
    };

    const userRepository = getRepository(User);

    await userRepository.update(id, user)

    response.status(204).json();
})

export default usersRouter;