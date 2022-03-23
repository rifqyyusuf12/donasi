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
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/singup" element={<Signup/>} />
      <Route path="/landingpage" element={<LandingPage/>} />
    </Routes>
    </>
  );
}

export default App;
