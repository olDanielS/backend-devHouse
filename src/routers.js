import { Router } from 'express';

import SessionControler from './Controllers/SessionControler';
import HouseController from './Controllers/HouseController';

import multer from 'multer';
import uploadsConfig from './config/uploadsConfig';

const routes = new Router();
const upload = multer(uploadsConfig);

routes.post('/login', SessionControler.store);
routes.post('/houses', upload.single('thumbnail'), HouseController.store)

export default routes;