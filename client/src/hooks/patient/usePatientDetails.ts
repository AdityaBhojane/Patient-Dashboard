
import { patientDetailsRequest } from '@/apis/patient';
import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';


export const usePatientDetails = () => {
    const token = useAuthStore((state) => state.token) || '';

    const { isFetching, isError, isSuccess, data} = useQuery({
        queryKey: ['get_details'],
        queryFn:()=>patientDetailsRequest({token}),
        
    });

    return {
        isFetching,
        isSuccess,
        isError,
        data
    };
};
