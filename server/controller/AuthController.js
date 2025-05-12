import { User } from "../model/user.js";
import { userSignInService, userSignUpService } from "../service/AuthService.js";
import customErrorResponse from "../utils/customErrorResponse.js";
import customSuccessResponse from "../utils/customSuccussResponse.js";
import {StatusCodes} from "http-status-codes";


export const signUpController = async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        if(!username || !email || !password) res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse('username, email and password is required', StatusCodes.BAD_REQUEST));
        const response = await userSignUpService({username,email,password});
        res.status(StatusCodes.OK).json(customSuccessResponse('user created successfully',response))
    } catch (error) {
        console.log("sign up controller error", error);
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse('something is wrong with sign up controller',error))
    }
}

export const signInController = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password) res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse('email and password is required', StatusCodes.BAD_REQUEST));
        const response = await userSignInService({email,password});
        res.status(StatusCodes.OK).json(customSuccessResponse('user singed in successfully',response))
    } catch (error ) {
        console.log("sign up controller error", error);
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse('something is wrong with sign in controller',error))
    }
};

export const getUserController = async (req,res)=>{
    try {
        const id = req.user.id;
        console.log(req.user)
        if(!id) res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse('id is required', StatusCodes.BAD_REQUEST));
        const response = await User.findById(id).select('-password');
        res.status(StatusCodes.OK).json(customSuccessResponse('user fetched successfully',response))
    } catch (error) {
        console.log("get user controller", error);
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse('something is wrong with get user controller',error))
    }
};