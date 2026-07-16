import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChatBot from "./Chatbot";

import Index from "./webpages/index/Index";

import Login from "./webpages/auth/Login";

import SuperAdmin from "./webpages/dashboards/SuperAdmin";
import FarmerAdmin from "./webpages/dashboards/FarmerAdmin";
import GovernmentAdmin from "./webpages/dashboards/GovernmentAdmin";
import UserAccount from "./webpages/dashboards/UserAccount";


function App() {

  return (

    <BrowserRouter>

      <ChatBot />

      <Routes>

        <Route path="/" element={<Index />} />

        <Route path="/login" element={<Login />} />


        <Route 
          path="/super-admin" 
          element={<SuperAdmin />} 
        />


        <Route 
          path="/farmer-admin" 
          element={<FarmerAdmin />} 
        />


        <Route 
          path="/government-admin" 
          element={<GovernmentAdmin />} 
        />


        <Route 
          path="/account" 
          element={<UserAccount />} 
        />

      </Routes>

    </BrowserRouter>

  );

}


export default App;
