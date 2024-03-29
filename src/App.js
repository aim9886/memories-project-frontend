import React from 'react';
import {Container} from '@material-ui/core';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth';
const App = () => {

    return(
        <BrowserRouter>
            <Container maxwidth= "lg">
                <Navbar />
                <Routes>
                    <Route path="/" exact element = {<Home/>} />
                    <Route path="/auth" exact element = {<Auth/>} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;