import { NavItem, Nav } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/movies">Movies</NavItem>
    </Nav>
  );
};
