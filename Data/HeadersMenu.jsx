export const headerMenu = [
  {
    id: 1,
    title: 'Home',
    
    path: '/theme/osaka',
    customChildren: false,
    
  },
  {
    id: 2,
    title: 'Collection',
    slider: 'product',
    path: '/collections',
    customChildren: false,
    // children: [
    //   {
    //     column: [
    //       {
    //         title: 'CollectionLayouts',
    //         type: 'sub',
    //       },
    //       {
    //         title: 'CollectionLeftSidebar',
    //         path: 'collections',
    //         params: { layout: 'collection_left_sidebar' },
    //         label: 'Hot',
    //         labelClass: 'warning-label',
    //       },
    //       {
    //         title: 'CollectionRightSidebar',
    //         path: 'collections',
    //         params: { layout: 'collection_right_sidebar' },
    //       },
    //       {
    //         title: 'CollectionNoSidebar',
    //         path: 'collections',
    //         params: { layout: 'collection_no_sidebar' },
    //       },
    //       {
    //         title: 'Collection3Grid',
    //         path: 'collections',
    //         params: { layout: 'collection_3_grid' },
    //       },
    //       {
    //         title: 'Collection4Grid',
    //         path: 'collections',
    //         params: { layout: 'collection_4_grid' },
    //         label: 'New',
    //       },
    //       {
    //         title: 'Collection5Grid',
    //         path: 'collections',
    //         params: { layout: 'collection_5_grid' },
    //       },
    //       {
    //         title: 'CollectionListView',
    //         path: 'collections',
    //         params: { layout: 'collection_list_view' },
    //       },
    //     ],
    //   },
    //   {
    //     column: [
    //       {
    //         title: 'CollectionLayouts',
    //         type: 'sub',
    //       },
    //       {
    //         title: 'CategorySlider',
    //         path: 'collections',
    //         params: { layout: 'collection_category_slider' },
    //       },
    //       {
    //         title: 'CategorySidebar',
    //         path: 'collections',
    //         label: 'New',
    //         params: { layout: 'collection_category_sidebar' },
    //       },
    //       {
    //         title: 'CategoryBanner',
    //         path: 'collections',
    //         params: { layout: 'collection_banner' },
    //       },
    //       {
    //         title: 'OffCanvasFilter',
    //         path: 'collections',
    //         params: { layout: 'collection_offcanvas_filter' },
    //       },
    //     ],
    //   },
    // ],
  },
  // {
  //   id: 3,
  //   title: 'Product',
  //   styleType: 'link',
  //   slider: 'banner',
  //   customChildren: true,
  //   children: [
  //     {
  //       column: [
  //         {
  //           title: 'ProductPages',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'ProductThumbnail',
  //           path: 'product/deliciously-sweet-watermelon',
  //           params: { layout: 'product_thumbnail' },
  //         },
  //         {
  //           title: 'ProductImages',
  //           path: 'product/deliciously-sweet-watermelon',
  //           params: { layout: 'product_images' },
  //         },
  //         {
  //           title: 'ProductSlider',
  //           path: 'product/deliciously-sweet-watermelon',
  //           params: { layout: 'product_slider' },
  //         },
  //         {
  //           title: 'ProductSticky',
  //           path: 'product/deliciously-sweet-watermelon',
  //           params: { layout: 'product_sticky' },
  //           labelClass: 'warning-label',
  //         },
  //         {
  //           title: 'ProductAccordion',
  //           path: 'product/deliciously-sweet-watermelon',
  //           params: { layout: 'product_accordion' },
  //         },
  //         {
  //           title: 'ProductTab',
  //           path: 'product/deliciously-sweet-watermelon',
  //           type: 'link',
  //         },
  //         {
  //           title: 'ProductFeatures',
  //           colHeadClass: 'custom-mt',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'BundleCrossSale',
  //           path: 'product/high-quality-bookshelves',
  //         },
  //         {
  //           title: 'HotStockProgress',
  //           path: 'product/mini-bodycon-dress',
  //           label: 'New',
  //         },
  //         {
  //           title: 'SoldOut',
  //           path: 'product/solid-collared-tshirts',
  //         },
  //         {
  //           title: 'SaleCountdown',
  //           path: 'product/men-gym-co-ord-set',
  //         },
  //         {
  //           title: 'ProductZoom',
  //           path: 'product/deliciously-sweet-watermelon',
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: 'ProductVariantsStyle',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'VariantRectangle',
  //           path: 'product/organic-oranges',
  //           type: 'link',
  //         },
  //         {
  //           title: 'VariantCircle',
  //           type: 'link',
  //           path: 'product/solid-hooded-sweatshirt',
  //           label: 'New',
  //         },
  //         {
  //           title: 'VariantImagesWatch',
  //           path: 'product/relaxed-fit-hoodie',
  //           type: 'link',
  //         },
  //         {
  //           title: 'VariantColor',
  //           path: 'product/premium-blazer',
  //           type: 'link',
  //         },
  //         {
  //           title: 'VariantRadioButton',
  //           path: 'product/women-flared-jeans',
  //           type: 'link',
  //         },
  //         {
  //           title: 'VariantDropdown',
  //           path: 'product/fresh-and-pure-oil',
  //           type: 'link',
  //         },
  //         {
  //           title: 'ProductFeatures',
  //           colHeadClass: 'custom-mt',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'StickyCheckout',
  //           path: 'product/elegant-and-durable-bed',
  //           type: 'link',
  //         },
  //         {
  //           title: 'DynamicCheckout',
  //           type: 'link',
  //           path: 'product/solid-polo-tshirt',
  //           labelClass: 'warning-label',
  //         },
  //         {
  //           title: 'SecureCheckout',
  //           path: 'product/premium-dumbbells',
  //           type: 'link',
  //         },
  //         {
  //           title: 'ActiveProductView',
  //           path: 'product/organic-long-grain-rice',
  //           type: 'link',
  //         },
  //         {
  //           title: 'ActiveLastOrders',
  //           path: 'product/delicious-cupcakes',
  //           type: 'link',
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: 'ProductFeatures',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'ProductSimple',
  //           path: 'product/deliciously-sweet-strawberry',
  //           type: 'link',
  //         },
  //         {
  //           title: 'ProductClassified',
  //           path: 'product/deliciously-sweet-watermelon',
  //           type: 'link',
  //           params: { layout: 'product_thumbnail' },
  //           label: 'New',
  //         },
  //         {
  //           title: 'SizeChart',
  //           type: 'link',
  //           path: 'product/solid-hooded-sweatshirt',
  //           label: 'New',
  //         },
  //         {
  //           title: 'DeliveryAndReturn',
  //           path: 'product/relaxed-fit-hoodie',
  //           type: 'link',
  //         },
  //         {
  //           title: 'PaymentTrustBadges',
  //           path: 'product/delicious-exquisite-cake',
  //           type: 'link',
  //         },
  //         {
  //           title: 'AskAnExpert',
  //           path: 'product/premium-blazer',
  //           type: 'link',
  //         },
  //         {
  //           title: 'ProductFeatures',
  //           colHeadClass: 'custom-mt',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'ProductTags',
  //           path: 'product/solid-hooded-sweatshirt',
  //           type: 'link',
  //         },
  //         {
  //           title: 'ProductInformation',
  //           path: 'product/solid-cotton-tshirts',
  //           type: 'link',
  //         },
  //         {
  //           title: 'SocialShare',
  //           type: 'link',
  //           path: 'product/pointed-toe-kitten-heeled-sandals',
  //           label: 'Hot',
  //           labelClass: 'warning-label',
  //         },
  //         {
  //           title: 'RelatedProducts',
  //           type: 'link',
  //           path: 'product/delicious-biscuits',
  //           label: 'Hot',
  //           labelClass: 'warning-label',
  //         },
  //         {
  //           title: 'WishlistAndCompare',
  //           path: 'product/crispy-potato-chips',
  //           type: 'link',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: 'MegaMenu',
  //   badge: 'New',
  //   styleType: 'link',
  //   customChildren: true,
  //   slider: 'banner_landscape',
  //   children: [
  //     {
  //       column: [
  //         {
  //           title: 'PopularCategories',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'VegetablesFruits',
  //           type: 'link',
  //           path: 'collections',
  //           params: { category: 'vegetables-fruits' },
  //         },
  //         {
  //           title: 'BiscuitsSnacks',
  //           type: 'link',
  //           label: 'new',
  //           path: 'collections',
  //           params: { category: 'biscuits-snacks' },
  //         },
  //         {
  //           title: 'DailyBreakfast',
  //           type: 'link',
  //           label: 'new',
  //           path: 'collections',
  //           params: { category: 'daily-breakfast' },
  //         },
  //         {
  //           title: 'TrendyFashion',
  //           type: 'link',
  //           path: 'collections',
  //           params: { category: 'fashion' },
  //         },
  //         {
  //           title: 'FurnitureDecore',
  //           type: 'link',
  //           path: 'collections',
  //           params: { category: 'furniture' },
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: 'PopularTags',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'BeautyProducts',
  //           type: 'link',
  //           path: 'collections',
  //           params: { tag: 'beauty' },
  //         },
  //         {
  //           title: 'ElectronicsAccessories',
  //           type: 'link',
  //           label: 'hot',
  //           labelClass: 'warning-label',
  //           path: 'collections',
  //           params: { tag: 'electronics' },
  //         },
  //         {
  //           title: 'PetShop',
  //           type: 'link',
  //           path: 'collections',
  //           params: { tag: 'pet-shop' },
  //         },
  //         {
  //           title: 'MilkDairyProducts',
  //           type: 'link',
  //           path: 'collections',
  //           params: { tag: 'milk-dairy-products' },
  //         },
  //         {
  //           title: 'Sports',
  //           type: 'link',
  //           path: 'collections',
  //           params: { tag: 'sports' },
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: 'EmailTemplate',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'WelcomeTemplate',
  //           type: 'external_link',
  //           path: 'https://themes.pixelstrap.com/fastkart/email-templete/welcome.html',
  //         },
  //         {
  //           title: 'abondonment',
  //           type: 'external_link',
  //           label: 'hot',
  //           labelClass: 'warning-label',
  //           path: 'https://themes.pixelstrap.com/fastkart/email-templete/abandonment-email.html',
  //         },
  //         {
  //           title: 'OfferTemplate',
  //           type: 'external_link',
  //           path: 'https://themes.pixelstrap.com/fastkart/email-templete/offer-template.html',
  //         },
  //         {
  //           title: 'OrderSuccess',
  //           type: 'external_link',
  //           label: 'new',
  //           path: 'https://themes.pixelstrap.com/fastkart/email-templete/order-success.html',
  //         },
  //         {
  //           title: 'ResetPassword',
  //           type: 'external_link',
  //           path: 'https://themes.pixelstrap.com/fastkart/email-templete/reset-password.html',
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: 'InvoiceTemplate',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'InvoiceTemplate1',
  //           type: 'external_link',
  //           path: 'https://themes.pixelstrap.com/fastkart/invoice/invoice-1.html',
  //         },
  //         {
  //           title: 'InvoiceTemplate2',
  //           type: 'external_link',
  //           label: 'hot',
  //           path: 'https://themes.pixelstrap.com/fastkart/invoice/invoice-2.html',
  //         },
  //         {
  //           title: 'InvoiceTemplate3',
  //           type: 'external_link',
  //           path: 'https://themes.pixelstrap.com/fastkart/invoice/invoice-3.html',
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: 5,
    title: 'Blog',
    customChildren: false,
    type: 'link',
            path: '/blogs',
            params: { style: 'grid_view', sidebar: 'no_sidebar' },
    // children: [
    //   {
    //     column: [
    //       {
    //         title: 'BlogPages',
    //         type: 'sub',
    //       },
    //       {
    //         title: 'GridNoSidebar',
    //         type: 'link',
    //         path: 'blogs',
    //         params: { style: 'grid_view', sidebar: 'no_sidebar' },
    //       },
    //     ],
    //   },
    // ],
  },
  {
    id: 6,
    title: 'Pages',
    customChildren: false,
    children: [
      
      {
        title: 'account',
        type: 'sub',
        children: [
          {
            title: 'MyDashboard',
            path: '/account/dashboard',
            type: 'link',
          },
          {
            title: 'MyNotifications',
            path: '/account/notification',
            type: 'link',
          },
          {
            title: 'MyAddresses',
            path: '/account/addresses',
            type: 'link',
          },
          {
            title: 'MyOrders',
            path: '/account/order',
            type: 'link',
          },
          
          {
            title: 'PayoutDetails',
            path: '/account/bank-details',
            type: 'link',
          },
        ],
      },
      {
        title: 'AboutUs',
        type: 'link',
        path: '/about-us',
      },
      {
        title: 'BrowseFaqs',
        type: 'link',
        path: '/faq',
        label: 'hot',
        labelClass: 'warning-label',
      },
      // {
      //   title: 'Cart',
      //   type: 'link',
      //   path: '/cart',
      // },
      // {
      //   title: 'Checkout',
      //   type: 'link',
      //   path: '/checkout',
      // },
      // {
      //   title: 'Compare',
      //   type: 'link',
      //   path: '/compare',
      // },
      {
        title: 'ContactUs',
        path: '/contact-us',
        type: 'link',
      },
      // {
      //   title: 'Maintenance',
      //   type: 'link',
      //   path: '/maintenance',
      // },
      // {
      //   title: 'Offers',
      //   type: 'link',
      //   path: '/offers',
      //   label: 'new',
      // },
      // {
      //   title: 'Search',
      //   type: 'link',
      //   path: '/search',
      //   label: 'hot',
      //   labelClass: 'warning-label',
      // },
      // {
      //   title: 'Wishlist',
      //   type: 'link',
      //   path: '/wishlist',
      // },
      // {
      //   title: '404',
      //   type: 'link',
      //   path: '/404',
      // },
    ],
  },
  
];
