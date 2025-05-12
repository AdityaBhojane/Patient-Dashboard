import { model, Schema } from "mongoose";

const patientMeasurementSchema = new Schema(
  {
    height: {
      type: String,
      required: true,
    },
    weigh: {
      type: String,
      required: true,
    },
    chest: {
      type: String,
      required: true,
    },
    waist: {
      type: String,
      required: true,
    },
    hip: {
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

export const patientMeasurement = model(
  "patientMeasurement",
  patientMeasurementSchema
);
