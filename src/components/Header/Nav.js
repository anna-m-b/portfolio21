import styled from 'styled-components';

const NavContainer = styled.span`
 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80%;
  align-self: end;
  justify-self: start;
  margin-bottom: 30px;
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.navLink};
  &:hover {
    color: ${(props) => props.theme.navLinkHover};
  };
  font-size: 1.3rem;
  text-decoration: none;
  cursor: pointer;
  margin: 10px;

`;

const Nav = () => {
  return (
    <NavContainer>
      <NavLink>About</NavLink>
      <NavLink>Projects</NavLink>
      <NavLink>Contact</NavLink>
    </NavContainer>
  );
};

export default Nav;
