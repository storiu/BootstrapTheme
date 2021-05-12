export interface NavItem {
  label: string;
  route?: string;
  subMenus?: NavItem[];
  scrollPos?: string;
}
