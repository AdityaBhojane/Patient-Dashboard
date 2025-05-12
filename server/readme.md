## DataBase Collections


### PatientDetails
```json
[
  {
    "_id": { "$oid": "6821c111b431d24cb3fe0001" },
    "BMI": 26.8,
    "BloodSugar": "102",
    "HeartRate": "74",
    "BloodPressure": "122/80",
    "RecordAt": { "$date": "2025-05-10T08:30:00Z" },
    "userId": { "$oid": "68211eb4c3a83358941eae6a" } // Aditya
  },
  {
    "_id": { "$oid": "6821c111b431d24cb3fe0002" },
    "BMI": 29.1,
    "BloodSugar": "112",
    "HeartRate": "78",
    "BloodPressure": "130/85",
    "RecordAt": { "$date": "2025-05-09T09:00:00Z" },
    "userId": { "$oid": "6821b57b52b8dc3f05c1615f" } // Rahul
  },
  {
    "_id": { "$oid": "6821c111b431d24cb3fe0003" },
    "BMI": 24.5,
    "BloodSugar": "95",
    "HeartRate": "70",
    "BloodPressure": "118/76",
    "RecordAt": { "$date": "2025-05-11T07:45:00Z" },
    "userId": { "$oid": "6821b58952b8dc3f05c16162" } // Rohan
  },
  {
    "_id": { "$oid": "6821c111b431d24cb3fe0004" },
    "BMI": 23.2,
    "BloodSugar": "89",
    "HeartRate": "72",
    "BloodPressure": "110/70",
    "RecordAt": { "$date": "2025-05-08T10:15:00Z" },
    "userId": { "$oid": "6821b59b52b8dc3f05c16165" } // Priya
  }
]
```

### PatientMeasurement
```json
[
  {
    height: "175",
    weight: "74",
    chest: "96",
    waist: "84",
    hip: "92",
    RecordAt: new Date("2025-05-10T08:30:00Z"),
    userId: "68211eb4c3a83358941eae6a" // Aditya
  },
  {
    height: "180",
    weight: "85",
    chest: "102",
    waist: "90",
    hip: "98",
    RecordAt: new Date("2025-05-09T09:00:00Z"),
    userId: "6821b57b52b8dc3f05c1615f"
  },
  {
    height: "168",
    weight: "68",
    chest: "94",
    waist: "82",
    hip: "89",
    RecordAt: new Date("2025-05-11T07:45:00Z"),
    userId: "6821b58952b8dc3f05c16162" 
  },
  {
    height: "162",
    weight: "58",
    chest: "88",
    waist: "74",
    hip: "92",
    RecordAt: new Date("2025-05-08T10:15:00Z"),
    userId: "6821b59b52b8dc3f05c16165" // Priya
  }
]

```

