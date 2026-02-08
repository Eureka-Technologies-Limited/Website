import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import HomePage from "./pages/home";
import PlatformsPage from "./pages/platforms";
import PrintNestPage from "./pages/printnest";
import LogBugPage from "./pages/logbug";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platforms" element={<PlatformsPage />} />
        <Route path="/printnest" element={<PrintNestPage />} />
        <Route path="/logbug" element={<LogBugPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}