import Category from "./Category";
import "./homeStyles.css";

function Creams() {
  const products = [
    { name: "CLINIQUE", path: "images/creams/pic1.jpg", price: 100 },
    { name: "VITAMIN C", path: "images/creams/pic2.jpg", price: 220 },
    { name: "NIGHT CREAM", path: "images/creams/pic3.jpg", price: 80,},
    { name: "MOISTURIZING CREAM", path: "images/creams/pic4.jpg", price: 190 },
    { name: "SUNSCREEN CREAM", path: "images/creams/pic5.jpg", price: 200 },
  ];

  return (
    <Category id="creams" title="Creams" productsArray={products} />
  );
}

export default Creams;
