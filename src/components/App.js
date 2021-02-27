import styled from 'styled-components';
import Header from './Header/Header';
import Main from './Main/Main.js';
import Footer from './Footer/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 928px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: 1px solid purple;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  );
}

export default App;
