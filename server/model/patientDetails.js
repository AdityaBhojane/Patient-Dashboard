import { model, Schema } from "mongoose";

const patientDetailsSchema = new Schema(
  {
    BMI: {
      type: Number,
      require: true,
    },
    BloodSugar: {
      type: String,
      require: true,
    },
    HeartRate: {
      type: String,
      require: true,
    },
    BloodPressure: {
      type: String,
      require: true,
    },
    RecordAt: {
      type: Date,
      require: true,
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
