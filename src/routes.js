import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./component/FirstPage";

const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<FirstPage />} />
            </Routes>
        </HashRouter>
    );
}

export default AppRouter;