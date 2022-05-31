import { Col, Container, Grid, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import { CardProject } from './CardProject'

export const ProjectsInfo = () => {
  return (
    <Container sm css={{ marginTop: "20px" }}>
      <Col align="center">
        <Text h3>Proyectos</Text>
        <Spacer y={1} />
        <Grid.Container>
          <Grid xs={6} sm={6}>
            <CardProject
              titleProject={'ExoSpace'}
              technology={'Flutter'}
              urlImg={'https://res.cloudinary.com/dl7kl3hgv/image/upload/v1652729720/1_im53cx.jpg'}
              description='Podrás ver información relevante sobre de Exoplanetas y más.'
              urlProject={'https://github.com/ISeco/ExoSpace'}
            />
          </Grid>
        </Grid.Container>
      </Col>
    </Container>
  )
}
