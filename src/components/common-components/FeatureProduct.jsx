// eslint-disable-next-line react/prop-types
const FeatureProduct = ({ image, name }) => {
  return (
    <>
      <div className="min-h-[250px] rounded-md sm:col-span-3 bg-white shadow-lg">
        <div className="flex flex-col items-center">
          <img src={image} alt="image" className="w-[200px]" />
          <p className="flex items-center justify-center text-center mt-3">
            {name}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
