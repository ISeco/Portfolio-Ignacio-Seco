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
              titleProject={'Calendar App'}
              technology={'React'}
              urlImg={'https://res.cloudinary.com/dl7kl3hgv/image/upload/v1654036523/Calendar_App_vdo7a1.png'}
              description='Aplicación de calendario donde podrás anotar eventos importantes de tu día a día.'
              urlProject={'https://github.com/ISeco/API-CalendarApp'}
            />
          </Grid>
          <Grid xs={6} sm={6}>
            <CardProject
              titleProject={'ExoSpace'}
              technology={'Flutter'}
              urlImg={'https://res.cloudinary.com/dl7kl3hgv/image/upload/v1652729720/1_im53cx.jpg'}
              description='Podrás ver información relevante sobre de Exoplanetas y más.'
              urlProject={'https://github.com/ISeco/ExoSpace'}
            />
          </Grid>
          <Grid xs={6} sm={6}>
            <CardProject
              titleProject={'Journal App'}
              technology={'React'}
              urlImg={'https://res.cloudinary.com/dl7kl3hgv/image/upload/v1654036665/JournalApp_unpomp.png'}
              description='Aplicación de diario donde podrás anotar cosas interesantes de tu día a día.'
              urlProject={'https://github.com/ISeco/Journal-App'}
            />
          </Grid>
        </Grid.Container>
      </Col>
    </Container>
  )
}
