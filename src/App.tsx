import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SimulationProvider } from './context/SimulationContext';
import { Home } from './pages/Home';
import { SimulationsPage } from './pages/SimulationsPage';
import { SimulationDetail } from './pages/SimulationDetail';
import { SubjectSimulations } from './pages/SubjectSimulations';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { AdminDashboard } from './pages/admin/Dashboard';

function App() {
  return (
    <SimulationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulations" element={<SimulationsPage />} />
          <Route path="/simulations/:id" element={<SimulationDetail />} />
          <Route path="/subjects/:id" element={<SubjectSimulations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* Add more admin routes as needed */}
        </Routes>
      </Router>
    </SimulationProvider>
  );
}

export default App;