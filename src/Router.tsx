import { Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/LoginPage/LoginPage";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import Register from "./Pages/Register/Register";
import { FC } from "react";
import AuthBox from "./Layouts/AuthBox";

interface RouterProps {}

const Router: FC<RouterProps> = () => {
  return (
    <Routes>
      <Route element={<AuthBox />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Router;
