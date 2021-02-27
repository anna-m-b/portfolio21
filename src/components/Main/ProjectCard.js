import styled from 'styled-components';

const ProjectCardContainer = styled.div`
  // border: 1px solid pink;
  margin: 30px auto;
  width: 95%;
  height: 500px;
  display: grid;
  grid-template: repeat(12, 1fr) / 1.5fr 1fr;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const ProjectNameContainer = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 3;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const ProjectName = styled.h1`
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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const ProjectImage = styled.img``;

const ProjectLinksContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  grid-row: 11 / 13;
  // border: 1px solid blue;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Link = styled.a``;

const ProjectTextContainer = styled.div`
  grid-row: 3 / 13;
  grid-column: 2 / 3;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  //border: 1px solid red;
`;
const ProjectText = styled.p``;

const ProjectCard = () => {
  return (
    <ProjectCardContainer>
      <ProjectNameContainer>
        <ProjectName>Name</ProjectName>
      </ProjectNameContainer>

      <ProjectImageContainer>
        <ProjectImage src="https://via.placeholder.com/450x300" />
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
