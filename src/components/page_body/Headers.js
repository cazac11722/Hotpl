import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import EventSelected from "../body/EventSelected";
import useEventSelected from "../../contexts/hooks/useEventSelected";

import { FaChevronUp } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
import { IoMdMore } from "react-icons/io";

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
                                className="h-8 -mt-1 lg:h-10"
                                alt="Logo"
                            />
                        </Link>
                        <div className="flex">
                            <MdLiveTv className=" cursor-pointer mr-4" size={25} />
                            <LuSearch className=" cursor-pointer" size={25} />
                        </div>
                    </div>

                    <ul id="SelectedFilter" className="w-auto flex items-center lg:hidden">
                        <li>
                            <button
                                className={`flex items-center text-sm px-2 py-1 border rounded-full mr-4 `}
                                onClick={() => {
                                    Selected.toggleDropdown('event');
                                }}
                            >
                                <span className="mr-2 text-xs">종목 : {Selected.eventSelected.join(',')}</span>
                                <FaChevronUp className="fill-white rotate-180" />
                            </button>
                        </li>
                        <li>
                            <button
                                className={`flex items-center text-sm px-2 py-1 border rounded-full mr-4`}
                                onClick={() => {
                                    Selected.toggleDropdown('type');
                                }}
                            >
                                <span className="mr-2 text-xs">종류 : {Selected.typeSelected.join(',')}</span>
                                <FaChevronUp className="fill-white rotate-180" />
                            </button>
                        </li>
                    </ul>

                    <div id="BtnBack" className="hidden flex justify-between lg:hidden">
                        <Link to={".."} onClick={(e) => {
                            e.preventDefault();
                            navigate(-1);
                        }} className="inline-block">
                            <GoArrowLeft className="fill-white" />
                        </Link>
                        <button type="" className="inline-block">
                            <IoMdMore className="fill-white" />
                        </button>
                    </div>

                </div>
            </header>
        </>
    );
};

export default Headers;
