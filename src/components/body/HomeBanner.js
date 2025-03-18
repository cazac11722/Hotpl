import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import main_visual1 from "../../assets/images/img1.png";
import main_visual2 from "../../assets/images/img2.png";
import main_visual3 from "../../assets/images/img6.png";
import { useState } from "react";

const slideData = [
    {
        image: main_visual3,
        gradientColor: "from-[#0a0605]", // 원하는 Tailwind 색상
    },
    {
        image: main_visual2,
        gradientColor: "from-[#950341]",
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
                className="text-black dark:text-white h-96 w-full lg:w-1/2 lg:h-96"
                modules={[Scrollbar, Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                scrollbar={true}
                speed={500}
                spaceBetween={20}
                slidesPerView={3}
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
