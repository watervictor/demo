import styled from "styled-components";

type iProfile = {
  picture: any;
  text: string;
};

const Profile: React.FC<iProfile> = ({ picture, text }) => {
  return (
    <Container>
      <Image>
        <img src={picture} />
      </Image>
      <Text>{text}</Text>
    </Container>
  );
};

export default Profile;

const Image = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: red;
`;
const Text = styled.div`
  font-size: 12px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
