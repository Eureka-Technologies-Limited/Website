import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import HomePage from "./pages/home";

/**
 * 
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
 */

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <HomePage />
        </div>
    )
}