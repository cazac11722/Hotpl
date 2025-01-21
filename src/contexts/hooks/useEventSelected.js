// hooks/useDropdown.js
import { useState } from "react";

const useEventSelected = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isType, setIsType] = useState();


    const menuList = [
        {
            title: "투기",
            list: [
                { title: "복싱" },
                { title: "유도" },
                { title: "태권도" },
                { title: "레슬링" },
                { title: "킥복싱" },
                { title: "주짓수" },
            ],
        },
        {
            title: "육상",
            list: [
                { title: "달리기" },
                { title: "장거리 달리기" },
                { title: "허들" },
                { title: "장대높이뛰기" },
                { title: "멀리뛰기" },
            ],
        },
        {
            title: "수영",
            list: [
                { title: "자유형" },
                { title: "배영" },
                { title: "평영" },
                { title: "접영" },
                { title: "혼합 수영" },
            ],
        },
        {
            title: "체조",
            list: [
                { title: "리듬체조" },
                { title: "기계체조" },
                { title: "트램폴린" },
            ],
        },
        {
            title: "구기",
            list: [
                { title: "축구" },
                { title: "농구" },
                { title: "배구" },
                { title: "야구" },
                { title: "핸드볼" },
            ],
        },
        {
            title: "사격",
            list: [
                { title: "사격권총" },
                { title: "사격소총" },
                { title: "스키트" },
                { title: "트랩" },
            ],
        },
        {
            title: "기타",
            list: [
                { title: "양궁" },
                { title: "펜싱" },
                { title: "승마" },
                { title: "카누" },
                { title: "카약" },
            ],
        },
    ];

    const [eventSelected, setEventSelected] = useState(() => {
        const cachedItems = localStorage.getItem("eventSelected");
        return cachedItems ? JSON.parse(cachedItems) : [];
    });
    const [typeSelected, setTypeSelected] = useState(() => {
        const cachedItems = localStorage.getItem("typeSelected");
        return cachedItems ? JSON.parse(cachedItems) : [];
    });

    // 항목 선택/해제
    const EventToggleItem = (item) => {
        const updatedItems = eventSelected.includes(item)
            ? eventSelected.filter((i) => i !== item)
            : [...eventSelected, item];

        setEventSelected(updatedItems);
        localStorage.setItem("eventSelected", JSON.stringify(updatedItems));

        const data = menuList.filter((e) => e.title == item)[0].list.map((e) => e.title);
        const TypeUpdatedItems = typeSelected.filter((i) => !data.includes(i));

        setTypeSelected(TypeUpdatedItems);
        localStorage.setItem("typeSelected", JSON.stringify(TypeUpdatedItems));
    };

    const TypeToggleItem = (item, e) => {
        const EventUpdatedItems = eventSelected.includes(item)
            ? eventSelected
            : [...eventSelected, item];

        setEventSelected(EventUpdatedItems);
        localStorage.setItem("eventSelected", JSON.stringify(EventUpdatedItems));

        const updatedItems = typeSelected.includes(e)
            ? typeSelected.filter((i) => i !== e)
            : [...typeSelected, e];

        setTypeSelected(updatedItems);
        localStorage.setItem("typeSelected", JSON.stringify(updatedItems));
    };

    const toggleDropdown = (type) => {
        setIsOpen(true);
        setIsType(type);
        document.querySelector('html').classList.add('overflow-y-hidden');
    };

    const closeDropdown = (type) => {
        setIsOpen(false);
        setIsType(type);
        document.querySelector('html').classList.remove('overflow-y-hidden');
    };

    // 현재 메뉴에 표시할 항목
    const displayList = menuList.filter((item) => eventSelected.includes(item.title) || isType == 'event' || eventSelected.length == 0)



    return { isOpen, isType, toggleDropdown, closeDropdown, EventToggleItem, TypeToggleItem, displayList, eventSelected, typeSelected };
};

export default useEventSelected;
