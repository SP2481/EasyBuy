function Checkout() {
  return (
    <main>
      <form>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" placeholder="Full Name" />
        <label htmlFor="number">Mobile Number</label>
        <input type="tel" name="Mobile" placeholder="Mobile number" />
        <label htmlFor="address">Flat/House No.</label>
        <input type="text" name="address" placeholder="Flat No" />
        <label htmlFor="address">Address line 2</label>
        <input type="text" name="address" placeholder="address" />
        <label htmlFor="lamdmark">LandMark</label>
        <input type="text" name="landmark" placeholder="landmark" />
        <label htmlFor="pincode">pincode</label>
        <input type="number" name="pincode" placeholder="Pincode" />
        <label htmlFor="number">Town City</label>
        <input type="text" name="cityName" placeholder="Town/City Name" />
        <button>Submit</button>
      </form>
    </main>
  );
}

export default Checkout;
