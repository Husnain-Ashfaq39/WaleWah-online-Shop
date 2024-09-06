import React from 'react';
import ProductBox2 from '@/Components/Common/ProductBox/ProductBox2/ProductBox2';

// Static product data
const staticProducts = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'image1.jpg' },
  { id: 2, name: 'Product 2', price: 49.99, image: 'image2.jpg' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'image3.jpg' },
  { id: 4, name: 'Product 4', price: 99.99, image: 'image4.jpg' },
  // Add more static products here as needed
];

const ProductContent = ({ elem }) => {
  return (
    <div className='top-selling-product'>
      {staticProducts
        .filter((product) => elem.product_ids.includes(product.id))
        .map((product, i) => (
          <div className='top-selling-contain' key={i}>
            <ProductBox2 elem={product} rating={false} customImageClass='top-selling-image' />
          </div>
        ))}
    </div>
  );
};

export default ProductContent;
