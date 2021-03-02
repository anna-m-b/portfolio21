import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80%;
  align-self: center;
  justify-self: start;
  padding-bottom: 10px;
  //border-bottom: 1px solid ${(props) => props.theme.text};
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.title};
  background: ${(props) => props.theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  margin: 10px;
  &:hover {
    color: ${(props) => props.theme.navLinkHover};
    background: none;
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${(props) => props.theme.navLinkHover};
  }
`;

const Nav = () => {
  return (
   
      <NavContainer>
        <NavLink to="/">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavContainer>
  )
};

export default Nav;
