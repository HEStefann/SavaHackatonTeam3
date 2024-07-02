import { Navigate, Route, Routes } from "react-router-dom";
import { LogedInProvider } from "../../assets/context/LogedInContext/LogedInProvider";
import { Profile } from "../../assets/pages/Profile/Profile";
import { Policy } from "../../assets/pages/Policy/Policy";
import { Damages } from "../../assets/pages/Damages/Damages";
import { Invoices } from "../../assets/pages/Invoices/Invoices";
import { ProfileActiveNonActive } from "../../assets/pages/ProfileActiveNonActive/ProfileActiveNonActive";

export const AuthorizedRoutes = () => {
  return (
    <LogedInProvider>
      <Routes>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/ProfileActiveNonActive" element={<ProfileActiveNonActive />}></Route>
        <Route path="/Policy" element={<Policy />}></Route>
        <Route path="/Damages" element={<Damages />}></Route>
        <Route path="/Invoices" element={<Invoices />}></Route>
        <Route path={"*"} element={<Navigate to="/Profile" />}></Route>
      </Routes>
    </LogedInProvider>
  );
};
