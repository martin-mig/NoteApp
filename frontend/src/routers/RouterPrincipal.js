import react from 'react';
import {Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom';
import { NotasActivas } from '../components/NotasActivas';
import { NotasArchivadas } from '../components/NotasArchivadas';
import { NavBar } from '../components/NavBar';

export const RouterPrincipal = () => {
    return(

        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<NotasActivas />} />
                <Route path="/notas-archivadas" element={<NotasArchivadas />} />
            </Routes>

        </BrowserRouter>
    )
}