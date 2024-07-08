import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
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
      <h1 className="sm:text-7xl text-4xl font-semibold text-black sm:px-20 p-10">
        Find Us
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4791578006684!2d88.04350117443124!3d23.006172616941694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f85d76b334c449%3A0x2db8a014ebcd35c5!2sJATIN%20TELECOM%20SERVICE!5e0!3m2!1sen!2sin!4v1720070557592!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <br />
    </>
  );
};

export default Contact;
