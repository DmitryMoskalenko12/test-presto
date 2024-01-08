import { Link } from "react-router-dom";

const NotFound = () => {
    return <main>
             <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h1 className=" text-[15px] text-red-600 font-medium text-center mb-[20px]">Вибачте такої сторінки не існує</h1>
                <Link className=" block text-[14px] text-black font-normal text-center" to={'/'}>На головну сторінку</Link>
             </div>
           </main>
}

export default NotFound;