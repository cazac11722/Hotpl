import React, { useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css'
import { Link } from "react-router-dom";


const KeenSliderSection = ({ title, slides }) => {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: {
            origin: 'center',
            perView: 1.25,
            spacing: 16,
        },
        breakpoints: {
            '(min-width: 1024px)': {
                slides: {
                    origin: 'auto',
                    perView: 3.5,
                    spacing: 32,
                },
            },
        },
    });

    const handlePrev = () => {
        instanceRef.current?.prev();
    };

    const handleNext = () => {
        instanceRef.current?.next();
    };

    return (
        <section className="bg-gray-50">
            <div className="container mx-auto px-6 py-16 sm:px-6 lg:py-16 xl:py-24">
                <div className="items-end justify-between sm:flex sm:pr-6 lg:pr-8">
                    <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{title}</h2>

                    <div className="mt-8 flex gap-4 lg:mt-0">
                        <button
                            aria-label="Previous slide"
                            className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                            onClick={handlePrev}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            aria-label="Next slide"
                            className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                            onClick={handleNext}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0 ">
                    <div ref={sliderRef} className="keen-slider">
                        {slides.map((slide, index) => (
                            <div key={index} className="keen-slider__slide">
                                <Link to={'/'} className="group relative block bg-black" >
                                <img
                                    alt=""
                                    src={slide.img}
                                    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                />
                                <div class="relative p-4 sm:p-6 lg:p-8">
                                    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                                    <p class="text-xl font-bold text-white sm:text-2xl">{slide.title}</p>

                                    <div class="mt-32 sm:mt-48 lg:mt-[350px]">
                                        <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" >
                                            <p class="text-sm text-white">{slide.content}</p>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeenSliderSection;
