import HomeBanner from "../../components/body/HomeBanner";
import Footer from "../../components/page_body/Footer";
import Headers from "../../components/page_body/Headers";

import Section01 from "./compnoents/Section01";
import Section02 from "./compnoents/Section02";
import Section03 from "./compnoents/Section03";



const HomePage = () => {

    const slides = [
        {
            title: "Stayin' Alive",
            content: "No, Rose, they are not breathing. And they have no arms or legs … Where are they?",
            author: "Michael Scott",
            img: require('../../assets/images/img1.png'),
        },
        {
            title: "Amazing Service",
            content: "The quality of service was fantastic. Highly recommend this company to everyone!",
            author: "Jim Halpert",
            img: require('../../assets/images/img2.png'),
        },
        {
            title: "Couldn’t be happier!",
            content: "I had the best experience. Will definitely come back again soon.",
            author: "Pam Beesly",
            img: require('../../assets/images/img3.png'),
        },
        {
            title: "Couldn’t be happier!",
            content: "I had the best experience. Will definitely come back again soon.",
            author: "Pam Beesly",
            img: require('../../assets/images/img4.png'),
        },
    ];


    return (
        <div className="flex flex-col h-screen justify-between ">
            <Headers />
            <main className="flex-auto py-4  bg-white dark:bg-black">
                <HomeBanner />
                <Section01 />
                <Section02 />
                <Section03 />
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;