import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import DaftarMenu from './DaftarMenu';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/menu' element={<DaftarMenu/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
