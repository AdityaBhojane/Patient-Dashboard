import { model, Schema } from "mongoose";

const ProgressTrackSchema = new Schema({
  weight: {
    type: String,
    required: true,
  },
  BMI: {
    type: Number,
    required:true
  },
  recordedAt: {
    type: Date,
    required: true,
  },
  userId:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
},{timestamps:true});

export const ProgressTrack = model("ProgressTrack", ProgressTrackSchema);
