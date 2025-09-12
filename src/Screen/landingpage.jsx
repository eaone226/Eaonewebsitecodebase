import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Herosection from "../Components/Herosection";
import Courses from "../Components/Course";
import Features from "../Components/cards";
import Services from "../Components/Services";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Footer from "../Components/Footer";

const LandingPage = () => {
    React.useEffect(() => {
        if (window.location.hash) {
            const hash = window.location.hash.replace('#', '');
            const el = document.getElementById(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);
    return (
        <div className="bg-[#f7f7f7]">
            <Navbar />
            <Herosection />
            <Courses />
            <Features />
            <Services />
            <Banner />
            <About />
            <Footer />
        </div>
    );
}
export default LandingPage;