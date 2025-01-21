import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import Footer from "../../components/page_body/Footer";
import Headers from "../../components/page_body/Headers";
import BottomNavigationBar from "../../components/page_body/BottomNavigationBar";
import ViewBanner from "./components/ViewBanner";


const GameBracket = () => {

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
                <div className="h-20"></div>
            </main>
            <Footer />
            <BottomNavigationBar />
        </div>
    );
}

export default GameBracket;    