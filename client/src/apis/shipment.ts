import { axiosInstance } from "./index.js";

export const patientShipmentRequest = async ({ token }:{token:string}) => {
    try {
        const response = await axiosInstance.get('/shipment', {
            headers:{
                'x-access-token':token
            }
        });
        return response.data;
    } catch(error) {
        console.error(error);
        throw error;     
    }
};