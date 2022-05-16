import { Col, Container, Row, Text } from '@nextui-org/react'
import React from 'react'

export const AboutMeInfo = () => {
  return (
    <Container sm={12} xl={6} xs={12}>
      <Row align="center">
        <Col css={{ width: "clam(1800px,75%, 2000px)" }} align="center">
          <Text h3>Sobre Mi</Text>
          <Text p style={{
            marginTop: "20px",
            marginBottom: "20px",
            maxWidth: "70ch",
            minWidth: "50ch"
          }}>
            Soy un joven titulado de ingeniería en informática con ganas de aprender cosas nuevas
            sobre el mundo del desarrollo de aplicaciones y el mundo tecnológico. Me considero proactivo,
            me gusta trabajar en equipo, superar nuevos desafíos y salir de mi zona de confort para asumir
            nuevas responsabilidades. Siempre me esfuerzo y me preocupo por entregar algo de calidad
            disfrutando lo que hago.
          </Text>
        </Col>
      </Row>
    </Container>
  )
}
