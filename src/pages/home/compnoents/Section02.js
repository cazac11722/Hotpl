import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { ReactComponent as Favorite } from '../../../assets/svg/favorite.svg';
import { ReactComponent as LocationOn } from '../../../assets/svg/locationOn.svg';

const Section02 = () => {
    return (
        <section className="text-white py-8">
            <div className="container m-auto px-4">
                <div className='flex items-center justify-between'>
                    <h3 className="text-2xl font-black text-black dark:text-white">핫플이 추천한 대회</h3>
                    <Link>더보기</Link>
                </div>
                <Swiper
                    className="text-black dark:text-white mt-4"
                    speed={500}
                    spaceBetween={10}
                    slidesPerView={5}
                >
                    <SwiperSlide className='flex items-center justify-center text-sm h-10 rounded-full text-white bg-red-500 '>
                        ALL
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center text-sm h-10 rounded-full text-white bg-zinc-800'>
                        주짓수
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center text-sm h-10 rounded-full text-white bg-zinc-800'>
                        축구
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center text-sm h-10 rounded-full text-white bg-zinc-800'>
                        야구
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center text-sm h-10 rounded-full text-white bg-zinc-800'>
                        태권도
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center text-sm h-10 rounded-full text-white bg-zinc-800'>
                        기타
                    </SwiperSlide>

                </Swiper>
                <div className='flex mt-4'>
                    <Swiper
                        className="text-black dark:text-white "
                        speed={500}
                        spaceBetween={30}
                        slidesPerView={1.5}
                    >
                        <SwiperSlide >
                            <Link className='relative rounded-2xl overflow-hidden block'>
                                <div className='absolute w-full h-full bg-gradient-to-t from-black'></div>
                                <button type='button' className='absolute top-2 right-2'><Favorite className='fill-white' /></button>
                                <img src={require(`../../../assets/images/img1.png`)} className='w-full ' />
                                <div className='absolute let-0 bottom-0 py-4 px-4 text-white'>
                                    <p className='test-sm'>제목 입니다!!!</p>
                                    <div className='flex items-center text-xs'><LocationOn className='fill-white w-4 mr-1' /> 대회 주소 입니다!!</div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Link className='relative rounded-2xl overflow-hidden block'>
                                <div className='absolute w-full h-full bg-gradient-to-t from-black'></div>
                                <button type='button' className='absolute top-2 right-2'><Favorite className='fill-white' /></button>
                                <img src={require(`../../../assets/images/img1.png`)} className='w-full ' />
                                <div className='absolute let-0 bottom-0 py-4 px-4 text-white'>
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

export default Section02;