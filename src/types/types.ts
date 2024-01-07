import { ReactNode } from "react"

export interface ProductItem {
    id: string,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
    rating: { rate: number, count: number },
    count: number
}

export interface DetailProductButton {
    children: ReactNode,
    className: string,
    handler: (value: ProductItem) => void,
    value: ProductItem,
    disabled: boolean
}

export interface BasketProductButtonsParams {
    children: ReactNode,
    id: string,
    className: string,
    handler: (id: string) => void,
    disabled: boolean
}

export interface ClientInfo {
    name: string,
    email: string,
    phone: string
}

export interface IncDec {
    handler: (id: string) => void,
    children: ReactNode,
    id: string
}

export interface FormInputBlockParams {
    htmlFor: string,
    children: ReactNode,
    id: string,
    name: string,
    error: string | undefined,
    touched: boolean | undefined,
    type: string,
    placeholder: string
}
export interface ButtonParams {
    className: string,
    key: number,
    children: ReactNode,
    handler: (e: React.MouseEvent<HTMLButtonElement>) => void,
    secondHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
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
    status: string,
    id: string
}

export interface PaginatedItemsProps {
    itemsPerPage: number;
    products: ProductItem[];
  }