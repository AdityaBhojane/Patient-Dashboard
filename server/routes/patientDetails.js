import { Router } from 'express';
import { userValidation } from '../middleware/userValidation.js';
import { getPatientDetailsController, getPatientMeasurementController, getProgressController } from '../controller/PatientController.js';


const patientRouter = Router();

patientRouter.get("/details", userValidation, getPatientDetailsController);
patientRouter.get("/measurement", userValidation, getPatientMeasurementController);
patientRouter.get("/progress", userValidation, getProgressController);

export default patientRouter;