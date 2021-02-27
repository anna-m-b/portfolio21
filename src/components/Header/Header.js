import styled from 'styled-components';
import Nav from './Nav';
import me from '../../images/profile-pic.png';

const HeaderContainer = styled.div`
  width: 90%;
  max-height: 150px;
  //border: 1px solid purple;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-items: center;
`;

const ProfilePic = styled.img`
  width: 100px;
  align-self: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ProfilePic src={me} alt="me" />
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
