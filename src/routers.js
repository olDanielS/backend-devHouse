import { Router } from 'express';
import SessionControler from '../Controllers/SessionControler';

const routes = new Router();

routes.post('/login', SessionControler.store);

export default routes;