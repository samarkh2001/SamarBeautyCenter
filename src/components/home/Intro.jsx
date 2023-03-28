import { Container, Carousel } from "react-bootstrap";
function Intro() {
  return (
    <Container className="landing_content landing_page" id="home">
      <Carousel>
        <Carousel.Item interval={700}>
          <img src="images/cream/cream.jpg" alt="cream image" />
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img src="images/dresses/dress.jpg" alt="dress image" />
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img src="images/perfume/coco.jpg" alt="perfume image" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Intro;
