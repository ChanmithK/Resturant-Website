import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import riceImage from "../../Images/rice.png";

export default function Menu() {
  return (
    <Container>
      <Row>
        <h1 className="mainTopic1">Our Regular Menu Pack</h1>
      </Row>
      <Row>
        <Col>
          <button className="btn3">Special Food</button>
        </Col>
        <Col>
          <button className="btn3">Inian</button>
        </Col>
        <Col>
          <button className="btn3">Chinese</button>
        </Col>
        <Col>
          <button className="btn3">Japanese</button>
        </Col>
        <Col>
          <button className="btn3">Drinks</button>
        </Col>
        <Col>
          <button className="btn3">Dessert</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="itemBox">
            <div className="itemImage">
              <img className="riceImage" src={riceImage} alt="riceImage" />
            </div>
            <div>
              <h2 className="itemName">Pasata</h2>
            </div>
            <div>
              <h4 className="itemName">star</h4>
            </div>
            <div>
              <h6 className="itemName">
                Pasta is a type of food typically made from an unleavened dough.
              </h6>
            </div>
            <div>
              <h4 className="itemName">$15</h4>
            </div>
          </div>
        </Col>
        <Col>
          <div className="itemBox">
            <div className="itemImage">
              <img className="riceImage" src={riceImage} alt="riceImage" />
            </div>
            <div>
              <h2 className="itemName">Pasata</h2>
            </div>
            <div>
              <h4 className="itemName">star</h4>
            </div>
            <div>
              <h6 className="itemName">
                Pasta is a type of food typically made from an unleavened dough.
              </h6>
            </div>
            <div>
              <h4 className="itemName">$15</h4>
            </div>
          </div>
        </Col>
        <Col>
          <div className="itemBox">
            <div className="itemImage">
              <img className="riceImage" src={riceImage} alt="riceImage" />
            </div>
            <div>
              <h2 className="itemName">Pasata</h2>
            </div>
            <div>
              <h4 className="itemName">star</h4>
            </div>
            <div>
              <h6 className="itemName">
                Pasta is a type of food typically made from an unleavened dough.
              </h6>
            </div>
            <div>
              <h4 className="itemName">$15</h4>
            </div>
          </div>
        </Col>
        <Col>
          <div className="itemBox">
            <div className="itemImage">
              <img className="riceImage" src={riceImage} alt="riceImage" />
            </div>
            <div>
              <h2 className="itemName">Pasata</h2>
            </div>
            <div>
              <h4 className="itemName">star</h4>
            </div>
            <div>
              <h6 className="itemName">
                Pasta is a type of food typically made from an unleavened dough.
              </h6>
            </div>
            <div>
              <h4 className="itemName">$15</h4>
            </div>
          </div>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <div className="itemBox">
            <div className="itemImage">
              <img className="riceImage" src={riceImage} alt="riceImage" />
            </div>
            <div>
              <h2 className="itemName">Pasata</h2>
            </div>
            <div>
              <h4 className="itemName">star</h4>
            </div>
            <div>
              <h6 className="itemName">
                Pasta is a type of food typically made from an unleavened dough.
              </h6>
            </div>
            <div>
              <h4 className="itemName">$15</h4>
            </div>
          </div>
        </Col>
        <Col>
          <div className="itemBox">
            <div className="itemImage">
              <img className="riceImage" src={riceImage} alt="riceImage" />
            </div>
            <div>
              <h2 className="itemName">Pasata</h2>
            </div>
            <div>
              <h4 className="itemName">star</h4>
            </div>
            <div>
              <h6 className="itemName">
                Pasta is a type of food typically made from an unleavened dough.
              </h6>
            </div>
            <div>
              <h4 className="itemName">$15</h4>
            </div>
          </div>
        </Col>
        <Col>
          <div className="itemBox">
            <div className="itemImage">
              <img className="riceImage" src={riceImage} alt="riceImage" />
            </div>
            <div>
              <h2 className="itemName">Pasata</h2>
            </div>
            <div>
              <h4 className="itemName">star</h4>
            </div>
            <div>
              <h6 className="itemName">
                Pasta is a type of food typically made from an unleavened dough.
              </h6>
            </div>
            <div>
              <h4 className="itemName">$15</h4>
            </div>
          </div>
        </Col>
        <Col>
          <div className="itemBox">
            <div className="itemImage">
              <img className="riceImage" src={riceImage} alt="riceImage" />
            </div>
            <div>
              <h2 className="itemName">Pasata</h2>
            </div>
            <div>
              <h4 className="itemName">star</h4>
            </div>
            <div>
              <h6 className="itemName">
                Pasta is a type of food typically made from an unleavened dough.
              </h6>
            </div>
            <div>
              <h4 className="itemName">$15</h4>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
