import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import Footer from "../../components/page_body/Footer";
import Headers from "../../components/page_body/Headers";
import BottomNavigationBar from "../../components/page_body/BottomNavigationBar";
import ViewBanner from "./components/ViewBanner";


import { ReactComponent as favorite } from '../../assets/svg/favorite.svg';

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
                <section className="px-4 py-4">
                    <div className="container m-auto ">
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