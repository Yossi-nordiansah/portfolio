"use client";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import dynamic from "next/dynamic";

const Home = () => {
  const [showResume, setShowResume] = useState(false);
  const PDFViewer = dynamic(() => import("./_components/PDFViewer"), {
    ssr: false,
  });
  useEffect(() => {
    AOS.init();
  }, []);

  const [showContact, setShowContact] = useState(false);

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-4 md:px-10">
        {/* Background Accents */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div
            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4"
            data-aos="fade-down"
          >
            <span className="text-cyan-400 font-medium tracking-wide">
              Welcome to my portfolio
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold font-poppins text-white tracking-tight"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            {"Hi, I'm "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Yossi Nordiansah
            </span>
          </h1>

          <div className="h-20 md:h-24 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                "Fullstack Web Developer",
                2000,
                "React.js & Next.js Enthusiast",
                2000,
                "Backend Developer (Node/PHP)",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-2xl md:text-4xl font-light text-slate-300 font-inter"
              repeat={Infinity}
            />
          </div>

          <div
            className="flex flex-col md:flex-row gap-4 justify-center mt-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore My Work
            </button>
            <button
              onClick={() => setShowResume(true)}
              className="px-8 py-3 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 backdrop-blur-md transition-all duration-300 group"
            >
              View Resume{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="relative py-0 md:py-20 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative order-2 lg:order-1 mt-6 md:mt-0"
            data-aos="fade-right"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-3 md:p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins flex items-center gap-3">
                <span className="w-10 h-1 bg-cyan-500 rounded-full"></span>{" "}
                About Me
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed font-inter text-justify">
                Fullstack Web Developer with experience in JavaScript and
                PHP-based web development. Strong focus on
                <span className="text-cyan-400 font-semibold">
                  {" "}
                  Frontend development
                </span>{" "}
                using React.js/Next.js to build responsive, modular, and
                user-friendly interfaces, supported by Tailwind CSS for
                efficient styling. Experienced in
                <span className="text-blue-400 font-semibold">
                  {" "}
                  Backend development
                </span>
                , database integration, and collaborative workflows using Git
                and GitHub.
              </p>
            </div>
          </div>

          <div
            className="flex justify-center items-center"
            data-aos="fade-left"
          >
            <div className="flex items-center w-72 h-72 md:w-72 md:h-72">
              <img
                src="/images/profile.png"
                alt="Profile"
                className="filter drop-shadow-[0_10px_25px_rgba(59,130,246,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div id="education" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16 font-poppins"
          data-aos="fade-up"
        >
          <span className="border-b-4 border-blue-500 pb-2 text-nowrap">
            Education Journey
          </span>
        </h2>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {/* Education Item 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-blue-500/50 relative z-10">
              <img
                src="/icons/education-cap-svgrepo-com.svg"
                className="w-5 h-5"
                alt=""
              />
            </div>
            <div
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-2 md:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl hover:bg-white/10 transition-all duration-300"
              data-aos="fade-left"
            >
              <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center mb-2">
                <h3 className="text-xl font-bold text-cyan-400">
                  Universitas Islam Majapahit
                </h3>
                <span className="text-xs font-mono py-1 px-2 rounded bg-blue-900/50 text-blue-200 mt-1 xs:mt-0 text-nowrap">
                  2021 - 2025
                </span>
              </div>
              <p className="text-white font-medium mb-1">
                Informatics Engineering
              </p>
              <p className="text-slate-400 text-sm">Bachelor Degree</p>
            </div>
          </div>

          {/* Education Item 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-blue-500/50 relative z-10">
              <img
                src="/icons/education-cap-svgrepo-com.svg"
                className="w-5 h-5"
                alt=""
              />
            </div>
            <div
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-2 md:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl hover:bg-white/10 transition-all duration-300"
              data-aos="fade-right"
            >
              <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center mb-2">
                <h3 className="text-xl font-bold text-cyan-400">
                  SMAN 1 Kutorejo
                </h3>
                <span className="text-xs font-mono py-1 px-2 rounded bg-blue-900/50 text-blue-200 mt-1 xs:mt-0">
                  2015 - 2018
                </span>
              </div>
              <p className="text-white font-medium mb-1">Science Major</p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div
        id="experience"
        className="py-20 px-6 md:px-12 max-w-7xl mx-auto bg-slate-900/30"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16 font-poppins"
          data-aos="fade-up"
        >
          <span className="border-b-4 border-cyan-500 pb-2">
            Work Experience
          </span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 flex-wrap">
          <div
            className="group relative p-1 rounded-2xl bg-gradient-to-b from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 w-full md:w-[calc(50%-1rem)] max-w-md"
            data-aos="flip-left"
            data-aos-delay="0"
          >
            <div className="bg-slate-900 h-full rounded-xl p-6 relative overflow-hidden group-hover:bg-slate-800 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <img
                  src="/icons/work.svg"
                  className="w-20 h-20 invert"
                  alt=""
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                PT AZlogistik Dot Com
              </h3>
              <p className="text-cyan-400 font-semibold mb-4">
                Fulltime Job (Project Based) Operator AI (Frontend Development)
              </p>
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                <span>📅</span> October 2025 – December 2025
              </div>
              <p className="text-slate-300 text-sm">
                ● Developed reusable and maintainable UI components to support
                scalable application interfaces.<br></br>● Implemented REST API
                integration between frontend and backend services.
              </p>
            </div>
          </div>

          {/* Experience Card 2 */}
          <div
            className="group relative p-1 rounded-2xl bg-gradient-to-b from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 w-full md:w-[calc(50%-1rem)] max-w-md"
            data-aos="flip-left"
            data-aos-delay="100"
          >
            <div className="bg-slate-900 h-full rounded-xl p-6 relative overflow-hidden group-hover:bg-slate-800 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <img
                  src="/icons/work.svg"
                  className="w-20 h-20 invert"
                  alt=""
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">CV Natusi</h3>
              <p className="text-blue-400 font-semibold mb-4">
                Internship • Fullstack Developer
              </p>
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                <span>📅</span>April 2024 - May 2024
              </div>
              <p className="text-slate-300 text-sm">
                ● Translated Figma designs into fully responsive and
                user-friendly web interfaces.<br></br>● Integrated applications
                with relational databases for efficient data management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div
        className="fixed right-6 bottom-9 flex flex-col gap-4 z-40"
        data-aos="fade-left"
      >
        <a
          target="_blank"
          href="https://wa.me/6285655230897"
          className="group relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:shadow-green-500/50 hover:bg-green-400 transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
          <img
            src="/images/icons8-whatsapp-48.png"
            alt="WhatsApp"
            className="w-8 h-8 brightness-0 invert"
          />
        </a>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[201] p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl h-[85vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute top-0 left-0 right-0 h-14 bg-slate-800 flex items-center justify-between px-6 border-b border-white/10 z-10">
              <h3 className="text-white font-semibold">Resume Preview</h3>
              <button
                onClick={() => setShowResume(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                ✕ Close
              </button>
            </div>
            <div className="pt-14 bg-slate-800/50">
              <PDFViewer url="/pdf/resume.pdf" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
