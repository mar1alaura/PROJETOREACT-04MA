import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthContext';
import PrivateRoutes from '../auth/PrivateRoute';

import Logo from '../componentes/template/Logo'
import Nav from  '../componentes/tyemplate/Nav'

import Login from '../components/user/LoginForm';
import Register from '../components/user/RegisterForm';
import UserCrud from '../components/user/UserCrud';
import Home from '.