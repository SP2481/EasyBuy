import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  return (
    <main className="w-full h-[84vh] bg-[#d2d2d2]">
      <form className="flex flex-col gap-1 p-2 md:grid md:grid-cols-2">
        <div className="flex flex-col gap-1 p-2">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border-2 border-gray-400 h-12 rounded-lg bg-gray-100 p-2"
          />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <label htmlFor="number">Mobile Number</label>
          <input
            type="tel"
            name="Mobile"
            placeholder="Mobile number"
            className="border-2 border-gray-400 h-12 rounded-lg bg-gray-100 p-2"
          />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <label htmlFor="address">Flat/House No.</label>
          <input
            type="text"
            name="address"
            placeholder="Flat No"
            className="border-2 border-gray-400 h-12 rounded-lg bg-gray-100 p-2"
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
          onClick={() => navigate("/payment")}
        >
          Proceed to Payment
        </button>
      </form>
    </main>
  );
}

export default Checkout;
