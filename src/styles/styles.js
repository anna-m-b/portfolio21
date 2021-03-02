import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  margin: 20px auto;
  width: 85%;
  color: ${(props) => props.theme.title};
  background: ${(props) => props.theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


