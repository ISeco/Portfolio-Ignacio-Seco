import { Button, Card, Col, Row, Text } from '@nextui-org/react'
import React from 'react'

export const CardProject = ({ titleProject, urlImg, technology, description, urlProject }) => {
  return (
    <Card cover css={{ w: "100%", p: 0, m: 10 }}>
      <Card.Header blur css={{
          bgBlur: "#0f1114",
          borderTop: "$borderWeights$light solid $gray700",
          position: "absolute",
          zIndex: 1,
          top: 5
        }}>
        <Col>
          <Text h3 color="white">
            { titleProject }
          </Text>
        </Col>
      </Card.Header>
      <Card.Body>
        <Card.Image
          src={urlImg}
          height={400}
          width="100%"
          objectFit='none'
        />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: "absolute",
          bgBlur: "#0f1114",
          borderTop: "$borderWeights$light solid $gray700",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row align='center'>
          <Col span={9}>
            <Row justify='flex-start'>
              <Col>
                <Text css={{ textAlign: "start" }} color="#d1d1d1" size={15}>
                  {technology}
                </Text>
                <Text css={{ textAlign: "start" }} color="#d1d1d1" size={12}>
                  {description}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col span={3}>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                css={{ color: "#17C964", bg: "#94f9f026" }}
                onClick={ () => {
                  window.open(urlProject, '_blank');
                }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                >
                  Ir
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}
