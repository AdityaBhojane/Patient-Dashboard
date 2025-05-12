import { axiosInstance } from "./index.ts";

interface IUser {
    email:string
    password:string
    username?:string
}

export const signUpRequest = async ({ email, password, username }:IUser) => {
    try {
        const response = await axiosInstance.post('/signup', {
            email,
            password,
            username
        });
        return response.data;
    } catch(error) {
        console.error(error);
        throw error
    }
};

export const signInRequest = async ({ email, password }:IUser) => {
    try {
        const response = await axiosInstance.post('/signin', {
            email,
            password,
        });
        return response.data;
    } catch(error) {
        console.error(error);
        throw error;     
    }
};