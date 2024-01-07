import { useAppSelector, useAppDispatch } from "../../store/store";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationOrderForm } from "../../helpers/validation";
import { ClientInfo } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import  ReactDOM  from "react-dom";
import Modal from "../../ui/modal/Modal";
import { clearBasketArr } from "../../modules/basket/basketSlice";

const OrderingForm = () => {
    const [notification, setNotification] = useState('');
    const navigation = useNavigate();
    const finalOrderingProduct = useAppSelector(state => state.basket.basketArr);
    const dispatch = useAppDispatch();
    const form = useRef<HTMLFormElement | null>(null);
    const disabledButton = finalOrderingProduct.length === 0 ? true : false;

    const removeNotification = () => {
        setNotification('')
     }

    const onBuyProduct = (value: ClientInfo) => {
         const orderingProducts = {...value, orderingProducts: finalOrderingProduct}
         setNotification('Замовлення успішно відправлено. Наш менеджер скоро вам зателефонує');
         emailjs.sendForm('service_9cz3ue9', 'template_kbliu49', form.current!, 'hz1i6FoPP_2ZUvqN1')
         .then((result: EmailJSResponseStatus) => {
             console.log(result.text);
         }, (error) => {
             console.log(error.text);
         });
         setTimeout(() => {
            navigation('/')
            setNotification('');
          }, 3000);
         dispatch(clearBasketArr([]));
         return orderingProducts;
    }

    return <Formik initialValues={{
        name: '',
        phone: '',
        email: '',
      }}  validationSchema={validationOrderForm} onSubmit={(values, {resetForm}) => {console.log(onBuyProduct(values)); resetForm()}}>
         {({errors, touched}) =>
        <Form ref={form} className=" flex w-[100%] flex-col gap-[20px] sm:w-[540px] sm:m-[0_auto] md:m-[initial] md:w-[initial]" noValidate>
            <div className=" flex flex-col gap-[10px] md:flex-row md:justify-between ">
                <label className=" text-[15px] font-medium cursor-pointer text-[#231f20]" htmlFor="name">Ім'я</label>
                <Field id="name" name="name" className={` h-[48px] rounded-[7px] bg-[rgba(241,242,245,0.6)] p-[10px_0_10px_20px] sm:w-[540px] md:w-[350px] mdx:w-[539px] ${errors.name && touched.name ? 'border-[2px] border-solid border-[red] ' : '' }`} type="text" placeholder="Ім'я" />
            </div>
            <ErrorMessage name='name' className=' text-[red] md:ml-[53px]' component={'div'}/>
            <div className=" flex flex-col gap-[10px] md:flex-row md:justify-between">
                <label className=" text-[15px] font-medium cursor-pointer text-[#231f20]" htmlFor="email">Email</label>
                <Field id="email" name="email" className={` h-[48px] rounded-[7px] bg-[rgba(241,242,245,0.6)] p-[10px_0_10px_20px] sm:w-[540px] md:w-[350px] mdx:w-[539px] ${errors.email && touched.email ? 'border-[2px] border-solid border-[red] ' : '' }`} type="email" placeholder="Email" />
            </div>
            <ErrorMessage name='email' className=' text-[red] md:ml-[53px]' component={'div'}/>
            <div className=" flex flex-col gap-[10px] md:flex-row md:justify-between ">
                <label className=" text-[15px] font-medium cursor-pointer text-[#231f20]" htmlFor="phone">Phone</label>
                <Field id='phone' type='number' name='phone' className={` h-[48px] rounded-[7px] bg-[rgba(241,242,245,0.6)] p-[10px_0_10px_20px] sm:w-[540px] md:w-[350px] mdx:w-[539px] ${errors.phone && touched.phone ? 'border-[2px] border-solid border-[red] ' : '' }`} placeholder="Phone"/>
            </div>
            <ErrorMessage name='phone' className=' text-[red] md:ml-[53px]' component={'div'}/>
            <button className="ordering" disabled={disabledButton} type="submit">Купити товар</button>
            {
               notification ?  ReactDOM.createPortal(<Modal removeNotification={removeNotification}>{notification}</Modal>, document.querySelector('.modal') as HTMLDivElement) : null
            }
        </Form>
             }
    </Formik>

}

export default OrderingForm;