import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function ApartmentSwiper(){
    return(
         <div className="w-full  h-[calc(100vh-9rem)]  mx-auto    ">
          
        <Swiper
     spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" overflow-hidden h-full  " 
    >
       <SwiperSlide>
        <div className="w-full h-full bg-blue-500 flex items-center justify-center ">
            <img className='h-full w-full object-cover ' src='https://i.pinimg.com/1200x/7c/b8/5e/7cb85e524b8abb56a15e6b70de261597.jpg'/>
          </div>
           <div className='absolute top-0 left-0 w-full h-full  z-40  '></div>
            <div className='absolute top-1/2 left-1/2 -translate-2/4 text-white text-center z-50 flex flex-col'>
                                
                 <h1 className='text-4xl'>find the safe place for you</h1> 
                              
             </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full bg-blue-500 flex items-center justify-center ">
            <img className='h-full w-full object-cover' src='https://i.pinimg.com/1200x/7c/b8/5e/7cb85e524b8abb56a15e6b70de261597.jpg'/>
          </div>
           <div className='absolute top-0 left-0 w-full h-full  z-50'></div>
               <div className='absolute top-1/2 left-1/2 -translate-2/4 text-white text-center z-50 flex flex-col'>
                                
                 <h1 className='text-4xl'>find the safe place for you</h1>  
                              
             </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full bg-blue-500 flex items-center justify-center ">
            <img className='h-full w-full object-cover' src='https://i.pinimg.com/1200x/7c/b8/5e/7cb85e524b8abb56a15e6b70de261597.jpg'/>
          </div>
           <div className='absolute top-0 left-0 w-full h-full  z-50'></div>
               <div className='absolute top-1/2 left-1/2 -translate-2/4 text-white text-center z-50 flex flex-col'>
                                
                <h1 className='text-4xl'>find the safe place for you</h1> 
                              
             </div>

      </SwiperSlide>
      
     
     
      
    </Swiper>
    </div>
    );
}