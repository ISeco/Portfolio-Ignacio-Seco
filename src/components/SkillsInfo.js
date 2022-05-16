import { Col, Container, Row, Spacer, Text } from '@nextui-org/react'
import React from 'react'

export const Skills = () => {
  return (
    <Container responsive={true}>
      <Row gap={0} justify='center'>
        <Col span={10} align="center">
          <Text h3>Aptitudes</Text>
          <Row align='center' justify='center'>
            <ul style={{ textAlign: "start", listStyleType: "disc" }}>
              <li>Proactivo</li>
              <li>Trabajo en Equipo</li>
              <li>Comunicación</li>
            </ul>
            <Spacer y={2} />
            <ul style={{ textAlign: "start", listStyleType: "disc" }}>
              <li>Resolución de problemas</li>
              <li>Desarrollo web</li>
              <li>Desarrollo de Software</li>
            </ul>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
