import CommunityStats from "../Components/LandingPageComp/BodyComp/CommunityStats";
import Hero from "../Components/LandingPageComp/BodyComp/Hero";
import WhyUs from "../Components/LandingPageComp/BodyComp/WhyUs";
import Footer from "../Components/LandingPageComp/Footer/Footer";
import HeaderLandingPage from "../Components/LandingPageComp/Header/HeaderLandingPage";
import Loader from "../Components/PublicComp/Loader";
import { UseLoader } from "../Hooks/publicHook/useLoader";
import style from "../Styles/LandingStyle/LandingPage.module.css";
export default function LandingPage(){
    let { loaderFalg } = UseLoader();
      if (loaderFalg) {
        return <Loader/>;
      }
    return(
        <div  className={style.LandingPage}>
            <div className={style.headerandHero}>
                 <HeaderLandingPage/>
                 <Hero/>
            </div>
            
            <WhyUs/>
            <CommunityStats/>
            <Footer/>
        </div>
    );
}