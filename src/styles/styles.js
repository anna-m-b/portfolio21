import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  letter-spacing: 2px;
  color: ${(props) => props.theme.title};
`;

export const Subheading = styled.h2`
  font-size: 24px;
  width: 80%;
  margin: 25px auto;
  color: ${(props) => props.theme.subheading};
`;
