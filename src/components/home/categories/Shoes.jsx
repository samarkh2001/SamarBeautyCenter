import Category from "./Category";
import "./homeStyles.css";

function Shoes() {
  const products = [
    { name: "NIKE", path: "images/shoes/pic1.jpg", price: 100 },
    { name: "LOUIS VUITION", path: "images/shoes/pic2.jpg", price: 220 },
    { name: "PUMA", path: "images/shoes/pic3.jpg", price: 80 },
    { name: "NIKE", path: "images/shoes/pic4.jpg", price: 190 },
    { name: "REEBOK", path: "images/shoes/pic5.jpg", price: 200 },
    { name: "NIKE", path: "images/shoes/pic6.jpg", price: 220 },
    { name: "NIKE", path: "images/shoes/pic7.jpg", price: 80 },
    { name: "WOMEN HIGH HEELS", path: "images/shoes/pic8.jpg", price: 190 },
    { name: "WOMEN HIGH HEELS", path: "images/shoes/pic9.jpg", price: 200 },
  ];

  return (
    <Category id="shoes" title="Shoes" productsArray={products} />
  );
}

export default Shoes;
