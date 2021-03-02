import styled from 'styled-components';
import { Title, Subheading } from '../../styles/styles';

const AboutContainer = styled.div``;

const AboutText = styled.p`
  font-size: 22px;
  font-weight: 700;
  width: 80%;
  margin: 0px auto;
  color: ${(props) => props.theme.text};
  text-align: justify;
`;


const About = () => {
  return (
    <AboutContainer>
      <Title>Hey, I'm Anna.</Title>
      <AboutText>
        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
        De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo
        vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
        Hi mindless mortuis soulless creaturas, imo evil stalking monstra
        adventus resi dentevil vultus comedat cerebella viventium. 
      </AboutText>
    </AboutContainer>
  );
};

export default About;
