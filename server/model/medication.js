import { model, Schema } from "mongoose";

const medicationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  dosageOptions: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},{timestamps:true});

export const Medication = model("Medication", medicationSchema);
