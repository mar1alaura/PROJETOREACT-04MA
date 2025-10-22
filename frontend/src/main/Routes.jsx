import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';
import LoginForm from '../components/user/LoginForm';
import RegisterForm from '../components/user/RegisterForm';

export default function AppRoutes(){
    return(
        Routes(
            <Routes>
                <Route path="/home" element={< Home/>}/>
                <Route path="/users" element={< UserCrud/>}/>
                <Route path="/login" element={< Login/>}/>
                <Route path="/register" element={< Register/>}/>
                <Route path="/*" element={< Navigate to="/login" />}/>
            </Routes>
        )
    );
}