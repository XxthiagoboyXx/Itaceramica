import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contato from './pages/Contato';
import Product from './pages/Product';
import P1 from './pages/p1';
import P2 from './pages/p2';
import P3 from './pages/p3';
import P4 from './pages/p4';
import P5 from './pages/p5';
import P6 from './pages/p6';
import P7 from './pages/p7';
import P8 from './pages/p8';
import Sucesso from './pages/Sucesso';

export default function Router() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contato" exact element={<Contato />} />
            <Route path="/produto" exact element={<Product />} />
            <Route path="/sucesso" exact element={<Sucesso />} />
            <Route path="/p1" exact element={<P1 />} />
            <Route path="/p2" exact element={<P2 />} />
            <Route path="/p3" exact element={<P3 />} />
            <Route path="/p4" exact element={<P4 />} />
            <Route path="/p5" exact element={<P5 />} />
            <Route path="/p6" exact element={<P6 />} />
            <Route path="/p7" exact element={<P7 />} />
            <Route path="/p8" exact element={<P8 />} />
        </Routes>
    );
};
