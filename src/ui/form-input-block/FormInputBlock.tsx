import { Field } from "formik";
import { FormInputBlockParams } from "../../types/types";

const FormInputBlock:React.FC<FormInputBlockParams> = ({children, type, placeholder, error, touched, htmlFor, id, name}) => {
    return <div className=" flex flex-col gap-[10px] md:flex-row md:justify-between">
            <label
            className=" text-[15px] font-medium cursor-pointer text-[#231f20]"
            htmlFor={htmlFor}
            >
            {children}
            </label>
            <Field
            id={id}
            name={name}
            className={` h-[48px] rounded-[7px] bg-[rgba(241,242,245,0.6)] p-[10px_0_10px_20px] sm:w-[540px] md:w-[350px] mdx:w-[539px] ${
                error && touched
                ? "border-[2px] border-solid border-[red] "
                : ""
            }`}
            type={type}
            placeholder={placeholder}
            />
        </div>
}

export default FormInputBlock;