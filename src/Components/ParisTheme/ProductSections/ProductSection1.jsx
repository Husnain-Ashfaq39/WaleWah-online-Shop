import { useMemo } from 'react';
import { Col, Row } from 'reactstrap';
import Slider from 'react-slick';
import CustomHeading from '@/Components/Common/CustomHeading';
import { productSliderOption } from '../../../../Data/SliderSettingsData';
import ProductBox1 from '@/Components/Common/ProductBox/ProductBox1/ProductBox1';
import NoDataFound from '@/Components/Common/NoDataFound';

// Static Product Data
const staticProductData = [
  {
    id: 1,
    product_thumbnail: 'https://via.placeholder.com/150',
    name: 'Sample Product 1',
    short_description: 'This is a short description for product 1.',
    slug: 'sample-product-1',
    unit: '1 pc',
    sale_price: 100,
    price: 120,
    rating_count: 4,
    stock_status: 'in_stock',
  },
  {
    id: 2,
    product_thumbnail: 'https://via.placeholder.com/150',
    name: 'Sample Product 2',
    short_description: 'This is a short description for product 2.',
    slug: 'sample-product-2',
    unit: '1 pc',
    sale_price: 90,
    price: 110,
    rating_count: 5,
    stock_status: 'out_of_stock',
  },
  {
    id: 3,
    product_thumbnail: 'https://via.placeholder.com/150',
    name: 'Sample Product 1',
    short_description: 'This is a short description for product 1.',
    slug: 'sample-product-1',
    unit: '1 pc',
    sale_price: 100,
    price: 120,
    rating_count: 4,
    stock_status: 'in_stock',
  },
  {
    id: 4,
    product_thumbnail: 'https://via.placeholder.com/150',
    name: 'Sample Product 2',
    short_description: 'This is a short description for product 2.',
    slug: 'sample-product-2',
    unit: '1 pc',
    sale_price: 90,
    price: 110,
    rating_count: 5,
    stock_status: 'out_of_stock',
  },
  {
    id: 5,
    product_thumbnail: 'https://via.placeholder.com/150',
    name: 'Sample Product 1',
    short_description: 'This is a short description for product 1.',
    slug: 'sample-product-1',
    unit: '1 pc',
    sale_price: 100,
    price: 120,
    rating_count: 4,
    stock_status: 'in_stock',
  },
  {
    id: 6,
    product_thumbnail: 'https://via.placeholder.com/150',
    name: 'Sample Product 2',
    short_description: 'This is a short description for product 2.',
    slug: 'sample-product-2',
    unit: '1 pc',
    sale_price: 90,
    price: 110,
    rating_count: 5,
    stock_status: 'out_of_stock',
  },
  // Add more static products as needed
];

const ProductSection1 = ({ dataAPI, svgUrl, noCustomClass = false, customClass, classObj, customSliderOption = productSliderOption, isHeadingVisible = true }) => {
  const filterProduct = useMemo(() => {
    return staticProductData; // Use static data here
  }, []);

  return (
    <>
      {isHeadingVisible ? (
        <CustomHeading title={dataAPI?.title} svgUrl={svgUrl} subTitle={dataAPI?.description} customClass={customClass ? customClass : noCustomClass ? '' : 'section-t-space title'} />
      ) : null}
      {filterProduct?.length > 0 ? (
        <div className={`${classObj?.productStyle} overflow-hidden`}>
          <div className='no-arrow'>
            <Slider {...customSliderOption}>
              {filterProduct?.map((elem) => (
                <div key={elem?.id}>
                  <Row className='m-0'>
                    <Col xs={12} className='px-0'>
                      <ProductBox1 imgUrl={elem?.product_thumbnail} productDetail={{ ...elem }} classObj={classObj} />
                    </Col>
                  </Row>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        <NoDataFound
          data={{
            customClass: 'bg-light no-data-added',
            title: 'No Product Found',
          }}
        />
      )}
    </>
  );
};

export default ProductSection1;
