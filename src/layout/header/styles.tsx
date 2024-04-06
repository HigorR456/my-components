import styled from "styled-components";

export const Header = styled.header<{show: boolean}>`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 60px;
  top: 0;
  padding: 1rem;
  
  background: white;
  font-weight: 500;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.3);
  transition: .3s;

  ${(props) => props.show && `
    .menuwrap {
      display: block;

      .menu-icon {
        display: none;
      }

      .close-icon {
        display: block;
      }
    }

    nav {
      padding: 1rem;
      display: block;
      height: 100vh;
      width: 100%;
      background: white;
      transition: .3s;

      position: absolute;
      border-top: 1px solid #606060;
      top: 60px;

      animation: menu-transition .3s forwards;

      @keyframes menu-transition {
        0% {left: -100%;}
        100% {left: 0%;}
      }

      ul {
        flex-direction: column;
        margin-top: 60px;
        gap: 30px;

        li { width: 80px; }
      }
    }
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  ul {
    display: flex;
    gap: 12px;
    li {
      list-style-type: none;
      padding: 8px; 
      
      &:nth-child(3) {
        padding: 0;
        border-radius: 3px;
        background: #606060;
        cursor: pointer;
        &:hover, &:focus {background: #202020}
        &:active {background: black;}
        a { 
          line-height: 40px;
          padding: 8px;
          color: white;
          &:hover {color: white;}
        }
      }

      
      a {
        text-decoration: none;
        color: #606060;
        line-height: 100%;
        transition: .3s;
        &:hover { color: #202020; }
        &:active { color: black; }
      }
    }
  }

  @media all and (max-width: 767px) {
    display: none;
  }
`;

export const MenuWrap = styled.div`
  display: none;

  @media all and (max-width: 767px) {
    display: block;
  }

  .menu-icon {
    color: #606060;
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

export const LogoWrap = styled.div`
  color: #606060;
  cursor: pointer;

  &:hover { color: #202020; }
  &:active { color: black; }
`;
