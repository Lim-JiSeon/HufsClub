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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/area" element={<AreaPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

reportWebVitals();
