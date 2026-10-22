import { Router } from 'express';
import { EquipmentController } from '../controllers/equipment.controller';
import { validateEquipementPayload } from '../middlewares/validateEquipment.middleware';

const router = Router();

router.post('/',validateEquipementPayload, EquipmentController.create);
router.get('/', EquipmentController.list);
router.patch('/:id', EquipmentController.updatePartial);

export default router;
