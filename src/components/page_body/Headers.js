import { Link } from "react-router-dom";
import { ReactComponent as Signin } from '../../assets/svg/wcg-signin.svg';

const Headers = () => {
    return (
        <header className="w-full text-white">
            <div className="dark:bg-[#1F2326] lg:hidden">
                <ul className="max-w-6xl m-auto h-12 flex items-center px-4">
                    <li>
                        <Link to={'/'} className="hover:link px-2 block text-sm">
                            <span>문의</span>
                        </Link>
                    </li>
                    <li className="text-xs px-2">|</li>
                    <li>
                        <Link to={'/'} className="hover:link px-2 block text-sm">
                            <span>FAQ</span>
                        </Link>
                    </li>
                    <li className="text-xs px-2">|</li>
                    <li>
                        <Link to={'/'} className="hover:link px-2 block text-sm">
                            <span>문의하기</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="dark:bg-[#26292E]">
                <div className="container m-auto py-4 px-4 flex flex-wrap items-center justify-between ">
                    <div className="w-auto items-center flex justify-between">
                        <Link to={"/"} >
                            <span>핫플</span>
                        </Link>
                    </div>
                    <div className="w-auto flex  overflow-hidden">
                        <div className="w-full hidden lg:block">
                            <button className="variant-ghost sz-sm text-white mr-5">
                                <span className="btn-label">Login</span>
                            </button>
                            <button className="px-4 py-2  text-white rounded-full text-white-500 border border-white-500 undefined">
                                <span>Sign Up</span>
                            </button>
                        </div>
                        <div className="w-auto flex lg:hidden ">
                            <button className="variant-ghost sz-md icon-only relative z-20 block cursor-pointer lg:hidden">
                                <Signin />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark:bg-[#1F2326] hidden lg:block">
                <ul className="container m-auto h-16 flex items-center px-4">
                    <li>
                        <Link to={'/'} className="font-black hover:link md:px-4 block">
                            <span>대회</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={'/'} className="font-black hover:link md:px-4 block">
                            <span>팀</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={'/'} className="font-black hover:link md:px-4 block">
                            <span>공지</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className="font-black hover:link md:px-4 block">
                            <span>대회 만들기 </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className="font-black hover:link md:px-4 block">
                            <span>숏품 </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>

    );
}

export default Headers;