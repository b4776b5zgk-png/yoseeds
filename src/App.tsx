import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChatBot from "./Chatbot";
import Index from "./webpages/index/Index";
import Login from "./webpages/index/Login";
import SuperAdmin from "./webpages/index/superadmin";
import FarmerAdmin from "./webpages/index/FarmerAdmin";
import GovernmentAdmin from "./webpages/index/goverment.admin";
import UserAccount from "./webpages/index/UserAccount";

function App() {
  return (
    <BrowserRouter>
      <ChatBot />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/super-admin" element={<SuperAdmin />} />
        <Route path="/farmer-admin" element={<FarmerAdmin />} />
        <Route path="/government-admin" element={<GovernmentAdmin />} />
        <Route path="/account" element={<UserAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
