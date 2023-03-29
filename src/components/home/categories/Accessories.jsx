import { Container, Card, Col, Row } from "react-bootstrap";
import "./homeStyles.css";

function Accessories() {
  const imgsArray = [
    {
      name: "Nike",
      path: "images/accessories/pic1.jpg",
      price: 100,
    },
    {
      name: "adidas",
      path: "images/accessories/pic2.jpg",
      price: 220,
    },
    {
      name: "newbalance",
      path: "images/accessories/pic3.jpg",
      price: 80,
    },
    {
      name: "guess",
      path: "images/accessories/pic4.jpg",
      price: 190,
    },
    {
      name: "nike",
      path: "images/accessories/pic5.jpg",
      price: 200,
    },
  ];

  return (
    <Container
      className="landing_content accessories_container"
      id="accessories"
    >
      <h2 className="productTitle">Accessories</h2>
      <Row xs={1} md={2} className="g-5">
        {imgsArray.map((product) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={product.path}
                className="productsImg"
              />
              <Card.Body>
                <Card.Title className="productName">{product.name}</Card.Title>
              </Card.Body>
              <div>
                <center>
                  <Card.Text className="productPrice">
                    Price: {product.price}$
                  </Card.Text>
                </center>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Accessories;
