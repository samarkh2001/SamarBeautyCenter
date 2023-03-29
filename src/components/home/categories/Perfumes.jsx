import { Container, Card, Col, Row } from "react-bootstrap";
import "./homeStyles.css";

function Perfumes() {
  const imgsArray = [
    { name: "Nike", path: "images/perfumes/pic1.jpg", price: 100 },
    { name: "adidas", path: "images/perfumes/pic2.jpg", price: 220 },
    {
      name: "newbalance",
      path: "images/perfumes/pic3.jpg",
      price: 80,
    },
    { name: "guess", path: "images/perfumes/pic4.jpg", price: 190 },
    { name: "nike", path: "images/perfumes/pic5.jpg", price: 200 },
  ];

  return (
    <Container className="landing_content perfumes_container" id="perfumes">
      <h2 className="productTitle">Perfumes</h2>
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

export default Perfumes;
