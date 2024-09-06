import React from 'react';
import Link from 'next/link';
import Avatar from '../../Avatar';
import ProductBox1Rating from '../ProductBox1/ProductBox1Rating';
import { placeHolderImage } from '../../../../../Data/CommonPath';

// Static currency conversion function
const convertCurrency = (price) => {
  return `$${price?.toFixed(2)}`; // Example for USD currency formatting
};

// Static language setting
const i18Lang = 'en'; // Default language

const ProductBox2 = ({ elem, rating = true, customImageClass }) => {
  return (
    <div className='offer-product'>
      <Link href={`/${i18Lang}/product/${elem.slug}`} className='offer-image'>
        <Avatar
          data={elem?.product_thumbnail}
          placeHolder={placeHolderImage}
          name={elem?.name}
          customImageClass={customImageClass}
          height={500}
          width={500}
        />
      </Link>

      <div className='offer-detail'>
        <div>
          <Link href={`/${i18Lang}/product/${elem.slug}`} className='text-title'>
            <h6 className='name'>{elem?.name}</h6>
          </Link>
          {rating ? (
            <ProductBox1Rating totalRating={elem?.rating_count} />
          ) : (
            <span>{elem?.unit}</span>
          )}
          <h5 className='price theme-color'>
            {convertCurrency(elem?.sale_price)}
            <del className='text-content'>{convertCurrency(elem?.price)}</del>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProductBox2;
