import { Auth, Dashboard } from "@/layouts";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Profile, Properties } from "./pages/dashboard";
import PropertyDetails from "./pages/dashboard/property/details";
import RegisterProperty from "./pages/dashboard/property/register";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="properties" element={<Properties />}>
          <Route path="register" element={<RegisterProperty />} />
          <Route path=":propertyId" element={<PropertyDetails />} />
        </Route>
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
