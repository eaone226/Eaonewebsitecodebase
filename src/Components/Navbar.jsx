import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinksVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  const linkClasses =
    "relative text-[#F7F7F7] font-bold text-[16px] cursor-pointer " +
    "hover:text-[#d2f801] transition-colors duration-300 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 " +
    "after:w-0 after:h-[2px] after:bg-[#d2f801] after:transition-all after:duration-300 " +
    "hover:after:w-full";

  const links = [
    { label: "Home", link: "/", type: "home" },
    { label: "Courses", link: "course", type: "scroll" },
    { label: "Services", link: "service", type: "scroll" },
    { label: "About", link: "/about", type: "router" },
    { label: "Contact", link: "/contact", type: "router" },
  ];

  const [showYellow, setShowYellow] = React.useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowYellow((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-[#0367fc] w-full md:w-full fixed top-0 left-0 z-50 shadow-md px-4 sm:px-20 md:px-[120px] h-[62px]">
      <div className="flex justify-between items-center h-full">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-[80px] sm:w-[100px] h-[50px] sm:h-[64px] cursor-pointer"
        >
          <motion.img
            src="/Ecialogo-white.png"
            alt="Ecialogo"
            animate={{ opacity: showYellow ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: showYellow ? 0 : 1 }}
          />
          <motion.img
            src="/Ecialogo-yellow.png"
            alt="Ecialogo"
            animate={{ opacity: showYellow ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: showYellow ? 1 : 0 }}
          />
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-[22px]">
          {links.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={navLinksVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
            >
              {item.type === "home" ? (
                location.pathname === "/" ? (
                  <span
                    className={linkClasses}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {item.label}
                  </span>
                ) : (
                  <RouterLink to="/" className={linkClasses}>
                    {item.label}
                  </RouterLink>
                )
              ) : item.type === "scroll" ? (
                location.pathname === "/" ? (
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    offset={-62}
                    duration={500}
                    className={linkClasses}
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <RouterLink to={`/#${item.link}`} className={linkClasses}>
                    {item.label}
                  </RouterLink>
                )
              ) : (
                <RouterLink to={item.link} className={linkClasses}>
                  {item.label}
                </RouterLink>
              )}
            </motion.div>
          ))}

          {/* Button */}
          <RouterLink to={location.pathname === "/business" ? "/" : "/business"}>
            <motion.button
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-bold border border-[#f7f7f7] rounded-[4px] text-[16px] px-3 h-[34px] hover:bg-[#f7f7f7] hover:text-[#0367fc] flex items-center justify-center text-[#f7f7f7] cursor-pointer"
            >
              {location.pathname === "/business" ? "For Student" : "For Business"}
            </motion.button>
          </RouterLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0367fc] w-full py-4 flex flex-col items-center space-y-4 shadow-lg">
          {links.map((item, i) => (
            <RouterLink
              key={i}
              to={item.link}
              className="text-white text-[16px] font-bold hover:text-[#d2f801]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </RouterLink>
          ))}
          <RouterLink
            to={location.pathname === "/business" ? "/" : "/business"}
            onClick={() => setMenuOpen(false)}
          >
            <button className="font-bold border border-[#f7f7f7]  text-[#f7f7f7] rounded-[4px] text-[16px] px-4 h-[34px] hover:bg-[#f7f7f7] hover:text-[#0367fc]">
              {location.pathname === "/business" ? "For Student" : "For Business"}
            </button>
          </RouterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
