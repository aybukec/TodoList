
import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'

export default function Navigation() {
  return (
    <Router>
        <Scene key = "root">
            <Scene key="loginpage" hideNavBar component={LoginPage} initial />
            <Scene key="homepage" hideNavBar component={HomePage}/>    
        </Scene>
    </Router>
  );
}