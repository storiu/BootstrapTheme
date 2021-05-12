export const archincerRoutes = {
  // landing pages
  landingPages: {
    contactUs: 'contact-us',
    whyChooseUs: 'why-choose-us',
    aboutUs: 'about-us',
    patioPackages: 'patio-packages',
    partners: 'partners',
    faqs: 'faqs',
    privacyPolicy: 'privacy-policy',
    legalNotice: 'legal-notice',
    requestEstimate: {
      root: 'request-estimate',
      step1: 'step-1',
      step2: 'step-2',
    },
    requestApplication: 'request-application',
    ideaBoard: 'idea-board',
    marketplace: 'marketplace',
    hardscapeEducation: 'hardscape-education',
    services: {
      root: 'services',
      patios: 'patios',
      walkways: 'walkways',
      retainingWalls: 'retaining-walls',
      driveways: 'driveways',
      poolPatios: 'pool-patios',
      completeTransformations: 'complete-transformations',
      designServices: 'design-services',
      stepsAndStaircases: 'steps-and-staircases',
      inlaysAndBorders: 'inlays-and-borders',
      paversVsConcrete: 'pavers-vs-concrete',
    },
    blog: 'blog',
    sopProcedures: 'sop-procedures',
  },
  // marketing landing pages
  marketingPages: {
    ct: {
      root: 'ct',
      earlyBirdSpecials: 'early-bird-specials',
      tolland: 'tolland',
      fairfield: 'fairfield',
      hartford: 'hartford',
      litchfield: 'litchfield',
      middlesex: 'middlesex',
      newHaven: 'new-haven',
      newLondon: 'new-london',
      windham: 'windham',
      springSavings: 'spring-savings',
    },
    westernMass: {
      root: 'westernmass',
    },
  },
  // local landing pages
  localPages: {
    contents: {
      financing: 'financing',
      freeFirePit: 'free-fire-pit',
      seasonSpecial: 'season-special',
    },
    ma: {
      root: 'ma',
      hampden: 'hampden'
    },
    ct: {
      root: 'ct',
      tolland: 'tolland',
      hartford: 'hartford'
    }
  },
  // marketplace landing pages
  marketplacePages: {
    root: 'marketplace',
    quickOrder: {
      root: 'quick-order',
      make: 'make',
      process: 'process',
      projectInfo: 'project-info',
      complete: 'complete'
    },
    guidedOrder: {
      root: 'guided-order',
      materialSelect: {
        root: 'material-select',
        project: 'project',
        price: 'price',
        color: 'color',
        size: 'size',
        texture: 'texture',
        bestMatch: 'best-match',
        border: 'border',
      },
      basePackage: 'base-package',
      accessoryPackage: 'accessory-package',
      projectInfo: 'project-info',
      complete: 'complete',
    }
  },
  externalLinks: {
    login: 'login',
    redirect: 'redirect'
  }
};

export function toAbsolutePath(path: string | string[]): string {
  // this function accepts string or string array
  // CAUTION! - be aware, send only valid array or string
  if (typeof path === 'string') {
    return '/' + path;
  } else {
    return '/' + path.join('/');
  }
}
