import { useAppDispatch } from "../../store/store";
import { useAppSelector } from "../../store/store";
import { updateCountProduct, deleteProduct } from "./basketSlice";
import BasketCard from "../../components/basket-card/BasketCard";
import { Link } from "react-router-dom";

const Basket = () => {
    const dispatch = useAppDispatch();
    const basketData = useAppSelector(state => state.basket.basketArr);

    const deleteProductBasket = (id: string) => {
        dispatch(deleteProduct(id))
      }

    const onPlus = (id: string) => {
        dispatch(
          updateCountProduct(
            basketData.map((prod) => {
              if (prod.id === id) {
                    return {
                        ...prod,
                        count: prod.count ? prod.count + 1 : 2,
                      };
              }
              return prod;
            })
          )
        );
      };
    
      const onMinus = (id: string) => {
        dispatch(
          updateCountProduct(
            basketData.map((prod) => {
              if (prod.id === id) {
                return {
                  ...prod,
                  count: prod.count <= 1 ? 1 : prod.count - 1,
                };
              }
              return prod;
            })
          )
        );
      };

    return <section className="pt-[40px] px-[5px]">
        <div className="container">
            <ul className="flex flex-col gap-[15px] m-[0_auto]">
                {
                    basketData.length === 0 ? <div className="text-center text-[20px] font-semibold">Кошик порожній</div> : basketData.map(({title, image, price, count, id }) => {
                        return <li key={id}>
                                  <BasketCard id={id} minus={onMinus} plus={onPlus} deleteProduct={deleteProductBasket} title={title} image={image} price={price} count={count}/>
                               </li>
                    })
                }
            </ul>

            <Link className={' flex justify-center items-center w-[200px] h-[50px] cursor-pointer bg-[#F9A43F] m-[0_auto] font-medium rounded-[9px] text-white mt-[20px] mb-[31px]'} to={'/ordering'}>Оформити замовленя</Link>
        </div>
    </section>
}

export default Basket;