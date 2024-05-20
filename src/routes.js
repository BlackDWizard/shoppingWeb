import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./component/main";

const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/main" element={<Main />} />
            </Routes>
        </HashRouter>
    );
}

export default AppRouter;