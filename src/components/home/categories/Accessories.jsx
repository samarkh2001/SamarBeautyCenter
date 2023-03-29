import "./homeStyles.css";
import Category from "./Category";

function Accessories() {
  const products = [
    { name: "PURSE", path: "images/accessories/pic1.jpg", price: 100 },
    { name: "DIAMOND RING", path: "images/accessories/pic2.jpg", price: 220 },
    { name: "MEN WATCH", path: "images/accessories/pic3.jpg", price: 200 },
    { name: "RING", path: "images/accessories/pic4.jpg", price: 190 },
    { name: "NECKLACE", path: "images/accessories/pic5.jpg", price: 200 },
  ];

  return (
    <Category id="accessories" title="Accessories" productsArray={products} />
  );
}

export default Accessories;
