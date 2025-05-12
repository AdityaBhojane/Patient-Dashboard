import { Shipment } from "../model/shipment.js"


export const getShipmentByIdService = async(id)=>{
    try {
        const response = await Shipment.find({userId:id}).populate('medicationId');
        if(!response) throw new Error("no shipment for user");
        console.log(response.length)
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}
 