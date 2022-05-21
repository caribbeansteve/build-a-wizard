import Container from "../../components/Container";
import styled from "@emotion/styled";
import Wizard from "../../components/Wizard";

const Home = () => {
  return (
    <HomeWrapper>
      <SectionWrapper bg="#7cd0ff" color="black">
        <Container>
          <Wizard>
          </Wizard>
        </Container>
      </SectionWrapper>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionWrapper = styled.div`
  background: ${(p) => (p.bg ? p.bg : "transparent")};
  color: ${(p) => (p.color ? p.color : "black")};
  padding: 3em 1em;

  @media only screen and (min-width: 600px) {
    padding: 3em 2em;
  }
`;

export default Home;
