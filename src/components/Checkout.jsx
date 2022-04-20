import React, {useContext} from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { cartValue } from "../context/cartValue";
import Checkoutform from "./Checkoutform";

export default function App() {
  const {value, setValue} = useContext(cartValue)
  const config = {
    public_key: "FLWPUBK_TEST-0ab0682f6138a5fc02bca3ae343e34d9-X",
    tx_ref: Date.now(),
    amount: value,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "My store",
      description: `Pay ${value}`,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: `Pay ${value}`,
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="card align-items-center w-75 m-5 p-2 mx-auto">
      <h5>Please provide the following details to continue</h5>
      <Checkoutform />
      <FlutterWaveButton {...fwConfig} 
      className="btn btn-dark col"/>
    </div>
  );
}
