/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../components/Modal";

function Payment() {
  const [selectedItem, SetSelectedItem] = useState("");
  const [open, setopen] = useState(false);
  const navigate = useNavigate();
  const closeModal = () => {
    setopen(false);
    navigate("/");
  };
  return (
    <section className="w-full h-max flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold font-bebasNueue">Payment</h1>
      <form className="border-2 lg:border-0 w-[20rem] lg:w-full h-auto flex flex-col items-center ">
        <div className=" p-6 ">
          <label htmlFor="Mode of Payments">Mode of Payments</label>
          <select
            name="payments"
            id="payment"
            value={selectedItem}
            onChange={(e) => SetSelectedItem(e.target.value)}
            className="h-12 p-2 w-full border-2 border-black mb-4"
          >
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Debit/Credit Card">Debit/Credit Card</option>
            <option value="UPI">UPI</option>
          </select>

          {selectedItem === "UPI" && (
            <div>
              <label htmlFor="id">UPI ID</label>
              <input
                type="text"
                name="UPI ID"
                placeholder="UPI ID"
                required
                className="h-12 p-2 w-full border-2 border-black mb-4"
              />
            </div>
          )}
          {selectedItem === "Debit/Credit Card" && (
            <div>
              <label htmlFor="id">Debit card number</label>
              <input
                type="text"
                name="UPI ID"
                placeholder="Card number"
                required
                className="h-12 p-2 w-full border-2 border-black mb-4"
              />
            </div>
          )}
          <button
            className="w-full md:w-[15rem] md:ml-4 lg:ml-10 h-12 rounded-lg bg-yellow-500"
            onClick={() => setopen(true)}
            type="button"
          >
            Order now
          </button>

          {open && <ConfirmationModal onClose={closeModal} />}
        </div>
      </form>
    </section>
  );
}

export default Payment;
