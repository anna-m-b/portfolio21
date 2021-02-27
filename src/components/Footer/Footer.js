import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const IconsContainer = styled.div`
  width: 100%;
  border-top: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 30px;
`;

const iconStyles = {
  fontSize: '46px',
};

const Footer = () => {
  return (
    <IconsContainer>
      <FontAwesomeIcon icon={faGithubSquare} style={iconStyles} />
      <FontAwesomeIcon icon={faTwitterSquare} style={iconStyles} />
      <FontAwesomeIcon icon={faLinkedin} style={iconStyles} />
      <FontAwesomeIcon icon={faPaperPlane} style={iconStyles} />
    </IconsContainer>
  );
};

export default Footer;
