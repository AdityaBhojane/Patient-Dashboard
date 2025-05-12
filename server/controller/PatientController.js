import { StatusCodes } from "http-status-codes";
import { getPatientDetailsService, getPatientMeasurementService, getProgressService } from "../service/PatientService.js";
import customErrorResponse from "../utils/customErrorResponse.js";
import customSuccessResponse from "../utils/customSuccussResponse.js";


export const getPatientDetailsController = async (req,res) => {
  try {
    const id = req.user.id;
    if(!id) res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse('user id is required', StatusCodes.BAD_REQUEST));
    const response = await getPatientDetailsService(id);
    res
      .status(StatusCodes.OK)
      .json(customSuccessResponse("details fetched successfully", response));
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        customErrorResponse(
          "something is wrong with get details controller",
          error
        )
      );
  }
};
export const getPatientMeasurementController = async (req,res) => {
  try {
    const id = req.user.id;
    if(!id) res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse('user id is required', StatusCodes.BAD_REQUEST));
    const response = await getPatientMeasurementService(id);
    res
      .status(StatusCodes.OK)
      .json(customSuccessResponse("details fetched successfully", response));
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        customErrorResponse(
          "something is wrong with get details controller",
          error
        )
      );
  }
};
export const getProgressController = async (req,res) => {
  try {
    const id = req.user.id;
    if(!id) res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse('user id is required', StatusCodes.BAD_REQUEST));
    const response = await getProgressService(id);
    res
      .status(StatusCodes.OK)
      .json(customSuccessResponse("details fetched successfully", response));
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        customErrorResponse(
          "something is wrong with get details controller",
          error
        )
      );
  }
};