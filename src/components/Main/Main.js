import styled from 'styled-components';
import About from './About';
import Projects from './Projects';

const MainContainer = styled.div`
  margin: 20px 0;
  width: 95%;
  //border: 1px solid blue;
`;

const Main = () => {
  return (
    <MainContainer>
      <About />
      <Projects />
    </MainContainer>
  );
};

export default Main;
