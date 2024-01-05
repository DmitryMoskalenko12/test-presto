import ReactPaginate from "react-paginate";
import { useState } from "react";
import ProductCard from '../product-card/ProductCard';
import { PaginatedItemsProps } from "../../types/types";

const PaginatedItems: React.FC<PaginatedItemsProps> = ({ itemsPerPage, products }) =>  {
   console.log(products)
    const [itemOffset, setItemOffset] = useState(0);
    
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);
  
    const handlePageClick = (event: { selected: number }) => {
      const newOffset = (event.selected * itemsPerPage) % products.length;
      setItemOffset(newOffset);
    };

    return (
      <>
      <ul className=" grid grid-cols-3 grid-rows-2">
        {
            currentItems.length === 0 ? <div className="">Товарів немає</div> : currentItems.map(({title, id, image, price, category, description, count}) => {
                return <li key={id} className=" w-[100%] h-[100%]">     
                          <ProductCard count={count} title={title} id={id} image={image} price={price} category={category} description={description}/>
                       </li>       
            })
        }
      </ul>

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  export default PaginatedItems;