import { Router } from 'express';
import { userValidation } from '../middleware/userValidation.js';
import { getShipmentController } from '../controller/ShipmentController.js';


const shipmentRouter = Router();

shipmentRouter.get("/shipment", userValidation, getShipmentController);

export default shipmentRouter;