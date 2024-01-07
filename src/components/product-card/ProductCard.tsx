import { ProductItem } from "../../types/types";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getBasketProduct } from "../../modules/basket/basketSlice";
import Modal from "../../ui/modal/Modal";
import BasketProductCardButton from "../../ui/buttons/BasketProductButton";

const ProductCard: React.FC<ProductItem> = ({
  title,
  id,
  description,
  image,
  price,
  category,
}) => {
  const [notification, setNotification] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const basketData = useAppSelector((state) => state.basket.basketArr);

  const removeNotification = () => {
    setNotification("");
  };

  const getProduct = (id: string) => {
    function filterId(id: string, array: ProductItem[]) {
      const res = array.find((item) => item.id === id);
      return res;
    }

    const productRes = filterId(id, products);
    dispatch(getBasketProduct(productRes));
    setNotification(
      `Товар "${productRes?.title}" був успішно доданий до кошика`,
    );
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <article className=" flex justify-between flex-col w-[100%] h-[100%] bg-[#FFF] rounded-[9px] shadow-2xl px-[5px] py-[10px]">
      <Link className=" block" to={`/product/${id}`}>
        <div className=" w-[250px] h-[250px] m-[0_auto]">
          <img
            className="w-[100%] h-[100%] object-contain"
            src={image}
            alt={title}
          />
        </div>
        <h2 className="text-center text-black mt-[10px] text-[16px] font-medium">
          {title}
        </h2>
        <div className="text-[#929292] text-[14px] font-medium text-center mt-[5px]">
          <span className="text-black font-medium text-[16px]">Category: </span>
          {category}
        </div>
        <p className="text-[15px] mt-[10px] font-normal">{description}</p>
        <div className="text-[21px] text-[#2A2A2A] font-bold text-center mt-[10px]">
          {price} $
        </div>
      </Link>
      <BasketProductCardButton id={id} className={"buy-product"} handler={getProduct} disabled={basketData.find((item) => item.id === id) ? true : false}>Придбати</BasketProductCardButton>
      {notification
        ? ReactDOM.createPortal(
            <Modal removeNotification={removeNotification}>
              {notification}
            </Modal>,
            document.querySelector(".modal") as HTMLDivElement,
          )
        : null}
    </article>
  );
};

export default ProductCard;
