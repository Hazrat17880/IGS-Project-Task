import React, { useState, useEffect } from "react";
import CallIcon from "@mui/icons-material/Call";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../logo.png"; // Adjust path as needed

function ColorLabel({ text }) {
  return (
    <>
      {text.split(" ").map((word, idx) => {
        if (word.startsWith("1IGS")) {
          const rest = word.slice(4);
          return (
            <span key={idx} className="mr-1">
              <span className="text-yellow-400 font-semibold">1IGS</span>
              <span className="text-blue-500">{rest}</span>
            </span>
          );
        } else if (word.startsWith("i") && word.length > 1) {
          return (
            <span key={idx} className="mr-1">
              <span className="text-yellow-400 font-semibold">i</span>
              <span className="text-blue-500">{word.slice(1)}</span>
            </span>
          );
        } else {
          return (
            <span key={idx} className="mr-1 text-blue-500 font-semibold">
              {word}
            </span>
          );
        }
      })}
    </>
  );
}

function Navbar() {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [thirdMenuOpen, setThirdMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState([]);

  const navItems = [
    { label: "Partner", key: "partner" },
    { label: "Company", key: "company" },
    { label: "Managed Services", key: "managed" },
    { label: "Industries", key: "industries" },
    { label: "Services", key: "services" },
  ];

  const navItems3 = [
    { label: "1IGS STRATEGY", key: "strategy" },
    { label: "COMPANY", key: "company2" },
    { label: "1IGS iPROCEDURE", key: "procedure" },
    { label: "1IGS iSUPPLY", key: "supply" },
    { label: "1IGS iFRIEGHT", key: "freight" },
    { label: "1IGS MANAGED SERVICES", key: "managedServices" },
  ];

 const toggleDropdown = (key) => {
  if (openDropdowns.includes(key)) {
    setOpenDropdowns([]);
  } else {
    setOpenDropdowns([key]); // only one dropdown open at a time
  }
};


  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setThirdMenuOpen(false);
        setOpenDropdowns([]);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-blue-600 px-4 py-2 text-sm text-white w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
          <ul className="flex flex-wrap items-center gap-3 w-full justify-center sm:justify-between">
            <div className="flex items-center gap-3">
              <li><IconButton size="small"><SearchIcon fontSize="small" /></IconButton></li>
              <li><IconButton size="small"><CallIcon fontSize="small" /></IconButton></li>
              <li className="relative">
                <div onClick={toggleLanguageDropdown} className="flex items-center gap-1 cursor-pointer">
                  <LanguageIcon fontSize="small" />
                  <ArrowDropDownIcon fontSize="small" />
                </div>
                {languageDropdownOpen && (
                  <ul className="absolute z-10 bg-white text-black rounded shadow mt-1 min-w-[80px] text-sm">
                    {["EN", "UR", "FR"].map((lang) => (
                      <li key={lang} className="px-3 py-1 hover:bg-gray-100 cursor-pointer">{lang}</li>
                    ))}
                  </ul>
                )}
              </li>
            </div>
            <div className="flex items-center gap-3">
              <li><IconButton size="small"><MessageIcon fontSize="small" className="text-[#F36434]" /></IconButton></li>
              <li><IconButton size="small"><PersonIcon fontSize="small" className="text-[#F36434]" /></IconButton></li>
            </div>
          </ul>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className=" px-4 py-3 shadow-md w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
            <ul className="hidden sm:block text-white font-bold text-sm border-l-2 border-white pl-3 space-y-1">
              <li>RESHAPING</li>
              <li>PROCUREMENT</li>
              <li>THROUGH INNOVATION</li>
            </ul>
          </div>
          <div className="flex items-center space-x-6">
            <ul className="hidden md:flex items-center space-x-6 text-white font-medium">
              {navItems.map(({ label, key }) => (
                <li key={key} className="relative">
                  <button onClick={() => toggleDropdown(key)} className="flex items-center gap-1">
                    {label} <span className="text-xs">{openDropdowns.includes(key) ? "▲" : "▼"}</span>
                  </button>
                  {openDropdowns.includes(key) && (
                    <ul className="absolute right-0 top-full mt-2 bg-white text-black rounded shadow-lg w-60 z-20">
                      {["Option 1", "Option 2", "Option 3"].map((opt) => (
                        <li key={opt} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">{opt}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="text-white text-2xl ml-4 md:ml-0">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <MdClose /> : <MdMenu />}
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-4 bg-blue-700 rounded p-4 text-white space-y-4 text-sm font-medium">
            {navItems.map(({ label, key }) => (
              <div key={key}>
                <button onClick={() => toggleDropdown(key)} className="w-full flex justify-between items-center">
                  {label} <span>{openDropdowns.includes(key) ? "▲" : "▼"}</span>
                </button>
                {openDropdowns.includes(key) && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {["Option 1", "Option 2", "Option 3"].map((opt) => (
                      <li key={opt} className="hover:underline cursor-pointer">{opt}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Third Navbar */}
      <nav className=" px-4 py-3 mt-5 shadow-md w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <ul className="hidden md:flex items-center space-x-6 font-medium list-none">
            {navItems3.map(({ label, key }) => (
              <li key={key} className="relative text-white">
                <button onClick={() => toggleDropdown(key)} className="flex items-center gap-1">
                  <ColorLabel text={label} /> <span className="text-xs">{openDropdowns.includes(key) ? "▲" : "▼"}</span>
                </button>
                {openDropdowns.includes(key) && (
                  <ul className="absolute left-0 top-full mt-2 bg-white text-black rounded shadow-lg w-60 z-20">
                    {["Option 1", "Option 2", "Option 3"].map((opt) => (
                      <li key={opt} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">{opt}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="md:hidden text-white text-2xl">
            <button onClick={() => setThirdMenuOpen(!thirdMenuOpen)}>
              {thirdMenuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>
        {thirdMenuOpen && (
          <div className="md:hidden mt-4 bg-blue-800 rounded p-4 text-white space-y-4 text-sm font-medium">
            {navItems3.map(({ label, key }) => (
              <div key={key}>
                <button onClick={() => toggleDropdown(key)} className="w-full flex justify-between items-center">
                  <ColorLabel text={label} /> <span>{openDropdowns.includes(key) ? "▲" : "▼"}</span>
                </button>
                {openDropdowns.includes(key) && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {["Option 1", "Option 2", "Option 3"].map((opt) => (
                      <li key={opt} className="hover:underline cursor-pointer">{opt}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
