import ApartmentsForall from '../Components/ApartmentsComp/Apartments';
import ApartmentSwiper from '../Components/ApartmentsComp/Swiper';
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
      <div className=' '>
        <div className='bg-[#3f51b5]   '>
             <HeaderLandingPage/>

      </div>
        {/* <ApartmentSwiper/> */}
        <ApartmentsForall/>

      </div>
      
        <Footer/>
        
    </div>
  );
}
