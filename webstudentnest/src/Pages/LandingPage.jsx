import ApartmentView from "../Components/LandingPageComp/BodyComp/ApartmentView";
import CommunityStats from "../Components/LandingPageComp/BodyComp/CommunityStats";
import Hero from "../Components/LandingPageComp/BodyComp/Hero";
import WhyUs from "../Components/LandingPageComp/BodyComp/WhyUs";
import Footer from "../Components/LandingPageComp/Footer/Footer";
import HeaderLandingPage from "../Components/LandingPageComp/Header/HeaderLandingPage";
import Loader from "../Components/PublicComp/Loader";
import { useUser } from "../Hooks/UserHook/UseUser";

export default function LandingPage() {
  const { loader } = useUser();
  if (loader) return <Loader />;

  return (
    <div className="bg-white selection:bg-[#3f51b5] selection:text-white">
      <div className="relative">
        <HeaderLandingPage />
        <Hero />
      </div>
      
      <main className="space-y-0"> 
        <WhyUs />
        <div className="bg-gray-50">
          <CommunityStats />
        </div>
        <ApartmentView />
      </main>
      
      <Footer />
    </div>
  );
}