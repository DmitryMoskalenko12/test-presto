import ReactPaginate from "react-paginate";
import { useState } from "react";
import ProductCard from '../product-card/ProductCard';
import { PaginatedItemsProps } from "../../types/types";

const PaginatedItems: React.FC<PaginatedItemsProps> = ({ itemsPerPage, products }) =>  {

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
      <ul className=" relative grid grid-cols-1 grid-rows-[minmax(200px,1fr)] mt-[40px] gap-[20px] sm:grid-cols-2 mdx:grid-cols-3 mdx:mt-[15px]">
        {
            currentItems.length === 0 ? <div className=" absolute text-center  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#080b08] text-[20px]">Товарів немає</div> : currentItems.map(({title, id, image, price, category, description, count, rating}) => {
                return <li key={id} className=" w-[100%] h-[100%]">     
                          <ProductCard rating={rating} count={count} title={title} id={id} image={image} price={price} category={category} description={description}/>
                       </li>       
            })
        }
      </ul>

        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName=" flex w-[300px] gap-[20px] justify-center gap-[20px] mt-[50px] sm:mt-[50px] m-[0_auto]"
          previousLinkClassName=" border-solid border-black border-[1px] w-[16px] h-[16px] px-[10px] py-[10px] rounded-[100%]"
          nextLinkClassName=" border-solid border-black border-[1px] w-[16px] h-[16px] px-[10px] py-[10px] rounded-[100%]"
          activeClassName=" text-[#FB791B]"
        />
      </>
    );
  }

  export default PaginatedItems;