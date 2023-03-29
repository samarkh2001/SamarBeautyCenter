import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import "./homeStyles.css";

function Category(props){
    return (
        <Container className="landing_content" id={props.id}>
        <h2 className="productTitle">{props.title}</h2>
        <Row xs={1} md={2} className="g-5">
          {props.productsArray.map((product) => (
            <div className="productCard">
            <Col >
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
            </div>
          ))}
        </Row>
      </Container>
    );
}

export default Category;