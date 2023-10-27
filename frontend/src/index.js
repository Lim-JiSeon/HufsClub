import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AreaPage from "./pages/AreaPage";
import IntroPage from "./pages/IntroPage";
import InputPage from "./pages/InputPage";
import MyPage from "./pages/MyPage";
import NotPage from "./pages/NotPage";
import FindIdPage from "./pages/FindIdPage";
import FindPwPage from "./pages/FindPwPage";
import ResetPwPage from "./pages/ResetPwPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/find/id" element={<FindIdPage />} />
        <Route path="/find/password" element={<FindPwPage />} />
        <Route path="/area/:field" element={<AreaPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/reset-password/:codeNumber" element={<ResetPwPage />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

reportWebVitals();
