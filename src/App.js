import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import HomePage from "./pages/home";
import PlatformsPage from "./pages/platforms";
import EurekaNowLanding from "./pages/EurekaNow";
import EurekaConsultPage from "./pages/eureka-consult";
import ITConsultancyPage from "./pages/it-consultancy";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/contact";
import LegalPage from "./pages/legal";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platforms" element={<PlatformsPage />} />
        <Route path="/eureka-now" element={<EurekaNowLanding />} />
        <Route path="/eureka-consult" element={<EurekaConsultPage />} />
        <Route path="/it-consultancy" element={<ITConsultancyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
