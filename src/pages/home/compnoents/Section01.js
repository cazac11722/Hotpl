import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { ReactComponent as Favorite } from '../../../assets/svg/favorite.svg';
import { ReactComponent as LocationOn } from '../../../assets/svg/locationOn.svg';

const Section01 = () => {

    return (
        <section className="text-white py-8">
            <div className="container m-auto px-4">
                <div className='flex items-center justify-between'>
                    <h3 className="text-2xl font-black">타이틀 제목 입니다!</h3>
                    <Link>더보기</Link>
                </div>
                <Swiper
                    className="text-black dark:text-white mt-4"
                    speed={500}
                    slidesPerView={5}
                >
                    <SwiperSlide className='text-center text-xl text-red-800'>
                        ALL
                    </SwiperSlide>
                    <SwiperSlide className='text-center text-xl'>
                        주짓수
                    </SwiperSlide>
                    <SwiperSlide className='text-center text-xl'>
                        축구
                    </SwiperSlide>
                    <SwiperSlide className='text-center text-xl'>
                        야구
                    </SwiperSlide>
                    <SwiperSlide className='text-center text-xl'>
                        태권도
                    </SwiperSlide>
                    <SwiperSlide className='text-center text-xl'>
                        기타
                    </SwiperSlide>

                </Swiper>
                <div className='flex mt-4'>
                    <Swiper
                        className="text-black dark:text-white mt-4"
                        speed={500}
                        spaceBetween={30}
                        slidesPerView={1.5}
                    >
                        <SwiperSlide >
                            <Link className='relative rounded-2xl overflow-hidden block'>
                                <div className='absolute w-full h-full bg-gradient-to-t from-black'></div>
                                <button type='button' className='absolute top-2 right-2'><Favorite className='fill-white' /></button>
                                <img src={ require(`../../../assets/images/img1.png`)} className='w-full ' />
                                <div className='absolute let-0 bottom-0'>
                                    <p className='test-sm'>제목 입니다!!!</p>
                                    <div className='flex items-center text-xs'><LocationOn className='fill-white w-4 mr-1' /> 대회 주소 입니다!!</div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Link className='relative rounded-2xl overflow-hidden block'>
                                <div className='absolute w-full h-full bg-gradient-to-t from-black'></div>
                                <button type='button' className='absolute top-2 right-2'><Favorite className='fill-white' /></button>
                                <img src={ require(`../../../assets/images/img1.png`)} className='w-full ' />
                                <div className='absolute let-0 bottom-0'>
                                    <p className='test-sm'>제목 입니다!!!</p>
                                    <div className='flex items-center text-xs'><LocationOn className='fill-white w-4 mr-1' /> 대회 주소 입니다!!</div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Link className='relative rounded-2xl overflow-hidden block'>
                                <div className='absolute w-full h-full bg-gradient-to-t from-black'></div>
                                <button type='button' className='absolute top-2 right-2'><Favorite className='fill-white' /></button>
                                <img src={ require(`../../../assets/images/img1.png`)} className='w-full ' />
                                <div className='absolute let-0 bottom-0'>
                                    <p className='test-sm'>제목 입니다!!!</p>
                                    <div className='flex items-center text-xs'><LocationOn className='fill-white w-4 mr-1' /> 대회 주소 입니다!!</div>
                                </div>
                            </Link>
                        </SwiperSlide>
                       

                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Section01;