import { useAppSelector } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProduct } from "./detailCardSlice";
import { ProductItem } from "../../types/types";
import ReactDOM from "react-dom";
import { getBasketProduct } from "../../modules/basket/basketSlice";
import Modal from "../../ui/modal/Modal";
import { Helmet } from "react-helmet";
import DetailButtonProduct from "../../ui/buttons/DetailButtonProd";

const DetailCardProduct = () => {
  const product = useAppSelector((state) => state.product.product);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const [notification, setNotification] = useState<string | null>(null);

  const basketData = useAppSelector((state) => state.basket.basketArr);

  const removeNotification = () => {
    setNotification("");
  };

  const getProduct = (product: ProductItem) => {
    dispatch(getBasketProduct(product));
    setNotification(`Товар "${product.title}" був успішно доданий до кошика`);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
    //  eslint-disable-next-line
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Product page" />
        <title>{product.title}</title>
      </Helmet>
      <article className=" grid grid-cols-1 grid-rows-1 px-[10px] pt-[40px] justify-center sm:grid-cols-2 sm:col-gap-[20px]">
        <div className="w-[100%] h-[300px] m-[0_auto]">
          <img
            className=" w-[100%] h-[100%] object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="">
          <h1 className="text-center text-black mt-[10px] text-[16px] font-medium">
            {product.title}
          </h1>
          <h2 className="text-[#929292] text-center mt-[5px] font-medium">
            <span className="text-black font-normal text-[16px] ">
              Category:{" "}
            </span>
            {product.category}
          </h2>
          <h3 className="text-[#2A2A2A] text-[26px] font-medium text-center mt-[5px]">
            <span className="text-black text-[16px] font-normal">Rating:</span>{" "}
            {product.rating.rate}
          </h3>
          <p className=" w-[100%] text-[15px] mt-[10px] overflow-hidden font-normal text-justify m-[0_auto] mdx:w-[450px]">
            {product.description}
          </p>
          <div className="text-[21px] text-[#2A2A2A] font-bold text-center mt-[10px]">
            <span className="text-black text-[16px] font-normal">Price: </span>
            {product.price} $
          </div>
          <DetailButtonProduct handler={getProduct} className={"buy-product-page"} value={product} disabled={basketData.find((item) => item.id === product.id) ? true : false}>Придбати</DetailButtonProduct>
          {notification
            ? ReactDOM.createPortal(
                <Modal removeNotification={removeNotification}>
                  {notification}
                </Modal>,
                document.querySelector(".modal") as HTMLDivElement,
              )
            : null}
        </div>
      </article>
    </>
  );
};

export default DetailCardProduct;
