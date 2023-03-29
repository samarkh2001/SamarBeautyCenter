import { Container, Card, Col, Row } from "react-bootstrap";
import "./homeStyles.css";

function Creams() {
  const imgsArray = [
    { name: "Nike", path: "images/creams/pic1.jpg", price: 100 },
    { name: "adidas", path: "images/creams/pic2.jpg", price: 220 },
    {
      name: "newbalance",
      path: "images/creams/pic3.jpg",
      price: 80,
    },
    { name: "guess", path: "images/creams/pic4.jpg", price: 190 },
    { name: "nike", path: "images/creams/pic5.jpg", price: 200 },
  ];

  return (
    <Container className="landing_content creams_container" id="creams">
      <h2 className="productTitle">Creams</h2>
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

export default Creams;
