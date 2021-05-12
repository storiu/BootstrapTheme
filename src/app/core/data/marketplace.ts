import {
  AccessoryPackageType,
  BasePackageType,
  BorderType,
  MarketplaceOption,
  MarketplaceOptionActionType,
  PriceClass,
  ProductCategory,
  SizeClass,
  TextureType
} from '../models/marketplace';

export const marketplaceOptions: Array<MarketplaceOption> = [
  {
    iconUrl: 'assets/images/icons/estimate.svg',
    title: 'Do It Yourself',
    tipTitle: 'Quick order',
    tipContent: `<p class="text-warning font-12 m-0">Know exactly what you are looking for?</p>
                 <p class="color-gray-chateau font-12 m-0">Utilize our search tools and quickly put together your order and get the best price/availability Guaranteed.</p>`,
    description: 'We will find the best price for you.',
    action: MarketplaceOptionActionType.QuickOrder,
    buttonText: 'Get Started',
  }, {
    iconUrl: 'assets/images/icons/big-platform.svg',
    title: 'DIY With Our Help',
    tipTitle: 'Guided experience',
    tipContent: `<p class="text-warning font-12 m-0">Need some guidance with your DIY project?</p>
                 <p class="color-gray-chateau font-12 m-0">Easily find the best materials and let us complimentary calculate what you need for your project.</p>`,
    description: 'We will help you plan your DIY project.',
    action: MarketplaceOptionActionType.GuidedOrder,
    buttonText: 'Get Started',
  }, {
    iconUrl: 'assets/images/icons/big-crew.svg',
    title: 'Want a Professional',
    tipTitle: 'to install your project?',
    description: 'We are experts in the field of hardscape projects.',
    action: MarketplaceOptionActionType.RequestEstimate,
    buttonText: 'Request Estimate',
  }
];

export const guidedOrderHeaders = {
  selectProject:
    `<h2 class="color-downriver mb-10">Choose Project Type(s)</h2>
     <span class="text-primary font-weight-medium mb-20">Step 1 of 4</span>
     <p class="color-cape-cod mb-30">Let’s start by selecting the projects you want to create. Please feel free to choose several from the list.</p>`,
  selectPricePoint:
    `<h2 class="color-downriver mb-10">Choose Price Point</h2>
     <span class="text-primary font-weight-medium mb-20">Step 1 of 4</span>
     <p class="color-cape-cod mb-30">With Project Type selected, now it is time to choose a price point for pavers or walls.</p>`,
  selectColor:
    `<h2 class="color-downriver mb-10">Choose Colors</h2>
     <span class="text-primary font-weight-medium mb-20">Step 1 of 4</span>
     <p class="color-cape-cod mb-30">The fun part begins! Choose your favorite color for your pavers or walls to build your dream project.</p>`,
  selectSize:
    `<h2 class="color-downriver mb-10">Choose Sizes</h2>
     <span class="text-primary font-weight-medium mb-20">Step 1 of 4</span>
     <p class="color-cape-cod mb-30">With your favorite color chosen, now it's time to select the best match on size for your paver or wall.</p>`,
  selectTexture:
    `<h2 class="color-downriver mb-10">Choose Texture</h2>
     <span class="text-primary font-weight-medium mb-20">Step 1 of 4</span>
     <p class="color-cape-cod mb-30">Now it is time to choose a surface texture for your paver or wall.</p>`,
  pickFromBestMatch:
    `<h2 class="color-downriver mb-10">Best Matches</h2>
     <span class="text-primary font-weight-medium mb-20">Step 1 of 4</span>
     <p class="color-cape-cod mb-30">Based on your previous responses, here are the best matches for your pavers and walls. Please select the one you like most. </p>`,
  selectBorder:
    `<h2 class="color-downriver mb-10">Choose Border</h2>
     <span class="text-primary font-weight-medium mb-20">Step 1 of 4</span>
     <p class="color-cape-cod mb-30">Finally, let's select a border to complement your awesome project.</p>`,
  selectBasePackage:
    `<h2 class="color-downriver mb-10">Select Base Package</h2>
     <span class="text-primary font-weight-medium mb-20">Step 2 of 4</span>
     <p class="color-cape-cod mb-30">Now that you have chosen your ideal pavers, it's time to choose the base and accessory package for your project.</p>`,
  selectAccessoryPackage:
    `<h2 class="color-downriver mb-10">Select an Accessory Package</h2>
     <span class="text-primary font-weight-medium mb-20">Step 3 of 4</span>
     <p class="color-cape-cod mb-30">Now that you have chosen your ideal pavers, it's time to choose the base and accessory package for your project.</p>`,
  wrapUpProject:
    `<h2 class="color-downriver mb-10">Wrapping up your project</h2>
     <span class="text-primary font-weight-medium mb-20">Step 4 of 4</span>
     <p class="color-cape-cod mb-30">All your materials have been selected. Now tell us a bit more about your project by filling out the below information to the best of your ability.</p>`,
  complete:
    `<h2 class="color-downriver mb-10">Complete your order</h2>
     <span class="text-primary font-weight-medium mb-20">Step 4 of 4</span>
     <p class="color-cape-cod mb-30">Congratulations! All your project materials and information has been sent to our team. To complete you order, please <span class="text-primary">log in</span> or <span class="text-primary">create a new account</span>.</p>`,
};

