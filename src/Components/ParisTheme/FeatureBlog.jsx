import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

// Static date formatter
const dateFormate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Static RatioImage component
const RatioImage = ({ src, alt, height, width, className }) => (
  <img src={src} alt={alt} height={height} width={width} className={className} />
);

// Static blog data
const staticBlogs = [
  {
    id: 1,
    slug: 'example-blog-1',
    blog_thumbnail: { original_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6KQQQtnCi09Ja_Ic4sQ-dVkhH7dn3odFBQ&s' },
    created_at: '2024-09-01',
    title: 'First Static Blog',
    is_sticky: 1,
    is_featured: true,
  },
  {
    id: 2,
    slug: 'example-blog-2',
    blog_thumbnail: { original_url: 'https://img.freepik.com/free-photo/online-blog_53876-123696.jpg' },
    created_at: '2024-09-02',
    title: 'Second Static Blog',
    is_sticky: 0,
    is_featured: false,
  },
  {
    id: 3,
    slug: 'example-blog-1',
    blog_thumbnail: { original_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6KQQQtnCi09Ja_Ic4sQ-dVkhH7dn3odFBQ&s' },
    created_at: '2024-09-01',
    title: 'First Static Blog',
    is_sticky: 1,
    is_featured: true,
  },
  {
    id: 4,
    slug: 'example-blog-2',
    blog_thumbnail: { original_url: 'https://img.freepik.com/free-photo/online-blog_53876-123696.jpg' },
    created_at: '2024-09-02',
    title: 'Second Static Blog',
    is_sticky: 0,
    is_featured: false,
  },
  // Add more static blog objects as needed
];

const FeatureBlog = ({ classes = {} }) => {
  return (
    <div className={classes?.sliderClass ? classes?.sliderClass : ''}>
      <Slider {...classes?.sliderOption}>
        {staticBlogs.map((elem) => (
          <div key={elem.id}>
            <div className={`blog-box ${elem?.is_sticky == 1 ? 'sticky-blog-box' : ''} ${classes?.ratioClass ? classes?.ratioClass : ''}`}>
              {elem?.is_featured ? (
                <div className='blog-label-tag'>
                  <span>Featured</span>
                </div>
              ) : null}
              <div className='blog-box-image'>
                <Link href={`/blogs/${elem?.slug}`} className='blog-image'>
                  <RatioImage
                    src={elem?.blog_thumbnail?.original_url}
                    className='bg-img'
                    alt='blog'
                    height={classes?.height}
                    width={classes?.width}
                  />
                </Link>
              </div>

              <Link href={`/blogs/${elem?.slug}`} className='blog-detail'>
                <h6>{dateFormate(elem?.created_at)}</h6>
                <h5>{elem?.title}</h5>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureBlog;
