import styled, { ThemeProvider } from 'styled-components';
import Header from './Header/Header';
import Main from './Main/Main.js';
import Footer from './Footer/Footer';
import { blueOrange } from '../styles/themes';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
`;

const ContentContainer = styled.div`
  margin: 0px auto;
  max-width: 878px;
  display: grid;
  min-height: 100vh;
  grid-template-rows: 130px auto 1fr;

`;

function App() {
  return (
    <ThemeProvider theme={blueOrange}>
      <Router>
        <AppContainer>
          <ContentContainer>
            <Header />
            <Main />
            <Footer />
          </ContentContainer>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
