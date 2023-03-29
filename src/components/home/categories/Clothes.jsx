import "./homeStyles.css";
import Category from "./Category";

function Clothes() {
  const products = [
    { name: "DRESS", path: "images/clothes/pic1.jpg", price: 100 },
    { name: "OUTFIT", path: "images/clothes/pic2.jpg", price: 220 },
    { name: "OUTFIT", path: "images/clothes/pic3.jpg", price: 200 },
    { name: "OUTFIT", path: "images/clothes/pic4.jpg", price: 190 },
    { name: "DRESS", path: "images/clothes/pic5.jpg", price: 200 },
    { name: "DRESS", path: "images/clothes/pic6.jpg", price: 200 },
  ];

  return (
    <Category id="clothes" title="Clothes" productsArray={products} />
  );
}

export default Clothes;
