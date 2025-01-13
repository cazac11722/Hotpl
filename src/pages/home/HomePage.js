import HomeBanner from "../../components/body/HomeBanner";
import HomeKeenSliderSection from "../../components/body/HomeKeenSliderSection";
import KeenSliderSection from "../../components/body/KeenSliderComponent";
import BottomNavigationBar from "../../components/page_body/BottomNavigationBar";
import Footer from "../../components/page_body/Footer";
import Headers from "../../components/page_body/Headers";

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
        <div className="flex flex-col h-screen justify-between pb-[64px]">
            <Headers />
            <main className="flex-auto mb-20">
                <HomeBanner />
                <section class="bg-gray-50">
                    <div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                        <div class="md:flex md:items-end md:justify-between">
                            <div class="max-w-xl">
                                <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                    대회 종류
                                </h2>
                            </div>

                            <a
                                href="#"
                                class="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0"
                            >
                                <span class="font-medium"> 전체 보기 </span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="size-4 rtl:rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </a>
                        </div>

                        <div class="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                            <a href="#" class="group relative block h-64 sm:h-80 lg:h-50">
                                <span class="absolute inset-0 border-2 border-dashed border-black"></span>

                                <div
                                    class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                                >
                                    <div
                                        class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="size-10 sm:size-12"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <h2 class="mt-4 text-xl font-medium sm:text-2xl">주짓수 </h2>
                                    </div>

                                    <div
                                        class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                                    >
                                        <h3 class="mt-4 text-xl font-medium sm:text-2xl">주짓수</h3>

                                        <p class="mt-4 text-sm sm:text-base">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                                            omnis atque culpa repellendus.
                                        </p>

                                        <p class="mt-8 font-bold">Read more</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="group relative block h-64 sm:h-80 lg:h-50">
                                <span class="absolute inset-0 border-2 border-dashed border-black"></span>

                                <div
                                    class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                                >
                                    <div
                                        class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="size-10 sm:size-12"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <h2 class="mt-4 text-xl font-medium sm:text-2xl">축구</h2>
                                    </div>

                                    <div
                                        class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                                    >
                                        <h3 class="mt-4 text-xl font-medium sm:text-2xl">축구</h3>

                                        <p class="mt-4 text-sm sm:text-base">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                                            omnis atque culpa repellendus.
                                        </p>

                                        <p class="mt-8 font-bold">Read more</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="group relative block h-64 sm:h-80 lg:h-50">
                                <span class="absolute inset-0 border-2 border-dashed border-black"></span>

                                <div
                                    class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                                >
                                    <div
                                        class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="size-10 sm:size-12"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <h2 class="mt-4 text-xl font-medium sm:text-2xl">태권도</h2>
                                    </div>

                                    <div
                                        class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                                    >
                                        <h3 class="mt-4 text-xl font-medium sm:text-2xl">태권도</h3>

                                        <p class="mt-4 text-sm sm:text-base">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                                            omnis atque culpa repellendus.
                                        </p>

                                        <p class="mt-8 font-bold">Read more</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="group relative block h-64 sm:h-80 lg:h-50">
                                <span class="absolute inset-0 border-2 border-dashed border-black"></span>

                                <div
                                    class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                                >
                                    <div
                                        class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="size-10 sm:size-12"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <h2 class="mt-4 text-xl font-medium sm:text-2xl">야구</h2>
                                    </div>

                                    <div
                                        class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                                    >
                                        <h3 class="mt-4 text-xl font-medium sm:text-2xl">야구</h3>

                                        <p class="mt-4 text-sm sm:text-base">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                                            omnis atque culpa repellendus.
                                        </p>

                                        <p class="mt-8 font-bold">Read more</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <HomeKeenSliderSection title="진행중 대회 모아 보기" slides={slides} />
                <section class="bg-white">
                    <div class="mx-auto container px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                        <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            전체 대회 모아 보기
                        </h2>

                        <div class="mt-8 sm:columns-2 sm:gap-6 lg:columns-4 lg:gap-8">
                            <div class="mb-8 sm:break-inside-avoid">
                                <a href="#" class="block">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                        class="h-64 w-full object-cover sm:h-80 lg:h-96"
                                    />

                                    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">제목 입니다.</h3>

                                    <p class="mt-2 max-w-sm text-gray-700">
                                        내용 입니다.
                                    </p>
                                    <div class="flex justify-end">
                                        <strong class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                            </svg>

                                            <span class="text-[10px] font-medium sm:text-xs">진행중</span>
                                        </strong>
                                    </div>
                                </a>
                            </div>

                            <div class="mb-8 sm:break-inside-avoid">
                                <a href="#" class="block">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                        class="h-64 w-full object-cover sm:h-80 lg:h-96"
                                    />

                                    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">제목 입니다.</h3>

                                    <p class="mt-2 max-w-sm text-gray-700">
                                        내용 입니다.
                                    </p>
                                    <div class="flex justify-end">
                                        <strong class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                            </svg>

                                            <span class="text-[10px] font-medium sm:text-xs">진행중</span>
                                        </strong>
                                    </div>
                                </a>
                            </div>

                            <div class="mb-8 sm:break-inside-avoid">
                                <a href="#" class="block">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                        class="h-64 w-full object-cover sm:h-80 lg:h-96"
                                    />

                                    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">제목 입니다.</h3>

                                    <p class="mt-2 max-w-sm text-gray-700">
                                        내용 입니다.
                                    </p>
                                    <div class="flex justify-end">
                                        <strong class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                            </svg>

                                            <span class="text-[10px] font-medium sm:text-xs">진행중</span>
                                        </strong>
                                    </div>
                                </a>
                            </div>


                            <div class="mb-8 sm:break-inside-avoid">
                                <a href="#" class="block">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                        class="h-64 w-full object-cover sm:h-80 lg:h-96"
                                    />

                                    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">제목 입니다.</h3>

                                    <p class="mt-2 max-w-sm text-gray-700">
                                        내용 입니다.
                                    </p>
                                    <div class="flex justify-end">
                                        <strong class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                            </svg>

                                            <span class="text-[10px] font-medium sm:text-xs">진행중</span>
                                        </strong>
                                    </div>
                                </a>
                            </div>

                            <div class="mb-8 sm:break-inside-avoid">
                                <a href="#" class="block">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                        class="h-64 w-full object-cover sm:h-80 lg:h-96"
                                    />

                                    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">제목 입니다.</h3>

                                    <p class="mt-2 max-w-sm text-gray-700">
                                        내용 입니다.
                                    </p>
                                    <div class="flex justify-end">
                                        <strong class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                            </svg>

                                            <span class="text-[10px] font-medium sm:text-xs">진행중</span>
                                        </strong>
                                    </div>
                                </a>
                            </div>

                            <div class="mb-8 sm:break-inside-avoid">
                                <a href="#" class="block">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                        class="h-64 w-full object-cover sm:h-80 lg:h-96"
                                    />

                                    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">제목 입니다.</h3>

                                    <p class="mt-2 max-w-sm text-gray-700">
                                        내용 입니다.
                                    </p>
                                    <div class="flex justify-end">
                                        <strong class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                            </svg>

                                            <span class="text-[10px] font-medium sm:text-xs">진행중</span>
                                        </strong>
                                    </div>
                                </a>
                            </div>

                            <div class="mb-8 sm:break-inside-avoid">
                                <a href="#" class="block">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                        class="h-64 w-full object-cover sm:h-80 lg:h-96"
                                    />

                                    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">제목 입니다.</h3>

                                    <p class="mt-2 max-w-sm text-gray-700">
                                        내용 입니다.
                                    </p>
                                    <div class="flex justify-end">
                                        <strong class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                            </svg>

                                            <span class="text-[10px] font-medium sm:text-xs">진행중</span>
                                        </strong>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <BottomNavigationBar />
        </div>
    );
}

export default HomePage;