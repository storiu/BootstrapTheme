export const springSavingsContent = {
  jumbotron: {
    description: `<h2 class="text-white mb-30">Are you looking for a trusted hardscape company?</h2>
                  <h3 class="text-white mb-30">Would you like to be guided through the entire project?</h3>
                  <p class="color-gray-chateau">Then you have come to the right place. <br class="d-none d-lg-block">Welcome to United Hardscapes, your one-stop shop for hardscape knowledge, installation, and materials.</p>`,
    imageURL: 'assets/images/marketing-pages/spring-savings/hardscapes-storyboard.png',
  },
  beforeAfterImages: [
    {
      before: 'assets/images/marketing-pages/spring-savings/before1.png',
      after: 'assets/images/marketing-pages/spring-savings/after1.png'
    }, {
      before: 'assets/images/marketing-pages/spring-savings/before2.png',
      after: 'assets/images/marketing-pages/spring-savings/after2.png'
    }, {
      before: 'assets/images/marketing-pages/spring-savings/before3.png',
      after: 'assets/images/marketing-pages/spring-savings/after3.png'
    }, {
      before: 'assets/images/marketing-pages/spring-savings/before4.png',
      after: 'assets/images/marketing-pages/spring-savings/after4.png'
    }, {
      before: 'assets/images/marketing-pages/spring-savings/before5.png',
      after: 'assets/images/marketing-pages/spring-savings/after5.png'
    }, {
      before: 'assets/images/marketing-pages/spring-savings/before6.png',
      after: 'assets/images/marketing-pages/spring-savings/after6.png'
    }, {
      before: 'assets/images/marketing-pages/spring-savings/before7.png',
      after: 'assets/images/marketing-pages/spring-savings/after7.png'
    }
  ],
  benefits: [
    {
      img: 'assets/images/icons/save.svg',
      title: 'Fair Price',
      description: 'Receive straightforward pricing, easy-to-understand proposals, and tons of options to choose from with no additional costs.',
      width: 40,
      height: 34
    }, {
      img: 'assets/images/icons/time.svg',
      title: 'Quick Turnarounds',
      description: 'Given our large network of suppliers and our unique business structure, we are able to get their projects done sooner than the other contractors.',
      width: 34,
      height: 34
    }, {
      img: 'assets/images/icons/dashboard.svg',
      title: 'Selection',
      description: 'With our network of suppliers, we provide customers nearly unlimited options for materials.',
      width: 38,
      height: 35
    }, {
      img: 'assets/images/icons/big-plan.svg',
      title: 'Knowledge & Expertise',
      description: 'All our crews are properly trained and have the right tools for the job to ensure a base that will stand the test of time.',
      width: 35,
      height: 35
    }, {
      img: 'assets/images/icons/quality.svg',
      title: 'Quality',
      description: 'We go above and beyond staying up to date with new industry guidelines for the proper installation of hardscape products.',
      width: 38,
      height: 37
    }, {
      img: 'assets/images/icons/security.svg',
      title: 'Warranty',
      description: 'All of our work comes with a warranty that depends on your project type. For example, our warranty for a paver patio is 5 years from the date of completion and acceptance.',
      width: 30,
      height: 31
    }, {
      img: 'assets/images/icons/star.svg',
      title: 'Customer Experience',
      description: 'We offer a simple and stress-free experience to our clients, that includes collaboration with a Project consultant that will guide you every step of the way.',
      width: 34,
      height: 29
    }, {
      img: 'assets/images/icons/project.svg',
      title: 'One-Stop-Shop',
      description: 'Our Hardscape Hub™ is where you can find everything your next project needs—anytime you need it.',
      width: 38,
      height: 32
    }, {
      img: 'assets/images/icons/crew-check.svg',
      title: 'Local Crews',
      description: 'For each region we service, we have local project consultants and crews who are dedicated and invested in working with you.',
      width: 49,
      height: 38
    }
  ],
  testimonialHeader: `
    <h3 class="color-downriver text-center pt-50 pt-lg-30 mb-20">Rated 5 Stars On Google</h3>
    <p class="color-cape-cod text-center mb-50">Join the thousands of happy customers that we have worked with over the last 15 years.</p>
  `,
  testimonials: [
    {
      img: 'assets/images/testimonials/tolland/1.png',
      customer: 'Jill H.',
      comment: 'We decided to go with United Hardscapes to help us build our deck with patio. They weren’t the first company we contacted, but we’re very glad they’re the ones we chose! The project was pretty sizeable, and they had it' +
        ' done in no time and stuck to the estimate they provided us.'
    }, {
      img: 'assets/images/testimonials/tolland/2.png',
      customer: 'Tim L.',
      comment: 'We have a big family and we love spending time outdoors, but our yard wasn’t really designed for it. United Hardscapes worked with us every step of the way, from checking out the property to educating us about the different materials for our patio. We’ll definitely work with them for our next project!'
    }, {
      img: 'assets/images/testimonials/tolland/3.png',
      customer: 'Allen H.',
      comment: 'From the experienced team to the selection of materials to the quality of the finished driveway, our experience was first-rate. We would definitely recommend United Hardscapes!'
    }
  ],
};

export interface BeforeAfterImage {
  before: string;
  after: string;
}
