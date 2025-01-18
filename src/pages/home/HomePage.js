import HomeBanner from "../../components/body/HomeBanner";
import Footer from "../../components/page_body/Footer";
import Headers from "../../components/page_body/Headers";

import Section01 from "./compnoents/Section01";
import Section02 from "./compnoents/Section02";
import Section03 from "./compnoents/Section03";

import { ReactComponent as Search } from '../../assets/svg/search.svg';
import { ReactComponent as Tune } from '../../assets/svg/tune.svg';



const HomePage = () => {

    return (
        <div className="flex flex-col h-screen justify-between">
            <Headers />
            <main className="flex-auto bg-white dark:bg-slate-950">
                <HomeBanner />
                <div className='mt-4 pt-4 px-4 border-t dark:border-neutral-900 relative flex '>
                    <Tune className="absolute left-6 top-6 fill-black dark:fill-white" />
                    <input type="text" id="first_name" className="border text-gray-900 text-sm rounded-lg block w-full pl-12 py-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:text-white " placeholder="대회 제목을 입력해주세요." required />
                    <Search className='absolute right-6 top-6 fill-black dark:fill-white' />
                </div>
                <Section01 />
                <Section02 />
                <Section03 />
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;