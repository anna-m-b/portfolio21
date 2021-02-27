import styled from 'styled-components';
import { Title, Subheading } from '../../styles/styles';

const AboutContainer = styled.div``;

const AboutText = styled.p`
  width: 80%;
  font-size: 14px;
  line-height: 2rem;
  letter-spacing: 1px;
  margin: 0 auto;
  text-align: justify;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>Hey, I'm Anna.</Title>

      <Subheading>
        I'm a new software engineer looking for my first role blah blah
      </Subheading>
      <AboutText>
        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
        De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo
        vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
        Hi mindless mortuis soulless creaturas, imo evil stalking monstra
        adventus resi dentevil vultus comedat cerebella viventium. Qui animated
        corpse, cricket bat max brucks terribilem incessu zomby. The voodoo
        sacerdos flesh eater, suscitat mortuos comedere carnem virus. Summus
        brains sit​​, morbo vel maleficia?
      </AboutText>
    </AboutContainer>
  );
};

export default About;
