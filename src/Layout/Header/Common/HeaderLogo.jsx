'use client';
import React, { useContext } from 'react';
import Btn from '@/Elements/Buttons/Btn';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import Link from 'next/link';
import { RiMenuLine } from 'react-icons/ri';
import Image from 'next/image';
import Logo from '../../../../public/assets/images/logo/1.png';

const HeaderLogo = () => {
  const { mobileSideBar, setMobileSideBar } = useContext(ThemeOptionContext);

  return (
    <>
      <Btn className='navbar-toggler d-xl-none d-inline navbar-menu-button me-2' type='button'>
        <span className='navbar-toggler-icon' onClick={() => setMobileSideBar(!mobileSideBar)}>
          <RiMenuLine />
        </span>
      </Btn>
      <Link href='/' className='nav-logo'>
        <Image src={Logo} className="img-fluid" alt='Logo' height={10} width={100} />
      </Link>
    </>
  );
};

export default HeaderLogo;
