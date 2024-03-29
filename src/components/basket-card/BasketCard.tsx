import { BasketItem } from "../../types/types";
import IncDecButton from "../../ui/inc-dec-button/IncDecButton";
import BasketProductCardButton from "../../ui/buttons/BasketProductButton";

const BasketCard: React.FC<BasketItem> =
  ({ image, title, price, count, minus, plus, deleteProduct, id }) => {
    return (
      <article className=" flex justify-center items-center gap-[5px]  m-[0_auto] sm:w-[540px] md:w-[630px]">
        <div className=" w-[50px] h-[100px] md:w-[80px]">
          <img
            className="w-[100%] h-[100%] object-contain"
            src={image}
            width={71}
            height={71}
            alt={title}
          />
        </div>
        <h1 className=" w-[90px] text-left text-[13px] overflow-hidden font-medium text-black mt-[10px] m-[0_auto] sm:w-[205px] sm:text-[16px]">
          {title}
        </h1>
        <div className=" text-[#2A2A2A] text-[14px] mt-[10px] font-normal m-[0_auto] sm:text-[16px]">
          {price} &#36;
        </div>
        <div className="flex justify-center items-center gap-[5px] mt-[10px] m-[0_auto] md:gap-[15px]">
          <IncDecButton id={id} handler={minus}>-</IncDecButton>
          <span className="text-[16px] font-medium text-black">
            {count ? count : 1}
          </span>
          <IncDecButton id={id} handler={plus}>+</IncDecButton>
        </div>
        <BasketProductCardButton disabled={false} handler={deleteProduct} id={id} className=" block m-[0_auto]"> 
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M26.875 7.5C26.875 7.80617 26.7626 8.10167 26.5591 8.33047C26.3557 8.55926 26.0753 8.70543 25.7713 8.74125L25.625 8.75H24.5688L23.03 24.4C22.9462 25.2492 22.5496 26.0369 21.9172 26.6098C21.2849 27.1828 20.4621 27.5001 19.6087 27.5H10.3912C9.53794 27.5001 8.71509 27.1828 8.08275 26.6098C7.45041 26.0369 7.05378 25.2492 6.97 24.4L5.43125 8.75H4.375C4.04348 8.75 3.72554 8.6183 3.49112 8.38388C3.2567 8.14946 3.125 7.83152 3.125 7.5C3.125 7.16848 3.2567 6.85054 3.49112 6.61612C3.72554 6.3817 4.04348 6.25 4.375 6.25H10.625C10.625 5.67547 10.7382 5.10656 10.958 4.57576C11.1779 4.04496 11.5002 3.56266 11.9064 3.15641C12.3127 2.75015 12.795 2.42789 13.3258 2.20803C13.8566 1.98816 14.4255 1.875 15 1.875C15.5745 1.875 16.1434 1.98816 16.6742 2.20803C17.205 2.42789 17.6873 2.75015 18.0936 3.15641C18.4998 3.56266 18.8221 4.04496 19.042 4.57576C19.2618 5.10656 19.375 5.67547 19.375 6.25H25.625C25.9565 6.25 26.2745 6.3817 26.5089 6.61612C26.7433 6.85054 26.875 7.16848 26.875 7.5ZM17.8125 11.5625C17.586 11.5625 17.3671 11.6446 17.1963 11.7935C17.0256 11.9424 16.9146 12.1481 16.8837 12.3725L16.875 12.5V21.25L16.8837 21.3775C16.9146 21.6019 17.0257 21.8075 17.1964 21.9564C17.3672 22.1052 17.586 22.1872 17.8125 22.1872C18.039 22.1872 18.2578 22.1052 18.4286 21.9564C18.5993 21.8075 18.7104 21.6019 18.7413 21.3775L18.75 21.25V12.5L18.7413 12.3725C18.7104 12.1481 18.5994 11.9424 18.4287 11.7935C18.2579 11.6446 18.039 11.5625 17.8125 11.5625ZM12.1875 11.5625C11.961 11.5625 11.7421 11.6446 11.5713 11.7935C11.4006 11.9424 11.2896 12.1481 11.2587 12.3725L11.25 12.5V21.25L11.2587 21.3775C11.2896 21.6019 11.4007 21.8075 11.5714 21.9564C11.7422 22.1052 11.961 22.1872 12.1875 22.1872C12.414 22.1872 12.6328 22.1052 12.8036 21.9564C12.9743 21.8075 13.0854 21.6019 13.1163 21.3775L13.125 21.25V12.5L13.1163 12.3725C13.0854 12.1481 12.9744 11.9424 12.8037 11.7935C12.6329 11.6446 12.414 11.5625 12.1875 11.5625ZM15 4.375C14.5027 4.375 14.0258 4.57254 13.6742 4.92418C13.3225 5.27581 13.125 5.75272 13.125 6.25H16.875C16.875 5.75272 16.6775 5.27581 16.3258 4.92418C15.9742 4.57254 15.4973 4.375 15 4.375Z"
              fill="#2A2A2A"
            />
          </svg>
        </BasketProductCardButton>
      </article>
    );
  }

export default BasketCard;
