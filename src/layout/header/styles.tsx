import styled from "styled-components";

export const Header = styled.header`
  font-weight: 500;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 60px;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: white;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.3);
  transition: .3s;
`;

export const MenuWrap = styled.header`
  margin-right: 20px;
  display: none;
  @media all and (max-width: 620px) {
    display: block;
  }

  .menu-icon {
    color: #34495e;
    transition: .3s;
    font-size: 40px;
    cursor: pointer;
    &:hover { color: black;}
  }

  .close-icon {
    color: #34495e;
    transition: .3s;
    font-size: 40px;
    cursor: pointer;
    &:hover { color: black;}

    display: none;
  }
`;

export const Nav = styled.nav`
  
`;
