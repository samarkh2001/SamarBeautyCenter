import { Container } from "react-bootstrap";
import Intro from "./home/categories/Intro";
import Perfumes from "./home/categories/Perfumes";
import Creams from "./home/categories/Creams";
import Clothes from "./home/categories/Clothes";
import Shoes from "./home/categories/Shoes";
import Accessories from "./home/categories/Accessories";
import About from "./home/categories/About";
import Contact from "./home/categories/Contact";
import "./home/categories/homeStyles.css";

function Landing() {
  return (
    <Container fluid="true" className="landing_container">
      <Intro />
      <Perfumes />
      <Creams />
      <Clothes />
      <Shoes />
      <Accessories />
      <About />
      <Contact />
    </Container>
  );
}
export default Landing;
