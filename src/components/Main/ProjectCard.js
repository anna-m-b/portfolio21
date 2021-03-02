import styled from 'styled-components';

const ProjectCardContainer = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  margin: 25px auto 80px auto;
  width: 85%;
  height: 410px;
  display: grid;
  grid-template: repeat(12, 1fr) / 1.5fr 1fr;
  border: 1px solid #ffb988;
  box-shadow: 
  #ff9a9d -5px 5px, #ffb988 -10px 10px,#fdd578 -15px 15px, #fdefce -20px 20px;
`;

const ProjectNameContainer = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 3;
  // box-shadow: ${(props) => props.theme.lightCoral} 0px 1px 2px;
  border-bottom: 1px solid #ffb988;
`;

const ProjectName = styled.h1`
  color: ${(props) => props.theme.cardTitle};
  margin-bottom: 0;
  padding: 0px 0px 10px 15px;
  width: 98%;
  font-size: 24px;
`;

const ProjectImageContainer = styled.div`
  // border: 1px solid orange;
  grid-row: 3 / 11;
  grid-column: 1 / 2;
  padding: 15px;
  // box-shadow: ${(props) => props.theme.cardShadow} 0px 1px 2px;
  // border: 1px solid ${(props) => props.theme.detail}
`;

const ProjectImage = styled.img``;

const ProjectLinksContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  grid-row: 11 / 13;
  // box-shadow: ${(props) => props.theme.cardShadow} 0px 1px 2px;
  // border: 1px solid ${(props) => props.theme.detail}
`;

const Link = styled.a`
  color: ${(props) => props.theme.cardLink};
  &:hover {
    color: ${(props) => props.theme.cardLinkHover};
  }
  cursor: pointer;
`;

const ProjectTextContainer = styled.div`
  grid-row: 3 / 13;
  grid-column: 2 / 3;
  padding: 15px;
  //box-shadow: ${(props) => props.theme.cardShadow} 0px 1px 2px;
  //border: 1px solid ${(props) => props.theme.detail};
`;
const ProjectText = styled.p`
  color: ${(props) => props.theme.cardText};
`;

const ProjectCard = () => {
  return (
    <ProjectCardContainer>
      <ProjectNameContainer>
        <ProjectName>Name</ProjectName>
      </ProjectNameContainer>

      <ProjectImageContainer>
        <ProjectImage alt="mockups showing project" />
      </ProjectImageContainer>
      <ProjectLinksContainer>
        <Link>Github</Link>
        <Link>Live</Link>
      </ProjectLinksContainer>
      <ProjectTextContainer>
        <ProjectText>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
          De carne lumbering animata corpora quaeritis. Summus brains sit​​,
          morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum
          mauris. Hi mindless mortuis soulless creaturas, imo evil stalking
          monstra adventus resi dentevil vultus comedat cerebella viventium.
        </ProjectText>
      </ProjectTextContainer>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
