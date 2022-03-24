import './App.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/react-toastify.cjs.development'


import Home from './Pages/Home';
import Header from './Components/Header';
import Signup from './Pages/signUp';
import LoginForm from './Pages/loginForm';
import LandingPage from './Pages/landingPage';



function App() {
  return (
    <>
    <Header />
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/admin" element={<Home/>} />
      <Route path="/admin/login" element={<LoginForm/>} />
      <Route path="/admin/singup" element={<Signup/>} />
    </Routes>
    </>
  );
}

export default App;
