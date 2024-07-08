import CompanyLogos from "../../constants/CompanyLogos";
const CompanySection = () => {
  return (
    <>
      <h1 className="flex items-center justify-center sm:text-7xl text-4xl font-semibold text-center mt-14 mb-8 sm:mt-24 sm:mb-12">
        Companies We Interact With
      </h1>
      <div className="flex items-center justify-center">
        <div className="relative flex overflow-hidden w-3/4">
          <div className="whitespace-nowrap animate-scroll">
            <CompanyLogos />
          </div>
          <div className="whitespace-nowrap animate-scroll">
            <CompanyLogos />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanySection;
