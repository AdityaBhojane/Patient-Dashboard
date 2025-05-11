
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./Page/Dashboard/DashboardPage";




export default function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<h1>Loading</h1>} />
        <Route path={"/dashboard"} element={<DashboardPage/>} />
      </Routes>
    </>
  )
}
