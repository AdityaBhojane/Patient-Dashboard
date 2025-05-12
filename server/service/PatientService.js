import mongoose from 'mongoose';
import { patientMeasurement } from '../model/patientMessurment.js';
import { Shipment } from '../model/shipment.js';
import { Medication } from '../model/medication.js';
import { ProgressTrack } from '../model/ProgressTracking.js';


async function insertPatientMeasurements() {
  try {
    await mongoose.connect('mongodb+srv://Aditya7:p12345@cluster0.wi0f1.mongodb.net/Patient');

    const data = [

  { weight: "85kg", BMI: 27.5, recordedAt: new Date("2024-12-01"), userId: "68211eb4c3a83358941eae6a" },
  { weight: "83.5kg", BMI: 27.0, recordedAt: new Date("2025-01-01"), userId: "68211eb4c3a83358941eae6a" },
  { weight: "81.5kg", BMI: 26.2, recordedAt: new Date("2025-02-01"), userId: "68211eb4c3a83358941eae6a" },
  { weight: "79.5kg", BMI: 25.5, recordedAt: new Date("2025-03-01"), userId: "68211eb4c3a83358941eae6a" },
  { weight: "76.5kg", BMI: 24.5, recordedAt: new Date("2025-04-01"), userId: "68211eb4c3a83358941eae6a" },
  { weight: "73kg", BMI: 23.0, recordedAt: new Date("2025-05-01"), userId: "68211eb4c3a83358941eae6a" },


  { weight: "95kg", BMI: 29.8, recordedAt: new Date("2024-12-01"), userId: "6821b57b52b8dc3f05c1615f" },
  { weight: "93kg", BMI: 29.2, recordedAt: new Date("2025-01-01"), userId: "6821b57b52b8dc3f05c1615f" },
  { weight: "90kg", BMI: 28.3, recordedAt: new Date("2025-02-01"), userId: "6821b57b52b8dc3f05c1615f" },
  { weight: "88kg", BMI: 27.6, recordedAt: new Date("2025-03-01"), userId: "6821b57b52b8dc3f05c1615f" },
  { weight: "85kg", BMI: 26.5, recordedAt: new Date("2025-04-01"), userId: "6821b57b52b8dc3f05c1615f" },
  { weight: "82kg", BMI: 25.5, recordedAt: new Date("2025-05-01"), userId: "6821b57b52b8dc3f05c1615f" },


  { weight: "78kg", BMI: 25.4, recordedAt: new Date("2024-12-01"), userId: "6821b58952b8dc3f05c16162" },
  { weight: "76.5kg", BMI: 24.9, recordedAt: new Date("2025-01-01"), userId: "6821b58952b8dc3f05c16162" },
  { weight: "75kg", BMI: 24.2, recordedAt: new Date("2025-02-01"), userId: "6821b58952b8dc3f05c16162" },
  { weight: "73.5kg", BMI: 23.7, recordedAt: new Date("2025-03-01"), userId: "6821b58952b8dc3f05c16162" },
  { weight: "71kg", BMI: 22.8, recordedAt: new Date("2025-04-01"), userId: "6821b58952b8dc3f05c16162" },
  { weight: "68kg", BMI: 21.7, recordedAt: new Date("2025-05-01"), userId: "6821b58952b8dc3f05c16162" },


  { weight: "68kg", BMI: 24.0, recordedAt: new Date("2024-12-01"), userId: "6821b59b52b8dc3f05c16165" },
  { weight: "66.5kg", BMI: 23.4, recordedAt: new Date("2025-01-01"), userId: "6821b59b52b8dc3f05c16165" },
  { weight: "65kg", BMI: 22.8, recordedAt: new Date("2025-02-01"), userId: "6821b59b52b8dc3f05c16165" },
  { weight: "63.5kg", BMI: 22.1, recordedAt: new Date("2025-03-01"), userId: "6821b59b52b8dc3f05c16165" },
  { weight: "61kg", BMI: 21.2, recordedAt: new Date("2025-04-01"), userId: "6821b59b52b8dc3f05c16165" },
  { weight: "56kg", BMI: 20.6, recordedAt: new Date("2025-05-01"), userId: "6821b59b52b8dc3f05c16165" }
]


    const inserted = await ProgressTrack.insertMany(data);
    console.log("Inserted:", inserted);
  } catch (error) {
    console.error("Error inserting patient measurements:", error);
  } finally {
    await mongoose.disconnect();
  }
}

insertPatientMeasurements();
