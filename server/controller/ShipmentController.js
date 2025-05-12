import { StatusCodes } from "http-status-codes";
import { getShipmentByIdService } from "../service/ShipmentService.js";
import customSuccessResponse from "../utils/customSuccussResponse.js";
import customErrorResponse from "../utils/customErrorResponse.js";

export const getShipmentController = async (req,res) => {
  try {
    const id = req.user.id;
    if(!id) res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse('user id is required', StatusCodes.BAD_REQUEST));
    const response = await getShipmentByIdService(id);
    res
      .status(StatusCodes.OK)
      .json(customSuccessResponse("shipment fetched successfully", response));
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        customErrorResponse(
          "something is wrong with get shipment controller",
          error
        )
      );
  }
};
