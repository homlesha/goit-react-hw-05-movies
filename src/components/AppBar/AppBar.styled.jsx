import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  font-size: 1.5em;
  margin-right: 10px;
  padding: 5px;
  align-items: center;
  text-decoration: none;
  color: black;
  &.active {
    color: #fffacd;
    border-bottom: 2px solid;
  }
`;
export const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
  box-shadow: 10px 5px 5px gray;
  background-color: #ff7f50;
`;
