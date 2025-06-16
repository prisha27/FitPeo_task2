import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"; 
import SD4P from "./SD4P.jsx"; 
import Privacy from './PrivacyPolicy.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sd4p" element={<SD4P />} />
        <Route path="/privacy-policy" element={< Privacy/>} />
      </Routes>
    </BrowserRouter>
  );
}
