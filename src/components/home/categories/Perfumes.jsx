import "./homeStyles.css";
import Category from "./Category";

function Perfumes() {
  const products = [
    { name: "LIBRE", path: "images/perfumes/pic1.jpg", price: 100 },
    { name: "NO 10", path: "images/perfumes/pic2.jpg", price: 220 },
    { name: "STATUS JIVAGO", path: "images/perfumes/pic3.jpg", price: 200 },
    { name: "MAGNETIC GOLD JIVAGO", path: "images/perfumes/pic4.jpg", price: 190 },
    { name: "MY WAY", path: "images/perfumes/pic5.jpg", price: 200 },
    { name: "Si", path: "images/perfumes/pic6.jpg", price: 200 },
    { name: "NARCISO POUDREE", path: "images/perfumes/pic7.jpg", price: 200 },
    { name: "ALIEN MUGLER", path: "images/perfumes/pic8.jpg", price: 200 },
    { name: "LIBER", path: "images/perfumes/pic9.jpg", price: 200 },
    { name: "HALLOWEEN BLOSSOM", path: "images/perfumes/pic10.jpg", price: 200 },
    { name: "OLYMPEA", path: "images/perfumes/pic11.jpg", price: 200 },
  ];

  return (
    <Category id="perfume" title="Perfumes" productsArray={products} />
  );
}

export default Perfumes;
