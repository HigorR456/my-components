'use client';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import * as Style from './styles';

export default function Header() {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <Style.Header className={menu ? "show" : ""}>
        <div className="logo">
          DOG FINDS
        </div>

        <Style.MenuWrap
          className="menu-wrap"
          onClick={() => (menu ? setMenu(false) : setMenu(true))}
        >
          <AiOutlineMenu className="menu-icon" />
          <AiOutlineClose className="close-icon" />
        </Style.MenuWrap>

        <Style.Nav>
          <ul>
            <li>
              <a href="/" onClick={() => setMenu(false)}>
                Jobs
              </a>
            </li>
            <li>
              <a href="/" onClick={() => setMenu(false)}>
                Login
              </a>
            </li>
            <li>
              <a href="/" onClick={() => setMenu(false)}>
                Signup
              </a>
            </li>
          </ul>
        </Style.Nav>
      </Style.Header>
    </>
  );
}
