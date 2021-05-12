import { ContractorQuestionCategory } from '../models/faqs';
import { archincerRoutes } from './routes';

export const contractorFaqs = [
  {
    id: ContractorQuestionCategory.AboutUnitedHardscapes,
    descriptions: [
      {
        name: 'What is United Hardscapes?',
        content: `<p class="color-cape-cod m-0 mt-10">United Hardscapes is the largest outdoor living services and materials marketplace in North America. </p>`
      }, {
        name: 'How does United Hardscapes help contractors?',
        content: `<p class="color-cape-cod m-0 mt-10">We provide contractors with ready to go projects, no bidding, no estimates, fair set pricing with quick payments. </p>`
      }, {
        name: 'Are there any costs or fees to join United Hardscapes?',
        content: `<p class="color-cape-cod m-0 mt-10">No, United Hardscapes is free to join and there are no membership fees. </p>`
      }, {
        name: 'Is United Hardscapes contractor-friendly?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, United Hardscapes was built by hardscapers for hardscapers and it's our goal to make it easier for hardscapers to get more jobs done.</p>`
      }, {
        name: 'Can contractors access United Hardscapes Material Marketplace?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, contractors, whether they are Authorized Contractors or not, have access to purchase materials through our online marketplace. </p>`
      }, {
        name: 'What if you\'re not in my area yet, can I still apply?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we are growing rapidly even if we are not serving your area yet, we will put you on a waiting list and notify you when it is time to continue the application process. </p>`
      }
    ],
  },
  {
    id: ContractorQuestionCategory.ApplyingToUnitedHardscapes,
    descriptions: [
      {
        name: 'What type of contractors are you looking for?',
        content: `<p class="color-cape-cod m-0 mt-10">We are looking for passionate hardscapers who are looking to grow their business and lay more blocks each season.</p>`
      }, {
        name: 'How do I apply?',
        content: `<p class="color-cape-cod m-0 mt-10">Simply fill out <a class="text-primary font-weight-bold ${ archincerRoutes.landingPages.requestApplication }" id="navigate" (click)="navigate()">this application</a> and tell us about your company, we will reach out to you within 24 hours after receiving your application.</p>`
      }, {
        name: 'Do I have to be licensed and insured?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we will require supporting documentation.</p>`
      }, {
        name: 'Does everyone who applies get accepted?',
        content: `<p class="color-cape-cod m-0 mt-10">No, we have a strict vetting process and limit the number of contractors per territory to ensure our authorized contractors stay busy all season long. </p>`
      }
    ],
  },
  {
    id: ContractorQuestionCategory.UnitedHardscapesProjectsPayments,
    descriptions: [
      {
        name: 'Do I have to bid on projects?',
        content: `<p class="color-cape-cod m-0 mt-10">No, projects come with preset installation values.</p>`
      }, {
        name: 'Can I view the project before I accept it?',
        content: `<p class="color-cape-cod m-0 mt-10"> Yes, all projects come with a detailed project description and photos. </p>`
      }, {
        name: 'How do you price projects?',
        content: `<p class="color-cape-cod m-0 mt-10">Each project is individually priced and offered at fair market values for installations.</p>`
      }, {
        name: 'Do I work with the customer at all?',
        content: `<p class="color-cape-cod m-0 mt-10">No, United Hardscapes has a Project Consultant assigned to each project who works with the customer and who is your direct report in case of any questions. </p>`
      }, {
        name: 'How do you decide who gets what project?',
        content: `<p class="color-cape-cod m-0 mt-10">We have an algorithm that uses your past projects to match you to the best upcoming projects. The more work and better reviews you get, the more projects you will receive.</p>`
      }, {
        name: 'When can I expect payment for a completed project?',
        content: `<p class="color-cape-cod m-0 mt-10">Once a project is signed off on, payments are received typically within 24 to 48 hours.</p>`
      }
    ],
  },
  {
    id: ContractorQuestionCategory.GrowthAndLimitations,
    descriptions: [
      {
        name: 'Do I have to have my own equipment?',
        content: `<p class="color-cape-cod m-0 mt-10">You will need the proper equipment to become an Authorized Contractor. Equipment rental or leasing is acceptable in certain situations.</p>`
      }, {
        name: 'How many years of experience is required?',
        content: `<p class="color-cape-cod m-0 mt-10"> We require contractors to have a minimum of 5 years experience owning/operating a company or Hardscape Foreman experience.</p>`
      }, {
        name: 'I want to start a hardscape company. Can you help me?',
        content: `<p class="color-cape-cod m-0 mt-10">Potentially, based on your past experience and financial situation we may be able to help you fast track your hardscape company.</p>`
      }, {
        name: 'What brands and types of materials do you work with?',
        content: `<p class="color-cape-cod m-0 mt-10">We work with all the major brands and many of the smaller regional brands. We are looking for contractors who can be specialized in any of the following categories: pavers, masonry, concrete work, stamped concrete, and landscape construction. </p>`
      }, {
        name: 'Do I have to fully commit to United Hardscapes all season?',
        content: `<p class="color-cape-cod m-0 mt-10">No, you can take on as few or as many projects as you want.</p>`
      }, {
        name: 'Can I have more than one crew? ',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, if your company is in good standing and you can handle additional work, United Hardscapes can help you fill projects for additional crews.</p>`
      }, {
        name: 'How many projects will you send out per season?',
        content: `<p class="color-cape-cod m-0 mt-10">This number varies based on your skillset and local market conditions.</p>`
      }, {
        name: '',
        content: `<p class="color-cape-cod m-0 mt-10"></p>`
      },
    ],
  },
  {
    id: ContractorQuestionCategory.OnsiteOperations,
    descriptions: [
      {
        name: 'Do I have to follow any rules?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, there are certain rules we require all contractors to follow that include wearing UH gear, acting respectfully at all times, no smoking on job sites, etc. All contractors will be required to sign legal paperwork that details all the requirements to remain in good standing with United Hardscapes.</p>`
      }, {
        name: 'Do I have to meet onsite before the project starts?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, upon accepting a project, the Project Consultant will set up a time to meet with you onsite and go over all the details.</p>`
      }, {
        name: 'How do I know I\'m doing the project right?',
        content: `<p class="color-cape-cod m-0 mt-10">Outside of our initial training and education of our standard operating procedures, we provide a digital “mobile” checklist for each project guiding you every step of the way. </p>`
      }, {
        name: 'Do I have to document my progress?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, there are certain “milestone” steps where we require contractors to take photos of their progress. </p>`
      }, {
        name: 'How do I document my progress?',
        content: `<p class="color-cape-cod m-0 mt-10">When you come to a photo request, simply follow the instructions and upload the photos from your phone. </p>`
      }, {
        name: 'How do I request payment?',
        content: `<p class="color-cape-cod m-0 mt-10">At the end of the milestones, you will find a button to request final payment. </p>`
      }, {
        name: 'Do you provide any training?',
        content: `<p class="color-cape-cod m-0 mt-10">Yes, we offer a few different training options based on your location and experience level. Please ask your Hardscape Recruiter if you are interested. </p>`
      }, {
        name: 'Will we have a supervisor?',
        content: `<p class="color-cape-cod m-0 mt-10">No, you are responsible for your own projects. However, before any changes are made, approvals must go through the assigned Project Consultant.</p>`
      },
    ],
  },
];
