import OrderingForm from "../../components/ordering-form/ordering-form";
import OrderingProducts from "../../components/ordering-products/OrderingProducts";

const Ordering = () => {
    return <section className="">
            <div className="container">
               <div className=" flex items-start justify-between">
                  <OrderingForm/>
                  <OrderingProducts/>
               </div>
            </div>
          </section>
}

export default Ordering;