import { useAppSelector } from "../../store/store";

const OrderingProducts = () => {
    const orderingProducts = useAppSelector(state => state.basket.basketArr);

    return (
        <div className=''>
          <h2 className=''>Склад замовлення</h2>
          {
            orderingProducts.length === 0 ? <div className=''>Немає товарів</div> : orderingProducts.map(({title, price, count, image, id}) => {
              return <div key={id} className=''>
                        <div className="w-[200px] h-[200px]">
                           <img className="w-[100%] h-[100%] object-cover" src={image} alt={title} />
                        </div>
                        <div className=''>
                          <div className=''>{title}</div>
                          <div className=''>{count}</div>
                        </div>
                        <div className=''>{price} &#8372;</div>
                     </div>
            })
          }
    
        </div>
      )
}

export default OrderingProducts;