export const guidedOrderProjects = [
  {
    name: 'Patios',
    projectType: ProductCategory.Patio,
    image: 'assets/images/landing-pages/services-page/patios/1.png',
    altTag: 'Bring your backyard to life with Patios'
  }, {
    name: 'Walkways',
    projectType: ProductCategory.Walkway,
    image: 'assets/images/landing-pages/services-page/walkways/1.png',
    altTag: 'Add Safety to your Household with Walkway Services'
  }, {
    name: 'Retaining Walls',
    projectType: ProductCategory.RetainingWall,
    image: 'assets/images/landing-pages/services-page/retaining-walls/1.png',
    altTag: 'Retaining Wall Blocks'
  }
];

export const pricePoints = [
  {
    name: 'Economy Pavers',
    priceClass: PriceClass.Economy,
    value: '$',
    description: 'Small description for the content of this price point or what is included in this selection.'
  }, {
    name: 'Most Popular Pavers',
    priceClass: PriceClass.Popular,
    value: '$$',
    description: 'Small description for the content of this price point or what is included in this selection.'
  }, {
    name: 'Specialty Pavers/Natural Stone',
    priceClass: PriceClass.Special,
    value: '$$$',
    description: 'Small description for the content of this price point or what is included in this selection.'
  }
];

export const guidedOrderProjectTypes = [
  ProductCategory.Patio,
  ProductCategory.Walkway,
  ProductCategory.RetainingWall
];

export const textureTypeDescriptions = {
  [ProductCategory.Patio]: {
    [TextureType.Smooth]: {
      title: 'Smooth',
      description: 'Smooth pavers provide a clean and contemporary look.',
    },
    [TextureType.Textured]: {
      title: 'Textured',
      description: 'Most popular, textured pavers provide a gorgeous look that is unique to each style.',
    },
  },
  [ProductCategory.RetainingWall]: {
    [TextureType.Smooth]: {
      title: 'Smooth',
      description: 'Great for smaller garden beds and curbing smooth wall blocks are best pared with contemporary pavers.',
    },
    [TextureType.Textured]: {
      title: 'Textured',
      description: 'Most popular, Split face retaining wall blocks provide a rough texture finish you see in most retaining walls.',
    },
  },
  [ProductCategory.Walkway]: {
    [TextureType.Smooth]: {
      title: 'Smooth',
      description: 'Smooth pavers provide a clean and contemporary look.',
    },
    [TextureType.Textured]: {
      title: 'Textured',
      description: 'Most popular, Textured pavers provide a gorgeous look thats unique to each style.',
    },
  },
};

