import { ProductItem } from "../../types/types";
import  ReactDOM  from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getBasketProduct } from "../../modules/basket/basketSlice";
import Modal from "../../ui/modal/Modal";
import Button from "../../ui/buttons/Button";

const ProductCard: React.FC<ProductItem> = ({title, id, description, image, price, category,}) => {
    const [notification, setNotification] = useState<string | null>(null);
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.products.products);
    const basketData = useAppSelector(state => state.basket.basketArr);

    const removeNotification = () => {
       setNotification('')
    }

    const getProduct = (id: string) => {
        function filterId(id: string, array: ProductItem[] ) {
            const res = array.find(item => item.id === id);
            return res;
          }

          const productRes = filterId(id, products);
          dispatch(getBasketProduct(productRes));
          setNotification(`Товар "${productRes?.title}" був успішно доданий до кошика`);
          setTimeout(() => {
            setNotification(null);
          }, 3000);
      }

    const disabledButton = basketData.find(item => item.id === id) ? true : undefined;

    return <article className=" w-[100%] h-[100%] bg-[#FFF] rounded-[9px] shadow-2xl px-[5px] py-[10px]">
         <Link className=" block" to={`/product/${id}`}>
            <div className=" w-[250px] h-[250px] m-[0_auto]">
                <img className="w-[100%] h-[100%] object-contain" src={image} alt={title} />
            </div>
            <h2 className="text-center text-black mt-[10px] text-[16px] font-medium">{title}</h2>
            <div className="text-[#929292] text-center mt-[5px]"><span className="text-black">Category: </span>{category}</div>
            <p className="text-[15px] mt-[10px] font-normal">{description}</p>
            <div className="text-[21px] text-[#2A2A2A] font-bold text-center mt-[10px]">{price} $</div>
         </Link>
        <button disabled={disabledButton} onClick={() => getProduct(id)} className=" block w-[163px] h-[34px] cursor-pointer bg-[#F9A43F] disabled:bg-[#808080] m-[0_auto] rounded-[9px] text-white mt-[20px] mb-[31px]">Придбати</button>
        {
           notification ?  ReactDOM.createPortal(<Modal removeNotification={removeNotification}>{notification}</Modal>, document.querySelector('.modal') as HTMLDivElement) : null
        }
    </article>
}

export default ProductCard;