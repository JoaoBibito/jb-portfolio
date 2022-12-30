import React from 'react';
import {HashRouter,Route,Routes} from 'react-router-dom';
import {Index} from '../src/pages/index/index';

function AppRoutes(){

    return(
        <HashRouter>
            <Routes>
                <Route path='/' exact element={<Index/>}/>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;