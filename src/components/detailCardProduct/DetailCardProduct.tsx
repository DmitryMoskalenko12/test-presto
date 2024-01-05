import { useAppSelector } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProduct } from "./detailCardSlice";

const DetailCardProduct = () => {
    const product = useAppSelector(state => state.product.product);
    const dispatch = useAppDispatch();
    const { id } = useParams();
    
    useEffect(() => {
     dispatch(fetchProduct(id))
    },[])

    return <div>
      {product.image}
      {product.title}
      {product.category}
      {product.description}
      {product.price}
    </div>
}

export default DetailCardProduct;