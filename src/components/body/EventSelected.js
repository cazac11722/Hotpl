import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as KeyArrowUp } from "../../assets/svg/keyArrowUp.svg";
import { ReactComponent as Check } from "../../assets/svg/check.svg";
import { ReactComponent as Search } from '../../assets/svg/search.svg';
import { ReactComponent as LiveTv } from '../../assets/svg/LiveTv.svg';

const EventSelected = ({ Selected }) => {
    const navigate = useNavigate();
    const displayList = Selected.displayList;

    useEffect(() => {

    }, []);


    return (
        <div className={`fixed left-0 top-0 w-screen h-screen backdrop-blur-3xl z-40 transition-all  ${Selected.isOpen ? "opacity-1 visible" : "opacity-0 invisible"} `} >
            <ul className="overflow-y-auto w-screen h-screen">
                {displayList.map((item, index) => (
                    <li key={index} className="px-4 py-4" >
                        <div className="flex items-center justify-between " onClick={() => Selected.EventToggleItem(item.title)}>
                            <p className="text-[20px] text-white font-bold">{item.title}</p>
                            {Selected.eventSelected.includes(item.title) && <Check className="fill-white w-4 h-4" />}
                        </div>
                        <ul className="">
                            {Selected.isType == "type" ? item.list.map((e, k) => (
                                <li key={k} className="px-4 py-4" >
                                    <div className="flex items-center justify-between " onClick={() => Selected.TypeToggleItem(item.title, e.title)}>
                                        <p className="text-[17px] text-white">{e.title}</p>
                                        {Selected.typeSelected.includes(e.title) && <Check className="fill-white w-4 h-4" />}
                                    </div>
                                </li>
                            )) : ''}
                        </ul>
                    </li>
                ))}
            </ul>
            <button
                type="button"
                onClick={() => {
                    Selected.closeDropdown(false);
                    navigate("/Hotpl/Game");
                }}
                className="flex items-center justify-center text-white w-14 h-14 rounded-full bg-white fixed bottom-5 left-1/2 -translate-x-2/4"
            >
                <Check />
            </button>
        </div>
    );
};

export default EventSelected;
