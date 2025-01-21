import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";

const ViewBanner = ({ data }) => {
    const [isBack, setIsBack] = useState('');
    return (
        <div
            className={`flex bg-cover bg-center relative px-4 pb-8 pt-[118px] bg-gradient-to-b from-[#543c2e]  from-50% via-50% `}
        >
            <img src={data.img} className="w-2/5 mr-4" />
        </div>
    );
};

export default ViewBanner;
