import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const HeroContact = () => {
  return (
    <>
      <div className="bg-white flex flex-col items-center justify-between p-10 md:flex-row md:p-20">
        <div className="flex flex-col space-y-4 md:space-y-6 max-w-md">
          <h2 className="text-2xl font-semibold text-green-700 sm:text-3xl">
            How can we help you?
          </h2>
          <h1 className="sm:text-7xl text-4xl font-semibold text-black  ">
            Contact us
          </h1>
          <p className="sm:text-2xl text-gray-700 ">
            We&apos;re here to help and answer any questions you might have. We
            look forward to hearing from you!
          </p>

          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faLocationDot} className="h-6" />
            <span className="text-sm sm:text-lg text-black">
              Khanpur, Hooghly (Opposite Sohom Lodge)
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="h-6" />
            <span className="text-sm sm:text-lg text-black">
              +91 9775146998
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="h-6" />
            <span className="text-sm sm:text-lg text-black">
              jatinghoshrock@gmail.com
            </span>
          </div>
        </div>
        <div className="mt-10 md:mt-2">
          <img src="./assets/ill2.jpg" alt="Contact Image" />
        </div>
      </div>
    </>
  );
};

export default HeroContact;
