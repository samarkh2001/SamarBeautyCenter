import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import "./homeStyles.css";

function Category(props){
    return (
        <Container className="landing_content" id={props.id}>
        <h2 className="productTitle">{props.title}</h2>
        <Row xs={1} md={2} className="g-5">
          {props.productsArray.map((product) => (
            <div className="productCard" key={product.path}>
              <Col >
                <Card>
                  <Card.Img
                    variant="top"
                    src={product.path}
                    className="productsImg removeGlow"
                  />
                  <Card.Body className="removeGlow">
                    <Card.Title className="productName removeGlow">{product.name}</Card.Title>
                  </Card.Body>
                  <div>
                    <center>
                      <Card.Text className="productPrice removeGlow">
                        Price: {product.price}$
                      </Card.Text>
                    </center>
                  </div>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
      </Container>
    );
}

export default Category;