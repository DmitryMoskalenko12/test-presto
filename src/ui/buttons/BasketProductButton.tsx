import { BasketProductButtonsParams } from "../../types/types";

const BasketProductCardButton: React.FC<BasketProductButtonsParams> = ({children, className, id, handler, disabled}) => {
    return <button disabled={disabled} className={className} onClick={() => handler(id)}>{children}</button>
}

export default BasketProductCardButton;