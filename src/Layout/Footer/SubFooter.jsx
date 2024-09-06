import React, { useContext } from 'react';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import FooterSocial from './FooterSocial';


const SubFooter = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  return (
    <div className='sub-footer section-small-space'>
      {themeOption?.footer?.footer_copyright && (
        <div className='reserve'>
          <h6 className='text-content'>©2024 WaleWah All Right Reserved</h6>
        </div>
      )}
      <FooterSocial />
    </div>
  );
};

export default SubFooter;
