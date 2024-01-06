import { ButtonParams } from "../../types/types";

const Button: React.FC<ButtonParams> = ({children, className, handler, secondHandler}) => {
    return <button onClick={(e) => {handler(e); secondHandler!(e)}} className={className}>{children}</button>
}

export default Button;