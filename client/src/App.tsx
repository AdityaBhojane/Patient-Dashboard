
// import { BloodSugar } from "./assets";
import MeasureCard from "./components/CommanCards/MeasureCard";
// import HealthCard from "./components/HeathCard/HealthCard";
// import SideBar from "./components/Sidebar/SideBar";

export default function App() {
  return (
    <div>
      {/* <HealthCard image={BloodSugar} count={60} title={"BloodSugar"} status={"Normal"}/> */}
      <MeasureCard type="Weight"/>
      <MeasureCard type="Height"/>
    </div>
  )
}
