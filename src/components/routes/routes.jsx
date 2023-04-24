import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "../login_screens/login_screen";
import MainScreen from "../main_screens/main_screen";
import SignUp from "../signUp_screens/signUp_screen";

function AppRoutes (){
    return(
        <Routes>
            <Route path="/" element={<LoginScreen/>}/>
            <Route path="/home" element={<MainScreen/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    )
}
export default AppRoutes;