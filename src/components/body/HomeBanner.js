import { Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const HomeBanner = () => {
    // style={{backgroundImage : `url(${img1})` }}
    return (
        <div className={`flex items-center bg-cover bg-center relative container m-auto`} >
            {/* <div className='backdrop-blur-sm w-full h-full absolute '></div> */}
            <Swiper
                className="text-black dark:text-white h-96 w-full lg:h-96"
                modules={[Scrollbar, Autoplay]}
                autoplay={{ // 자동 재생
                    delay: 4500, // 지연 시간 (한 슬라이더에 머물르는 시간)
                    disableOnInteraction: false, // 마우스 제어 이후 자동 재생을 막을지 말지
                }}
                scrollbar={true}
                speed={500}
                slidesPerView={1}
                style={{
                    "--swiper-scrollbar-bg-color": "#ffffff52",
                    "--swiper-scrollbar-drag-bg-color": "#fff",
                }}
            >
                <SwiperSlide className='bg-cover'></SwiperSlide>
                <SwiperSlide className='bg-cover'></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HomeBanner;