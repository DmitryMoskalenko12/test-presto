import { ProductItem } from "../../types/types";
import  ReactDOM  from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getBasketProduct } from "../../modules/basket/basketSlice";
import Modal from "../../ui/modal/Modal";

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

    return <article className="">
         <Link className=" block" to={`/product/${id}`}>
            <div className=" w-[60px] h-[60px]">
                <img src={image} alt={title} />
            </div>
            <h2 className="">{title}</h2>
            <div className="">{category}</div>
            <p className="">{description}</p>
            <div className="">{price}</div>
         </Link>
        <button disabled={disabledButton} onClick={() => getProduct(id)} className="">Придбати</button>
        {
           notification ?  ReactDOM.createPortal(<Modal removeNotification={removeNotification}>{notification}</Modal>, document.querySelector('.modal') as HTMLDivElement) : null
        }
    </article>
}

export default ProductCard;