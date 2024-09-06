import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import CustomHeading from '@/Components/Common/CustomHeading';
import Avatar from '@/Components/Common/Avatar';
import { placeHolderImage } from '../../../../Data/CommonPath';
import NoDataFound from '@/Components/Common/NoDataFound';

// Hardcoded static data
const staticCategoryData = [
  { id: 1, name: 'Category 1', slug: 'category-1', category_icon: '/path/to/icon1.svg' },
  { id: 2, name: 'Category 2', slug: 'category-2', category_icon: '/path/to/icon2.svg' },
  { id: 3, name: 'Category 3', slug: 'category-2', category_icon: '/path/to/icon2.svg' },
  { id: 4, name: 'Category 4', slug: 'category-3', category_icon: '/path/to/icon3.svg' },
  { id: 5, name: 'Category 5', slug: 'category-3', category_icon: '/path/to/icon3.svg' },
  { id: 6, name: 'Category 6', slug: 'category-3', category_icon: '/path/to/icon3.svg' },
  { id: 7, name: 'Category 7', slug: 'category-3', category_icon: '/path/to/icon3.svg' },
  { id: 8, name: 'Category 8', slug: 'category-3', category_icon: '/path/to/icon3.svg' },
  // Add more categories as needed
];

// Hardcoded slider options
const sliderOptions = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const ProductSection2 = () => {
  return (
    <>
      {/* Static Heading */}
      <CustomHeading
        customClass="section-t-space title"
        title="Static Title"
        svgUrl={<img src='/path/to/static-icon.svg' className='icon-width' alt='Static Icon' />}
        subTitle="This is a static subtitle for the product section"
      />

      {/* Static category list */}
      {staticCategoryData.length > 0 ? (
        <div className='category-slider-2 product-wrapper no-arrow'>
          <Slider {...sliderOptions}>
            {staticCategoryData.map((elem) => (
              <div key={elem.id}>
                <Link href={`/collections?category=${elem.slug}`} className='category-box category-dark'>
                  <div>
                    <Avatar data={elem.category_icon} placeHolder={placeHolderImage} name={elem.name} />
                    <h5>{elem.name}</h5>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <NoDataFound
          data={{
            customClass: 'bg-light no-data-added',
            title: 'No Category Found',
          }}
        />
      )}
    </>
  );
};

export default ProductSection2;
