import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import Footer from "../../components/page_body/Footer";
import Headers from "../../components/page_body/Headers";
import BottomNavigationBar from "../../components/page_body/BottomNavigationBar";
import ViewBanner from "./components/ViewBanner";

import { ReactComponent as Favorite } from '../../assets/svg/favorite.svg';
import { ReactComponent as Visibility } from '../../assets/svg/Visibility.svg';
import { ReactComponent as PlayArrow } from '../../assets/svg/PlayArrow.svg';
import { ReactComponent as Chat } from '../../assets/svg/Chat.svg';
import { ReactComponent as ViewTimeline } from '../../assets/svg/ViewTimeline.svg';
import { ReactComponent as Contacts } from '../../assets/svg/Contacts.svg';
import { Link } from "react-router-dom";


const GameView = () => {


    const data = { title: "제목 입니다!!!", img: require(`../../assets/images/img1.png`), gradientColor: ["from-[#df5554]", "from-[#cf0e62]"], lc: "대회 주소 입니다!!" }

    useEffect(() => {
        let SelectedFilter = document.querySelector('#SelectedFilter');
        SelectedFilter.classList.add('hidden')
        let BtnBack = document.querySelector('#BtnBack');
        BtnBack.classList.remove('hidden')
        let main = document.querySelector('main');
        main.scrollIntoView();
    })

    return (
        <div className="flex flex-col h-screen justify-between">
            <Headers />
            <main className="flex-auto bg-white dark:bg-[#141414]">
                <ViewBanner data={data} />
                <section className="px-4">
                    <h3 className="text-xl dark:text-white font-bold">제목 입니다!!</h3>
                    <div className="flex items-center mt-2 mb-4">
                        <p className="flex items-center text-white text-sm "><Visibility className="fill-white w-4 h-4 mr-1" />200</p>
                        <p className="w-1 h-1 bg-white rounded-full mx-2 "></p>
                        <p className="flex items-center text-white text-sm "><Favorite className="fill-white w-4 h-4 mr-1" />200</p>
                        <p className="w-1 h-1 bg-white rounded-full mx-2 "></p>
                        <p className="flex items-center text-white text-sm ">투기</p>
                        <p className="w-1 h-1 bg-white rounded-full mx-2 "></p>
                        <p className="flex items-center text-white text-sm ">주짓수</p>
                    </div>
                    <div className="flex mb-4">
                        <button type="button" className="bg-white w-5/6 py-2 font-bold flex items-center justify-center text-sm rounded-md mr-2">
                            <PlayArrow className="mr-1" />
                            신청하기
                        </button>
                        <button type="button" className="bg-white w-1/6 py-2 font-bold flex items-center justify-center text-sm rounded-md">
                            <Favorite />
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
                </section>
                <section className="px-4 py-4">
                    <Swiper
                        className="text-black dark:text-white border-b-2 border-neutral-800 "
                        speed={500}
                        slidesPerView={"auto"}
                    >
                        <SwiperSlide className='flex items-center justify-center w-auto text-sm px-4 py-4 text-white border-b-2'>
                            대회 상세
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-center w-auto text-sm px-4 py-4 text-white'>
                            공지 사항
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-center w-auto text-sm px-4 py-4 text-white'>
                            경기 규정
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-center w-auto text-sm px-4 py-4 text-white'>
                            기타
                        </SwiperSlide>

                    </Swiper>
                    <div className="py-4 px-4 border mt-4 rounded-md border-neutral-500">
                        <h3 className="text-white font-bold text-xl mb-4">대회 일정</h3>
                        <p className="text-xs dark:text-white dark:bg-neutral-500 inline-block px-2 py-1 rounded-full mb-2">신청 기간</p>
                        <p className="text-sm dark:text-white mb-2">2024, 01, 01 ~ 2025, 01, 01</p>
                        <p className="text-xs dark:text-white dark:bg-neutral-500 inline-block px-2 py-1 rounded-full mb-2">대회 기간</p>
                        <p className="text-xs dark:text-white">2024, 01, 01 ~ </p>
                    </div>
                    <div className="py-4 px-4 border mt-4 rounded-md border-neutral-500">
                        <h3 className="text-white font-bold text-xl mb-4">대회 주소</h3>
                        <p className="text-xs dark:text-white dark:bg-neutral-500 inline-block px-2 py-1 rounded-full mb-2">신청 기간</p>
                        <p className="text-sm dark:text-white mb-2">2024, 01, 01 ~ 2025, 01, 01</p>
                        <p className="text-xs dark:text-white dark:bg-neutral-500 inline-block px-2 py-1 rounded-full mb-2">대회 기간</p>
                        <p className="text-xs dark:text-white">2024, 01, 01 ~ </p>
                    </div>
                    <div className="py-4 px-4 border mt-4 rounded-md border-neutral-500">
                        <h3 className="text-white font-bold text-xl mb-4">대회 금액</h3>
                        <p className="text-xs dark:text-white dark:bg-neutral-500 inline-block px-2 py-1 rounded-full mb-2">신청 기간</p>
                        <p className="text-sm dark:text-white mb-2">2024, 01, 01 ~ 2025, 01, 01</p>
                        <p className="text-xs dark:text-white dark:bg-neutral-500 inline-block px-2 py-1 rounded-full mb-2">대회 기간</p>
                        <p className="text-xs dark:text-white">2024, 01, 01 ~ </p>
                    </div>
                    <div className="py-4 px-4 border mt-4 rounded-md border-neutral-500">
                        <h3 className="text-white font-bold text-xl mb-4">주요 사항</h3>
                        <p className="text-xs dark:text-white dark:bg-neutral-500 inline-block px-2 py-1 rounded-full mb-2">신청 기간</p>
                        <p className="text-sm dark:text-white mb-2">2024, 01, 01 ~ 2025, 01, 01</p>
                        <p className="text-xs dark:text-white dark:bg-neutral-500 inline-block px-2 py-1 rounded-full mb-2">대회 기간</p>
                        <p className="text-xs dark:text-white">2024, 01, 01 ~ </p>
                    </div>

                </section>
                <div className="h-20"></div>
            </main>
            <Footer />
            <BottomNavigationBar />
        </div>
    );
}

export default GameView;    