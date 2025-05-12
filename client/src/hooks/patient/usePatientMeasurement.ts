
import { patientMeasurementRequest } from '@/apis/patient';
import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';


export const usePatientMeasurement = () => {
    const token = useAuthStore((state) => state.token) || '';

    const { isFetching, isError, isSuccess, data} = useQuery({
        queryKey: ['measurement'],
        queryFn:()=>patientMeasurementRequest({token}),
        
    });

    return {
        isFetching,
        isSuccess,
        isError,
        data
    };
};