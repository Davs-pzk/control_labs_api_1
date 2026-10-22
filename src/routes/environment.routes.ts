import { Router } from 'express';
import { EnvironmentController } from '../controllers/enviroment.controller';
import { validateEnvironmentPayload } from '../middlewares/validateEnvironment.middleware';

const router = Router();

router.get('/', EnvironmentController.list);
router.post('/',validateEnvironmentPayload, EnvironmentController.create);
router.patch('/:id', EnvironmentController.updatePartial);

export default router;
