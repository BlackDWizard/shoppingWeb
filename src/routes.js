import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Index from "./component/Index/Index";
import Shop from "./component/Shop/Shop";
import Why from "./component/Why/Why";
import Testimonial from "./component/Testimonial/Testimonial";
import Contact from "./component/Contact/Contact";

const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/shop" element={<Shop />} />
                <Route exact path="/why" element={<Why />} />
                <Route exact path="/testimonial" element={<Testimonial />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </HashRouter>
    );
}

export default AppRouter;