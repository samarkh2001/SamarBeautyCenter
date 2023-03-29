import { Container, Carousel } from "react-bootstrap";
function Intro() {
  return (
    <Container className="landing_content landing_page" id="home">
      <Carousel>
        <Carousel.Item interval={900}>
          <img
            className="pic"
            src="images/accessories/pic1.jpg"
            alt="First picture"
          />
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <img
            className="pic"
            src="images/clothes/pic1.jpg"
            alt="Second picture"
          />
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <img
            className="pic"
            src="images/creams/pic1.jpg"
            alt="Third picture"
          />
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <img
            className="pic"
            src="images/perfumes/pic1.jpg"
            alt="Fourth picture"
          />
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <img className="pic" src="images/shoes/pic1.jpg" alt="Last picture" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Intro;
