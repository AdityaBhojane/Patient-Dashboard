import {model, Schema} from 'mongoose';

const shipmentSchema = new Schema({
    shipmentDate:{
        type:Date,
        required:true
    },
    expectedArrival:{
        type:Date,
    },
    status:{
        type:String,
        enum:["pending","shipped", 'delivered',"cancelled"],
        default:"pending"
    },
    trackingNumber:{
        type:String,
        required:true
    },
   userId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }, 
    medicationId:{
        type:Schema.Types.ObjectId,
        ref:"Medication"
    },  
},{timestamps:true});


export const Shipment = model("Shipment",shipmentSchema)