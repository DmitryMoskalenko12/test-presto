import { DetailProductButton } from "../../types/types";

const DetailButtonProduct: React.FC<DetailProductButton> = ({children, handler, className, value, disabled}) => {
    return <button disabled={disabled} className={className} onClick={() => handler(value)}>{children}</button>
}

export default DetailButtonProduct;