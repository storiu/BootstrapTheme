export enum TypeOfBlogCategory {
  ProjectConsultant = 'PROJECT_CONSULTANT',
  Platform = 'PLATFORM',
  Contractors = 'CONTRACTORS',
  BudgetManagement = 'BUDGET_MANAGEMENT',
  Homeowners = 'HOMEOWNERS',
  Customers = 'CUSTOMERS',
}

export interface Article {
  id: string;
  title: string;
  category: TypeOfBlogCategory;
  description: string;
  thumbnail: string;
  mainImage: string;
  content: string;
}
