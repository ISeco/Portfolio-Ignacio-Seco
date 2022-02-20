import { Card, Col, Container, Row } from '@nextui-org/react'
import React from 'react'

export const Body = () => {
    return (
        <div>
            <Container xl css={{
                marginTop: 15,
            }}>
                <Row>
                    <Col>
                        <Card css={{
                            marginRight: '10px'
                        }}>
                            <p>
                                Hola
                            </p>
                        </Card>
                    </Col>
                    <Col>
                        <Card css={{
                            marginLeft: '10px'
                        }}>
                            <p>
                                Hola
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
