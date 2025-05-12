import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../config/serverConfig.js';

export const createJWT = (payload)=>{
    try {
        const token = jwt.sign(payload,JWT_SECRET);
        return token
    } catch (error) {
        console.log(error)
    }
}