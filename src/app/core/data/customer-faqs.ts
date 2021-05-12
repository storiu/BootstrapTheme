import { CustomerQuestionCategory } from '../models/faqs';
import { archincerRoutes } from './routes';
import { PatioPackage } from '../models/patio-package';

export const customerFaqs = [
  {
    id: CustomerQuestionCategory.CompanyInformation,
    descriptions: [
      {
        name: 'What does your tag line ”Hardscaping Simplified” mean?',
        content: `<p class="color-cape-cod m-0 mt-10">It's a testament to what we believe in and what we do. Hardscaping projects are investments. Home projects often require many steps and coordination with multiple different contractors. This means that you need to quickly learn the lingo and understand how to get the best deal. We take on the complexity and the guesswork, leaving the most important components to you. With United Hardscapes, you can use our 3 step process (Design, Build, Enjoy), and we’ll take care of the rest.</p>`
      }, {
        name: 'How do I get an estimate from United Hardscapes?',
        content: `<p class="color-cape-cod m-0 mt-10">We make an estimate request process very simple. Our estimates are more standard than with other contractors, meaning that you don’t need to listen to a hard sell or try to figure out what you’re paying for. Our estimates are clear and easy to understand, and our pricing is based on the work that we’ve done in your local area. <a class="text-primary font-weight-bold ${ archincerRoutes.landingPages.requestEstimate.root }" id="navigate" (click)="navigate()">Click here</a> and tell us about your project.</p>`
      }, {
        name: 'Is United Hardscapes licensed and insured to work in my state?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, United Hardscapes is licensed and insured to work in every market it is working in. We also register with local construction organizations and we are members of national trade associations.</p>`
      }, {
        name: 'Do you have a warranty on your workmanship?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, all of our work comes with a warranty. The warranty is dependent on the type of work that we do for you. For instance, our warranty for a paver patio is 5 years from the date of completion and acceptance. For a rock wall, our warranty is xx years from the date of completion and acceptance. Your warranty is transferable to a future property owner. Your United Hardscapes Project Consultant will review the warranty details of your projects with you when it is time to complete your site plan and make decisions about your projects.</p>`
      }, {
        name: 'Do the materials come with a warranty?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, most manufacturers provide a lifetime warranty on their products as long as they are installed by a certified contractor like United Hardscapes. Your Project Consultant will help guide you through any questions about manufacturer warranties.</p>`
      }, {
        name: 'What quality paver and brands do you use?',
        content: `<p class="color-cape-cod m-0 mt-10">We use only high quality pavers and natural stone, brands will vary by location and availability. We work with most major manufacturers materials such as Techo-bloc, Belgard, Cambridge, Unilock, Versa-lok and many more.</p>`
      }, {
        name: 'Do you provide designs?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we understand it’s difficult for some customers to envision what their project is going to look like and the true potential of their yard. Our Project Coordinator will work with you to develop a 3D design for your project that will help you see what your finished yard will look like. <a class="text-primary font-weight-bold ${ archincerRoutes.landingPages.patioPackages }" id="navigate" (click)="navigate()">Click here</a> for an example of a 3D design for a new patio.</p>`
      }, {
        name: 'How long have you been installing hardscapes?',
        content: `<p class="color-cape-cod m-0 mt-10">United Hardscapes has more than 50 years of experience delivering great results for our customers. With thousands of projects of all shapes and sizes completed since 2003,you can trust you’re working with one of the most experienced  hardscape  companies in America.</p>`
      }, {
        name: 'What states do you cover?',
        content: `<p class="color-cape-cod m-0 mt-10">We are constantly expanding and bringing beautiful yards and landscapes to people across the US. Please view our service map to find a United Hardscapes Project Coordinator in your area. If we are not yet in your area, let us know that you’re interested and we’ll let you know when we are set up with great crews, best-in-class Project Consultants, and top-notch service.</p>`
      }, {
        name: 'What\'s your typical lead time?',
        content: `<p class="color-cape-cod m-0 mt-10">The time needed to plan and complete a project varies based on our volume and the time of year. Typically, it takes about 4-6 weeks from our first site visit until your project is completed.</p>`
      }
    ],
  },
  {
    id: CustomerQuestionCategory.CustomerService,
    descriptions: [
      {
        name: 'What is a Project Consultant?',
        content: `<p class="color-cape-cod m-0 mt-10">A Project Consultant is like your private tutor for the Hardscape industry. It's the Project Consultants job to help guide you through every step of the process educating you along the way, from initial designs and ideas, to choosing materials, coordinating scheduling and seeing your project through till the end. This level of service helps United Hardscapes stand out above other contractors.</p>`
      }, {
        name: 'What if I have a problem with my project?',
        content: `<p class="color-cape-cod m-0 mt-10">If there is ever an issue or question with your project simply reach out to your Project Consultant who will coordinate a time to meet with you and come up with a solution or answer any questions you may have.</p>`
      }, {
        name: 'What If I want to change my materials?',
        content: `<p class="color-cape-cod m-0 mt-10">Unless special order, customers can change their materials up to 2 weeks prior to the project start date with no change order fees.</p>`
      }, {
        name: 'Do you offer financing?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we offer financing on most Hardscaping projects, some limitations apply.</p>`
      }, {
        name: 'What types of financing do you offer?',
        content: `
              <p class="color-cape-cod">We offer a combination of financing options to help customers get the back yard of their dreams. Below are examples of the financing we offer:</p>
              <div class="pl-20">
                <p class="color-cape-cod m-0 mt-10">Short Term  - 0% Same as Cash for 12months</p>
                <p class="color-cape-cod m-0 mt-10">Medium Term - 6.99% for 6.25%</p>
                <p class="color-cape-cod m-0 mt-10">Long Term - 9.99% for 10 years </p>
              </div>`
      }, {
        name: 'Do you offer any discounts?',
        content: `<p class="color-cape-cod m-0 mt-10">We don’t offer any set “Discounts”. However, we occasionally run specials throughout the season. <a class="text-primary font-weight-bold ${ archincerRoutes.landingPages.requestEstimate.root }" id="navigate" (click)="navigate()">Request Estimate</a> or <a class="text-primary font-weight-bold" id="newsletter" (click)="newsletter()">Sign up to our Newsletter</a> to learn more about our special packages.</p>`
      }, {
        name: 'Can you help me design my project?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, our Project Consultants specialize in helping customers design the perfect project for their property</p>`
      }, {
        name: 'I have a budget, can you design a project within my budget?',
        content: `<p class="color-cape-cod m-0 mt-10">I have a budget, can you design a project within my budget? Yes, depending on what the project entails most of the time we can accomplish your project goals within your budget, if not we will advise you of some other options that would fit into your budget.</p>`
      }, {
        name: 'Can you provide a list of references?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, if our thousands of completed projects are not enough of a reference, we love to let others brag about our work and their project. Just ask your Project Consultant or visit our <a class="text-primary font-weight-bold" id="testimonial" (click)="goTestimonial()">Testimonial page</a>.</p>`
      }, {
        name: 'Do you accept credit cards?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we accept all major credit cards</p>`
      }, {
        name: 'Do you accept checks?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, you could pay by check, however we suggest using an ACH bank transfer instead.</p>`
      }
    ],
  },
  {
    id: CustomerQuestionCategory.Design,
    descriptions: [
      {
        name: 'What’s the average size patio?',
        content: `<p class="color-cape-cod m-0 mt-10">There is no average size patio, it’s really based on your property and if it “fits” the house, yard and ultimately archives your goals for space and amenities. There are some popular sizes and setups that we offer in our “Patio Packages” for custom projects. Your Project Consultant will help you figure out what’s best for your yard.</p>`
      }, {
        name: 'How wide should my walkway be?',
        content: `<p class="color-cape-cod m-0 mt-10">The average walkway is 4’ wide typically with a fan out to the driveway and steps. We have been doing alot more 5’ wide walkways lately and this creates a “Grand entrance” look. To learn more about walkways, please visit our <a class="text-primary font-weight-bold ${ archincerRoutes.landingPages.patioPackages }/${ PatioPackage.Walkway }" id="navigate" (click)="navigate()">“Walkway packages”</a> section.</p>`
      }, {
        name: 'Can you help me design a complete outdoor living area?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we help customers with simple walkways all the way to full outdoor living areas including pavilions, pools and complete landscaping overhauls.</p>`
      }, {
        name: 'Do you charge for designs?',
        content: `<p class="color-cape-cod m-0 mt-10">No, upon acceptance of the proposal, we start working right away to get your project moving forward and designed.</p>`
      }, {
        name: 'Can I have a 3D design prior to accepting a proposal?',
        content: `<p class="color-cape-cod">Yes, however we charge a $750 design deposit fee, if you choose to go with us we will credit this fee to your account.</p><p class="color-cape-cod">When do you start the design? After you have accepted our proposal, your Project Consultant will reach out to you to set up a time to look at pavers, upon choosing pavers we will start to build your design with a turnaround of approximately 1 week.</p>`
      }, {
        name: 'Can I edit my design if I don’t like it?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes of course, we strive to nail the design on the first round, however we know things change and we are flexible with our customers.</p>`
      }, {
        name: 'Could you include plant designs around the hardscape design?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we typically always include a plant option around our hardscape designs, even if you are not interested in any landscaping at this time, it provides many customers a vision for the future.</p>`
      }, {
        name: 'Can you provide a plant list if we want to install the plants ourselves?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, just ask your Project Consultant for a plant list.</p>`
      }, {
        name: 'Do the colors and styles on the design match my materials 100%?',
        content: `<p class="color-cape-cod m-0 mt-10">No, so far there is no software that does a perfect job of matching 100%. This is why we always recommend seeing pavers either in person or in real life pictures to make your final choice.</p>`
      }
    ],
  },
  {
    id: CustomerQuestionCategory.Construction,
    descriptions: [
      {
        name: 'Are all of your crews licensed and insured?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, all of our crews are licensed and insured to do business in your region.</p>`
      }, {
        name: 'How experienced are your crews?',
        content: `<p class="color-cape-cod m-0 mt-10">Each crew lead has a vested interest in completing your project 100% and has no less than 5 years of Hardscape experience, with many of our crew leaders having 10-15+ years of Hardscape experience.</p>`
      }, {
        name: 'Does United Hardscapes follow industry installation standards?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, United Hardscapes goes above and beyond industry standards when it comes to installation practices.</p>`
      }, {
        name: 'Do you do a Call Before You Dig?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, once your project is scheduled your Project Consultant will schedule a CBYD a week prior to your project start. It’s simple, it’s the law and it could save a life.</p>`
      }, {
        name: 'Do you pull permits for my project?',
        content: `<p class="color-cape-cod">No, Most hardscape projects do not require a permit and if there is any project that requires a permit we will work with the customer to provide all the required documentation for the permit but it is their responsibility to get the permit if they choose to.</p>`
      }, {
        name: 'Do I need to be home during construction?',
        content: `<p class="color-cape-cod m-0 mt-10">No, you do not have to be, but many customers do choose to be home for the experience.</p>`
      }, {
        name: 'Do you need power or access to my house?',
        content: `<p class="color-cape-cod m-0 mt-10">No, not typically.</p>`
      }, {
        name: 'What if I need to reach my Project Consultant on the day of the project?',
        content: `<p class="color-cape-cod m-0 mt-10">Typically your Project Consultant will be on the job site the morning of your project getting started to answer any questions you may have. You also will have your Project Consultants direct contact number.</p>`
      }, {
        name: 'Does the installation process change based on my location?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, Depending upon your soil, subsoil, drainage and region there are minor changes to the installation process, however each crew and Project Consultant is educated on “Local” best practices and customers have project specific specifications.</p>`
      }, {
        name: 'What makes your install process better than others?',
        content: `<p class="color-cape-cod m-0 mt-10">It’s not about being better, it’s about being done right. Many contractors “Say” they do the base and installation one way but in reality they cut corners and don’t have a set procedure in place. United Hardscape’s crews each follow a detailed and documented procedure ensuring your hardscape project is installed properly.</p>`
      }, {
        name: 'How deep do you dig for your base?',
        content: `<p class="color-cape-cod m-0 mt-10">Soil conditions and location will dictate this, locations with more clay and non-drainable soil can expect excavation of no less than 15” where some areas with pure sand and little frost may be only 10” of excavation. Your Project Consultant will check your soil during the site visit and determine the proper excavation depth.</p>`
      }, {
        name: 'What does your installation process look like?',
        content: `<p class="color-cape-cod m-0 mt-10">Visit our “How it works” section to view the full installation process with photos.</p>`
      }, {
        name: 'What time will the crew arrive?',
        content: `<p class="color-cape-cod m-0 mt-10">Our crews typically arrive between 7 and 7:30am and wrap the day up between 5 and 6pm.</p>`
      }, {
        name: 'Do you remove and reinstall fences?',
        content: `<p class="color-cape-cod m-0 mt-10">Typically we ask the customer to move fence sections prior to our arrival, however in certain situations we can remove fences or coordinate a fence company to assist with the removal or fence. Additional fees may apply*</p>`
      }, {
        name: 'Do you demo decks?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, if there is a deck in the way of where the patio is going, we can have our crews remove the deck and place it somewhere on the property or toss it in a dumpster. Additional fees may apply*</p>`
      }, {
        name: 'Do you remove old concrete or pavers?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we can remove and haul out old concrete and pavers from existing areas. Additional fees may apply*</p>`
      }, {
        name: 'How big is the equipment you use?',
        content: `<p class="color-cape-cod m-0 mt-10">Each job is different and we have a range of equipment sizes to complete most projects. Depending upon the scope of your project your Project Consultant will have more details on the exact equipment that will be on site. However, most equipment is smaller Bobcat skid steers and excavators.</p>`
      }, {
        name: 'How much room do you need to get into my yard?',
        content: `<p class="color-cape-cod m-0 mt-10">The more room the better, but we understand some people have fences, tight yards or hard to reach areas. We typically need at least 8’ of width for machine access. If you're not sure you can always send us a photo and we will determine the proper direction for you including whether it can be done by hand or other special request.</p>`
      }, {
        name: 'Will my yard be ruined?',
        content: `<p class="color-cape-cod m-0 mt-10">We do our best to only “tear up” the work area, and slightly around it however this construction and there is heavy equipment so yes, you will have sections of your yard that will need to be re-seeded. We do our best to not “Ruin” yards and simply stay in our “Work area”.</p>`
      }, {
        name: 'Do you fix yards after your project is completed?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, this is already priced into all of our projects and is not a random surprise at the end. We leave yards with fresh topsoil and racked out ready for seed.</p>`
      }, {
        name: 'Do you install grass seed?',
        content: `<p class="color-cape-cod m-0 mt-10">No, we have made it a company policy many years ago that we do not install grass seed simply because it’s too hard to match everyone's yard. However, we do offer a separate hydro seeding and sod installation service.</p>`
      }, {
        name: 'Is there a better time of the year to complete my project?',
        content: `<p class="color-cape-cod m-0 mt-10">No, as long as the ground is not frozen (Winter up north) we are able to install hardscaping. We do try and time large projects around weather but in general it’s always a good time to install hardscaping.</p>`
      }, {
        name: 'What happens if I have sprinklers in the way?',
        content: `<p class="color-cape-cod m-0 mt-10">We “cut” sprinkler lines that we encounter and leave them exposed on each side so that the sprinkler company can come in when we are complete and re-attach the lines together around the hardscape project.</p>`
      }, {
        name: 'I might want power under my patio or walkway. What do I need to do?',
        content: `<p class="color-cape-cod m-0 mt-10">Simply let your Project Consultant know of this and he will coordinate with the crew lead to ensure proper conduit is in place during construction.</p>`
      }, {
        name: 'I want to include electric and gas into my patio design, is this complicated?',
        content: `<p class="color-cape-cod m-0 mt-10">This does add another layer of complexity to the project, your Project Consultant will guide you on local laws and regulations. However, this request is becoming more and more popular and we can easily coordinate this part of the project.</p>`
      }, {
        name: 'Can you tear out bushes and do landscaping installation?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes we can tear out bushes, and yes as long as the plant design is coordinated as part of the overall project we can complete the project both Hardscape and Landscape construction. Additional fees may apply*</p>`
      }, {
        name: 'Do you mow lawns, plow snow, cut trees, remove stumps, do general landscaping?',
        content: `<p class="color-cape-cod m-0 mt-10">No, United Hardscapes offer a unique service where we focus on strictly hardscaping and landscape construction.</p>`
      }, {
        name: 'Do you install concrete?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we have dedicated concrete crews that install poured concrete.</p>`
      }, {
        name: 'Do you work with natural stone?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we work with all sorts of natural stone, from basic fieldstone and boulder walls, to veneer, bluestone, brownstone, granite and more. Simply ask your Project Consultant if you have a particular material in mind so they can educate you on the pros and cons of such a choice.</p>`
      }, {
        name: 'Do you offer landscape lighting?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we do landscape and hardscape lighting when it is designed into the original project. We do not offer this type of service on it's own.</p>`
      }, {
        name: 'What happens if I want to change something during construction?',
        content: `<p class="color-cape-cod m-0 mt-10">Reach out to your Project Consultant as soon as possible so he can advise the crew lead and reach out to you to discuss changes.</p>`
      }, {
        name: 'What happens if there is a rain day?',
        content: `<p class="color-cape-cod m-0 mt-10">Most of the time our crews can work in light rain and it has no structural effect to the installation of your project. However, on heavy rain days your project would be pushed back just a day or two until the project space has dried.</p>`
      }, {
        name: 'How long will it take the crew to complete my project, once they start?',
        content: `<p class="color-cape-cod m-0 mt-10">Each project varies based on the size and scope. However, we can ensure that once a crew starts your project they are committed to completing it in a timely manner. We do not start and “bounce” between projects nor do we multiple projects going on at the same time with any of our crews. This ensures a dedicated and focused team completing your project.</p>`
      }, {
        name: 'What happens when my project is complete?',
        content: `<p class="color-cape-cod m-0 mt-10">Your Project Consultant will complete a project walkthrough with you ensuring you are satisfied with everything and going over any questions you may have about your project.</p>`
      }
    ],
  },
  {
    id: CustomerQuestionCategory.ChoosingMaterials,
    descriptions: [
      {
        name: 'What is your idea board?',
        content: `<p class="color-cape-cod m-0 mt-10">Our inspiration board is a collection of projects we have completed over the years and is a great resource for customers who are looking for ideas, trying to choose colors or who want to compare different materials. Our idea board acts similar to Pinterest and it allows you to “save” photos directly to your account so that you can share these ideas with loved ones or your Project Consultant.</p>`
      }, {
        name: 'How do I pick out materials?',
        content: `<p class="color-cape-cod m-0 mt-10">There are multiple options to choosing materials, because of our huge selection of photos some customers choose to pick out their materials right online from our (Idea board link), other customers want to see the materials in person. Once you have accepted the project proposal your Project Consultant will reach out to you and set up a time to meet with you at a local display center where you can see all the available options.</p>`
      }, {
        name: 'Do you bring samples of pavers?',
        content: `<p class="color-cape-cod m-0 mt-10">If you have an idea of the paver and color you want, it is possible for a Project Consultant to bring samples over for you to view during the site visit, however it’s suggested to see pavers in a larger area and laid out on display.</p>`
      }, {
        name: 'Do you have a showroom near me?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, if we service your area, then we have a local show area. Your Project Consultant will advise you of the closest location.</p>`
      }, {
        name: 'Why are pavers better than concrete in most applications?',
        content: `<p class="color-cape-cod">Please visit our “Pavers vs Concrete” section to learn more.</p>`
      }, {
        name: 'Can I mix colors?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, in fact we encourage it. When you choose different color borders, inlays or even designs, it takes a basic patio and raises it to the next level.</p>`
      }, {
        name: 'Can I mix brands?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, there are some limitations that your Project Consultant can explain to you, however we mix brands all the time to bring uniqueness to many of our projects.</p>`
      }, {
        name: 'Do you have an area where we can view veneer samples?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, most of our suppliers also carry a large selection of natural stone and veneer.</p>`
      }, {
        name: 'Should I choose my pavers or wall material first?',
        content: `<p class="color-cape-cod m-0 mt-10">It depends on the size and scope of the project. Most of the time if the paver is the main area and you are just looking for sitting wall colors, we suggest choosing the paver color and style first since this will be your focal point, however if you were doing a large retaining wall and walkway, you're retaining wall would be the focal point so in this case it would be best to choose wall materials first. In either case your Project Consultant will help you in the process.</p>`
      }, {
        name: 'Do you recommend a border paver?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, 100% even if it's just the same color we always recommend a border paver as it helps to secure any small cuts you may have and structurally improves the patio.</p>`
      }, {
        name: 'Can you help me choose materials?',
        content: `<p class="color-cape-cod m-0 mt-10">Of course! Your Project Consultant is trained to know what to look for when they do a site visit to your house in order to design and choose the best colors, sizes and style for your house and neighborhood.</p>`
      }, {
        name: 'Do wider gapped pavers require more maintenance?',
        content: `<p class="color-cape-cod m-0 mt-10">No, polymeric sand is used between all paver joints and is good for up to 4” wide ensuring any paver you choose will have the same low maintenance.</p>`
      }, {
        name: 'What type of maintenance will I have on my pavers?',
        content: `<p class="color-cape-cod m-0 mt-10">Typically, the only maintenance will be to re-apply polymeric sand every 2-3 years.</p>`
      }
    ],
  },
  {
    id: CustomerQuestionCategory.Platform,
    descriptions: [
      {
        name: 'Why do I have a login to my account?',
        content: `<p class="color-cape-cod m-0 mt-10">We believe in keeping things secure, and hardscape projects are like investments so keeping things secure, organized and easy for you to find is the purpose of your account. (Along with many other perks)</p>`
      }, {
        name: 'I am having trouble logging into my account. What do I do?',
        content: `<p class="color-cape-cod m-0 mt-10">First confirm you are using the right email, then reset your password or if you continue to have trouble logging in please <a class="text-primary font-weight-bold ${ archincerRoutes.landingPages.contactUs }" id="navigate" (click)="navigate()">“Contact us”</a>.</p>`
      }, {
        name: 'Can I have more than one project?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we can provide you a quote on 1 or multiple projects.</p>`
      }, {
        name: 'I submitted an estimate request but did not get a response?',
        content: `<p class="color-cape-cod m-0 mt-10">We respond to 100% of our estimate requests within 48 hours. If you did not get a response from us, please check your Spam folder first and <a class="text-primary font-weight-bold ${ archincerRoutes.landingPages.contactUs }" id="navigate" (click)="navigate()">“contact us”</a> if it’s not there.</p>`
      }, {
        name: 'What happens if I decline an estimate?',
        content: `<p class="color-cape-cod">You will be asked why you declined the estimate so we can better understand the reasons and better serve our customers in the future and you will be removed from our follow up list.</p>`
      }, {
        name: 'What happens when I accept an estimate?',
        content: `<p class="color-cape-cod m-0 mt-10">You will be instructed to either accept the proposed “Site visit” date and time or message the Project Consultant to coordinate a time that works best.</p>`
      }, {
        name: 'What if I don’t have enough information provided in the estimate?',
        content: `<p class="color-cape-cod m-0 mt-10">Some people simply have no idea where to start, and there is nothing wrong with that. As long as you submit your contact information a Project Consultant will reach out to you to gather more information.</p>`
      }, {
        name: 'Can I send you pictures of my yard/work area?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we actually encourage it as it helps with initial estimates. You will be able to submit photos during the estimate request and if you have any trouble you could text the photos to your assigned Project Consultant.</p>`
      }, {
        name: 'How can you do estimates without seeing my site?',
        content: `<p class="color-cape-cod m-0 mt-10">Given our industry experience we have streamlined our pricing process so that its simplified and with today's technology we are able to get a good overall view of your site. With our detailed estimate questionnaire we are typically able to provide you a pretty good idea of the costs, so you can decide if it’s within your budget and move forward to a site visit.</p>`
      }, {
        name: 'Why do you do estimates before site visits?',
        content: `<p class="color-cape-cod m-0 mt-10">To save time, most customers don’t have a budget in mind yet or even know the rough costs of a project like this, many even get a number and then wait 2 to 3 years to move forward. There's nothing wrong with this, however by doing this digitally first we are able to provide customers the same amount of education and save busy customers valuable time.</p>`
      }, {
        name: 'I have a site visit scheduled but need to change it, What do I do?',
        content: `<p class="color-cape-cod m-0 mt-10">Reach out and send a message to your Project Consultant through the platform or via email and let them know you need to change the date or time and they will coordinate a new date for you.</p>`
      }, {
        name: 'It\'s raining on my site visit day, will you still be coming to conduct the site visit?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, unless you would like to reschedule or unless your Project Consultant has notified you in advance you should plan as if your site visit is still on schedule.</p>`
      }, {
        name: 'How long do site visits take?',
        content: `<p class="color-cape-cod m-0 mt-10">This depends on the scope of the project, however most site visits will take between 30-60 min.</p>`
      }, {
        name: 'Can you look at additional projects that were not in the original scope of the project?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes many times we get out to customers houses and things get added on or changed during the site visit. This is not a problem and we plan for it.</p>`
      }, {
        name: 'Can you help me lay out my design during the site visit?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we always bring paint for this reason, one of the best ways to visualize the “Size” of your project is by laying it out first, your Project Consultant will help you get a true visualization of your project.</p>`
      }, {
        name: 'My site visit is complete, when can I expect my final proposal?',
        content: `<p class="color-cape-cod m-0 mt-10">Typically proposals are received within 48 hours of the site visit unless noted otherwise by your Project Consultant.</p>`
      }, {
        name: 'I have a question or want to change something on the proposal. What do I do?',
        content: `<p class="color-cape-cod m-0 mt-10">Just message your Project Consultant and they will discuss changes and simply update the proposal. You will automatically get an email once the proposal has been updated.</p>`
      }, {
        name: 'Are the start dates on my proposal “set” dates?',
        content: `<p class="color-cape-cod m-0 mt-10">No, these are tentative dates but it will be in this time frame. Because our industry is weather dependent we can’t give “Exact” start days till approximately 1 week before we are starting.</p>`
      }, {
        name: 'Can I request certain start dates?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we do make accommodations for people and do our best to complete the projects by the desired date.</p>`
      }, {
        name: 'Can I reserve a project spot for later in the season or next year?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we have many customers who plan well in advance. For this, we require a 10% deposit and we will lock your requested project start date.</p>`
      }, {
        name: 'What happens if I decline the proposal?',
        content: `<p class="color-cape-cod m-0 mt-10">You will be asked why you declined the estimate so we can better understand the reasons and better serve our customers in the future and you will be removed from our follow up list.</p>`
      }, {
        name: 'What happens if I accept the proposal?',
        content: `<p class="color-cape-cod m-0 mt-10">You will be asked to confirm you’ve reviewed and understand the proposal and you will be instructed to make the first 10% deposit.</p>`
      }, {
        name: 'I’ve accepted the proposal, what happens next?',
        content: `<p class="color-cape-cod m-0 mt-10">Your Project Consultant will reach out to you within 48 hours to set up a time to look at materials.</p>`
      }, {
        name: 'I want to change something to my proposal. What happens?',
        content: `<p class="color-cape-cod m-0 mt-10">No problem, customers do change orders all the time. Reach out to your Project Consultant so they can create a ticket.</p>`
      }, {
        name: 'My project has been scheduled, do I need to do anything?',
        content: `<p class="color-cape-cod m-0 mt-10">Not at this time, in the background we are coordinating materials, crews and logistics for your project and don’t need anything from you until the start date.</p>`
      }, {
        name: 'My project started today, what happens now?',
        content: `<p class="color-cape-cod m-0 mt-10">You will receive an email requesting Milestone 2 payment usually around mid day on the start day. Please make payment accordingly.</p>`
      }, {
        name: 'Will my Project Consultant be on the job site?',
        content: `<p class="color-cape-cod m-0 mt-10">No typically, though they do check in with the crews and they do the final walkthrough with you.</p>`
      }, {
        name: 'What if I have a question about my project or want to make a slight change?',
        content: `<p class="color-cape-cod m-0 mt-10">Simply reach out to your Project Consultant either through the platform, email, text or phone. Project Consultants prioritize active job sites to ensure efficiency.</p>`
      }, {
        name: 'My project is complete, what happens now?',
        content: `<p class="color-cape-cod m-0 mt-10">Your Project Consultant will do a final walk through.Upon completion of the walkthrough you will receive an email requesting final payment “Milestone 3” If there were any adjustments to your project this is where you will see the change orders.</p>`
      }, {
        name: 'Can I leave a review about my project?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we encourage it and have this built into our platform so at the end of each project we can get an idea of where we did excellent and of course where we could improve. We appreciate all feedback and testimonials.</p>`
      }, {
        name: 'Do you have a referral program?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes we do, please ask your Project Consultant about this. Typically we can provide cash, gift cards or credit on a future project. Amount varies depending on the scope of the project.</p>`
      }
    ],
  },
  {
    id: CustomerQuestionCategory.Pricing,
    descriptions: [
      {
        name: 'How is your pricing structured?',
        content: `<p class="color-cape-cod m-0 mt-10">Simply, we were one of the first hardscapers to push for more simplified pricing in the industry and even with pushback from competitors we have seen the industry over the years also shift to this more simplified model of per square foot, per linear foot, per unit etc. We have now simplified things even more so that when you receive your estimate or proposal you know exactly how your project breaks down.</p>`
      }, {
        name: 'Do you charge extra for borders or mixing color/styles?',
        content: `<p class="color-cape-cod m-0 mt-10">No, we are one of the few companies that don’t extra for this. In fact, we encourage this type of design, since it adds to the overall look of the project with additional cost.</p>`
      }, {
        name: 'Do you charge more for different types of pavers?',
        content: `<p class="color-cape-cod m-0 mt-10">Not usually, we try to give customers as many options and flexibility as possible when choosing pavers. Typically any paver you see in our catalog will be included in your estimate/proposal price. Unless you choose a “wetcast” which we do not recommend (Ask your Project Consultant why) then there would be additional costs.</p>`
      }, {
        name: 'Does your price include topsoil and clean up?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes it does, unless otherwise noted your quote/proposal includes topsoil and clean up.</p>`
      }, {
        name: 'Do I have to pay sales tax?',
        content: `<p class="color-cape-cod">If your state collects sales tax for this service then yes, we follow all state guidelines with sales tax. If this is new construction there are additional exemptions that your Project Consultant can discuss with you.</p>`
      }, {
        name: 'If I buy the material can you do the labor?',
        content: `<p class="color-cape-cod m-0 mt-10">Not typically. We have a system and process in place where we maximize our time and efficiency  with orders, logistics and material quantity and most customers who “order material” on their own cause us more delays than its worth so we handle all material orders.</p>`
      }, {
        name: 'Can you give me a price for excavation only?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we can provide you an estimate for excavation only.</p>`
      }, {
        name: 'Can you provide me a price on leveling the base and I will install the pavers on my own?',
        content: `<p class="color-cape-cod m-0 mt-10">No, for many reasons we simply don’t provide this service.</p>`
      }, {
        name: 'Can I pay with cash or check?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes</p>`
      }, {
        name: 'Is there any discount for a check payment?',
        content: `<p class="color-cape-cod m-0 mt-10">No</p>`
      }, {
        name: 'Can I pay with multiple credit cards?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, reach out to your Project Consultant to coordinate this.</p>`
      }, {
        name: 'Can I pay with a Check and Credit Card?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes you can pay for your project with multiple forms of payment.</p>`
      }, {
        name: 'Are initial deposits refundable?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, initial deposits are refundable as long as the materials were not special order and already ordered.</p>`
      }, {
        name: 'Do you offer financing?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, please reach out to your Project Consultant to learn more about the financing options and rates available.</p>`
      }, {
        name: 'Do you accept crypto currency like bitcoin as a form of payment?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes we do and can provide wallet instructions upon request.</p>`
      }, {
        name: 'Do you provide bulk discounts?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, depending on the scope of the project, if we do both front and back yards at the same time or a certain amount we are able to start to apply bulk discounts. Your Project Consultant will be able to provide you with additional details specific to your project.</p>`
      }, {
        name: 'I have a new construction project. Do you offer any discounts?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, as long as we are in prior to the yard being completed we are usually able to provide some additional discounts.</p>`
      }, {
        name: 'We have a new pool that needs a patio, do you offer any discounts?',
        content: `<p class="color-cape-cod m-0 mt-10">If you are doing new pool construction there is a way to cut down on costs by coordinating the project together between us and the pool builder. To learn more about this reach out to your Project Consultant for full details.</p>`
      }
    ],
  },
];
