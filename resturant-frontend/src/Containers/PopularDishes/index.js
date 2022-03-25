import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import riceImage from "../../Images/rice.png"


export default function PopularDishes() {
  return (
    <section>
      <Container>
        <Row>
            <Col>
                 <h1 className="mainTopic">Popular Dishes</h1>
            </Col>
        </Row>
      <div>
        <Row>
          <Col>
            <div className="itemBox">
              <div className="itemImage"><img className="riceImage" src={riceImage} alt="riceImage" /></div>
              <div>
                <h2 className="itemName">Pasata</h2>
              </div>
              <div>
                <h4 className="itemName">star</h4>
              </div>
              <div>
                <h6 className="itemName">
                  Pasta is a type of food typically made from an unleavened
                  dough.
                </h6>
              </div>
              <div><h4 className="itemName">$15</h4></div>
            </div>
          </Col>
          <Col>
            <div className="itemBox">
              <div className="itemImage"><img className="riceImage" src={riceImage} alt="riceImage" /></div>
              <div>
                <h2 className="itemName">Pasata</h2>
              </div>
              <div>
                <h4 className="itemName">star</h4>
              </div>
              <div>
                <h6 className="itemName">
                  Pasta is a type of food typically made from an unleavened
                  dough.
                </h6>
              </div>
              <div><h4 className="itemName">$15</h4></div>
            </div>
          </Col>
          <Col>
            <div className="itemBox">
              <div className="itemImage"><img className="riceImage" src={riceImage} alt="riceImage" /></div>
              <div>
                <h2 className="itemName">Pasata</h2>
              </div>
              <div>
                <h4 className="itemName">star</h4>
              </div>
              <div>
                <h6 className="itemName">
                  Pasta is a type of food typically made from an unleavened
                  dough.
                </h6>
              </div>
              <div><h4 className="itemName">$15</h4></div>
            </div>
          </Col>
          <Col>
            <div className="itemBox">
              <div className="itemImage"><img className="riceImage" src={riceImage} alt="riceImage" /></div>
              <div>
                <h2 className="itemName">Pasata</h2>
              </div>
              <div>
                <h4 className="itemName">star</h4>
              </div>
              <div>
                <h6 className="itemName">
                  Pasta is a type of food typically made from an unleavened
                  dough.
                </h6>
              </div>
              <div><h4 className="itemName">$15</h4></div>
            </div>
          </Col>
        </Row>
        {/* <br></br>
        <Row>
          <Col>
            <div className="itemBox">
              <div className="itemImage"><img className="riceImage" src={riceImage} alt="riceImage" /></div>
              <div>
                <h2 className="itemName">Pasata</h2>
              </div>
              <div>
                <h4 className="itemName">star</h4>
              </div>
              <div>
                <h6 className="itemName">
                  Pasta is a type of food typically made from an unleavened
                  dough.
                </h6>
              </div>
              <div><h4 className="itemName">$15</h4></div>
            </div>
          </Col>
          <Col>
            <div className="itemBox">
              <div className="itemImage"><img className="riceImage" src={riceImage} alt="riceImage" /></div>
              <div>
                <h2 className="itemName">Pasata</h2>
              </div>
              <div>
                <h4 className="itemName">star</h4>
              </div>
              <div>
                <h6 className="itemName">
                  Pasta is a type of food typically made from an unleavened
                  dough.
                </h6>
              </div>
              <div><h4 className="itemName">$15</h4></div>
            </div>
          </Col>
          <Col>
            <div className="itemBox">
              <div className="itemImage"><img className="riceImage" src={riceImage} alt="riceImage" /></div>
              <div>
                <h2 className="itemName">Pasata</h2>
              </div>
              <div>
                <h4 className="itemName">star</h4>
              </div>
              <div>
                <h6 className="itemName">
                  Pasta is a type of food typically made from an unleavened
                  dough.
                </h6>
              </div>
              <div><h4 className="itemName">$15</h4></div>
            </div>
          </Col>
          <Col>
            <div className="itemBox">
              <div className="itemImage"><img className="riceImage" src={riceImage} alt="riceImage" /></div>
              <div>
                <h2 className="itemName">Pasata</h2>
              </div>
              <div>
                <h4 className="itemName">star</h4>
              </div>
              <div>
                <h6 className="itemName">
                  Pasta is a type of food typically made from an unleavened
                  dough.
                </h6>
              </div>
              <div><h4 className="itemName">$15</h4></div>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <div className="itemBox">
              <div className="itemImage"><img className="riceImage" src={riceImage} alt="riceImage" /></div>
              <div>
                <h2 className="itemName">Pasata</h2>
              </div>
              <div>
                <h4 className="itemName">star</h4>
              </div>
              <div>
                <h6 className="itemName">
                  Pasta is a type of food typically made from an unleavened
                  dough.
                </h6>
              </div>
              <div><h4 className="itemName">$15</h4></div>
            </div>
          </Col>
          <Col>
            <div className="itemBox">
              <div className="itemImage"><img className="riceImage" src={riceImage} alt="riceImage" /></div>
              <div>
                <h2 className="itemName">Pasata</h2>
              </div>
              <div>
                <h4 className="itemName">star</h4>
              </div>
              <div>
                <h6 className="itemName">
                  Pasta is a type of food typically made from an unleavened
                  dough.
                </h6>
              </div>
              <div><h4 className="itemName">$15</h4></div>
            </div>
          </Col>
          <Col>
            <div className="itemBox">
              <div className="itemImage"><img className="riceImage" src={riceImage} alt="riceImage" /></div>
              <div>
                <h2 className="itemName">Pasata</h2>
              </div>
              <div>
                <h4 className="itemName">star</h4>
              </div>
              <div>
                <h6 className="itemName">
                  Pasta is a type of food typically made from an unleavened
                  dough.
                </h6>
              </div>
              <div><h4 className="itemName">$15</h4></div>
            </div>
          </Col>
          <Col>
            <div className="itemBox">
              <div className="itemImage"><img className="riceImage" src={riceImage} alt="riceImage" /></div>
              <div>
                <h2 className="itemName">Pasata</h2>
              </div>
              <div>
                <h4 className="itemName">star</h4>
              </div>
              <div>
                <h6 className="itemName">
                  Pasta is a type of food typically made from an unleavened
                  dough.
                </h6>
              </div>
              <div><h4 className="itemName">$15</h4></div>
            </div>
          </Col>
        </Row> */}
      </div>
    </Container>
    </section>
  );
}
