import { colors } from "../commons";
import { Demo, Footing, Heading } from "../components";
import styled from "styled-components";

const Layout = () => {
  return (
    <Container bg={colors.major} cl={colors.neutral}>
      <Wrapper>
        <Heading css="Justify Content" />
        <Demo />
        <Footing />
      </Wrapper>
    </Container>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 70%;
  @media screen and (min-width: 800px) {
    width: 400px;
  }
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Container = styled.div<{ bg: string; cl: string }>`
  background-color: ${({ bg }) => bg};
  color: ${({ cl }) => cl};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
