'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaDog, FaRegCopyright } from 'react-icons/fa';
import * as Style from './styles';

export default function Footer() {

  return (
    <Style.Footer>
      <Style.RowWrap>
        <Style.FirstRow>
            <div className='logo-wrap'>
              LOGO HERE
            </div>
            <div className='links'>
              <Link href='/' className='footer-link'>Link1</Link>
              <Link href='/' className='footer-link'>Link2</Link>
              <Link href='/' className='footer-link'>Link3</Link>
            </div>
        </Style.FirstRow>
          
        <Style.SecondRow className='second-row'>
            <div className='legal-text'>
              <FaRegCopyright className='copyright' />
              2024. All rights Reserved. Developed by Higor.
            </div>

            <div className='legal-links'>
              <a>License</a>
              <a>Terms</a>
              <a>Privacy</a>
            </div>
        </Style.SecondRow>
      </Style.RowWrap>
  </Style.Footer>
  );
}
