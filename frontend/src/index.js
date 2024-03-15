import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AreaPage from "./pages/AreaPage";
import MyPage from "./pages/MyPage";
import NotPage from "./pages/NotPage";
import FindIdPage from "./pages/FindIdPage";
import FindPwPage from "./pages/FindPwPage";
import ResetPwPage from "./pages/ResetPwPage";
import EditClubPage from "./pages/EditClubPage";
import ClubPage from "./pages/ClubPage";
import RegisterClubPage from "./pages/RegisterClubPage";
import LikePage from "./pages/LikePage";
import { App } from "./App";

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
        <Route path="/:field/register-club" element={<RegisterClubPage />} />
        <Route path="/area/:field" element={<AreaPage />} />
        <Route path="/area/:field/:id" element={<ClubPage />} />
        <Route path="/edit-club/:id" element={<EditClubPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/like/:id" element={<LikePage />} />
        <Route path="/reset-password/:codeNumber" element={<ResetPwPage />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

reportWebVitals();
