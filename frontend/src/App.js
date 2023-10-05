import React from 'react'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen';
import {Outlet, outlet} from 'react-router-dom';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
    <Header/>
    <Container>
      <Outlet/>
    </Container>
    </>
  )
}

export default App