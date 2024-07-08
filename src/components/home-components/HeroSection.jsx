import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-6 sm:m-8 m-6">
        <div className="min-h-11">
          <h1 className="sm:text-7xl sm:m-12 text-4xl font-semibold m-8">
            Welcome to <br /> Jatin Telecom Services
          </h1>
          <p className="sm:text-3xl sm:m-12 text-xl m-8 font-oswald text-gray-700">
            Expert mobile phone buy and repair shop offering fast, reliable, and
            affordable services to keep your devices running smoothly.
            <br />
            <br />
            <button className="bg-green-700 text-white font-extralight py-2 px-4 border border-blue-700 rounded-md flex">
              Contact Us <ArrowRight className="ml-2 mt-2" />
            </button>
          </p>
        </div>
        <div className="min-h-11 flex items-center justify-center">
          <img src="./assets/1are.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
