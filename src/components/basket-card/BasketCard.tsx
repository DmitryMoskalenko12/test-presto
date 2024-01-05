import { BasketItem } from "../../types/types";

const BasketCard: React.FC<BasketItem> = ({image, title, price, count, minus, plus, deleteProduct, id}) => {
    return <article className=''>
    <div className=''>
      <img className='' src={image} width={71} height={71} alt={'You will see product'}/>
      <h2 className=''>{title}</h2>
      <div className=''>{price} грн</div>
      <div className=''>
       <button onClick={() => minus(id)} className=''>-</button>
       <span className=''>{count ? count : 1}</span>
       <button onClick={() => plus(id)} className=''>+</button>
      </div>

      <button onClick={() => deleteProduct(id)} className=''>&times;</button>
    </div>
  </article>
}

export default BasketCard;