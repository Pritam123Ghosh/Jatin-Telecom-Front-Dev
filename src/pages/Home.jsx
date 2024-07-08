import CompanySection from "../components/CompanySection";
import FeatureProducts from "../components/FeatureProducts";

import HeroSection from "../components/HeroSection";

import Offer from "../components/Offer";
import OwnerProfile from "../components/OwnerProfile";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OwnerProfile />
      <CompanySection />
      <FeatureProducts />
      <Offer />
    </div>
  );
};

export default Home;
