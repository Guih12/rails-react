import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./src/pages/About";

function App(){
    return (
        <>
            <h1>Sou um component REACT</h1>
        </>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
)
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="about" element={<About />} />
        </Routes>
    </BrowserRouter>
)