export const borderTypeDescriptions = {
  [ProductCategory.Patio]: {
    [BorderType.None]: {
      title: 'No Border',
      description: 'We don’t recommend this option for the majority of projects. But it’s optional to reduce materials cost.',
      image: 'assets/images/marketplace/border-types/border/none.png',
    },
    [BorderType.SameColor]: {
      title: 'Same Color',
      description: 'Great for creating a suttle and contemporary look.',
      image: 'assets/images/marketplace/border-types/border/same-color.png',
    },
    [BorderType.AccentColor]: {
      title: 'Accent Color',
      description: 'Define the edge of your project with a border that stands out.',
      image: 'assets/images/marketplace/border-types/border/accent-color.png',
    },
    [BorderType.DoubleSameColor]: {
      title: 'Dark Inlay',
      description: 'Make your project stand out with this double border. Great choice for patios and larger walkways.',
      image: 'assets/images/marketplace/border-types/border/double-same-color.png',
    },
  },
  [ProductCategory.RetainingWall]: {
    [BorderType.None]: {
      title: 'No Cap',
      description: 'We don’t recommend this option for the majority of projects. But it’s optional to reduce materials cost.',
      image: 'assets/images/marketplace/border-types/caps/none.png',
    },
    [BorderType.SameColor]: {
      title: 'Same Color Cap',
      description: 'Most popular, utilizing a matching cap to finish off your project is key to the overall look.',
      image: 'assets/images/marketplace/border-types/caps/double-same-color.png',
    },
    [BorderType.AccentColor]: {
      title: 'Accent Color Cap',
      description: 'Be bold with your new wall and make it stand out with an accent cap.',
      image: 'assets/images/marketplace/border-types/caps/accent-color.png',
    },
    [BorderType.DoubleSameColor]: {
      title: 'Inlay Accent Color Cap',
      description: 'Small description for best practices or match on patios or walls.',
      image: 'assets/images/marketplace/border-types/caps/double-same-color.png',
    },
  },
  [ProductCategory.Walkway]: {
    [BorderType.None]: {
      title: 'No Border',
      description: 'We don’t recommend this option for the majority of projects. But it’s optional to reduce materials cost.',
      image: 'assets/images/marketplace/border-types/border/none.png',
    },
    [BorderType.SameColor]: {
      title: 'Same Color',
      description: 'Great for creating a suttle and contemporary look.',
      image: 'assets/images/marketplace/border-types/border/double-same-color.png',
    },
    [BorderType.AccentColor]: {
      title: 'Accent Color',
      description: 'Small description for best practices or match on patios or walls.',
      image: 'assets/images/marketplace/border-types/border/accent-color.png',
    },
    [BorderType.DoubleSameColor]: {
      title: 'Dark Inlay',
      description: 'Make your project stand out with this double border, great for patios and larger walkways.',
      image: 'assets/images/marketplace/border-types/border/double-same-color.png',
    },
  },
};

