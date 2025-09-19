import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Screen/landingpage";
import Aboutscreen from "./Screen/Aboutscreen";
import Contactscreen from "./Screen/Contactscreen";
import CourseLanding from "./Screen/coursedes_screen";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <Router> {/* ✅ Wrap everything inside Router */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<Aboutscreen />} />
        <Route path="/contact" element={<Contactscreen />} />
        <Route path="/courseland/:courseId" element={<CourseLanding />} />
      </Routes>
    </Router>
  );
};

export default App;
