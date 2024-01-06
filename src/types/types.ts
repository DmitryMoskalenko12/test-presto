import { ReactNode } from "react"

export interface ProductItem {
    id: string,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
    count: number
}

export interface ClientInfo {
    name: string,
    email: string,
    phone: string
}

export interface ButtonParams {
    className: string,
    key: number,
    children: ReactNode,
    handler: (e: React.MouseEvent<HTMLButtonElement>) => void,
    secondHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
  }

export interface BasketItem {
    title: string,
    price: string,
    image: string,
    count: number,
    id: string,
    minus: (id: string) => void,
    plus: (id: string) => void,
    deleteProduct: (id: string) => void
}

export interface Products {
    products: Array<ProductItem>,
    filteredProducts: Array<ProductItem>,
    status: string,
    category: string,
    word: ''
}

export interface BasketProducts {
    basketArr: Array<ProductItem>
}

export interface Product {
    product: ProductItem,
    status: string
}

export interface PaginatedItemsProps {
    itemsPerPage: number;
    products: ProductItem[];
  }