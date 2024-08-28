import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../pages/home";
import Detail from "../pages/detail";
import Rating from "../pages/ratings";
import Error404 from "../pages/Error404";

const SiteRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<Home/>} />
                    <Route path='/detail/:id' element={<Detail/>} />
                    <Route path='/ratings' element={<Rating/>} />
                </Route>
                <Route path="*" element={<Error404/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default SiteRoutes
