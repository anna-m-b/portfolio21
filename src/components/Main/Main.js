import styled from 'styled-components';
import About from './About';
import Projects from './Projects';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const MainContainer = styled.div`
  margin: 20px 0;
  width: 95%;
  //border: 1px solid blue;
`;

const Main = () => {
  return (
    <Switch>
      <MainContainer>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </MainContainer>
    </Switch>
  );
};

export default Main;
