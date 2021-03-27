import 'reflect-metadata';
import './database';

import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(4000, () => {
    console.log("Server running on port 3000");
})