import styled from "styled-components";
import { colors } from "../commons";

type iHeading = {
  css: string;
};

const Heading: React.FC<iHeading> = ({ css }) => {
  return (
    <Container>
      <Texts cl={colors.partial}>
        CSS <span>{css}</span> Overview
      </Texts>
      <Images>
        <div>H</div>
        <div>H</div>
      </Images>
    </Container>
  );
};

export default Heading;

const Images = styled.div`
  display: flex;
  gap: 5px;
`;
const Texts = styled.div<{ cl: string }>`
  span {
    color: ${({ cl }) => cl};
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  @media screen and (min-width: 650px) {
    font-size: 20px;
  }
  @media screen and (min-width: 850px) {
    font-size: 25px;
  }
`;
