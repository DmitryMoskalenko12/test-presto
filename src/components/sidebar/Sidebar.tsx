import { useAppSelector } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import { onUpdateSearchProducts } from "../../modules/products/productsSlice";
import { MouseEvent } from "react";
import { fetchProducts } from "../../modules/products/productsSlice";

const Sidebar: React.FC = () => {
  const products = useAppSelector(state => state.products.products);
  const dispatch = useAppDispatch();
  const buttons = [
    {text: 'All', id: 1},
    {text: 'Men\'s clothing', id: 2},
    {text: 'Jewelery', id: 3},
    {text: 'Electronics', id: 4},
    {text: 'Women\'s clothing', id: 5},
  ];

  const onFilter = (e: MouseEvent<HTMLButtonElement>) => {
   switch (e.currentTarget.textContent) {
    case 'Men\'s clothing':
        dispatch(fetchProducts(`category/${e.currentTarget.textContent.toLowerCase()}`))
        break;
    case 'Jewelery':
        dispatch(fetchProducts(`category/${e.currentTarget.textContent.toLowerCase()}`))
        break;
    case 'Electronics':
        dispatch(fetchProducts(`category/${e.currentTarget.textContent.toLowerCase()}`))
        break;
    case 'Women\'s clothing':
        dispatch(fetchProducts(`category/${e.currentTarget.textContent.toLowerCase()}`))
        break;
    case 'All':
        dispatch(fetchProducts(''))
    break;
    default:

        break;
   }
  }

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.value === '') {
       dispatch(onUpdateSearchProducts(products))
    }
       const updateSearchProduct = products.filter(elem => {
        return  elem.title.toLowerCase().includes(e.target.value);
      });
      dispatch(onUpdateSearchProducts(updateSearchProduct));
  }

    return <div className=" flex items-center justify-between gap-4">
            {buttons.map(({text, id}) => {
                return <button onClick={onFilter} key={id} className="">{text}</button>
            })}

            <input onChange={(e) => onSearch(e)} type="text" placeholder="find product by name"/>
           </div>
}

export default Sidebar;