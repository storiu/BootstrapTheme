import {
  PatioPackage,
  PatioPackageOption,
  PatioPackageAddition,
  getPatioPackageAdditions,
  PatioPackageCard
} from '../models/patio-package';

export const patioPackageOptions = {
  ECONOMY_SERIES: {
    options: [
      new PatioPackageOption(`15' x 20'`, 7500, '15_20'),
      new PatioPackageOption(`20' x 20'`, 9750, '20_20'),
      new PatioPackageOption(`20' x 25'`, 12250, '20_25'),
    ],
    additional: getPatioPackageAdditions([PatioPackageAddition.FirePit, PatioPackageAddition.SittingWall])
  },
  ENTERTAINMENT_SERIES: {
    options: [
      new PatioPackageOption('400 sq ft', 12600, '400_SQ_FT'),
      new PatioPackageOption('600 sq ft', 17500, '600_SQ_FT'),
      new PatioPackageOption('800 sq ft', 22450, '800_SQ_FT'),
    ],
    additional: getPatioPackageAdditions([PatioPackageAddition.Pillars, PatioPackageAddition.WallLights])
  },
  EXECUTIVE_SERIES: {
    options: [
      new PatioPackageOption('600 sq ft', 36450, '600_SQ_FT'),
      new PatioPackageOption('900 sq ft', 43959, '900_SQ_FT'),
      new PatioPackageOption('1100 sq ft', 48950, '1100_SQ_FT'),
    ],
    additional: getPatioPackageAdditions([
      PatioPackageAddition.OutdoorSpeakers,
      PatioPackageAddition.TimberFrameOrVinylPavilion,
      PatioPackageAddition.OutdoorLighting,
      PatioPackageAddition.LandscapeDesignAndInstallation
    ])
  },
  DECK_EXTENDER_SERIES: {
    options: [
      new PatioPackageOption('Under deck 16 x 20 patio', 8640, 'UNDER_DECK_16_20_PATIO'),
      new PatioPackageOption('Under Deck + Fire Pit area', 14040, 'UNDER_DECK_PLUS_FIRE_PIT'),
      new PatioPackageOption('20 x 28 Deck Replacement', 15120, '20_28_DECK_REPLACEMENT'),
    ],
    additional: getPatioPackageAdditions([
      PatioPackageAddition.GraniteSteps,
      PatioPackageAddition.SideRetainingWalls,
      PatioPackageAddition.SittingWall,
      PatioPackageAddition.FirePit,
    ])
  },
  WALKWAY_PACKAGES: {
    options: [
      new PatioPackageOption('Up to 25 foot long', 3400, 'UP_TO_25'),
      new PatioPackageOption('Up to 35 foot long', 4480, 'UP_TO_35'),
      new PatioPackageOption('Up to 45 foot long', 5580, 'UP_TO_45'),
      new PatioPackageOption('Up to 55 foot long', 6820, 'UP_TO_55'),
    ],
    additional: getPatioPackageAdditions([
      PatioPackageAddition.GraniteSteps,
      PatioPackageAddition.Curbing,
    ])
  },
  NEW_POOL_PATIO_PACKAGES: {
    options: [
      new PatioPackageOption('750 sq ft', 18750, '750_SQ_FT'),
      new PatioPackageOption('1100 sq ft', 26400, '1100_SQ_FT'),
      new PatioPackageOption('1500 sq ft', 35250, '1500_SQ_FT'),
    ],
    additional: getPatioPackageAdditions([
      PatioPackageAddition.PoolCoping,
      PatioPackageAddition.SittingWall,
      PatioPackageAddition.FirePit,
    ])
  },
  HARDSCAPE_BAR: {
    price: 4850,
  },
  HARDSCAPE_COUCH: {
    price: 7850,
  },
  HARDSCAPE_GRILL: {
    price: 8500
  }
};

