import { useAppSelector } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import { onUpdateSearchProducts } from "../../modules/products/productsSlice";
import { MouseEvent } from "react";
import { fetchProducts } from "../../modules/products/productsSlice";
import Button from "../../ui/buttons/Button";
import { useState } from "react";

const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>('All');
  const products = useAppSelector(state => state.products.products);
  const dispatch = useAppDispatch();
  const buttons = [
    {text: 'All', id: 1},
    {text: 'Men\'s clothing', id: 2},
    {text: 'Jewelery', id: 3},
    {text: 'Electronics', id: 4},
    {text: 'Women\'s clothing', id: 5},
  ];
console.log(activeTab)
  const onActiveButton = (e:MouseEvent<HTMLButtonElement>) => {
     setActiveTab(e.currentTarget.textContent);
  }

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

    return <div className=" flex items-center justify-between flex-col gap-4 mdx:flex-row">
            <div className=" flex flex-wrap justify-center items-center gap-[10px]">
                {buttons.map(({text, id}) => {
                    return <Button handler={onFilter} secondHandler={onActiveButton} key={id} className={` text-black text-[16px] font-medium border-[1px] border-black rounded-[8px] px-[4px] py[4px] ${activeTab === text ? 'bg-[#F9A43F]' : ''}`}>{text}</Button>
                })}
            </div>

            <input className=" w-[280px] h-[40px] px-[10px] py-[10px] border-[1px] border-black rounded placeholder:text-[#929292]" onChange={(e) => onSearch(e)} type="text" placeholder="Знайти товар за назвою"/>
           </div>
}

export default Sidebar;