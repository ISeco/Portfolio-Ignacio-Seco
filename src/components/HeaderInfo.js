import React, { useState } from 'react';
import { Button, Col, Container, Image, Row, Spacer, Text } from '@nextui-org/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Typing } from './Typing';
import cv from '../assets/files/CV.pdf';

export const HeaderInfo = () => {

  const [element, setElement] = useState("typing");

  Typing(element);

  return (
    
    <Container responsive={true}>
      <Row gap={1} justify='center' align="center" style={{ marginTop: "30px" }}>
        <Col align="center">
          <img
            className='image-profile'
            src="https://res.cloudinary.com/dl7kl3hgv/image/upload/v1652592826/image-profile_m43vnq.jpg"
          /> 
        </Col>
        <Col align="start">
          <Text h1 color='white'>Ignacio Seco</Text>
          <h3 style={{ color: "white" }}>
            Ingeniero en Informática y Desarrollador <Text span id={element} color="$green500"></Text>
          </h3>
          <a target="_blank" href="https://github.com/ISeco" style={{ color: "aliceblue" }}>
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ marginRight: "17px" }}/>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/ignacio-seco-aa3a73226/" style={{ color: "aliceblue" }}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ marginRight: "17px" }}/>
          </a>
          <Spacer y={1} />
          <Button ghost color="success" onClick={ () => {
            window.open(cv, '_blank');
          }}>Descargar CV</Button>
        </Col>
      </Row>
    </Container>

  )
}
