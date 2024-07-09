import FeatureProduct from "../common-components/FeatureProduct";
import { v4 as uuidv4 } from "uuid";
import { featuredata } from "../../constants/data/featuredata";
const FeatureProducts = () => {
  return (
    <>
      <h1 className="flex items-center justify-center sm:text-7xl text-4xl font-semibold text-center mt-14 mb-8 sm:mt-24 sm:mb-12">
        Featured Product
      </h1>
      <div className="grid sm:grid-cols-12 sm:m-20 m-12 gap-4">
        {featuredata.map((item) => {
          return (
            <FeatureProduct
              key={uuidv4()}
              image={item.image}
              name={item.name}
            />
          );
        })}
      </div>
    </>
  );
};

export default FeatureProducts;