### Medication
```json
[
  {
    _id: "645fa3b79e7a76a9e6b5b001",
    name: "LipoBurn",
    type: "Appetite Suppressant",
    dosageOptions: "30mg capsule",
    frequency: "Once daily",
    description: "Helps suppress appetite and control cravings for weight management."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b002",
    name: "MetaboLite",
    type: "Metabolism Booster",
    dosageOptions: "500mg tablet",
    frequency: "Twice daily",
    description: "Increases metabolic rate to support fat burning and energy production."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b003",
    name: "GlucoBalance",
    type: "Blood Sugar Stabilizer",
    dosageOptions: "250mg capsule",
    frequency: "After meals",
    description: "Regulates blood sugar to prevent fat storage and energy crashes."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b004",
    name: "ThermoFit",
    type: "Thermogenic",
    dosageOptions: "100mg capsule",
    frequency: "Once before workout",
    description: "Raises body temperature to enhance calorie burning during activity."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b005",
    name: "SlimPatch",
    type: "Topical",
    dosageOptions: "Apply once daily",
    frequency: "Daily",
    description: "Transdermal patch delivering fat-burning ingredients directly to the bloodstream."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b006",
    name: "FiberForm",
    type: "Digestive Support",
    dosageOptions: "10g powder",
    frequency: "Twice daily before meals",
    description: "Promotes fullness and improves digestion to aid in calorie control."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b007",
    name: "Ketoboost",
    type: "Ketogenic Aid",
    dosageOptions: "750mg softgel",
    frequency: "Three times daily",
    description: "Supports ketogenic metabolism and reduces carbohydrate absorption."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b008",
    name: "Appetrol",
    type: "Appetite Suppressant",
    dosageOptions: "15mg tablet",
    frequency: "Once before meals",
    description: "Reduces appetite to support a lower caloric intake."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b009",
    name: "L-Carnilean",
    type: "Fat Transporter",
    dosageOptions: "1000mg tablet",
    frequency: "Before exercise",
    description: "Assists in the conversion of fat into energy during workouts."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b00a",
    name: "CLA Max",
    type: "Fat Blocker",
    dosageOptions: "500mg capsule",
    frequency: "Twice daily with meals",
    description: "Reduces fat absorption and promotes lean muscle retention."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b00b",
    name: "GreenTrim",
    type: "Natural Extract",
    dosageOptions: "400mg capsule",
    frequency: "Once in the morning",
    description: "Green tea extract for natural thermogenesis and antioxidant support."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b00c",
    name: "HungerAway",
    type: "Appetite Suppressant",
    dosageOptions: "25mg tablet",
    frequency: "Twice daily before meals",
    description: "Controls hunger spikes and supports better meal adherence."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b00d",
    name: "FatFlush",
    type: "Detox Supplement",
    dosageOptions: "1 scoop powder",
    frequency: "Daily",
    description: "Flushes out toxins and water weight to aid in body recomposition."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b00e",
    name: "LeanCore",
    type: "Protein Support",
    dosageOptions: "25g powder",
    frequency: "Post workout",
    description: "Supports muscle maintenance during calorie restriction."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b00f",
    name: "ResetPM",
    type: "Nighttime Fat Burner",
    dosageOptions: "2 capsules",
    frequency: "Before bed",
    description: "Boosts nighttime metabolism and improves sleep quality."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b010",
    name: "ChromoBlock",
    type: "Carb Blocker",
    dosageOptions: "300mg capsule",
    frequency: "Before high-carb meals",
    description: "Blocks carbohydrate digestion to reduce calorie intake."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b011",
    name: "ThermaCut",
    type: "Thermogenic",
    dosageOptions: "200mg capsule",
    frequency: "Twice daily",
    description: "Stimulates thermogenesis and boosts mental focus."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b012",
    name: "BellyBlaster",
    type: "Fat Burner",
    dosageOptions: "3 tablets",
    frequency: "Once daily",
    description: "Targets stubborn belly fat using a blend of herbal extracts."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b013",
    name: "AppetiteShield",
    type: "Craving Control",
    dosageOptions: "20mg capsule",
    frequency: "Before snacks",
    description: "Reduces snacking urges and emotional eating habits."
  },
  {
    _id: "645fa3b79e7a76a9e6b5b014",
    name: "LiverSupport+",
    type: "Organ Support",
    dosageOptions: "1 capsule",
    frequency: "Twice daily",
    description: "Supports liver health during active weight-loss protocols."
  }
]

```

