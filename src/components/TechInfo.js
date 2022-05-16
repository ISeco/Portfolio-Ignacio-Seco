import React from 'react';
import {
  Card,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text
} from '@nextui-org/react';
import {
  node,
  react,
  redux,
  flutter,
  js,
  git,
  vercel
} from '../assets/img/index'

export const TechInfo = () => {
  const ImageItem = ({ src }) => {
    return (
      <Card.Image src={src} objectFit="contain" height='100px' width='100%' />
    );
  };
  return (
    <Container responsive={true}>
      <Row gap={0} align="center" justify='center'>
        <Col span={8} align="center">
          <Text h3>Tecnologías</Text>
          <Spacer y={1} />
          <Grid.Container gap={2} justify="center">
            <Grid xs={3}>
              <ImageItem src={js} />
            </Grid>
            <Grid xs={3}>
              <ImageItem src={react} />
            </Grid>
            <Grid xs={3}>
              <ImageItem src={node} />
            </Grid>
            <Grid xs={3}>
              <ImageItem src={redux} />
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="center">
            <Grid xs={3}>
              <ImageItem src={flutter} />
            </Grid>
            <Grid xs={3}>
              <ImageItem src={git} />
            </Grid>
            <Grid xs={3}>
              <ImageItem src={vercel} />
            </Grid>
          </Grid.Container>
        </Col>
      </Row>
    </Container>
  )
}
