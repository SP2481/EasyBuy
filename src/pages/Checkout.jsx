import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Checkout form for user details
function Checkout() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all required fields are not empty
    if (!name.trim() || !mobile.trim() || !pincode.trim() || !address.trim()) {
      alert("All fields must be filled out");
      return;
    }

    // If all fields are filled, proceed to payment
    navigate("/payment");
  };

  return (
    <main className="w-full min-h-full bg-[#d2d2d2]">
      <form className="flex flex-col gap-1 p-2 md:grid md:grid-cols-2">
        <div className="flex flex-col gap-1 p-2">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border-2 border-gray-400 h-12 rounded-lg bg-gray-100 p-2 "
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <label htmlFor="number">Mobile Number</label>
          <input
            type="tel"
            name="Mobile"
            placeholder="Mobile number"
            className="border-2 border-gray-400 h-12 rounded-lg bg-gray-100 p-2"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <label htmlFor="address">Flat/House No.</label>
          <input
            type="text"
            name="address"
            placeholder="Flat No"
            className="border-2 border-gray-400 h-12 rounded-lg bg-gray-100 p-2"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <label htmlFor="address">Address line 2</label>
          <input
            type="text"
            name="address"
            placeholder="address"
            className="border-2 border-gray-400 h-12 rounded-lg bg-gray-100 p-2"
          />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <label htmlFor="lamdmark">LandMark</label>
          <input
            type="text"
            name="landmark"
            placeholder="landmark"
            className="border-2 border-gray-400 h-12 rounded-lg bg-gray-100 p-2"
          />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <label htmlFor="pincode">pincode</label>
          <input
            type="number"
            name="pincode"
            placeholder="Pincode"
            className="border-2 border-gray-400 h-12 rounded-lg bg-gray-100 p-2"
            required
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <label htmlFor="number">Town City</label>
          <input
            type="text"
            name="cityName"
            placeholder="Town/City Name"
            className="border-2 border-gray-400 h-12 rounded-lg bg-gray-100 p-2"
          />
        </div>
        <button
          className="md:w-[20rem] w-full h-12 rounded-lg bg-yellow-400 md:col-span-2 mt-4"
          onClick={() => handleSubmit()}
        >
          Proceed to Payment
        </button>
      </form>
    </main>
  );
}

export default Checkout;
