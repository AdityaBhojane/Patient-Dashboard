import { signUpRequest } from '@/apis/auth';
import { useAuthStore } from '@/store/authStore';
import { useMutation } from '@tanstack/react-query';



export const useSignup = () => {
    const setToken = useAuthStore((state)=>state.setToken)


    const { isPending, isSuccess, error, mutateAsync: signUpMutation } = useMutation({
        mutationFn: signUpRequest,
        onSuccess: (response) => {
            console.log('Successfully sign up', response);
            setToken(response.data.token);
        },
        onError: (error) => {
            console.error('Failed to sign up', error);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signUpMutation
    };
};
