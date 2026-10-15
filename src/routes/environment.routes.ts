import { Router } from 'express';
import { EnvironmentController } from '../controllers/enviroment.controller';

const router = Router();

router.get('/', EnvironmentController.list);
router.post('/', EnvironmentController.create);
router.patch('/:id', EnvironmentController.updatePartial);

export default router;
