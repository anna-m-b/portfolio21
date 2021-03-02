import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const IconsContainer = styled.div`
  align-self: end;
  width: 90%;
  border-top: 1px solid ${(props) => props.theme.detail};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 30px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 46px;
  color: ${(props) => props.theme.socialIcon};
  &:hover {
   color: ${(props) => props.theme.socialOnHover}}
 }
 cursor: pointer;
`;

const Footer = () => {
  return (
    <IconsContainer>
      <Icon icon={faGithubSquare} />
      <Icon icon={faTwitterSquare} />
      <Icon icon={faLinkedin} />
      <Icon icon={faPaperPlane} />
    </IconsContainer>
  );
};

export default Footer;
