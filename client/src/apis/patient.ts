import { axiosInstance } from "./index.js";



export const patientDetailsRequest = async ({ token }:{token:string}) => {
    try {
        const response = await axiosInstance.get('/details', {
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
export const patientMeasurementRequest = async ({ token }:{token:string}) => {
    try {
        const response = await axiosInstance.get('/measurement', {
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
