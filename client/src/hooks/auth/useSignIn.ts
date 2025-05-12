import { signInRequest } from '@/apis/auth';
import { useAuthStore } from '@/store/authStore';
import { useMutation } from '@tanstack/react-query';






export const useSignin = () => {
    const setToken = useAuthStore((state)=>state.setToken)

    const { isPending, isSuccess, error, mutateAsync: signinMutation } = useMutation({
        mutationFn: signInRequest,
        onSuccess: (response) => {
            console.log('Successfully signed in', response);
            setToken(response.data.token);
        },
        onError: (error) => {
            console.error('Failed to sign in', error);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signinMutation
    };
};
