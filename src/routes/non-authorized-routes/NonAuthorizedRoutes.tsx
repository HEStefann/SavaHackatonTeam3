import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../../assets/pages/HomePage/HomePage";
import { Portal } from "../../assets/pages/Portal/Portal";
import { LandingPage } from "../../assets/pages/LandingPage/LandingPage";
import { SignIn } from "../../assets/pages/SignIn/SignIn";
import { Register } from "../../assets/pages/Register/Register";

export const NonAuthorizedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/Portal" element={<Portal />}></Route>
      <Route path="/LandingPage" element={<LandingPage />}></Route>
      <Route path="/SignIn" element={<SignIn />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path={"*"} element={<Navigate to="signIn" />}></Route>
    </Routes>
  );
};
