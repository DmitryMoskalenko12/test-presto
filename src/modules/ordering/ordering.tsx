import OrderingForm from "../../components/ordering-form/OrderingForm";
import OrderingProducts from "../../components/ordering-products/OrderingProducts";

const Ordering = () => {
    return <section className="py-[40px] px-[5px]">
            <div className="container">
               <div className=" flex flex-col-reverse items-start justify-between md:flex-row mdx:justify-center mdx:gap-[75px] lg:justify-between ">
                  <OrderingForm/>
                  <OrderingProducts/>
               </div>
            </div>
          </section>
}

export default Ordering;