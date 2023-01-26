import React from 'react'
import Navbar from './pages/Navbar'
import {  Routes, Route} from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import Footer from './pages/Footer'
import NotFound from './pages/NotFound'
import GenerarOrden from './pages/GenerarOrden'
import Usuarios from './pages/Usuarios'

export default function app() {

    return (
        <BrowserRouter>
            {/* Navbar de la página aquí */}
            <Navbar />


            {/* Contenmido de la página aquí */}
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/generarOrden" element={<GenerarOrden />} />
                <Route path="/usuarios" element={<Usuarios />} />
            </Routes>

            {/* Footer de la página aquí */}
            <Footer />

        </BrowserRouter>
    )

}
