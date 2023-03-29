import { Container, Card, Col, Row } from "react-bootstrap";
import "./homeStyles.css";

function Clothes() {
  const imgsArray = [
    { name: "Nike", path: "images/clothes/pic1.jpg", price: 100 },
    { name: "adidas", path: "images/clothes/pic2.jpg", price: 220 },
    {
      name: "newbalance",
      path: "images/clothes/pic3.jpg",
      price: 80,
    },
    { name: "guess", path: "images/clothes/pic4.jpg", price: 190 },
    { name: "nike", path: "images/clothes/pic5.jpg", price: 200 },
    { name: "nike", path: "images/clothes/pic6.jpg", price: 200 },
  ];

  return (
    <Container className="landing_content clothes_container" id="clothes">
      <h2 className="productTitle">Clothes</h2>
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

export default Clothes;