export const sizeClassDescriptions = {
  [SizeClass.Small]: {
    title: 'Small',
    description: 'Popular on walkways and smaller patios, small pavers provide a classic timely look that has been around for ages.',
    image: 'assets/images/marketplace/size-classes/pavers/small.png',
  },
  [SizeClass.Medium]: {
    title: 'Medium',
    description: 'Medium-sized pavers provide a unique look that is best for larger walkways and smaller patios.',
    image: 'assets/images/marketplace/size-classes/pavers/medium.png',
  },
  [SizeClass.Large]: {
    title: 'Large',
    description: 'Most popular, large pavers have taken the industry by storm and can work on any type of project - large or small.',
    image: 'assets/images/marketplace/size-classes/pavers/large.png',
  },
  [SizeClass.Jumbo]: {
    title: 'XL',
    description: 'Mostly recommended for larger patio and pool patio projects, extra large pavers are an up and coming trend.',
    image: 'assets/images/marketplace/size-classes/pavers/jumbo.png',
  },
  [SizeClass.Wall3InchesBlock]: {
    title: '3” Wall block',
    description: 'Most popular for smaller garden walls and sitting walls ',
    image: 'assets/images/marketplace/size-classes/retaining-wall/3in-rw.png',
  },
  [SizeClass.Wall4InchesBlock]: {
    title: '4” Wall block',
    description: 'Provides a unique look with a smaller block that can be used for larger walls. (Specialty size).',
    image: 'assets/images/marketplace/size-classes/retaining-wall/4in-rw.png',
  },
  [SizeClass.Wall5InchesBlock]: {
    title: '5” Wall block',
    description: 'Great for larger garden walls and can be used as curbing (Specialty size).',
    image: 'assets/images/marketplace/size-classes/retaining-wall/5in-rw.png',
  },
  [SizeClass.Wall6InchesBlock]: {
    title: '6” Wall block',
    description: 'Most popular for structural retaining walls and highly recommended on most projects.',
    image: 'assets/images/marketplace/size-classes/retaining-wall/6in-rw.png',
  },
  [SizeClass.Wall7InchesBlock]: {
    title: '7” Wall block',
    description: 'Great for structural larger walls, this 7" wall block provides a slightly different look than its traditional counter parts. (Specialty size)',
    image: 'assets/images/marketplace/size-classes/retaining-wall/7in-rw.png',
  },
  [SizeClass.Wall8InchesBlock]: {
    title: '8” Wall block',
    description: 'Cost effective and durable, 8" wall block is popular for larger residential or industrial walls.',
    image: 'assets/images/marketplace/size-classes/retaining-wall/8in-rw.png',
  },
  [SizeClass.Wall12InchesBlock]: {
    title: '12” Wall block',
    description: 'This larger size block is perfect for larger commercial projects that need strength with beauty. (Specialty size)',
    image: 'assets/images/marketplace/size-classes/retaining-wall/12in-rw.png',
  },
};

export const priceClassDescriptions = {
  [ProductCategory.Patio]: {
    [PriceClass.Economy]: {
      label: '$',
      title: 'Economy Pavers',
      description: 'Discover the best brands’ most affordable pavers, from classic styles to discounted products.',
    },
    [PriceClass.Popular]: {
      label: '$$',
      title: 'Most Popular Pavers',
      description: 'Choose from the most popular and trending pavers locally.',
    },
    [PriceClass.Special]: {
      label: '$$$',
      title: 'Specialty Pavers/Natural Stone',
      description: 'Find unique styles and colors that are sure to make your project stand out.',
    },
  },
  [ProductCategory.RetainingWall]: {
    [PriceClass.Economy]: {
      label: '$',
      title: 'Economy Walls',
      description: 'Cost effective retaining wall solutions that will get the job done.',
    },
    [PriceClass.Popular]: {
      label: '$$',
      title: 'Most Popular Walls',
      description: 'Durability and looks are key features of our most popular walls.',
    },
    [PriceClass.Special]: {
      label: '$$$',
      title: 'Specialty Walls',
      description: 'From natural stone to the newest wall trends you\'ll discover somthing unique for your property.',
    },
  },
  [ProductCategory.Walkway]: {
    [PriceClass.Economy]: {
      label: '$',
      title: 'Economy Walkway',
      description: 'Discover the best brands most affordable pavers, from classic styles to discounted products.',
    },
    [PriceClass.Popular]: {
      label: '$$',
      title: 'Most Popular Walkway',
      description: 'Choose from the most popular and trending pavers locally.',
    },
    [PriceClass.Special]: {
      label: '$$$',
      title: 'Specialty Walkway',
      description: 'Find unique styles and colors thats sure to make your project stand out.',
    },
  },
};

