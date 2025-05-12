import {model, Schema } from 'mongoose';
import argon2 from 'argon2';

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        match:[ 
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },
    password:{
        type:String,
        required:true
    },
    patientDetailsId:{
        type:Schema.Types.ObjectId,
        ref:"patientDetails"
    },
    patientMeasurementId:{
        type:Schema.Types.ObjectId,
        ref:"patientMeasurement"
    },
    shipment:[{
        type:Schema.Types.ObjectId,
        ref:"Shipment"
    }]
},{timestamps:true});

userSchema.pre("save", async function (next) {
    if(this.isModified("password")){
        this.password = await argon2.hash(this.password)
    }
    next();
});

userSchema.methods.verifyPassword = async function (password) {
    const response = await argon2.verify(this.password, password);
    return response
};


export const User = model("User",userSchema)