export const patioPackages = {
  ECONOMY_SERIES: {
    label: 'Economy Series',
    description: `
      <p class="color-cape-cod mb-20">Are you looking for a simple <a class="text-primary font-weight-medium" href="/services/patios">patio</a>, something that is cost effective, has style and is installed with the durability to last a life time. </p>
      <p class="color-cape-cod mb-0">Our economy line offers just that, Choose the style and colors of your choice, Choose the border and choose the size of the paver.</p>
    `,
    info: [
      {
        label: 'Economy Packages',
        options: patioPackageOptions.ECONOMY_SERIES.options
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.ECONOMY_SERIES.additional
      }
    ],
    images: [
      {
        src: 'assets/images/landing-pages/patio-packages/economy/economy-patio-package.jpg',
        altTag: 'Cost-Effective Patio Economy Series'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/economy/economy-patio-walkway.jpg',
        altTag: 'Economy series of pavers'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/economy/small-custom-patio.jpg',
        altTag: 'Paver Blocks for Outdoor'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/economy/economy-pavers-patio.jpg',
        altTag: 'Zig Zag Pavers'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/economy/economy-patio-remodel.jpg',
        altTag: 'Economy Pavers'
      },
    ]
  },
  ENTERTAINMENT_SERIES: {
    label: 'Entertainment Series',
    description: `
      <p class="color-cape-cod mb-20">If your looking to spend time with your family and friends  or a romantic getaway in your back yard the Entertainment series is designed for you.</p>
      <p class="color-cape-cod mb-0">Our entertainment line comes in a variety of sizes/colors and includes a fire pit, sitting wall and a custom 10' design, <a class="text-primary font-weight-medium" href="/services/inlays-and-borders">free inlay upgrades</a>  and pre-wire for wall lights.</p>
    `,
    info: [
      {
        label: 'Entertainment Packages',
        options: patioPackageOptions.ENTERTAINMENT_SERIES.options
      },
      {
        label: 'Project Includes',
        options: [
          new PatioPackageOption('Techo-bloc Valencia Fire pit'),
          new PatioPackageOption(`12' Mini-creta sitting wall`),
          new PatioPackageOption(`10' custom circle design`),
          new PatioPackageOption(`and your choice of paver/border`),
        ]
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.ENTERTAINMENT_SERIES.additional
      },
    ],
    images: [
      {
        src: 'assets/images/landing-pages/patio-packages/entertainment/entertainment-patio.jpg',
        altTag: 'Pavers Entertainment Series for Backyard'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/entertainment/entertainment-patio-package.jpg',
        altTag: 'Pavers Entertainment Series for Backyard 1'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/entertainment/curved-bench-patio-package.jpg',
        altTag: 'Pavers Entertainment Series for Backyard 2'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/entertainment/fountain-patio-walkway.jpg',
        altTag: 'Pavers Entertainment Series for Backyard 3'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/entertainment/luxury-entertainment-patio.jpg',
        altTag: 'Pavers Entertainment Series for Backyard 4'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/entertainment/entertainment-pavers-patio.jpg',
        altTag: 'Pavers Entertainment Series for Backyard 5'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/entertainment/entertainment-patio-pavers-fountain.jpg',
        altTag: 'Pavers Entertainment Series for Backyard 6'
      },
    ]
  },
  EXECUTIVE_SERIES: {
    label: 'Executive Series',
    description: `
      <p class="color-cape-cod mb-20">If your looking to go all out with outdoor living and live like a boss then our Executive series is for you. </p>
      <p class="color-cape-cod mb-0">Our executive packages start larger, include a Hardscape couch, Hardscape bar, and outdoor grill island. <span class="font-weight-medium">(Items can be separated)</span></p>
    `,
    info: [
      {
        label: 'Executive Packages',
        options: patioPackageOptions.EXECUTIVE_SERIES.options
      },
      {
        label: 'Project Includes',
        options: [
          new PatioPackageOption('Tech-bloc Valencia Fire pit'),
          new PatioPackageOption(`12' Hardscape Couch`),
          new PatioPackageOption(`2 Pillars`),
          new PatioPackageOption(`2 pillar Caps`),
          new PatioPackageOption(`9' Hardscape Bar`),
          new PatioPackageOption(`7' built in grill island (In block or natural stone)`),
          new PatioPackageOption(`10' custom circle design and your choice of paver.`),
        ]
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.EXECUTIVE_SERIES.additional
      },
    ],
    images: [
      {
        src: 'assets/images/landing-pages/patio-packages/executive/executive-patio.jpg',
        altTag: 'Hardscape Couch for Outdoor Living'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/executive/executive-patio-package.jpg',
        altTag: 'Hardscape Couch for Outdoor Living 1'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/executive/executive-pavers-patio.jpg',
        altTag: 'Hardscape Couch for Outdoor Living 2'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/executive/executive-patio-fountain.jpg',
        altTag: 'Hardscape Couch for Outdoor Living 3'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/executive/executive-pavers-patio-fountain.jpg',
        altTag: 'Hardscape Couch for Outdoor Living 4'
      },
    ]
  },
  DECK_EXTENDER_SERIES: {
    label: 'Deck Extender Series',
    description: `
      <p class="color-cape-cod mb-20">If you have a deck your looking to replace or need more space around an existing deck then these packages are for you.</p>
      <p class="color-cape-cod mb-0">United Hardscapes provides many solutions to maximize your backyard living whether its adding a patio under an existing deck, coordinating a patio off a new or existing deck or  adding side <a class="text-primary font-weight-medium" href="/services/retaining-walls">retaining walls</a> our packages can solve all your problems.</p>
    `,
    info: [
      {
        label: 'Deck Extender Packages',
        options: patioPackageOptions.DECK_EXTENDER_SERIES.options
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.DECK_EXTENDER_SERIES.additional
      },
    ],
    images: [
      {
        src: 'assets/images/landing-pages/patio-packages/deck-extender/deck-extender.jpg',
        altTag: 'Deck Extender Series for Backyard Living'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/deck-extender/deck-extention.jpg',
        altTag: 'Deck Extender Series for Backyard Living 1'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/deck-extender/pavers-deck-entender.jpg',
        altTag: 'Deck Extender Series for Backyard Living 2'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/deck-extender/pavers-deck-extention.jpg',
        altTag: 'Deck Extender Series for Backyard Living 3'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/deck-extender/pavers-patio-extender.jpg',
        altTag: 'Deck Extender Series for Backyard Living 4'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/deck-extender/pavers-patio-extention.jpg',
        altTag: 'Deck Extender Series for Backyard Living 5'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/deck-extender/deck-expantion.jpg',
        altTag: 'Deck Extender Series for Backyard Living 6'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/deck-extender/patio-expantion.jpg',
        altTag: 'Deck Extender Series for Backyard Living 7'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/deck-extender/pavers-deck-patio-extender.jpg',
        altTag: 'Deck Extender Series for Backyard Living 8'
      },
    ]
  },
  WALKWAY_PACKAGES: {
    label: 'Walkways Packages',
    description: `
      <p class="color-cape-cod mb-20">If you need a new walkway, pavers are by far the best way to go, however many people miss understand the costs, thats why we broke down our most popular sized walkways to help educate you on how affordable <a class="text-primary font-weight-medium" href="/services/walkways">paver walkways</a> are.</p>
      <p class="color-cape-cod mb-0">All walkway packages include a minimum of 8 inches of base on each side of the walkway for support, your choice of color, paver and border. Standard walkways are 4' wide and include a flair out to the driveway and steps.</p>
    `,
    info: [
      {
        label: 'Walkways Packages',
        options: patioPackageOptions.WALKWAY_PACKAGES.options
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.WALKWAY_PACKAGES.additional
      },
    ],
    images: [
      {
        src: 'assets/images/landing-pages/patio-packages/walkway/pavers-walkway-curved.jpg',
        altTag: 'Walkways Packages for Driveway and Steps'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/walkway/walkway-pavers-curved.jpg',
        altTag: 'Walkways Packages for Driveway and Steps 1'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/walkway/curving-walkway.jpg',
        altTag: 'Walkways Packages for Driveway and Steps 2'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/walkway/curving-walkway-pavers.jpg',
        altTag: 'Walkways Packages for Driveway and Steps 3'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/walkway/pavers-walkway-border.jpg',
        altTag: 'Walkways Packages for Driveway and Steps 4'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/walkway/border-pavers-walkway.jpg',
        altTag: 'Walkways Packages for Driveway and Steps 5'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/walkway/example-pavers-walkway.jpg',
        altTag: 'Walkways Packages for Driveway and Steps 6'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/walkway/example-walkway-border.jpg',
        altTag: 'Walkways Packages for Driveway and Steps 7'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/walkway/new-pavers-walkway.jpg',
        altTag: 'Walkways Packages for Driveway and Steps 8'
      },
    ]
  },
  NEW_POOL_PATIO_PACKAGES: {
    label: 'New Pool Patio Packages',
    description: `
      <p class="color-cape-cod mb-20">Pool's are the centerpiece of many back yards and provide years of excitement for the entire family. Given the investment pools are its important to remember to budget for their patios, don't end up short budget and stuck with concrete.</p>
      <p class="color-cape-cod mb-0"><a class="text-primary font-weight-medium" href="/services/pool-patios">Pool patio</a> packages are designed around your budget, pool  design and to maximize usable space.</p>
    `,
    info: [
      {
        label: 'Pool patio Packages',
        options: patioPackageOptions.NEW_POOL_PATIO_PACKAGES.options
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.NEW_POOL_PATIO_PACKAGES.additional
      },
    ],
    images: [
      {
        src: 'assets/images/landing-pages/patio-packages/pool-patio/patio-pool.jpg',
        altTag: 'New Pool Patio Packages 1'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/pool-patio/pavers-patio-pool.jpg',
        altTag: 'New Pool Patio Packages 2'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/pool-patio/new-pool-patio.jpg',
        altTag: 'New Pool Patio Packages 3'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/pool-patio/patio-pool-contractor.jpg',
        altTag: 'New Pool Patio Packages 4'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/pool-patio/curved-patio-pool.jpg',
        altTag: 'Beautiful Pool Patio Designs'
      },
    ]
  },
  HARDSCAPE_BAR: {
    label: 'Hardscapes Bar',
    description: `
      <p class="color-cape-cod mb-0"><a class="text-primary font-weight-medium" href="/">Outdoor patios</a> are all the rage right now, and being able to have a designated hangout or "bar" area where you can pull up a chair or rest your beer is where its at. That's why United Hardscapes come up with their signature Hardscape Bar.</p>
    `,
    info: [
      {
        label: `Hardscape Bar  <span class="ml-40">$4,650</span>`,
      },
      {
        label: 'Specifications',
        options: [
          new PatioPackageOption('Your choice of color block and caps'),
          new PatioPackageOption(`9' 3" wide x 3" deep`),
          new PatioPackageOption(`New England winter durable `),
          new PatioPackageOption(`15 color combinations`),
        ]
      },
    ],
    images: [
      {
        src: 'assets/images/landing-pages/patio-packages/hardscape-bar/hardscape-bar.jpg',
        altTag: 'Outdoor Bar Hardscape'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/hardscape-bar/patio-bar.jpg',
        altTag: 'Unique Bar Hardscapes'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/hardscape-bar/pool-bar.jpg',
        altTag: 'Beautiful Designed Bar Hardscapes'
      },
    ]
  },
  HARDSCAPE_COUCH: {
    label: 'Hardscapes Couch',
    description: `
      <p class="color-cape-cod mb-0">If your looking for a patio show piece, adding a Hardscape couch will do the trick, these indestructible outdoor couches are great hang out locations, can be decorated with pillows and are designed to be the perfect height.</p>
    `,
    info: [
      {
        label: 'Hardscape Couch   <span class="ml-40">$7,850</span>',
      },
      {
        label: 'Specifications',
        options: [
          new PatioPackageOption(`Your choice of color block and caps`),
          new PatioPackageOption(`2 pillars plus matching caps`),
          new PatioPackageOption(`12 feet of sitting area`),
          new PatioPackageOption(`New England winter durable`),
          new PatioPackageOption(`15 color combinations`),
        ]
      },
    ],
    images: [
      {
        src: 'assets/images/landing-pages/patio-packages/hardscape-couch/hardscape-couch.jpg',
        altTag: 'Amazing Outdoor Couch'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/hardscape-couch/hardscape-patio-bench.jpg',
        altTag: 'Sitting Couch by Hardscapes'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/hardscape-couch/stone-bench.jpg',
        altTag: 'Attractive Outdoor Couch'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/hardscape-couch/rock-couch.jpg',
        altTag: 'Hardscapes Couch for Sitting'
      },
      {
        src: 'assets/images/landing-pages/patio-packages/hardscape-couch/hardscape-couch-pavers-patio.jpg',
        altTag: 'Outdoor Hardscapes Couch'
      },
    ]
  },
  HARDSCAPE_GRILL: {
    label: 'Hardscape Grill Island',
    description: `
      <p class="color-cape-cod mb-0">If your looking for an affordable outdoor grill island our basic package has everything you are looking for. </p>
    `,
    info: [
      {
        label: 'Hardscape Grill Island   <span class="ml-40">$8,500</span>',
      },
      {
        label: 'Specifications',
        options: [
          new PatioPackageOption(`Your choice of block or natural stone`),
          new PatioPackageOption(`Includes Granite Top`),
          new PatioPackageOption(`32" Sumerset Stainless steel Grill`),
          new PatioPackageOption(`Matching Stainless steel cabinet`),
          new PatioPackageOption(`New England winter durable `),
        ]
      },
    ],
    images: [
      {
        src: 'assets/images/landing-pages/patio-packages/hardscape-grill/hardscape-grill.jpg',
        altTag: 'Hardscape Grill Island - Outdoor Grill'
      },
    ]
  },
};

