import { useEffect } from "react";
import HomeBanner from "../../components/body/HomeBanner";
import Footer from "../../components/page_body/Footer";
import Headers from "../../components/page_body/Headers";
import Section03 from "../home/compnoents/Section03";
import BottomNavigationBar from "../../components/page_body/BottomNavigationBar";


const GamePage = () => {

    const data = [
        {title: "제목 입니다!!!", img : require(`../../assets/images/img1.png`), lc : "대회 주소 입니다!!"},
        {title: "제목 입니다!!!", img : require(`../../assets/images/img2.png`), lc : "대회 주소 입니다!!"},
        {title: "제목 입니다!!!", img : require(`../../assets/images/img3.png`), lc : "대회 주소 입니다!!"},
        {title: "제목 입니다!!!", img : require(`../../assets/images/img4.png`), lc : "대회 주소 입니다!!"},
        {title: "제목 입니다!!!", img : require(`../../assets/images/img3.png`), lc : "대회 주소 입니다!!"},
    ]

    useEffect(() => {
      let main = document.querySelector('main');
      main.scrollIntoView();
    })

    return (
        <div className="flex flex-col h-screen justify-between">
            <Headers />
            <main className="flex-auto bg-white dark:bg-[#141414]">
                <HomeBanner />
                <Section03 />
                <div className="h-20"></div>
            </main>
            <Footer />
            <BottomNavigationBar />
        </div>
    );
}

export default GamePage;