import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import EventSelected from "../body/EventSelected";

import { ReactComponent as KeyArrowUp } from "../../assets/svg/keyArrowUp.svg";
import { ReactComponent as Search } from '../../assets/svg/search.svg';
import { ReactComponent as LiveTv } from '../../assets/svg/LiveTv.svg';
import { ReactComponent as ArrowBack } from '../../assets/svg/ArrowBack.svg';
import { ReactComponent as MoreVert } from '../../assets/svg/moreVert.svg';


import useEventSelected from "../../contexts/hooks/useEventSelected";

const Headers = () => {
    const navigate = useNavigate();
    const Selected = useEventSelected();

    const [isScrolled, setIsScrolled] = useState(0);
    const scrollPosition = useRef(0);
    const [scrollTo, setScrollTo] = useState(0);
    const isAnimating = useRef(false);


    useEffect(() => {
        const handleScroll = (e) => {
            const delta = e.deltaY;

            if (!isAnimating.current) {
                requestAnimationFrame(() => {
                    if (delta > 0) {
                        scrollPosition.current = Math.min(scrollPosition.current + 2, 54);
                    } else {
                        scrollPosition.current = Math.max(scrollPosition.current - 2, 0);
                    }
                    setIsScrolled(scrollPosition.current);
                    isAnimating.current = false;
                });
                isAnimating.current = true;
            }
            setScrollTo(e.view.scrollY);
        };

        document.querySelector("html").classList.add("dark");
        window.addEventListener("mousewheel", handleScroll);
        return () => {
            window.removeEventListener("mousewheel", handleScroll);
        };
    }, []);



    return (
        <>
            <EventSelected Selected={Selected} />
            <header
                className={`w-full text-white fixed z-30 backdrop-blur-3xl ${scrollTo > 300 ? "bg-[#141414d9] " : ""}`}
                style={{
                    transform: `translateY(-${isScrolled}px)`,
                }}
            >
                <div className="container m-auto py-4 px-4">
                    <div className={`w-auto items-center flex justify-between mb-6`}>
                        <Link to={"/Hotpl"}>
                            <img
                                src={require("../../assets/logo/logo2_white.png")}
                                className="h-8 -mt-1"
                                alt="Logo"
                            />
                        </Link>
                        <div className="flex">
                            <LiveTv className="fill-white dark:fill-white mr-4" />
                            <Search className="fill-white dark:fill-white" />
                        </div>
                    </div>
                    <ul id="SelectedFilter" className="w-auto lg:flex flex items-center ">
                        <li>
                            <button
                                className={`flex items-center text-sm px-2 font-black border rounded-full mr-4`}
                                onClick={() => {
                                    Selected.toggleDropdown('event');
                                }}
                            >
                                <span className="mr-2 text-[10px]">종목 : {Selected.eventSelected.join(',')}</span>
                                <KeyArrowUp className="fill-white rotate-180 w-[15px]" />
                            </button>
                        </li>
                        <li>
                            <button
                                className={`flex items-center text-sm px-2 font-black border rounded-full mr-4`}
                                onClick={() => {
                                    Selected.toggleDropdown('type');
                                }}
                            >
                                <span className="mr-2 text-[10px]">종류 : {Selected.typeSelected.join(',')}</span>
                                <KeyArrowUp className="fill-white rotate-180 w-[15px]" />
                            </button>
                        </li>
                    </ul>
                    <div id="BtnBack" className="hidden flex justify-between lg:hidden">
                        <Link to={".."} onClick={(e) => {
                            e.preventDefault();

                            navigate(-1);
                        }} className="inline-block">
                            <ArrowBack className="fill-white" />
                        </Link>
                        <button type="" className="inline-block">
                            <MoreVert className="fill-white" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Headers;
