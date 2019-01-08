import React from "react";
import HeroSlide from "../slides/landing/HeroSlide";
import styled from "@emotion/styled";

const Container = styled("div")``;

export default function Landing() {
  return (
    <Container className="w-full h-screen">
      <HeroSlide />
    </Container>
  );
}
