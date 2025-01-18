import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { ReactComponent as Favorite } from '../../../assets/svg/favorite.svg';
import { ReactComponent as LocationOn } from '../../../assets/svg/locationOn.svg';
import { ReactComponent as Schedule } from '../../../assets/svg/schedule.svg';


const Section03 = () => {
    return (
        <section className="text-white">
            <div className="container m-auto">
                <Swiper
                    className="text-white mt-4 px-4 "
                    speed={500}
                    spaceBetween={10}
                    slidesPerView={6}

                >
                    <SwiperSlide className='flex items-center justify-center text-xl h-12 rounded-full bg-red-500'>
                        <span className='text-base'>1</span>
                        <span className='text-xs'>월</span>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center text-xl h-12 rounded-full bg-zinc-800'>
                        <span className='text-base'>2</span>
                        <span className='text-xs'>월</span>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center text-xl h-12 rounded-full bg-zinc-800'>
                        <span className='text-base'>3</span>
                        <span className='text-xs'>월</span>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center text-xl h-12 rounded-full bg-zinc-800'>
                        <span className='text-base'>4</span>
                        <span className='text-xs'>월</span>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center text-xl h-12 rounded-full bg-zinc-800'>
                        <span className='text-base'>5</span>
                        <span className='text-xs'>월</span>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center text-xl h-12 rounded-full bg-zinc-800'>
                        <span className='text-base'>6</span>
                        <span className='text-xs'>월</span>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center text-xl h-12 rounded-full bg-zinc-800'>
                        <span className='text-base'>7</span>
                        <span className='text-xs'>월</span>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center text-xl h-12 rounded-full bg-zinc-800'>
                        <span className='text-base'>8</span>
                        <span className='text-xs'>월</span>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center text-xl h-12 rounded-full bg-zinc-800'>
                        <span className='text-base'>9</span>
                        <span className='text-xs'>월</span>
                    </SwiperSlide>

                </Swiper>
                {/* <div className='mt-4 pt-4 px-4 border-t dark:border-neutral-900 relative'>
                    <input type="text" id="first_name" className="border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:text-white " placeholder="대회 제목을 입력해주세요." required />
                    <Search className='absolute right-6 top-6 fill-black dark:fill-white' />
                </div> */}
                <ul className='text-black dark:text-white mt-4 '>
                    <li className='flex justify-between mb-4 border-b dark:border-neutral-900 px-4 py-4'>
                        <div className='w-2/5'>
                            <img src={require("../../../assets/images/img2.png")} className='w-full' />
                        </div>
                        <div className='w-3/5 px-4 relative'>
                            <button type='button' className='absolute top-2 right-2'><Favorite className='fill-black dark:fill-white' /></button>
                            <div>
                                <p className='text-xl font-black w-11/12'>제목 입니다. 제목 입니다. 제목 입니다!!!!!!</p>
                                <div className='flex items-center text-xs'><LocationOn className='fill-black dark:fill-white w-4 mr-1' /> 대회 주소 입니다!!</div>
                                <div className='flex items-center text-xs'><Schedule className='fill-black dark:fill-white w-4 mr-1' /> 접수 기간 입니다.</div>
                            </div>
                            <p className='text-xs absolute bottom-0 right-0 px-3 py-1 rounded-sm bg-sky-700 text-white'>진행중</p>
                        </div>
                    </li>
                    <li className='flex justify-between mb-4 border-b dark:border-neutral-900 px-4 py-4'>
                        <div className='w-2/5'>
                            <img src={require("../../../assets/images/img1.png")} className='w-full' />
                        </div>
                        <div className='w-3/5 px-4 relative'>
                            <button type='button' className='absolute top-2 right-2'><Favorite className='fill-black dark:fill-white' /></button>
                            <div>
                                <p className='text-xl font-black w-11/12'>제목 입니다. 제목 입니다. 제목 입니다!!!!!!</p>
                                <div className='flex items-center text-xs'><LocationOn className='fill-black dark:fill-white w-4 mr-1' /> 대회 주소 입니다!!</div>
                                <div className='flex items-center text-xs'><Schedule className='fill-black dark:fill-white w-4 mr-1' /> 접수 기간 입니다.</div>
                            </div>
                            <p className='text-xs absolute bottom-0 right-0 px-3 py-1 rounded-sm bg-green-700 text-white'>접수기간</p>
                        </div>
                    </li>
                    <li className='flex justify-between mb-4 border-b dark:border-neutral-900 px-4 py-4'>
                        <div className='w-2/5'>
                            <img src={require("../../../assets/images/img3.png")} className='w-full' />
                        </div>
                        <div className='w-3/5 px-4 relative'>
                            <button type='button' className='absolute top-2 right-2'><Favorite className='fill-black dark:fill-white' /></button>
                            <div>
                                <p className='text-xl font-black w-11/12'>제목 입니다. 제목 입니다. 제목 입니다!!!!!!</p>
                                <div className='flex items-center text-xs'><LocationOn className='fill-black dark:fill-white w-4 mr-1' /> 대회 주소 입니다!!</div>
                                <div className='flex items-center text-xs'><Schedule className='fill-black dark:fill-white w-4 mr-1' /> 접수 기간 입니다.</div>
                            </div>
                            <p className='text-xs absolute bottom-0 right-0 px-3 py-1 rounded-sm bg-red-700 text-white'>접수마감</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Section03;