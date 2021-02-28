import styled, { ThemeProvider } from 'styled-components';
import Header from './Header/Header';
import Main from './Main/Main.js';
import Footer from './Footer/Footer';
import { bert } from '../styles/themes';

const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 928px;
  margin: 0px auto;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
`;
console.log({ bert });
function App() {
  return (
    <ThemeProvider theme={bert}>
      <AppContainer>
        <Header />
        <Main />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
