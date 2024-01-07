import OrderingForm from "../../components/ordering-form/OrderingForm";
import OrderingProducts from "../../components/ordering-products/OrderingProducts";
import { Helmet } from "react-helmet";

const Ordering = () => {
  return (
    <section className="py-[40px] px-[5px] bg-[#FFFBF8] h-[100vh]">
      <Helmet>
        <meta name="description" content="Ordering page" />
        <title>Ordering page</title>
      </Helmet>
      <div className="container">
        <div className=" flex flex-col-reverse items-start gap-[15px] justify-between md:flex-row mdx:justify-center mdx:gap-[75px] lg:justify-between ">
          <OrderingForm />
          <OrderingProducts />
        </div>
      </div>
    </section>
  );
};

export default Ordering;
