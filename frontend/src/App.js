import React from 'react'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen';
import {Outlet, outlet} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <Header/>
    <Container>
      <Outlet/>
    </Container>
    <ToastContainer/>
    </>
  )
}

export default App