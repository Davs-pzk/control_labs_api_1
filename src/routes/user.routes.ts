import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { validateUserPayload } from '../middlewares/validateUser.middleware';

const router = Router();

router.get('/', UserController.list);
router.post('/',validateUserPayload, UserController.create);
router.get('/:id', UserController.getById);
router.patch('/:id', UserController.updatePartial);
router.delete('/:id', UserController.remove);

export default router;
