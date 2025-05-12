import { User } from "../model/user.js";
import { createJWT } from "../utils/common/createJWT.js";

export const  userSignUpService = async (data)=>{
    try {
        const user = await User.findOne({email:data.email});
        if(user) throw new Error("User already exist with username or email")
        const response = await User.create(data);
        return {
            id:response.id,
            username:response.username,
            email:response.email,
        }
    } catch (error) {
        console.log(error); 
        throw error
    }
};

export const userSignInService = async (data)=>{
    try {
        const {email, password} = data;
        if(!email || !password) throw new Error('email Or password is required');
        const user = await User.findOne({email});
        console.log(user)
        if(!user) throw new Error('Invalid email Or password');
        const isPasswordMatch = await user.verifyPassword(password);
        if(!isPasswordMatch) throw new Error('Invalid Password');

        return {
            id:user.id,
            username:user.username,
            email,
            token:createJWT({id:user.id, email},"user")
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}