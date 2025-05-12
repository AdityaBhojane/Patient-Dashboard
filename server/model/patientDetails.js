import { model, Schema } from "mongoose";

const patientDetailsSchema = new Schema(
  {
    BMI: {
      type: Number,
      required: true,
    },
    BloodSugar: {
      type: String,
      required: true,
    },
    HeartRate: {
      type: String,
      required: true,
    },
    BloodPressure: {
      type: String,
      required: true,
    },
    RecordAt: {
      type: Date,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const patientDetails = model(
  "patientDetails",
  patientDetailsSchema
);
