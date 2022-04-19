import React, {useState, useContext} from 'react'
import { cartValue } from '../context/cartValue';
const Checkoutform = () => {
    const {value, setValue} = useContext(cartValue)
    const [paymentData, setpaymentData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      amount: value,
      address: "",
    });
  return (
    <form className="m-3 d-flex flex-column align-items-center">
      <input
        type="text"
        className=" col mb-2"
        placeholder="firstname"
        onChange={(e) =>
          setpaymentData({ ...paymentData, firstName: e.target.value })
        }
      />
      <input
        type="text"
        className="col mb-2"
        placeholder="lastname"
        onChange={(e) =>
          setpaymentData({ ...paymentData, lastName: e.target.value })
        }
      />
      <input
        type="email"
        className="col mb-2"
        placeholder="email"
        onChange={(e) =>
          setpaymentData({ ...paymentData, email: e.target.value })
        }
      />
      <input
        type="text"
        className="col mb-2"
        disabled
        placeholder={`$ ${paymentData.amount}`}
        onChange={(e) =>
          setpaymentData({ ...paymentData, amount: e.target.value })
        }
      />
      <input
        type="text"
        className="col mb-2"
        placeholder="delivery address"
        onChange={(e) =>
          setpaymentData({ ...paymentData, address: e.target.value })
        }
      />
    </form>
  );
}

export default Checkoutform