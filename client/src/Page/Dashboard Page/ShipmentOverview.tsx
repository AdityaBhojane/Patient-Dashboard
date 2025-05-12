import { useShipment } from "@/hooks/shipment/useGetShipment";
import { useEffect, useState } from "react";

type Medication = {
  _id: string;
  name: string;
  type: string;
  dosageOptions: string;
  description: string;
};

type Shipment = {
  _id: string;
  shipmentDate: string;
  expectedArrival: string;
  status: string;
  trackingNumber: string;
  medicationIds: Medication[]; // array of populated medication objects
};

export default function ShipmentList() {
  const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [shipment, setShipment] = useState<Shipment[]>([]);

  const { data } = useShipment();

  useEffect(() => {
    if (data) {
      setShipment(data.data);
    }
  }, [data]);

  const handleShowDetails = (medication: Medication) => {
    setSelectedMedication(medication);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMedication(null);
    setShowModal(false);
  };

  return (
    <div className="">
      <h2 className="text-2xl py-4 px-6 font-semibold border">Shipment Details </h2>
      <div className="w-full p-4 grid h-[70%] grid-cols-2 max-xl:grid-cols-1 items-center justify-center gap-4 ">
        {shipment?.map((shipmentItem, index) => (
          <div
            key={shipmentItem._id || index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4 flex justify-center items-center  gap-6 flex-wrap"
          >
            <div>
              <p className="text-sm text-gray-600">Shipment Date:</p>
              <p className="font-semibold">
                {new Date(shipmentItem.shipmentDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Expected Arrival:</p>
              <p className="font-semibold">
                {new Date(shipmentItem.expectedArrival).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Status:</p>
              <p className="font-semibold capitalize text-blue-600">{shipmentItem.status}</p>
            </div>
            <div>

              <p className="text-sm text-gray-600">Tracking ID:</p>
              <p className="font-semibold">{shipmentItem.trackingNumber}</p>
            </div>

            <button
              onClick={() => handleShowDetails(shipmentItem.medicationIds[0])}
              className="mt-3 self-start bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700"
            >
              Details
            </button>
          </div>
        ))}

        {showModal && selectedMedication && (
          <div className="fixed inset-0 bg-[#00000039] flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-11/12 md:w-1/3 relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
              >
                &times;
              </button>

              <h2 className="text-lg font-bold mb-4">Medication Details</h2>
              <p>
                <span className="font-semibold">Name:</span> {selectedMedication.name}
              </p>
              <p>
                <span className="font-semibold">Type:</span> {selectedMedication.type}
              </p>
              <p>
                <span className="font-semibold">Dosages:</span>{" "}
                {selectedMedication.dosageOptions}
              </p>
              <p>
                <span className="font-semibold">Description:</span>{" "}
                {selectedMedication.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
