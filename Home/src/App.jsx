import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AgendaDesa from "./pages/AgendaDesa/agendadesa.jsx";
import AgendaDesa2 from "./pages/AgendaDesa/agendadesa2.jsx";
import AgendaDesa3 from "./pages/AgendaDesa/agendadesa3.jsx"; // Impor komponen AgendaDesa3
import AgendaDesa4 from "./pages/AgendaDesa/agendadesa4.jsx"; // Impor komponen AgendaDesa4

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk AgendaDesa */}
        <Route path="/" element={<AgendaDesa />} />
        
        {/* Route untuk AgendaDesa2 */}
        <Route path="/agendadesa2" element={<AgendaDesa2 />} />

        {/* Route untuk AgendaDesa3 */}
        <Route path="/agendadesa3" element={<AgendaDesa3 />} />

        {/* Route untuk AgendaDesa4 */}
        <Route path="/agendadesa4" element={<AgendaDesa4 />} />
      </Routes>
    </Router>
  );
}
