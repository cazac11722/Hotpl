import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as KeyArrowUp } from '../../assets/svg/keyArrowUp.svg';
import { ReactComponent as Check } from '../../assets/svg/check.svg';


const Headers = () => {
    const [isScrolled, setIsScrolled] = useState(0);
    const [isCheck, setIsCheck] = useState(true);

    // Scroll event handler
    useEffect(() => {
        const handleScroll = (e) => {
            if (e.deltaY > 0) {
                setIsScrolled(0);
            } else {
                setIsScrolled(0);
            }
        };

        window.addEventListener("mousewheel", handleScroll);
        return () => {
            window.removeEventListener("mousewheel", handleScroll);
        };
    }, []);

    return (
        <>
            <ul className={`fixed left-0 top-0 w-screen h-screen backdrop-blur-3xl z-40 ${isCheck ? 'hidden' : ''}`}>
                <li>
                    <p className="text-[17px] text-white px-4 py-4">투기</p>
                </li>
                <li>
                    <p className="text-[17px] text-white px-4 py-4">육상</p>
                </li>
                <li>
                    <button type="button" 
                    onClick={() => {
                        setIsCheck(true);
                    }}
                    className="flex items-center justify-center text-white w-14 h-14 rounded-full bg-white fixed bottom-5 left-1/2 -translate-x-2/4 "><Check /></button>
                </li>
            </ul>
            <header className={`w-full text-white fixed z-30 transition-all duration-300 backdrop-blur-3xl transition-all ${isScrolled ? '-translate-y-' + isScrolled : ''}`} >
                <div className="container m-auto py-4 px-4">
                    <div className={`w-auto items-center flex justify-between mb-6`}>
                        <Link to={"/"} >
                            <img
                                src={require("../../assets/logo/logo2_white.png")}
                                className="h-8 -mt-1"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <ul className="w-auto lg:flex flex items-center ">
                        <li>
                            <button className={`flex items-center text-sm px-3 py-1 font-black border rounded-full mr-4`} onClick={() => {
                                setIsCheck(false);
                            }}>
                                <span className="mr-2">종목</span>
                                <KeyArrowUp className="fill-white rotate-180" />
                            </button>
                        </li>
                        <li>
                            <button className={`flex items-center text-sm px-3 py-1 font-black border rounded-full mr-4`} onClick={() => {
                                setIsCheck(false);
                            }}>
                                <span className="mr-2">종류</span>
                                <KeyArrowUp className="fill-white rotate-180" />
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        </>

    );
};

export default Headers;