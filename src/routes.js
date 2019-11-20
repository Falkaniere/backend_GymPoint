import { Router } from 'express';
import adminController from './app/controllers/AdminController';
import StudentsController from './app/controllers/StudentsController';
import authMiddlaweres from './app/middleware/auth';

const routes = new Router();

routes.get('/admin', adminController.store);

routes.use(authMiddlaweres);

routes.post('/registerStudent', StudentsController.store);

export default routes;
