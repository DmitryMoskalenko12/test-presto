import { useAppSelector } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import { fetchProducts } from "../../modules/products/productsSlice";
import { useEffect } from "react";
import PaginatedItems from "../../components/pagination-products/PaginationProducts";
import Sidebar from "../../components/sidebar/Sidebar";

const Products = () => {
    const filteredProducts = useAppSelector(state => state.products.filteredProducts);
    const status = useAppSelector(state => state.products.status);
    const dispatch = useAppDispatch();

    const error = status === 'error' ? <div className="">Error</div> : null;
    const loading = status === 'loading' ? <div className="">Loading...</div> : null;
    const result = status === 'idle' ? <PaginatedItems key={filteredProducts[0]?.title} itemsPerPage={6} products={filteredProducts}/> : null;

    useEffect(() => {
      dispatch(fetchProducts(''))
    // eslint-disable-next-line
    },[])

    return <section className="">
            <div className="container"> 
                <Sidebar/>
                 {error}
                 {loading}
                 {result}
            </div>
           </section>
}

export default Products;
