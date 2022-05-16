import React from "react";
import { Col, Container, Row, Spacer } from "@nextui-org/react";
import { HeaderInfo } from "../components/HeaderInfo";
import { AboutMeInfo } from "../components/AboutMeInfo";
import { TechInfo } from "../components/TechInfo";
import { Skills } from "../components/SkillsInfo";
import { ProjectsInfo } from "../components/ProjectsInfo";

export const Home = () => {
  return (
    <div>
      <div className="header-info">
        <Container gap={0} responsive={true}>
          <Row align="center" justify="center">
            <Col
              blur
              css={{
                bgBlur: "#0f1114",
                borderTop: "$borderWeights$light solid $gray700",
                marginTop: "20px",
                paddingBottom: "20px",
                borderRadius: "20px"
              }}
            >
              <HeaderInfo />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="skills-info">
        <Container responsive={true}>
          <Row gap={0} justify='center' align="center">
            <Col>
              <AboutMeInfo/>
              <Skills />
              <TechInfo />
              <ProjectsInfo />
            </Col>
          </Row>
        </Container>
      </div>
      <Spacer color="white" y={2} />
    </div>
  );
};
