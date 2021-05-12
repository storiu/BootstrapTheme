export enum PageName {
  // landing pages
  HomePage = 'HOME_PAGE',
  RequestEstimatePage = 'REQUEST_ESTIMATE_PAGE',
  ContactUsPage = 'CONTACT_US_PAGE',
  RequestApplicationPage = 'REQUEST_APPLICATION',
  IdeaBoardPage = 'IDEA_BOARD_PAGE',
  AboutUsPage = 'ABOUT_US_PAGE',
  ServicesPage = 'SERVICES_PAGE',
  PatioPackagesPage = 'PATIO_PACKAGES_PAGE',
  PrivacyPolicyPage = 'PRIVACY_POLICY_PAGE',
  LegalNoticePage = 'LEGAL_NOTICE_PAGE'
}

export interface PageVisitHistory {
  id: string;
  page: PageName;
  sub?: string;
  createdAt: string;
  updatedAt: string;
}
