import { Col, Container, Row, Text } from '@nextui-org/react'
import React from 'react'

export const AboutMeInfo = () => {
  return (
    <Container responsive={true} css={{ marginTop: "20px" }}>
      <Row align="center" justify='center'>
        <Col span={6} align="center">
          <Text h3>Sobre Mi</Text>
          <Text as={'p'} style={{
            marginTop: "20px",
            marginBottom: "20px",
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
