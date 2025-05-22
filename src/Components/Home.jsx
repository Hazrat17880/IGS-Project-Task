import React, { useState } from "react";
import backgroundImage from "../banner.jpg";
import Navbar from "./Navbar";
import bgimage from "../bgimae.png";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.95,
          minHeight: "100vh",
          width: "100%",
        }}
        className="text-white"
      >
        <Navbar />

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 pt-10 gap-10">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row items-start gap-6 max-w-2xl">
            {/* Vertical Indicators */}
            <div className="flex flex-row md:flex-col gap-2">
              <div
                onClick={() => setActiveIndex(0)}
                className={`w-2 h-12 cursor-pointer rounded transition-all duration-300 ${
                  activeIndex === 0 ? "bg-blue-500" : "bg-gray-400"
                }`}
              ></div>
              <div
                onClick={() => setActiveIndex(1)}
                className={`w-2 h-12 cursor-pointer rounded transition-all duration-300 ${
                  activeIndex === 1 ? "bg-blue-500" : "bg-gray-400"
                }`}
              ></div>
            </div>

            {/* Text Content */}
            <div className="space-y-4">
              {activeIndex === 0 && (
                <>
                  <h1 className="text-2xl md:text-3xl font-bold leading-relaxed">
                    IGS exemplifies its dedication to sustainability through
                    innovative procurement and supply chain practices that boost
                    operational efficiency and drive industry-leading
                    innovation.
                  </h1>
                  <p className="text-sm md:text-base">
                    IGS is committed to delivering high-quality products on
                    time, every time.
                  </p>
                  <button className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded font-semibold shadow hover:bg-blue-100 transition">
                    Book a Meeting <FaArrowRight className="text-md" />
                  </button>
                </>
              )}
              {activeIndex === 1 && (
                <h1 className="text-2xl md:text-3xl font-bold leading-relaxed">
                  Our second initiative focuses on reducing carbon emissions and
                  enhancing transparency in supplier relationships through
                  technology-driven solutions.
                </h1>
              )}
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="w-full md:w-auto flex justify-center md:justify-end mt-8">
            <img
              src={bgimage}
              alt="Visual Content"
              className="w-full max-w-xs md:max-w-lg lg:max-w-[1016px] md:h-[728px] h-auto rounded-lg shadow-xl transform -rotate-90"
              style={{ maxHeight: "80vh" }}
            />
          </div>

          
        </div>
 <div
      className="px-6 md:px-12 lg:px-24 py-16 text-white bg-cover bg-center"
     
    >
      {/* Top Paragraph */}
      <p className="text-lg md:text-xl text-left mb-10">
        Discover the benefits of our services designed to enhance your business success.
      </p>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 text-left text-white">
          <h1 className="text-xl font-bold mb-2">Expertly crafted solutions with global reach</h1>
          <p className="text-sm mb-4">
            Our procurement and supply chain processes enhance operations for your organization's success.
          </p>
          <span className="text-orange-600 font-medium">Let's Co-Create >></span>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6  text-white">
          <h1 className="text-xl font-bold mb-2">Strategic, collaborative, and driven</h1>
          <p className="text-sm mb-4">
           We leverage innovative strategies and cutting-edge technology to streamline our processes.
          </p>
          <span className="text-orange-600 font-medium"> Business Process Outsourcing >></span>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6  text-white">
          <h1 className="text-xl font-bold mb-2">Fresh perspective for continuous transformation</h1>
          <p className="text-sm mb-4">
           xpert teams to develop groundbreaking solutions
“Yes, we can do it even better.”
          </p>
          <span className="text-orange-600 font-medium">Direct Procurement >></span>
        </div>
      </div>
    </div>
      </div>
    </>
  );
}

export default Home;
