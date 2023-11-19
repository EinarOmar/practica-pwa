import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../views/Home/Inicio';
import { Nosotros } from '../views/AboutUs/Nosotros';
import Acceso from '../views/Access/Acceso'; // Updated import statement
import Registro from '../views/Register/Registro';
import { TerminosCondiciones } from '../views/Privaty/TerminosCondiciones';
import { Tienda } from '../views/Store/Tienda';
import { AppNavbar } from '../components/layout/navbar/AppNavbar';
import { AppFooter } from '../components/layout/footer/AppFooter';
import { Politicas } from '../views/Privaty/Politicas';
import Ropa from "../views/Store/Ropa/Ropa";
import Calzado from "../views/Store/Calzado/Calzado";
import Equipamiento from "../views/Store/Equipamiento/Equipamiento";
import Nutricion from "../views/Store/Nutricion/Nutricion";
import ScrollToTop from '../components/items/ScrollToTop';
import Consultador from "../views/perfiles/consultador"
import Administrador from "../views/perfiles/administrador"
export const Router = () => {
  return (
    <BrowserRouter>
        <AppNavbar/>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/sobre-nosotros' element={<Nosotros/>} />
            <Route path='/acceso' element={<Acceso/>} />
            <Route path='/registro' element={<Registro/>} />
            <Route path='/consultador' element={<Consultador/>} />
            <Route path='/administrador' element={<Administrador/>} />
            <Route path='/terminos-y-condiciones' element={<TerminosCondiciones/>} />
            <Route path='/politicas-de-privacidad' element={<Politicas/>} />

            <Route path="/tienda/" >
              <Route index element={<Tienda />} />
              <Route path="ropa" element={<Ropa />} />
              <Route path="calzado" element={<Calzado />} />
              <Route path="equipamiento" element={<Equipamiento />} />
              <Route path="nutricion" element={<Nutricion />} />
            </Route>

            <Route path='*' element={"error"} />
          </Routes>
        </ScrollToTop>
        <AppFooter/>
    </BrowserRouter>
  )
}
