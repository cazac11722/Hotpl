import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import main_visual1 from "../../assets/images/main_visual1.png";
import { useState } from "react";

const slideData = [
    {
        image: main_visual1,
        gradientColor: "from-[#543c2e]", // 원하는 Tailwind 색상
    },
    {
        image: main_visual1,
        gradientColor: "from-[#543c2e]",
    },
    {
        image: main_visual1,
        gradientColor: "from-[#543c2e]",
    },
];

const HomeBanner = () => {
    const [isBack, setIsBack] = useState('');
    return (
        <div
            className={`flex items-center bg-cover bg-center relative px-4 pb-8 pt-[118px] bg-gradient-to-b ${isBack} from-50% via-20% `}
        >
            <Swiper
                className="text-black dark:text-white h-96 w-full lg:h-screen"
                modules={[Scrollbar, Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                scrollbar={true}
                speed={500}
                slidesPerView={1}
                style={{
                    "--swiper-scrollbar-bg-color": "#ffffff52",
                    "--swiper-scrollbar-drag-bg-color": "#fff",
                }}
                onSlideChange={(swiper) => {
                    setIsBack(slideData[swiper.activeIndex].gradientColor)
                }}
                onSwiper={(swiper) => {
                    setIsBack(slideData[swiper.activeIndex].gradientColor)
                }}
            >
                {slideData.map((slide, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                            className={`bg-cover bg-center bg-gradient-to-b `}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        ></SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default HomeBanner;
