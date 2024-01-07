import { useAppSelector } from "../../store/store";

const OrderingProducts = () => {
  const orderingProducts = useAppSelector((state) => state.basket.basketArr);

  return (
    <div className="w-[100%] p-[10px] bg-[#FFF] shadow-xl m-[0_auto] sm:w-[540px] md:w-[300px] lg:w-[400px]">
      <h1 className=" text-[#f7d22d] text-[15px] font-bold lg:text-[16px]">
        Склад замовлення
      </h1>
      {orderingProducts.length === 0 ? (
        <div className="text-center text-[16px] font-semibold">Немає товарів</div>
      ) : (
        orderingProducts.map(({ title, price, count, image, id }) => {
          return (
            <div
              key={id}
              className=" flex justify-between items-center mt-[10px]"
            >
              <div className="w-[60px] h-[100px]">
                <img
                  className="w-[100%] h-[100%] object-contain"
                  src={image}
                  alt={title}
                />
              </div>
              <div className=" text-[13px] font-normal w-[110px] sm:w-[155px] md:w-[130px] lg:w-[160px] lg:text-[15px]">
                {title}
              </div>
              <div className=" text-[13px] font-medium lg:text-[15px]">
                {count > 1 ? count : 1} шт{" "}
              </div>
              <div className=" text-[17px] text-[#231f20] font-semibold">
                {price} &#8372;
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default OrderingProducts;
