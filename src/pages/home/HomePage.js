import HomeBanner from "../../components/body/HomeBanner";
import BottomNavigationBar from "../../components/page_body/BottomNavigationBar";
import Footer from "../../components/page_body/Footer";
import Headers from "../../components/page_body/Headers";

import Section01 from "./compnoents/Section01";
import Section02 from "./compnoents/Section02";
import Section03 from "./compnoents/Section03";
import Section04 from "./compnoents/Section04";



const HomePage = () => {
    const data = [
        {title: "제목 입니다!!!", img : require(`../../assets/images/img1.png`), lc : "대회 주소 입니다!!"},
        {title: "제목 입니다!!!", img : require(`../../assets/images/img2.png`), lc : "대회 주소 입니다!!"},
        {title: "제목 입니다!!!", img : require(`../../assets/images/img3.png`), lc : "대회 주소 입니다!!"},
        {title: "제목 입니다!!!", img : require(`../../assets/images/img4.png`), lc : "대회 주소 입니다!!"},
        {title: "제목 입니다!!!", img : require(`../../assets/images/img3.png`), lc : "대회 주소 입니다!!"},
        {title: "제목 입니다!!!", img : require(`../../assets/images/img1.png`), lc : "대회 주소 입니다!!"},
        {title: "제목 입니다!!!", img : require(`../../assets/images/img2.png`), lc : "대회 주소 입니다!!"},
        {title: "제목 입니다!!!", img : require(`../../assets/images/img3.png`), lc : "대회 주소 입니다!!"},
        {title: "제목 입니다!!!", img : require(`../../assets/images/img4.png`), lc : "대회 주소 입니다!!"},
        {title: "제목 입니다!!!", img : require(`../../assets/images/img3.png`), lc : "대회 주소 입니다!!"},
    ]

    return (
        <div className="flex flex-col h-screen justify-between">
            <Headers />
            <main className="flex-auto bg-white dark:bg-[#141414] ">
                <HomeBanner />
                <Section04 title="핫플이 추천한 대회" data={data} link="/Hotpl/Game" />
                <Section01 title="실시간 인기 대회" data={data} link="/Hotpl/Game" />
                <Section01 title="신청 중인 대회" data={data} link="/Hotpl/Game" />
                <Section01 title="오직 핫플에서 주최하는 대회" data={data} link="/Hotpl/Game" />
                <Section01 title="김도윤님을 위한 추천 대회" data={data} link="/Hotpl/Game" />
                <Section04 title="전적을 확인해 보세요!" data={data} link="/Hotpl/Game" />
                <Section02 title="주짓수 대회" data={data} link="/Hotpl/Game" />
                <Section02 title="축구 대회" data={data} link="/Hotpl/Game" />
                <Section02 title="야구 대회" data={data} link="/Hotpl/Game" />
                <Section02 title="E스포츠 대회" data={data} link="/Hotpl/Game" />
            </main>
            <Footer />
            <BottomNavigationBar />
        </div>
    );
}

export default HomePage;