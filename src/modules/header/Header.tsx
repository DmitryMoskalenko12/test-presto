import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/store";

const Header = () => {
    const totalCountProducts = useAppSelector(state => state.basket.basketArr);

    return <header className="">
            <div className="container">
             <div className="flex justify-between items-center">
                 <Link className="" to={'/'}>
                     <span className="">Studiopresto</span>
                 </Link>

                 <div className=" flex justify-between items-center gap-5">
                    <nav className="">
                        <ul className=" flex justify-between items-center gap-5">
                            <li><a className="" href="#">Home</a></li>
                            <li><a className="" href="#">Products</a></li>
                            <li><a className="" href="#">Footer</a></li>
                        </ul>
                    </nav>

                    <Link className=""to={'/basket'}>Кошик <span className="">{totalCountProducts.length}</span></Link>
                 </div>
             </div>
            </div>
           </header>
}

export default Header;