import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { ReactComponent as Favorite } from '../../../assets/svg/favorite.svg';
import { ReactComponent as LocationOn } from '../../../assets/svg/locationOn.svg';
import { ReactComponent as ChevronRight } from '../../../assets/svg/ChevronRight.svg';


const Section02 = ({ title, data, link }) => {
    return (
        <section className="text-white py-3">
            <div className="container m-auto ">
                <div className='flex items-center justify-between text-black dark:text-white px-4'>
                    <h3 className="text-1xl font-black">{title}</h3>
                    <Link to={link}><ChevronRight className='fill-white' /></Link>
                </div>
                <Swiper
                    className="text-black dark:text-white mt-4 px-4"
                    speed={500}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                >
                    <SwiperSlide className='flex items-center justify-center w-1/5 text-xs px-2 py-1 rounded-full text-white bg-red-500 '>
                        ALL
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center w-1/5 text-xs px-2 py-1 rounded-full text-white bg-zinc-800'>
                        종목별
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center w-1/5 text-xs px-2 py-1 rounded-full text-white bg-zinc-800'>
                        종류별
                    </SwiperSlide>

                </Swiper>
                <div className='flex mt-4'>
                    <Swiper
                        className="text-black dark:text-white px-4 m-0 w-full"
                        speed={500}
                        spaceBetween={10}
                        slidesPerView={'auto'}

                    >
                        {
                            data.map((e, i) => (
                                <SwiperSlide className='w-1/3' key={i}>
                                    <Link className='relative rounded-md overflow-hidden block w-full h-full'>
                                        <div className='absolute w-full h-full bg-gradient-to-t from-black'></div>
                                        <button type='button' className='absolute top-2 right-2'><Favorite className='fill-white' /></button>
                                        <img src={e.img} className='w-full h-full' />
                                        <div className='absolute let-0 bottom-0 py-2 px-2 text-white'>
                                            <p className='text-xs'>{e.title}</p>
                                            <div className='flex items-center text-xs'>
                                                <LocationOn className='fill-white w-4 mr-1 ' />
                                                <span className='w-8/12 truncate'>{e.lc}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
                
            </div>
        </section>

    );
}

export default Section02;