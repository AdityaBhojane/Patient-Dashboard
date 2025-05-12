import { model, Schema } from "mongoose";

const medicationSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  dosageOptions: {
    type: String,
    require: true,
  },
  frequency: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
},{timestamps:true});

export const Medication = model("Medication", medicationSchema);
