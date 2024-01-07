import { IncDec } from "../../types/types";

const IncDecButton: React.FC<IncDec> = ({children, handler, id}) => {
    return <button onClick={() => handler(id)} className="font-medium text-[20px] bg-transparent sm:text-[25px]">{children}</button>
}

export default IncDecButton;