import { patientDetails } from "../model/patientDetails.js";
import { patientMeasurement } from "../model/patientMessurment.js";
import { ProgressTrack } from "../model/ProgressTracking.js";


export const getPatientDetailsService = async(id)=>{
    try {
        const response = await patientDetails.find({userId:id}).populate("userId");
        if(!response) throw new Error("no shipment for user");
        console.log(response.length)
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}
export const getPatientMeasurementService = async(id)=>{
    try {
        const response = await patientMeasurement.find({userId:id});
        if(!response) throw new Error("no shipment for user");
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const getProgressService = async(id)=>{
    try {
        const response = await ProgressTrack.find({userId:id});
        if(!response) throw new Error("no shipment for user");
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}