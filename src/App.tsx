import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MedicationPage from "./pages/medicationPage";
import NavBar from "./components/common/NavBar";
import PharmacistDashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<PharmacistDashboard />} />
          <Route path="/medications" element={<MedicationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
