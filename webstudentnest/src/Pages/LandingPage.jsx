import CommunityStats from "../Componnets/LandingPageComp/BodyComp/CommunityStats";
import Hero from "../Componnets/LandingPageComp/BodyComp/Hero";
import WhyUs from "../Componnets/LandingPageComp/BodyComp/WhyUs";
import Footer from "../Componnets/LandingPageComp/Footer/Footer";
import HeaderLandingPage from "../Componnets/LandingPageComp/Header/HeaderLandingPage";
import Loader from "../Componnets/PublicComp/Loader";
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