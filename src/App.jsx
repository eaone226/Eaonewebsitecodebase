import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutscreen from "./Screen/Aboutscreen";
import LandingPage from "./Screen/landingpage";
import Contactscreen from "./Screen/Contactscreen";
import ScrollToTop from "./Components/ScrollToTop";
import CourseLanding from "./Screen/coursedescriptionscreen";
const App = () => {
    return (
        <Router>
            <ScrollToTop></ScrollToTop>
            <Routes>
                <Route path="/" element={<CourseLanding />} />
                <Route path="/about" element={<Aboutscreen />} />
                <Route path="/contact" element={<Contactscreen />} />
                <Route path="/courseland" element={<CourseLanding />} />
            </Routes>
        </Router>
    );
}
export default App;