export const packageDescriptions = {
  [ProductCategory.Patio]: {
    [BasePackageType.EconomyBasePackage]: {
      title: 'Economy Base Package',
      items: [
        'Base material (¾” process gravel) is calculated out for 6” of base material.',
        'Screed material (Bedding sand) is calculated out for 1” screed poles.',
      ],
    },
    [BasePackageType.ProfessionalBasePackage]: {
      title: 'Professional Base Package',
      items: [
        'Base material (¾” process gravel) is calculated out for 12” of base material + 8” of base overlay.',
        'Screed material (Pea Stone upgrade) is calculated out for 1” screed poles.',
      ],
    },
    [AccessoryPackageType.EconomyAccessoryPackage]: {
      title: 'Economy Accessory Package',
      items: [
        'Enough paver edge restraint (Plastic) + nails (8") to secure the entire paver area.',
        'Enough Alliance brand polymeric sand (or equivalent) to sand the entire paver area.',
      ],
    },
    [AccessoryPackageType.ProfessionalAccessoryPackage]: {
      title: 'Professional Accessory Package',
      items: [
        'Roll of Geo-textile fabric (upgrade).',
        'Enough paver edge restraint + nails to secure the entire paver area (Upgrade to metal edging and 10” spikes).',
        'Enough Techni-seal polymeric sand to sand the entire paver area ',
      ],
    },
  },
  [ProductCategory.RetainingWall]: {
    [BasePackageType.EconomyBasePackage]: {
      title: 'Economy Base Package',
      items: [
        'Base material (¾”Trap rock) is calculated out for 6” thick with a 2’ wide trench where the wall is going.',
        'Screed material (Bedding sand) is calculated for 1” screed poles.',
        'Drainage material (¾” trap rock) is calculated for 1’ of drainage behind the wall filled up to 12” below the cap.',
      ],
    },
    [BasePackageType.ProfessionalBasePackage]: {
      title: 'Professional Base Package',
      items: [
        'Base material (¾” trap rock) is calculated out for 10” thick with a 3’ wide trench where the wall is going.',
        'Screed material (Pea stone upgrade) is calculated for 1” screed poles.',
        'Drainage material (¾” trap rock) is calculated for 2’ of drainage behind the wall filled up to 8” below the cap.',
      ],
    },
    [AccessoryPackageType.EconomyAccessoryPackage]: {
      title: 'Economy Accessory Package',
      items: [
        'Enough tubes of glue to secure caps Filter fabric.',
      ],
    },
    [AccessoryPackageType.ProfessionalAccessoryPackage]: {
      title: 'Professional Accessory Package',
      items: [
        'A roll of filter fabric.',
        'A roll of Geo-fabric.',
        'Glue for caps SRW brand or equivalent  (Enough tubes to secure all caps).',
      ],
    },
  },
  [ProductCategory.Walkway]: {
    [BasePackageType.EconomyBasePackage]: {
      title: 'Economy Base Package',
      items: [
        'Base material (¾” process gravel) is calculated out for 6” of base material.',
        'Screed material (Bedding sand) is calculated out for 1” screed poles.',
      ],
    },
    [BasePackageType.ProfessionalBasePackage]: {
      title: 'Professional Base Package',
      items: [
        'Base material (¾” process gravel) is calculated out for 12” of base material + 8” of base overlay.',
        'Screed material (Pea Stone upgrade) is calculated out for 1” screed poles.',
      ],
    },
    [AccessoryPackageType.EconomyAccessoryPackage]: {
      title: 'Economy Accessory Package',
      items: [
        'Enough paver edge restraint (Plastic) + nails (8") to secure the entire paver area.',
        'Enough Alliance brand polymeric sand (or equivalent) to sand the entire paver area.',
      ],
    },
    [AccessoryPackageType.ProfessionalAccessoryPackage]: {
      title: 'Professional Accessory Package',
      items: [
        'Roll of Geo-textile fabric (upgrade).',
        'Enough paver edge restraint + nails to secure the entire paver area (Upgrade to metal edging and 10” spikes).',
        'Enough Techni-seal polymeric sand to sand the entire paver area ',
      ],
    },
  },
};
