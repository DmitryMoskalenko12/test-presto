import { useAppSelector, useAppDispatch } from "../../store/store";
import { Formik, Form, ErrorMessage } from "formik";
import { validationOrderForm } from "../../helpers/validation";
import { ClientInfo } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReactDOM from "react-dom";
import Modal from "../../ui/modal/Modal";
import { clearBasketArr } from "../../modules/basket/basketSlice";
import FormInputBlock from "../../ui/form-input-block/FormInputBlock";

const OrderingForm = () => {
  const [notification, setNotification] = useState("");
  const navigation = useNavigate();
  const finalOrderingProduct = useAppSelector(
    (state) => state.basket.basketArr
  );
  const dispatch = useAppDispatch();
  const form = useRef<HTMLFormElement | null>(null);
  const disabledButton = finalOrderingProduct.length === 0 ? true : false;

  const removeNotification = () => {
    setNotification("");
  };

  const onBuyProduct = (value: ClientInfo) => {
    const orderingProducts = {
      ...value,
      orderingProducts: finalOrderingProduct,
    };
    setNotification(
      "Замовлення успішно відправлено. Наш менеджер скоро вам зателефонує"
    );
    emailjs
      .sendForm(
        "service_9cz3ue9",
        "template_kbliu49",
        form.current!,
        "hz1i6FoPP_2ZUvqN1"
      )
    setTimeout(() => {
      navigation("/");
      setNotification("");
    }, 3000);
    dispatch(clearBasketArr([]));
    return orderingProducts;
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
      }}
      validationSchema={validationOrderForm}
      onSubmit={(values, { resetForm }) => {
        console.log(onBuyProduct(values));
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form
          ref={form}
          className=" flex w-[100%] flex-col gap-[20px] sm:w-[540px] sm:m-[0_auto] md:m-[initial] md:w-[initial]"
          noValidate
        >
          <FormInputBlock placeholder={"Ім'я"} type={"text"} touched={touched.name} error={errors.name} name={"name"} id={"name"} htmlFor={"name"}>Ім'я</FormInputBlock>
          <ErrorMessage
            name="name"
            className=" text-[red] md:ml-[53px]"
            component={"div"}
          />
          <FormInputBlock placeholder={"Email"} type={"email"} touched={touched.email} error={errors.email} name={"email"} id={"email"} htmlFor={"email"}>Email</FormInputBlock>
          <ErrorMessage
            name="email"
            className=" text-[red] md:ml-[53px]"
            component={"div"}
          />
          <FormInputBlock placeholder={"Phone"} type={"number"} touched={touched.phone} error={errors.phone} name={"phone"} id={"phone"} htmlFor={"phone"}>Phone</FormInputBlock>
          <ErrorMessage
            name="phone"
            className=" text-[red] md:ml-[53px]"
            component={"div"}
          />
          <button className="ordering" disabled={disabledButton} type="submit">
            Купити товар
          </button>
          {notification
            ? ReactDOM.createPortal(
                <Modal removeNotification={removeNotification}>
                  {notification}
                </Modal>,
                document.querySelector(".modal") as HTMLDivElement
              )
            : null}
        </Form>
      )}
    </Formik>
  );
};

export default OrderingForm;
