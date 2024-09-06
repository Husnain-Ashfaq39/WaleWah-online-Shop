import { useContext } from 'react';
import { Col, Row } from 'reactstrap';
import HeaderLogo from './Common/HeaderLogo';
import ResponsiveSearch from './Common/ResponsiveSearch';
import { useHeaderScroll } from '@/Utils/HeaderScroll';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import StandardRightSide from './RightSideHeader/StandardRightSide';
import StandardSearchBar from './RightSideHeader/StandardSearchBar';
import HeaderTopBar from './Common/HeaderTopBar';
import StandardCategory from './StandardHeader/StandardCategory';

const StandardHeader = () => {

  const UpScroll = useHeaderScroll(false);
  return (
    <header className={`header-2 mt-[-44px]  ${ UpScroll ? 'active' : ''}`}>
     
      <div className='top-nav top-header sticky-header sticky-header-3 bg-[#25901b]'>
        <div className='container-fluid-lg bg-[#25901b]'>
          <Row>
            <Col xs={12}>
              <div className='navbar-top'>
                <HeaderLogo />
                <ResponsiveSearch />
                <StandardSearchBar />
                <StandardRightSide />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className='container-fluid-lg'>
        <Row>
          <Col xs={12}>
            <StandardCategory />
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default StandardHeader;
