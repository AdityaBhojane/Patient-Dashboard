
import { patientShipmentRequest } from '@/apis/shipment';
import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';


export const useShipment = () => {
    const token = useAuthStore((state) => state.token) || '';

    const { isFetching, isError, isSuccess, data} = useQuery({
        queryKey: ['shipment'],
        queryFn:()=>patientShipmentRequest({token}),
        
    });

    return {
        isFetching,
        isSuccess,
        isError,
        data
    };
};