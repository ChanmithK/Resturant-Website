import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './style.css'
import buriyaniImage from '../../Images/buriyani.png'


export default function Banner() {
    return (
        <Container className = "BannerLayer">
           <Row>
               <Col>
                 <h1 className="BannerTopic">Do You Have Any Dinner Plan Today? Reserve Your Table</h1>
                 <h4 className="BannerSubTopic">Make online resevations, read restaurant reviews from diners, and earn points towards free meals. OpenTable is a real-time online reservation.</h4>
                 <button className="btn2">Make Reservation</button>
               </Col>
               <Col>
               <img className="buriyaniImage" src={buriyaniImage} alt="buriyaniImage" />
               </Col>
           </Row>
        </Container>
    )
}
