import { Router } from 'express';
import * as EquipmentController from './equipment.controller';

const router = Router();

router 
    .route('/equipment')
    .post(EquipmentController.createEquipment)
router
    .route('/equipment')
    .get(EquipmentController.readEquipment);

router  
    .route('/equipment')
    .put(EquipmentController.updateEquipment);
router
    .route('/equipment/:equipmentId')
    .delete(EquipmentController.deleteEquipment);

export default router;