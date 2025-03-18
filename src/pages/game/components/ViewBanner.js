import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import { ReactComponent as Visibility } from '../../../assets/svg/Visibility.svg';
import { ReactComponent as PlayArrow } from '../../../assets/svg/PlayArrow.svg';
import { ReactComponent as Chat } from '../../../assets/svg/Chat.svg';
import { ReactComponent as ViewTimeline } from '../../../assets/svg/ViewTimeline.svg';
import { ReactComponent as Contacts } from '../../../assets/svg/Contacts.svg';
import { Link } from "react-router-dom";


import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";

const ViewBanner = ({ data }) => {
    const [isBack, setIsBack] = useState('');
    return (
        <div
            className={`flex bg-cover bg-center relative px-4 pb-8 pt-[118px] bg-gradient-to-b from-[#543c2e]  from-50% via-50% `}
        >
            <div className="container m-auto lg:flex">
                <img src={data.img} className="w-2/5 mr-4 lg:w-2/12" />
                <div className="mt-4 lg:flex-col ">
                    <h3 className="text-xl dark:text-white font-bold">제목 입니다!!</h3>
                    <div className="flex items-center mt-2 mb-4">
                        <p className="flex items-center text-white text-sm "><Visibility className="fill-white w-4 h-4 mr-1" />200</p>
                        <p className="w-1 h-1 bg-white rounded-full mx-2 "></p>
                        <p className="flex items-center text-white text-sm "><MdFavoriteBorder className="fill-white w-4 h-4 mr-1" />200</p>
                        <p className="w-1 h-1 bg-white rounded-full mx-2 "></p>
                        <p className="flex items-center text-white text-sm ">투기</p>
                        <p className="w-1 h-1 bg-white rounded-full mx-2 "></p>
                        <p className="flex items-center text-white text-sm ">주짓수</p>
                    </div>
                    <div className="flex mb-4">
                        <button type="button" className="bg-white w-5/6 py-2 font-bold flex items-center justify-center text-sm rounded-md mr-2">
                            <PlayArrow className="mr-1 " />
                            신청하기
                        </button>
                        <button type="button" className="bg-white w-1/6 py-2 font-bold flex items-center justify-center text-sm rounded-md">
                            <MdFavoriteBorder className="text-2xl" />
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link to={"/Hotpl/Game/2/bracket"} className="flex flex-col items-center justify-center px-4 py-2">
                            <ViewTimeline className="fill-gray-200 mb-2" />
                            <p className="text-gray-100 text-xs">대진표</p>
                        </Link>
                        <Link className="flex flex-col items-center justify-center px-4 py-2">
                            <Contacts className="fill-gray-200 mb-2" />
                            <p className="text-gray-100 text-xs">신청현황</p>
                        </Link>
                        <Link className="flex flex-col items-center justify-center px-4 py-2">
                            <Chat className="fill-gray-200 mb-2" />
                            <p className="text-gray-100 text-xs">커뮤니티</p>
                        </Link>
                    </div>
                    <p className="text-neutral-200 text-sm pt-4 mt-4 border-t border-neutral-800">
                        When controlling the flow of text, using the CSS property
                        <span className="inline">display: inline</span>
                        will cause the text inside the element to wrap normally.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ViewBanner;
