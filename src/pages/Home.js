import React from "react";
import { Col, Container } from "@nextui-org/react";
import { HeaderInfo } from "../components/HeaderInfo";
import { AboutMeInfo } from "../components/AboutMeInfo";
import { TechInfo } from "../components/TechInfo";
import { Skills } from "../components/SkillsInfo";

export const Home = () => {
  return (
    <div>
      <section className="header-info">
        <Container
          xl={ 12 }
        >
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
        </Container>
      </section>
      <section className="skills-info">
        <Container sm={4} xs={4} xl={12}>
          <Col
            style={{
              marginTop: "40px",
            }}
          >
            <AboutMeInfo/>
            <Skills />
            <TechInfo />
          </Col>
        </Container>
      </section>
    </div>
  );
};
