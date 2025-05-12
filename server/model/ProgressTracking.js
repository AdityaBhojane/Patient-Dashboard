import { model, Schema } from "mongoose";

const ProgressTrackSchema = new Schema({
  weight: {
    type: String,
    require: true,
  },
  BMI: {
    type: Number,
    require:true
  },
  recordedAt: {
    type: Date,
    require: true,
  },
  userId:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
},{timestamps:true});

export const ProgressTrack = model("ProgressTrack", ProgressTrackSchema);
