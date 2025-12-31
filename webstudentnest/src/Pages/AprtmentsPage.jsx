import ApartmentsForall from '../Components/ApartmentsComp/Apartments';
import HeroApartment from '../Components/ApartmentsComp/HeroApartment';
import ApartmentSwiper from '../Components/ApartmentsComp/HeroApartment';
import Footer from '../Components/LandingPageComp/Footer/Footer';
import HeaderLandingPage from '../Components/LandingPageComp/Header/HeaderLandingPage';
import Loader from '../Components/PublicComp/Loader';
import { UseLoader } from '../Hooks/publicHook/useLoader';




export default function ApartmentPage() {

  let{loaderFalg}=UseLoader();


  if(loaderFalg){
    return <Loader/>
  }
  
  return (
    <div >
      <div >
        <div className='bg-[#3f51b5] '>
             <HeaderLandingPage/>

      </div>
        <HeroApartment/>
        <ApartmentsForall/>

      </div>
      
        <Footer/>
        
    </div>
  );
}
