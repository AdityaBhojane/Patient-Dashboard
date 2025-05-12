
import { patientProgressRequest } from '@/apis/progress';
import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';


export const usePatientProgress = () => {
    const token = useAuthStore((state) => state.token) || '';

    const { isFetching, isError, isSuccess, data} = useQuery({
        queryKey: ['progress'],
        queryFn:()=>patientProgressRequest({token}),
        
    });

    return {
        isFetching,
        isSuccess,
        isError,
        data
    };
};