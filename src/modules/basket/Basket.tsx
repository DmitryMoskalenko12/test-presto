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

    return <section className="">
        <div className="container">
            <ul className="">
                {
                    basketData.length === 0 ? <div className="">Кошик порожній</div> : basketData.map(({title, image, price, count, id }) => {
                        return <li key={id}>
                                  <BasketCard id={id} minus={onMinus} plus={onPlus} deleteProduct={deleteProductBasket} title={title} image={image} price={price} count={count}/>
                               </li>
                    })
                }
            </ul>

            <Link to={'/ordering'}>Оформити замовленя</Link>
        </div>
    </section>
}

export default Basket;