import { Container, Card, Col, Row } from "react-bootstrap";
import "./homeStyles.css";

function Shoes() {
  const imgsArray = [
    { name: "Nike", path: "images/shoes/pic1.jpg", price: 100 },
    { name: "adidas", path: "images/shoes/pic2.jpg", price: 220 },
    { name: "newbalance", path: "images/shoes/pic3.jpg", price: 80 },
    { name: "guess", path: "images/shoes/pic4.jpg", price: 190 },
    { name: "nike", path: "images/shoes/pic5.jpg", price: 200 },
  ];

  return (
    <Container className="landing_content shoes_container" id="shoes">
      <h2 className="productTitle">Shoes</h2>
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

export default Shoes;
