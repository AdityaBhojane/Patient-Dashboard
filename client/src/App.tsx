
import { Route, Routes } from "react-router-dom";
import DashboardContainer from "./Page/Dashboard Page/DashboardContainer";
import PatientOverview from "./Page/Dashboard Page/PatientOverview";
import ShipmentOverview from "./Page/Dashboard Page/ShipmentOverview";
import AuthPage from "./Page/AuthPages/AuthPage";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";




export default function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<h1>Loading</h1>} />
        {/* <Route path={"/dashboard"} element={<DashboardContainer></DashboardContainer>} ><PatientOverview /></Route> */}
        <Route path="/dashboard" element={<DashboardContainer />}>
          <Route index element={<PatientOverview/>}/>
        </Route>
        <Route path="/shipment" element={<DashboardContainer />}>
          <Route index element={<ShipmentOverview/>}/>
        </Route>
        <Route path="/signup" element={<AuthPage />}>
          <Route index element={<SignUp/>}/>
        </Route>
        <Route path="/signin" element={<AuthPage />}>
          <Route index element={<SignIn/>}/>
        </Route>
      </Routes>
    </>
  )
}
