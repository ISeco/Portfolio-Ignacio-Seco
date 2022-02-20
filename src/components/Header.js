import React, { useState } from 'react';
import {
    Card,
    Col,
    Container,
    Image,
    Row,
    Text
} from '@nextui-org/react';
import DefaultBg from '../assets/img/bg1.jpg';
import { Typing } from './Typing';

export const Header = () => {

    const [element, setElement] = useState('typing');

    Typing(element);

    return (
        <div>
            <Container xs css={{
                marginTop: 15,
            }}>
                <Row justify='center' align='center'>
                    <Card css={{
                        maxWidth: '350px',
                        borderRadius: '5px',
                    }}>
                        <Text h2 css={{
                            textGradient: '10deg, $yellow500 -20%, $red500 100%'
                        }}>Hola,</Text>
                        <Text h2 color='$blue300'>
                            Soy
                            <Text css={{
                                textGradient: '45deg, $blue300 -20%, $purple500'
                            }} span> Ignacio Seco.</Text>
                        </Text>
                        <Text h3>Desarrollador <Text span id={element} color='$green500'></Text></Text>
                    </Card>
                </Row>
            </Container>
            {/* <Grid lg css={{
                // marginTop: 200,
            }}>
                <Card.Body>
                    <Image
                        css={{
                            opacity: 0.6
                        }}
                        src={DefaultBg}
                        height="0px"
                        width="100%"
                        alt="Relaxing app background"
                    />
                </Card.Body>
                <Card
                    blur
                    css={{
                        position: 'absolute',
                        maxWidth: '350px',
                        borderRadius: '5px',
                        bgBlur: '#0f1114',
                        top: 250,
                        marginLeft: '57px',
                        zIndex: 1
                    }}>
                    <Text h2 css={{
                        textGradient: '10deg, $yellow500 -20%, $red500 100%'
                    }}>Hola,</Text>
                    <Text h2 color='$blue300'>
                        Soy
                        <Text css={{
                            textGradient: '45deg, $blue300 -20%, $purple500'
                        }} span> Ignacio Seco.</Text>
                    </Text>
                    <Text h3>Desarrollador <Text span id={element} color='$green500'></Text></Text>
                </Card>
            </Grid> */}
        </div>
    )
}
