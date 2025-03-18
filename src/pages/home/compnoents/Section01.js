import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { ReactComponent as LocationOn } from '../../../assets/svg/locationOn.svg';
import { ReactComponent as ChevronRight } from '../../../assets/svg/ChevronRight.svg';
import { MdFavoriteBorder } from 'react-icons/md';


const Section01 = ({ title, data, link }) => {

    return (
        <section className="text-white py-4 lg:py-6 lg:px-7 overflow-hidden">
            <div className='flex items-center justify-between text-black dark:text-white px-4'>
                <h3 className="text-1xl font-black lg:text-2xl">{title}</h3>
                <Link to={link}><ChevronRight className='fill-white' /></Link>
            </div>
            <div className='flex mt-4'>
                <Swiper
                    className="text-black dark:text-white px-4 m-0 w-full overflow-visible"
                    speed={500}
                    spaceBetween={20}
                    slidesPerView={'auto'}
                >
                    {
                        data.map((e, i) => (
                            <SwiperSlide className='w-1/3 relative lg:w-56 transition-all group hover:z-10 hover:scale-[1.17]' key={i}>
                                <Link to={`/Hotpl/Game/${i}/view`} className='relative rounded-lg overflow-hidden block w-full h-full '>
                                    <div className='absolute w-full h-full bg-gradient-to-t rounded-lg from-black transition-all opacity-0 group-hover:opacity-100'></div>
                                    <button type='button' className='absolute top-2 right-2'><MdFavoriteBorder className='text-2xl transition-all opacity-0 group-hover:opacity-100 fill-white' /></button>
                                    <img src={e.img} className='w-full h-full' />
                                    <div className='absolute let-0 bottom-0 py-2 px-2 text-white w-full transition-all opacity-0 group-hover:opacity-100 '>
                                        <p className='text-xs lg:text-lg'>{e.title}</p>
                                        <div className='flex items-center text-xs'>
                                            <LocationOn className='fill-white w-4 mr-1 ' />
                                            <span className='w-8/12 truncate text-gray-200'>{e.lc}</span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </section>
    );
}

export default Section01;