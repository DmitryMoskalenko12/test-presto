import { useAppSelector } from "../../store/store";

const OrderingProducts = () => {
    const orderingProducts = useAppSelector(state => state.basket.basketArr);

    return (
        <div className='w-[100%] p-[10px] bg-[#FFF] shadow-xl m-[0_auto] sm:w-[540px] md:w-[308px]'>
          <h2 className=' text-[#f7d22d] text-[15px] font-bold'>Склад замовлення</h2>
          {
            orderingProducts.length === 0 ? <div className=''>Немає товарів</div> : orderingProducts.map(({title, price, count, image, id}) => {
              return <div key={id} className=' flex justify-between items-center'>
                        <div className="w-[60px] h-[100px]">
                           <img className="w-[100%] h-[100%] object-contain" src={image} alt={title} />
                        </div>
                        <div className=' text-[13px] w-[110px] sm:w-[155px] md:w-[90px]'>{title}</div>
                        <div className=''>{count > 1 ? count : 1} шт </div>
                        <div className=' text-[17px] text-[#231f20] font-semibold'>{price} &#8372;</div>
                     </div>
            })
          }
    
        </div>
      )
}

export default OrderingProducts;