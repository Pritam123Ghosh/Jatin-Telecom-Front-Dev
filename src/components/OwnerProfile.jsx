const OwnerProfile = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-6 sm:m-8 m-6">
        <div className="min-h-11 flex items-center justify-center">
          <img src="./assets/image.png" alt="" width={"680px"} />
        </div>
        <div className="min-h-11 m-8">
          <h1 className="sm:text-7xl  text-4xl sm:ml-8 sm:mt-8 sm:mr-8 sm:mb-2 font-semibold">
            Hello, From <br /> Jatin Ghosh..
          </h1>
          <p className="sm:text-3xl sm:ml-8 sm:mt-2 sm:mr-8 sm:mb-8 text-xl font-oswald">
            <span className="font-bold">(Owner)</span>
            <br />
            <br />
          </p>
          <p className="sm:ml-8 sm:mb-3 sm:text-2xl text-xl">
            10+ Years of Experience in Jatin Telecom
          </p>
          <br />
          <p className="sm:ml-8 sm:text-2xl leading-relaxed text-gray-700">
            I am Jatin, proud owner of Jatin Telecom Services. With a passion
            for mobile technology, we specialize in offering a diverse range of
            devices and accessories, ensuring exceptional service and customer
            satisfaction at every interaction.
          </p>
        </div>
      </div>
    </>
  );
};

export default OwnerProfile;
