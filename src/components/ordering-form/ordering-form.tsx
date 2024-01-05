import { useAppSelector, useAppDispatch } from "../../store/store";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationOrderForm } from "../../helpers/validation";
import { ClientInfo } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import  ReactDOM  from "react-dom";
import Modal from "../../ui/modal/Modal";
import { clearBasketArr } from "../../modules/basket/basketSlice";

const OrderingForm = () => {
    const [notification, setNotification] = useState('');
    const navigation = useNavigate();
    const finalOrderingProduct = useAppSelector(state => state.basket.basketArr);
    const dispatch = useAppDispatch();
    const disabledButton = finalOrderingProduct.length === 0 ? true : false;

    const removeNotification = () => {
        setNotification('')
     }

    const onBuyProduct = (value: ClientInfo) => {
         const orderingProducts = {...value, orderingProducts: finalOrderingProduct}
         setNotification('Замовлення успішно відправлено. Наш менеджер скоро вам зателефонує');
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
        <Form className=" flex flex-col items-start" noValidate>
            <div className="">
                <label className="" htmlFor="name">Ім'я</label>
                <Field id="name" name="name" className={`${errors.name && touched.name ? 'border-[1px solid red]' : '' }`} type="text" placeholder="Ім'я" />
            </div>
            <ErrorMessage name='name' className=' text-[red]' component={'div'}/>
            <div className="">
                <label className="" htmlFor="email">Email</label>
                <Field id="email" name="email" className={`${errors.name && touched.name ? 'border-[1px solid red]' : '' }`} type="email" placeholder="Email" />
            </div>
            <ErrorMessage name='email' className=' text-[red]' component={'div'}/>
            <div className="">
                <label className="" htmlFor="phone">Phone</label>
                <Field id='phone' type='number' name='phone' className={`${errors.name && touched.name ? 'border-[1px solid red]' : '' }`} placeholder="Phone"/>
            </div>
            <ErrorMessage name='phone' className=' text-[red]' component={'div'}/>
            <button disabled={disabledButton} type="submit">Купити товар</button>
            {
               notification ?  ReactDOM.createPortal(<Modal removeNotification={removeNotification}>{notification}</Modal>, document.querySelector('.modal') as HTMLDivElement) : null
            }
           </Form>
             }
    </Formik>

}

export default OrderingForm;