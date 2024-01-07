import { useAppSelector } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import { fetchProducts } from "../../modules/products/productsSlice";
import { useEffect } from "react";
import PaginatedItems from "../../components/pagination-products/PaginationProducts";
import Sidebar from "../../components/sidebar/Sidebar";
import Loading from "../../ui/loading/Loading";
import Error from "../../ui/error/Error";
import { Helmet } from "react-helmet";

const Products = () => {
    const filteredProducts = useAppSelector(state => state.products.filteredProducts);
    const status = useAppSelector(state => state.products.status);
    const dispatch = useAppDispatch();

    const error = status === 'error' ? <Error/> : null;
    const loading = status === 'loading' ? <Loading/> : null;
    const result = status === 'idle' ? <PaginatedItems key={filteredProducts[0]?.title} itemsPerPage={6} products={filteredProducts}/> : null;

    useEffect(() => {
      dispatch(fetchProducts(''))
    // eslint-disable-next-line
    },[])

    return <section className=" py-[20px] px-[10px] bg-[#FFFBF8] h-[100vh]">
            <Helmet>
              <meta name="description" content="Products page"
              />
              <title>Products page</title>
            </Helmet>
            <div className="container"> 
                 <Sidebar/>
                 <div className=" relative min-h-[200px]">
                  {error}
                  {loading}
                  {result}
                 </div>
            </div>
           </section>
}

export default Products;
