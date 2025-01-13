const HomeBanner = () => {
    return (
        <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
            <div className="container relative flex px-6 py-16 mx-auto">
                <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                    <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white">
                    </span>
                    <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                        간단대진표
                        <span className="text-5xl sm:text-7xl">
                            나만의 토넌먼트!
                        </span>
                    </h1>
                    <p className="text-sm text-gray-700 mt-2 sm:text-base dark:text-white">
                        Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                    </p>
                    <div className="flex mt-8">
                        <a href="#" className="px-4 py-2 mr-4 text-white uppercase bg-red-600 border-2 border-transparent rounded-lg text-md hover:bg-red-500">
                            지금 시작 하기
                        </a>
                    </div>
                </div>
                <div className="relative hidden h-[600px]  sm:block sm:w-1/3 lg:w-3/5">
                    <img src={ require("../../assets/images/banner1.png")} className="rotate-45 max-w-xs m-auto  md:max-w-sm -mt-20"  />
                </div>
            </div>
        </div>

    );
}

export default HomeBanner;