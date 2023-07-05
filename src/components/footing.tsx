import styled from "styled-components";
import { Profile } from "../reusables";

const Footing = () => {
  return (
    <Container>
      <div>
        <Profile picture="" text="@daviddm_ai" />
      </div>
      <div>
        <Profile picture="" text="learning.atheros.ai" />
      </div>
    </Container>
  );
};

export default Footing;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