export const patioPackageCards: Array<PatioPackageCard> = [
  {
    image: 'assets/images/landing-pages/patio-packages/economy/card.png',
    label: 'Economy Series',
    id: PatioPackage.Economy,
    altTag: 'Patio Economy Series'
  },
  {
    image: 'assets/images/landing-pages/patio-packages/entertainment/card.png',
    label: 'Entertainment Series',
    id: PatioPackage.Entertainment,
    altTag: 'Patio Entertainment Series for Friends and Family'
  },
  {
    image: 'assets/images/landing-pages/patio-packages/executive/card.png',
    label: 'Executive Series',
    id: PatioPackage.Executive,
    altTag: 'Executive series includes Hardscape couch, Hardscape bar, and outdoor grill island.'
  },
  {
    image: 'assets/images/landing-pages/patio-packages/deck-extender/card.png',
    label: 'Deck Extender Series',
    id: PatioPackage.DeckExtender,
    altTag: 'Maximize your Backyard Living with Deck Extender Series'
  },
  {
    image: 'assets/images/landing-pages/patio-packages/walkway/card.png',
    label: 'Walkways Packages',
    id: PatioPackage.Walkway,
    altTag: 'Patio Walkways Packages'
  },
  {
    image: 'assets/images/landing-pages/patio-packages/pool-patio/card.png',
    label: 'New Pool Patio Packages',
    id: PatioPackage.PoolPatio,
    altTag: 'New Pool Patio Packages'
  },
  {
    image: 'assets/images/landing-pages/patio-packages/hardscape-bar/card.png',
    label: 'Hardscape Bar',
    id: PatioPackage.HardscapeBar,
    altTag: 'Hardscapes Bar Outdoor Patios'
  },
  {
    image: 'assets/images/landing-pages/patio-packages/hardscape-couch/card.png',
    label: 'Hardscape Couch',
    id: PatioPackage.HardscapeCouch,
    altTag: 'Hardscapes Couch Patios'
  },
  {
    image: 'assets/images/landing-pages/patio-packages/hardscape-grill/card.png',
    label: 'Hardscape Grill Island',
    id: PatioPackage.HardscapeGrill,
    altTag: 'Hardscape Grill Island Patios'
  },
];
