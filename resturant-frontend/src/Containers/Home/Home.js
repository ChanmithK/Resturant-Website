import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Layout from "../../Components/Layout";
import "./style.css";
import heroImage from "../../Images/heroImg.png";
import arrowImage from "../../Images/arrow.png";
import loveUmage from "../../Images/love.png";
import dishesImage from "../../Images/dishes.png";
import dessertImage from "../../Images/dessert.png";
import drinkImage from "../../Images/drink.png";
import sanckImage from "../../Images/snack.png";
import PopularDishes from "../PopularDishes";
import Banner from "../Banner";
import Menu from '../Menu/Menu'
import Comments from "../Comments";


export default function Home() {
  return (
    <section >
      <Layout>
        <Container className="Container">
          <Row className="Row">
            <Col className="TopicContainer">
              <h1 className="Topic">
                We Serve The Taste You Love
                <img className="loveUmage" src={loveUmage} alt="loveUmage" />
              </h1>
              <h6 className="subTopic">
                This is a type of restaurant which typically serves food and
                drinks, in addition to light refreshments such as baked goods or
                snacks. The term comes from the rench word meaning food.
              </h6>
              <button type="button" className="mainButton">
                Explore Foods
                <img className="arrowImage" src={arrowImage} alt="arrowImage" />
              </button>
            </Col>
            <Col className="ImageContainer">
              <img className="heroImage" src={heroImage} alt="heroImage" />
              <div className="sideFoods">
                <ul>
                  <li>
                    <button type="button" class="btn1">
                      <img
                        className="dishesImage"
                        src={dishesImage}
                        alt="dishesImage"
                      />{" "}
                      Dishes
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn1">
                      <img
                        className="dessertImage"
                        src={dessertImage}
                        alt="dessertImage"
                      />{" "}
                      Dessert
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn1">
                      <img
                        className="drinkImage"
                        src={drinkImage}
                        alt="drinkImage"
                      />{" "}
                      Drinks
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn1">
                      <img
                        className="sanckImage"
                        src={sanckImage}
                        alt="sanckImage"
                      />{" "}
                      Snacks
                    </button>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
      <PopularDishes />
      <Banner/>
      <Menu/>
      <Comments/>
    </section>
  );
}
