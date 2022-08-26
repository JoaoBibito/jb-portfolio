import React from 'react';
import {HashRouter,Route,Routes} from 'react-router-dom';
import Inicio from '../src/pages/index';

function AppRoutes(){

    return(
        <HashRouter>
            <Routes>
                <Route path='/' exact element={<Inicio/>}/>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;