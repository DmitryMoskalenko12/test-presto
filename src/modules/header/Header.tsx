import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/store";

const Header = () => {
    const totalCountProducts = useAppSelector(state => state.basket.basketArr);

    return <header className=" h-[82px] bg-[#2A2A2A] px-[10px] py-[20px]">
            <div className="container">
             <div className="flex justify-between items-center">
                 <Link to={'/'}>
                     <span className=" text-[20px] text-[#FFF] font-bold md:text-[26px]">Studiopresto</span>
                 </Link>

                 <div className=" flex justify-between items-center gap-5">

                    <Link className=" relative block" to={'/basket'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M30.741 10.2082C30.489 9.77161 30.1282 9.40778 29.6937 9.15219C29.2592 8.89661 28.7659 8.75799 28.2618 8.74988H9.59518L8.74935 5.45405C8.66389 5.13589 8.47323 4.85605 8.20842 4.66009C7.94361 4.46413 7.62025 4.3636 7.29102 4.37488H4.37435C3.98757 4.37488 3.61664 4.52852 3.34315 4.80201C3.06966 5.07551 2.91602 5.44644 2.91602 5.83321C2.91602 6.21999 3.06966 6.59092 3.34315 6.86441C3.61664 7.1379 3.98757 7.29155 4.37435 7.29155H6.18268L10.2077 22.254C10.2931 22.5722 10.4838 22.852 10.7486 23.048C11.0134 23.244 11.3368 23.3445 11.666 23.3332H24.791C25.0603 23.3324 25.3241 23.257 25.5532 23.1154C25.7823 22.9739 25.9677 22.7716 26.0889 22.5311L30.8723 12.9645C31.0796 12.5299 31.1761 12.0508 31.1532 11.5698C31.1303 11.0889 30.9887 10.6211 30.741 10.2082Z" fill="white"/>
                            <path d="M10.9375 30.625C12.1456 30.625 13.125 29.6456 13.125 28.4375C13.125 27.2294 12.1456 26.25 10.9375 26.25C9.72938 26.25 8.75 27.2294 8.75 28.4375C8.75 29.6456 9.72938 30.625 10.9375 30.625Z" fill="white"/>
                            <path d="M25.5195 30.625C26.7277 30.625 27.707 29.6456 27.707 28.4375C27.707 27.2294 26.7277 26.25 25.5195 26.25C24.3114 26.25 23.332 27.2294 23.332 28.4375C23.332 29.6456 24.3114 30.625 25.5195 30.625Z" fill="white"/>
                        </svg>
                        <div className=" flex items-center justify-center w-[min-content] h-[16px] absolute top-[-6px] px-[2px] right-[-8px] text-[#FFF] bg-[#F9A43F] rounded">{totalCountProducts.length}</div>
                   </Link>
                 </div>
             </div>
            </div>
           </header>
}

export default Header;