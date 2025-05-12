import { axiosInstance } from "./index.js";

export const patientProgressRequest = async ({ token }:{token:string}) => {
    try {
        const response = await axiosInstance.get('/progress', {
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