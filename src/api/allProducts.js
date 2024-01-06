export default async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`HTTP error! Status : ${response.status} `);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error during API call :" + err.message);
  }
}
