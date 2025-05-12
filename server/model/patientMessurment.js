import { model, Schema } from "mongoose";

const patientMeasurementSchema = new Schema(
  {
    height: {
      type: String,
      require: true,
    },
    weigh: {
      type: String,
      require: true,
    },
    chest: {
      type: String,
      require: true,
    },
    waist: {
      type: String,
      require: true,
    },
    hip: {
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

export const patientMeasurement = model(
  "patientMeasurement",
  patientMeasurementSchema
);
