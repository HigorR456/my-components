import styled from "styled-components";

export const Footer = styled.footer`
  font-size: 14px;
  margin-top: auto;
  margin-bottom: 0;

  background: #606060;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 660px) { padding-inline: 5%;}

  min-height: 200px;
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 67%;
  @media all and (max-width: 960px) { width: 80%; }
  @media all and (max-width: 660px) { width: 100%; }
  max-width: 1280px;
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  .logo-wrap {
    margin-bottom: 25px;
    //.logo { font-size: 75px; }
  } 
  .links {
    margin-bottom: 25px;

    @media all and (max-width: 620px) {
      display: flex;
      flex-direction: column;
    }

    .footer-link {
      color: rgba(255,255,255,0.6);
      &:hover { color: white; }
      text-decoration: none;
      padding-inline: 10px;
    }
  }
`;

export const SecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  
  .legal-text {
    display: grid;
    grid-template-columns: 20px auto;
    align-items: center;
    line-height: 20px;
    color: white;

    .copyright {
      padding-right: 5px;
      margin-top: 2px;
      margin-bottom: auto;
    }
  }
  
  .legal-links {
    a {
      color: rgba(255,255,255,0.6);
      &:hover { color: white; }
      cursor: pointer;
      padding-inline: 10px;
    }

    @media all and (max-width: 620px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
