import { Link } from "react-router-dom";
import { ReactComponent as Signin } from '../../assets/svg/wcg-signin.svg';

const Headers = () => {


    return (
        <header className="w-full text-white fixed z-30">
            <div className="container m-auto py-4 px-4 flex flex-wrap items-center justify-between ">
                <div className="w-auto items-center flex justify-between">
                    <Link to={"/"} >
                        <img src={require("../../assets/logo/logo2.png")} className="h-10 -mt-1" />
                    </Link>
                </div>
                <div className="w-auto flex  overflow-hidden">
                    <div className="w-auto flex lg:hidden  ">
                        {/* <button type="button" className=" variant-ghost sz-md icon-only relative z-20 block cursor-pointer ">
                                <Search className="fill-white w-8 h-8" />
                            </button> */}
                        <button type="button" className="variant-ghost sz-md icon-only relative z-20 block cursor-pointer ml-3">
                            <Signin className="fill-white w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Headers;