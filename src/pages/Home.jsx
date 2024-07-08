import CompanySection from "../components/home-components/CompanySection";
import FeatureProducts from "../components/home-components/FeatureProducts";
import HeroSection from "../components/home-components/HeroSection";
import Offer from "../components/home-components/Offer";
import OwnerProfile from "../components/home-components/OwnerProfile";

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
