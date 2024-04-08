'use client';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import * as Style from './styles';

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <Style.Header show={showMenu}>
      <Style.Wrapper>
      <Style.LogoWrap href="/">
        LOGO HERE
      </Style.LogoWrap>

      <Style.MenuWrap
        onClick={() => (showMenu ? setShowMenu(false) : setShowMenu(true))}
        className='menuwrap'
      >
        <AiOutlineMenu className="menu-icon" />
        <AiOutlineClose className="close-icon" />
      </Style.MenuWrap>

      <Style.Nav>
        <ul>
          <li>
            <a href="/" onClick={() => setShowMenu(false)}>
              Link1
            </a>
          </li>
          <li>
            <a href="/" onClick={() => setShowMenu(false)}>
              Link2
            </a>
          </li>
          <li>
            <a href="/" onClick={() => setShowMenu(false)}>
              Link3
            </a>
          </li>
        </ul>
      </Style.Nav>
      </Style.Wrapper>
    </Style.Header>
  );
}
