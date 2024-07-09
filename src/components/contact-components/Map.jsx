const Map = () => {
  return (
    <>
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

export default Map;