### Shipment 
```json
[
  {
    shipmentDate: new Date("2025-05-01"),
    expectedArrival: new Date("2025-05-05"),
    status: "pending",
    trackingNumber: "TRK0001",
    userId: "68211eb4c3a83358941eae6a",
    medicationId: "645fa3b79e7a76a9e6b5b001"
  },
  {
    shipmentDate: new Date("2025-05-03"),
    expectedArrival: new Date("2025-05-08"),
    status: "shipped",
    trackingNumber: "TRK0002",
    userId: "6821b57b52b8dc3f05c1615f",
    medicationId: "645fa3b79e7a76a9e6b5b002"
  },
  {
    shipmentDate: new Date("2025-04-30"),
    expectedArrival: new Date("2025-05-04"),
    status: "delivered",
    trackingNumber: "TRK0003",
    userId: "6821b58952b8dc3f05c16162",
    medicationId: "645fa3b79e7a76a9e6b5b003"
  },
  {
    shipmentDate: new Date("2025-05-02"),
    expectedArrival: new Date("2025-05-07"),
    status: "cancelled",
    trackingNumber: "TRK0004",
    userId: "6821b59b52b8dc3f05c16165",
    medicationId: "645fa3b79e7a76a9e6b5b004"
  },
  {
    shipmentDate: new Date("2025-05-05"),
    expectedArrival: new Date("2025-05-10"),
    status: "pending",
    trackingNumber: "TRK0005",
    userId: "68211eb4c3a83358941eae6a",
    medicationId: "645fa3b79e7a76a9e6b5b005"
  },
  {
    shipmentDate: new Date("2025-05-06"),
    expectedArrival: new Date("2025-05-11"),
    status: "shipped",
    trackingNumber: "TRK0006",
    userId: "6821b57b52b8dc3f05c1615f",
    medicationId: "645fa3b79e7a76a9e6b5b006"
  },
  {
    shipmentDate: new Date("2025-05-07"),
    expectedArrival: new Date("2025-05-13"),
    status: "delivered",
    trackingNumber: "TRK0007",
    userId: "6821b58952b8dc3f05c16162",
    medicationId: "645fa3b79e7a76a9e6b5b007"
  },
  {
    shipmentDate: new Date("2025-05-08"),
    expectedArrival: new Date("2025-05-12"),
    status: "pending",
    trackingNumber: "TRK0008",
    userId: "6821b59b52b8dc3f05c16165",
    medicationId: "645fa3b79e7a76a9e6b5b008"
  },
  {
    shipmentDate: new Date("2025-05-09"),
    expectedArrival: new Date("2025-05-14"),
    status: "cancelled",
    trackingNumber: "TRK0009",
    userId: "68211eb4c3a83358941eae6a",
    medicationId: "645fa3b79e7a76a9e6b5b009"
  },
  {
    shipmentDate: new Date("2025-05-10"),
    expectedArrival: new Date("2025-05-15"),
    status: "shipped",
    trackingNumber: "TRK0010",
    userId: "6821b57b52b8dc3f05c1615f",
    medicationId: "645fa3b79e7a76a9e6b5b00a"
  },
  {
    shipmentDate: new Date("2025-05-11"),
    expectedArrival: new Date("2025-05-16"),
    status: "delivered",
    trackingNumber: "TRK0011",
    userId: "6821b58952b8dc3f05c16162",
    medicationId: "645fa3b79e7a76a9e6b5b00b"
  },
  {
    shipmentDate: new Date("2025-05-12"),
    expectedArrival: new Date("2025-05-17"),
    status: "pending",
    trackingNumber: "TRK0012",
    userId: "6821b59b52b8dc3f05c16165",
    medicationId: "645fa3b79e7a76a9e6b5b00c"
  },
  {
    shipmentDate: new Date("2025-05-13"),
    expectedArrival: new Date("2025-05-18"),
    status: "shipped",
    trackingNumber: "TRK0013",
    userId: "68211eb4c3a83358941eae6a",
    medicationId: "645fa3b79e7a76a9e6b5b00d"
  },
  {
    shipmentDate: new Date("2025-05-14"),
    expectedArrival: new Date("2025-05-19"),
    status: "delivered",
    trackingNumber: "TRK0014",
    userId: "6821b57b52b8dc3f05c1615f",
    medicationId: "645fa3b79e7a76a9e6b5b00e"
  },
  {
    shipmentDate: new Date("2025-05-15"),
    expectedArrival: new Date("2025-05-20"),
    status: "cancelled",
    trackingNumber: "TRK0015",
    userId: "6821b58952b8dc3f05c16162",
    medicationId: "645fa3b79e7a76a9e6b5b00f"
  },
  {
    shipmentDate: new Date("2025-05-16"),
    expectedArrival: new Date("2025-05-21"),
    status: "pending",
    trackingNumber: "TRK0016",
    userId: "6821b59b52b8dc3f05c16165",
    medicationId: "645fa3b79e7a76a9e6b5b010"
  },
  {
    shipmentDate: new Date("2025-05-17"),
    expectedArrival: new Date("2025-05-22"),
    status: "shipped",
    trackingNumber: "TRK0017",
    userId: "68211eb4c3a83358941eae6a",
    medicationId: "645fa3b79e7a76a9e6b5b011"
  },
  {
    shipmentDate: new Date("2025-05-18"),
    expectedArrival: new Date("2025-05-23"),
    status: "delivered",
    trackingNumber: "TRK0018",
    userId: "6821b57b52b8dc3f05c1615f",
    medicationId: "645fa3b79e7a76a9e6b5b012"
  },
  {
    shipmentDate: new Date("2025-05-19"),
    expectedArrival: new Date("2025-05-24"),
    status: "pending",
    trackingNumber: "TRK0019",
    userId: "6821b58952b8dc3f05c16162",
    medicationId: "645fa3b79e7a76a9e6b5b013"
  },
  {
    shipmentDate: new Date("2025-05-20"),
    expectedArrival: new Date("2025-05-25"),
    status: "cancelled",
    trackingNumber: "TRK0020",
    userId: "6821b59b52b8dc3f05c16165",
    medicationId: "645fa3b79e7a76a9e6b5b014"
  }
]


```

