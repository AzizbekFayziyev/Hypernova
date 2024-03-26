import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Progress from "./components/Progress";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// COMPONENTS
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="relative">
      <Navbar />
      <Header />
      <Services />
      <Projects />
      <Progress />
      <Contact />
      <Footer />

      {/* Background items */}
      <img
        className="absolute top-[15.5%] left-[30%] z-[-1]"
        src="./star.svg"
        alt="Star"
      />
      <img
        className="absolute top-[21.5%] left-[62%] z-[-1]"
        src="./star.svg"
        alt="Star"
      />
      <img
        className="absolute top-[36%] left-[30%] z-[-1]"
        src="./star.svg"
        alt="Star"
      />
      <img
        className="absolute top-[42%] left-[30%] z-[-1]"
        src="./star.svg"
        alt="Star"
      />
      <img
        className="absolute top-[45%] left-[70%] z-[-1]"
        src="./star.svg"
        alt="Star"
      />
      <img
        className="absolute top-[58%] left-[70%] z-[-1]"
        src="./star.svg"
        alt="Star"
      />
      <img
        className="absolute top-[66%] left-[30%] z-[-1]"
        src="./star.svg"
        alt="Star"
      />
      <img
        className="absolute top-[71%] left-[65%] z-[-1]"
        src="./star.svg"
        alt="Star"
      />
      <img
        className="absolute top-[78%] left-[20%] z-[-1]"
        src="./star.svg"
        alt="Star"
      />
      <img
        className="absolute top-[85%] right-[30%] z-[-1]"
        src="./star.svg"
        alt="Star"
      />
      <img
        className="absolute top-[91%] left-[25%] z-[-1]"
        src="./star.svg"
        alt="Star"
      />
      <div className="absolute w-80 h-80 top-[31%] left-[200px] z-[-1] rounded-full blur-[100px] bg-[#196cf4c4]"></div>
      <div className="absolute w-60 h-60 top-[31%] left-[65%] z-[-1] rounded-full blur-[110px] bg-[#19f4f4c4]"></div>
      <div className="absolute w-60 h-60 top-[48%] left-[200px] z-[-1] rounded-full blur-[110px] bg-[#19f4f4c4]"></div>
      <img
        className="absolute top-[48%] right-[-13%] z-[-1]"
        src="./planets/1.png"
        alt="Saturn"
      />
      <img
        className="absolute top-[20%] right-[-8%] z-[-1] opacity-25"
        src="./planets/2.png"
        alt="Dark hole"
      />
      <img
        className="absolute top-[70%] right-[-13%] z-[-1] opacity-50"
        src="./planets/2.png"
        alt="Saturn"
      />
      <img
        className="absolute top-[37%] left-[-10%] z-[-1]"
        src="./planets/3.png"
        alt="Planet"
      />
    </main>
  );
};

export default App;
