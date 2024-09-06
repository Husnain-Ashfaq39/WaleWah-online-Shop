import React, { useMemo } from 'react';
import { Col, Row } from 'reactstrap';
import ProductContent from './ProductContent';
import WrapperComponent from '../../Common/WrapperComponent';
import NoDataFound from '@/Components/Common/NoDataFound';

// Static product data
const staticProducts = [
  {
    title: 'Top Selling',
    status: true,
    product_ids: [1, 2, 3, 4],
    // Add more relevant data for the product if necessary
  },
  {
    title: 'Trending',
    status: true,
    product_ids: [1, 2, 3],
    // Add more relevant data for the product if necessary
  },
  {
    title: 'Latest',
    status: true,
    product_ids: [1, 2],
    // Add more relevant data for the product if necessary
  },
  {
    title: 'Top Rated',
    status: true,
    product_ids: [1, 2,3],
    // Add more relevant data for the product if necessary
  },
  // Add more static products here
];

const TopSelling = ({ classes, customRow }) => {
  const filterTopProducts = useMemo(() => {
    return staticProducts.filter((el) => (el?.title && el.status && el.product_ids.length >= 3 ? true : false));
  }, []);

  return (
    <>
      {customRow ? (
        filterTopProducts?.length > 0 ? (
          <Row className='g-sm-4 g-3'>
            {filterTopProducts?.map((elem, i) => (
              <Col xl={3} key={i} {...classes?.colClass}>
                <div className={`top-selling-box ${classes?.boxClass ?? ''}`}>
                  <div className='top-selling-title'>
                    <h3>{elem?.title}</h3>
                  </div>
                  <ProductContent elem={elem} />
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <NoDataFound
            data={{
              customClass: 'bg-light no-data-added',
              title: 'No Product Found',
            }}
          />
        )
      ) : (
        <WrapperComponent classes={{ sectionClass: 'top-selling-section', fluidClass: classes?.fluidClass }} noRowCol={true}>
          <div className={`slider-4-1 ${classes?.customClass ? classes?.customClass : ''}`}>
            <Row className='g-sm-4 g-3'>
              {filterTopProducts.map((elem, i) => (
                <Col xl={3} key={i} {...classes?.colClass}>
                  <div className={`top-selling-box ${classes?.boxClass ?? ''}`}>
                    <div className='top-selling-title'>
                      <h3>{elem?.title}</h3>
                    </div>
                    <ProductContent elem={elem} />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </WrapperComponent>
      )}
    </>
  );
};

export default TopSelling;