### ProgressTracking
```
[
  // 🧍 Aditya (from 85kg → 73kg)
  { weight: "85kg", BMI: 27.5, recordedAt: new Date("2024-12-01"), userId: "68211eb4c3a83358941eae6a" },
  { weight: "83.5kg", BMI: 27.0, recordedAt: new Date("2025-01-01"), userId: "68211eb4c3a83358941eae6a" },
  { weight: "81.5kg", BMI: 26.2, recordedAt: new Date("2025-02-01"), userId: "68211eb4c3a83358941eae6a" },
  { weight: "79.5kg", BMI: 25.5, recordedAt: new Date("2025-03-01"), userId: "68211eb4c3a83358941eae6a" },
  { weight: "76.5kg", BMI: 24.5, recordedAt: new Date("2025-04-01"), userId: "68211eb4c3a83358941eae6a" },
  { weight: "73kg", BMI: 23.0, recordedAt: new Date("2025-05-01"), userId: "68211eb4c3a83358941eae6a" },

  // 🧍 Rahul (95kg → 82kg)
  { weight: "95kg", BMI: 29.8, recordedAt: new Date("2024-12-01"), userId: "6821b57b52b8dc3f05c1615f" },
  { weight: "93kg", BMI: 29.2, recordedAt: new Date("2025-01-01"), userId: "6821b57b52b8dc3f05c1615f" },
  { weight: "90kg", BMI: 28.3, recordedAt: new Date("2025-02-01"), userId: "6821b57b52b8dc3f05c1615f" },
  { weight: "88kg", BMI: 27.6, recordedAt: new Date("2025-03-01"), userId: "6821b57b52b8dc3f05c1615f" },
  { weight: "85kg", BMI: 26.5, recordedAt: new Date("2025-04-01"), userId: "6821b57b52b8dc3f05c1615f" },
  { weight: "82kg", BMI: 25.5, recordedAt: new Date("2025-05-01"), userId: "6821b57b52b8dc3f05c1615f" },

  // 🧍 Rohan (78kg → 68kg)
  { weight: "78kg", BMI: 25.4, recordedAt: new Date("2024-12-01"), userId: "6821b58952b8dc3f05c16162" },
  { weight: "76.5kg", BMI: 24.9, recordedAt: new Date("2025-01-01"), userId: "6821b58952b8dc3f05c16162" },
  { weight: "75kg", BMI: 24.2, recordedAt: new Date("2025-02-01"), userId: "6821b58952b8dc3f05c16162" },
  { weight: "73.5kg", BMI: 23.7, recordedAt: new Date("2025-03-01"), userId: "6821b58952b8dc3f05c16162" },
  { weight: "71kg", BMI: 22.8, recordedAt: new Date("2025-04-01"), userId: "6821b58952b8dc3f05c16162" },
  { weight: "68kg", BMI: 21.7, recordedAt: new Date("2025-05-01"), userId: "6821b58952b8dc3f05c16162" },

  // 🧍 Priya (68kg → 59kg)
  { weight: "68kg", BMI: 24.0, recordedAt: new Date("2024-12-01"), userId: "6821b59b52b8dc3f05c16165" },
  { weight: "66.5kg", BMI: 23.4, recordedAt: new Date("2025-01-01"), userId: "6821b59b52b8dc3f05c16165" },
  { weight: "65kg", BMI: 22.8, recordedAt: new Date("2025-02-01"), userId: "6821b59b52b8dc3f05c16165" },
  { weight: "63.5kg", BMI: 22.1, recordedAt: new Date("2025-03-01"), userId: "6821b59b52b8dc3f05c16165" },
  { weight: "61kg", BMI: 21.2, recordedAt: new Date("2025-04-01"), userId: "6821b59b52b8dc3f05c16165" },
  { weight: "59kg", BMI: 20.6, recordedAt: new Date("2025-05-01"), userId: "6821b59b52b8dc3f05c16165" }
]

```