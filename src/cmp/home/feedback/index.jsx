// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
const Feedback =()=>{
    return(
        <div className="p-24 bg-blue-800">
            <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
          
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="flex p-12 flex-col gap-y-4">
                <p className="text-white text-md">William Chad</p>
                <p className="text-zinc-100 text-sm ">May 4, 2022</p>
                <p className= 'text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod</p>
                <div className="flex items-center justify-center">
                    {
                        Array(5).fill(0).map((items,index) =>(
                            <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        ))
                    }
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="flex p-12 flex-col gap-y-4">
                <p className="text-white text-md">Dead Liar</p>
                <p className="text-zinc-100 text-sm ">May 4, 2022</p>
                <p className= 'text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod</p>
                <div className="flex items-center justify-center">
                    {
                        Array(3).fill(0).map((items,index) =>(
                            <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        ))
                    }
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="flex p-12 flex-col gap-y-4">
                <p className="text-white text-md">Dattebayo MF</p>
                <p className="text-zinc-100 text-sm ">May 4, 2022</p>
                <p className= 'text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod</p>
                <div className="flex items-center justify-center">
                    {
                        Array(4).fill(0).map((items,index) =>(
                            <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        ))
                    }
                </div>
                </div>
            </SwiperSlide>
            
            




      </Swiper>
    </>
        </div>
    )
    
}
export default Feedback;