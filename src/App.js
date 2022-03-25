import { useContext } from 'react';

import Header from './components/Header/Header';
import Result from './components/Result/Result';
import  Slider from './components/Slider/Slider';


import { Container } from '@mui/material';

import { Route, Routes } from 'react-router';

import ThemeContext  from './context/ThemeContext';

import './App.css';

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
       <Header />
       <Container className='container'>
         <Routes>
            {/* questions */}
            <Route path="/" element={<Slider />}/>
            {/* result */}
            <Route path="/result" element={<Result />}/>
         </Routes>  
       </Container>
    </div>
  );
}

export default App;
