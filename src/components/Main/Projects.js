import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { Title } from '../../styles/styles';

const ProjectsContainer = styled.div`
  //border: 1px solid green;
  margin: 0 auto;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </ProjectsContainer>
  );
};

export default Projects;
