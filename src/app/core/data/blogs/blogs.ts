import { TypeOfBlogCategory } from '../../models/blog';
import { homeownersHowToMake } from './contents/homeowners-how-to-make';
import { saveTimeAndMoney } from './contents/save-time-and-money';
import { top6WaysToSaveMoney } from './contents/top-6-ways-to-save-money';
import { findTheBestContractor } from './contents/find-the-best-contractor';
import { whatFactorsInToCost } from './contents/what-factors-into-cost';
import { howYourUnitedHardscapes } from './contents/how-your-united-hardscapes';
import { answersToTheMostCommon } from './contents/answers-to-the-most-common';

export const blogRedirects = {
  'how-your-united-hardscapes': 'manage-your-hardscape-project',
  'what-factors-into-cost': 'project-cost-factors',
  'top-6-ways-to-save-money': 'save-money-on-your-hardscape-project',
  'save-time-and-money': 'working-with-a-project-consultant',
  'homeowners-how-to-make': 'how-to-make-the-most-out-of-united-hardscapes',
  'answers-to-the-most-common': 'when-to-start-my-hardscape-project-qa',
};

export const blogs = [
  {
    id: TypeOfBlogCategory.Homeowners,
    articles: [
      {
        id: 'how-to-make-the-most-out-of-united-hardscapes',
        title: 'Homeowners - How to Make the Most Out of United Hardscapes Website',
        category: TypeOfBlogCategory.Homeowners,
        description: 'If you’ve ever planned a hardscape project, you’re familiar with the challenges that come with it. It starts with trying to find the best contractor for your project, then there’s the struggle of coordinating estimates and trying to find prices within your budget, and that’s only the beginning.',
        thumbnail: 'homeowners-how-to-make/thumbnail.png',
        mainImage: 'homeowners-how-to-make/main.png',
        content: homeownersHowToMake
      },
    ],
    order: 5
  }, {
    id: TypeOfBlogCategory.ProjectConsultant,
    articles: [
      {
        id: 'working-with-a-project-consultant',
        title: 'Save Time and Money Working With a Project Consultant',
        category: TypeOfBlogCategory.ProjectConsultant,
        description: 'When it comes to hardscapes, most people don’t even know what it is or the options they have to choose from, never mind knowing how to plan a hardscape project. Others will find it difficult to decide on a design, materials or how much budget to allocate to execute their vision.',
        thumbnail: 'save-time-and-money/thumbnail.png',
        mainImage: 'save-time-and-money/main.png',
        content: saveTimeAndMoney
      }, {
        id: 'save-money-on-your-hardscape-project',
        title: 'Top 6 Ways to Save Money on Your Hardscape Project',
        category: TypeOfBlogCategory.ProjectConsultant,
        description: 'Are you thinking about enhancing your backyard with a new hardscape project? Before you start creating your exciting new outdoor living space, there are a few things you should know. It’s easy to accidentally exceed your project budget, so we’ve made a list of the top 6 ways to help you keep your final cost down.',
        thumbnail: 'top-6-ways-to-save-money/thumbnail.png',
        mainImage: 'top-6-ways-to-save-money/main.png',
        content: top6WaysToSaveMoney
      },
    ],
    order: 4
  }, {
    id: TypeOfBlogCategory.BudgetManagement,
    articles: [
      {
        id: 'project-cost-factors',
        title: 'What Factors into the Cost of Your Project',
        category: TypeOfBlogCategory.BudgetManagement,
        description: 'When planning a hardscape project, have you ever wondered why estimates from different contractors vary yet the project description remains the same?',
        thumbnail: 'what-factors-into-cost/thumbnail.png',
        mainImage: 'what-factors-into-cost/main.png',
        content: whatFactorsInToCost
      }
    ],
    order: 3
  }, {
    id: TypeOfBlogCategory.Platform,
    articles: [
      {
        id: 'manage-your-hardscape-project',
        title: 'How Your United Hardscapes Account Can Help Manage Your Hardscape Project',
        category: TypeOfBlogCategory.Platform,
        description: 'You’ve been saving up for your new outdoor living space, you’ve spent months searching for ideas and inspiration for a new hardscape project. You’ve finally made the decision, and know exactly what you’re looking for. Now it’s time to move forward with your hardscape project!',
        thumbnail: 'how-your-united-hardscapes/thumbnail.png',
        mainImage: 'how-your-united-hardscapes/main.png',
        content: howYourUnitedHardscapes
      },
    ],
    order: 2
  }, {
    id: TypeOfBlogCategory.Contractors,
    articles: [
      {
        id: 'find-the-best-contractor',
        title: 'Find the Best Contractor For Your Hardscape Project',
        category: TypeOfBlogCategory.Contractors,
        description: 'Planning a hardscape project is exciting! You get to look at photos to get ideas, talk about the possibilities with your spouse, friends and family and visualize yourself outside enjoying your new outdoor living space.  The only problem is, you still need to find the perfect contractor who can turn your dream into reality.',
        thumbnail: 'find-the-best-contractor/thumbnail.png',
        mainImage: 'find-the-best-contractor/main.png',
        content: findTheBestContractor
      },
    ],
    order: 1
  }, {
    id: TypeOfBlogCategory.Customers,
    articles: [
      {
        id: 'when-to-start-my-hardscape-project-qa',
        title: '7 Answers to the Most Common "When To Start My Project" Questions',
        category: TypeOfBlogCategory.Customers,
        description: 'When it comes to timing your outdoor living project we get questions all the time about when the project should be completed. Not just about when as in “time of the year” but as in coordinating with other projects. So we decided to put together a list of the 7 most common “When questions” to help customers get a better understanding of just “when” their project should start and why.',
        thumbnail: 'answers-to-the-most-common/thumbnail.png',
        mainImage: 'answers-to-the-most-common/main.png',
        content: answersToTheMostCommon
      },
    ],
    order: 6
  },
];
