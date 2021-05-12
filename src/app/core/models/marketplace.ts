import { Entity } from './base';

export interface ComingSoonContact {
  fullName: string;
  email: string;
  zipCode: number;
}


export enum OrderType {
  Quick = 'QUICK',
  Guided = 'GUIDED',
}

export enum MarketplaceOptionActionType {
  QuickOrder = 'QUICK_ORDER',
  GuidedOrder = 'GUIDED_ORDER',
  RequestEstimate = 'REQUEST_ESTIMATE'
}

export enum ProductCategory {
  Patio = 'PATIO',
  RetainingWall = 'RETAINING_WALL',
  Walkway = 'WALKWAY',
  Border = 'BORDER',
  Cap = 'CAP',
  Coping = 'COPING',
  StepUnit = 'STEP_UNIT',
  StepTread = 'STEP_TREAD',
  BaseMaterial = 'BASE_MATERIAL',
  PaverAccessory = 'PAVER_ACCESSORY',
  RetainingWallAccessory = 'RETAINING_WALL_ACCESSORY',
  FirePit = 'FIRE_PIT',
  FirePlace = 'FIRE_PLACE',
  PillarKit = 'PILLAR_KIT',
  Kitchen = 'KITCHEN',
  BulkStone = 'BULK_STONE',
  BulkMulch = 'BULK_MULCH',
  BulkSoil = 'BULK_SOIL',
}

export enum BrandName {
  Cambridge = 'CAMBRIDGE',
  Nicolock = 'NICOLOCK',
  Belgard = 'BELGARD',
  UnilockNewEngland = 'UNILOCK_NEW_ENGLAND',
  TechoBloc = 'TECHO_BLOC',
}

export enum MarketingUnit {
  Unit = 'UNIT',
  SquareFeet = 'SQUARE_FEET',
  LinearFeet = 'LINEAR_FEET',
  Layer = 'LAYER',
  Kit = 'KIT',
  Yard = 'YARD',
  Ton = 'TON',
  Each = 'EACH',
}

export enum QuickOrderStep {
  BrandList = 'BRAND_LIST',
  ProductList = 'PRODUCT_LIST',
  ProductDetail = 'PRODUCT_DETAIL',
  ProcessOrder = 'PROCESS_ORDER',
  ProjectInfo = 'PROJECT_INFO',
  CompleteOrder = 'COMPLETE_ORDER',
}

export enum SizeClass {
  Small = 'SMALL',
  Medium = 'MEDIUM',
  Large = 'LARGE',
  Jumbo = 'JUMBO',
  Wall3InchesBlock = 'WALL_3_INCHES_BLOCK',
  Wall4InchesBlock = 'WALL_4_INCHES_BLOCK',
  Wall5InchesBlock = 'WALL_5_INCHES_BLOCK',
  Wall6InchesBlock = 'WALL_6_INCHES_BLOCK',
  Wall7InchesBlock = 'WALL_7_INCHES_BLOCK',
  Wall8InchesBlock = 'WALL_8_INCHES_BLOCK',
  Wall12InchesBlock = 'WALL_12_INCHES_BLOCK',
}

export enum PriceClass {
  Economy = 'ECONOMY',
  Popular = 'POPULAR',
  Special = 'SPECIAL',
}

export enum TextureType {
  Textured = 'TEXTURED',
  Smooth = 'SMOOTH',
}

export enum ColorClass {
  BlendedMultiTones = 'BLENDED_MULTI_TONES',
  BluestoneBlends = 'BLUESTONE_BLENDS',
  BrownTonesAndTans = 'BROWN_TONES_AND_TANS',
  GreyTones = 'GREY_TONES',
  RedTones = 'RED_TONES',
  EarthTones = 'EARTH_TONES',
}

export enum InstallLocationType {
  FrontYard = 'FRONT_YARD',
  BackYard = 'BACK_YARD',
  SideYard = 'SIDE_YARD',
  PartOfPatioDesign = 'PART_OF_PATIO_DESIGN',
  DrivewayLeftSide = 'DRIVEWAY_LEFT_SIDE',
  DrivewayRightSide = 'DRIVEWAY_RIGHT_SIDE',
  SpecialInstruction = 'SPECIAL_INSTRUCTION',
}

export enum MaterialPlacementType {
  PartOfPatioDesign = 'PART_OF_PATIO_DESIGN',
  DrivewayLeftSide = 'DRIVEWAY_LEFT_SIDE',
  DrivewayRightSide = 'DRIVEWAY_RIGHT_SIDE',
  DrivewayTurnAround = 'DRIVEWAY_TURN_AROUND',
  SpecialInstruction = 'SPECIAL_INSTRUCTION',
}

export enum BorderType {
  None = 'NONE',
  SameColor = 'SAME_COLOR',
  AccentColor = 'ACCENT_COLOR',
  DoubleSameColor = 'DOUBLE_SAME_COLOR',
}

export enum BasePackageType {
  EconomyBasePackage = 'ECONOMY_BASE_PACKAGE',
  ProfessionalBasePackage = 'PROFESSIONAL_BASE_PACKAGE',
}

export enum AccessoryPackageType {
  EconomyAccessoryPackage = 'ECONOMY_ACCESSORY_PACKAGE',
  ProfessionalAccessoryPackage = 'PROFESSIONAL_ACCESSORY_PACKAGE',
}

export enum GuidedOrderStep {
  MaterialSelect = 'MATERIAL_SELECT',
  BasePackage = 'BASE_PACKAGE',
  AccessoryPackage = 'ACCESSORY_PACKAGE',
  ProjectInfo = 'PROJECT_INFO',
  Complete = 'COMPLETE',
}

export enum ChooseMaterialStep {
  Project = 'PROJECT',
  Price = 'PRICE',
  Color = 'COLOR',
  Size = 'SIZE',
  Texture = 'TEXTURE',
  BestMatch = 'BEST_MATCH',
  Border = 'BORDER',
}

export interface MarketplaceOption {
  iconUrl: string;
  title: string;
  tipTitle: string;
  tipContent?: string;
  description: string;
  action: MarketplaceOptionActionType;
  actionPath?: string;
  buttonText: string;
}

export interface Brand extends Entity {
  name: BrandName;
  image: string;
}

export interface Product extends Entity {
  name: string;
  sizes: Array<string>;
  category: ProductCategory;
  unit: MarketingUnit;
  color: ProductColor;
  priceClass: PriceClass;
  sizeClass: SizeClass;
  textureType: TextureType;
  style: string;
  comment: string;
  brand: Brand;
  imageUrl: string;
  swatchUrl: string;
}

export interface ProductColor extends Entity {
  name: string;
  colorClass: ColorClass;
}

export interface ProductsQuery {
  category: ProductCategory;
  brand: BrandName;
  skip?: number;
  take?: number;
  sizeClass?: SizeClass;
  priceClass?: PriceClass;
  keyword?: string;
}

export interface CompanionQuery {
  category: ProductCategory;
  brand: BrandName;
  product_name: string;
}

export interface CartItem extends  Entity {
  product: Product;
  sizeOptionIndex: number;
  count: number;
}

export interface QuickOrderItem {
  productId: string;
  sizeOptionIndex: number;
  count: number;
}

export interface GuidedOrderItem {
  productCategory: ProductCategory;
  priceClass: PriceClass;
  colorClass: ColorClass;
  sizeClass: SizeClass;
  textureType: TextureType;
  productId: string;
  bestMatchProductIndex?: number; // frontend use only. the index number in best match result
  border: BorderType;
  basePackageType: BasePackageType;
  accessoryPackageType: AccessoryPackageType;
}

export interface MarketplaceOrder {
  type: OrderType;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  projectSize?: string;
  materialPlacementType: MaterialPlacementType;
  materialPlacementComment?: string;
  attachments: string[];
  comment: string;
  quickOrderItems: QuickOrderItem[];
  guidedOrderItems: GuidedOrderItem[];
}

export interface ProductWithColor {
  productId: string;
  colorId: string;
  productName: string;
  colorName: string;
  brandName: string;
}

export const guidedOrderStepLabels = {
  [GuidedOrderStep.MaterialSelect]: 'Choose Materials',
  [GuidedOrderStep.BasePackage]: 'Select Base Packages',
  [GuidedOrderStep.AccessoryPackage]: 'Select Accessory',
  [GuidedOrderStep.ProjectInfo]: 'Wrapping up your Project',
  [GuidedOrderStep.Complete]: 'Complete',
};

export const chooseMaterialStepLabels = {
  [ChooseMaterialStep.Project]: 'Select Projects',
  [ChooseMaterialStep.Price]: 'Price',
  [ChooseMaterialStep.Color]: 'Colors',
  [ChooseMaterialStep.Size]: 'Size',
  [ChooseMaterialStep.Texture]: 'Texture',
  [ChooseMaterialStep.BestMatch]: 'Best Match',
  [ChooseMaterialStep.Border]: 'Border',
};

export const basePackageTypeLabels = {
  [BasePackageType.EconomyBasePackage]: 'Economy Pack',
  [BasePackageType.ProfessionalBasePackage]: 'Professional Pack',
};

export const accessoryPackageTypeLabels = {
  [AccessoryPackageType.EconomyAccessoryPackage]: 'Economy Pack',
  [AccessoryPackageType.ProfessionalAccessoryPackage]: 'Professional Pack',
};

export const basePackageTypeCarousels = {
  [ProductCategory.Patio]: {
    [BasePackageType.EconomyBasePackage]: [
      { src: 'assets/images/marketplace/packages/patio-walkway/economy-base-package1-paver-walkway.png', altTag: 'Economy Package' },
      { src: 'assets/images/marketplace/packages/patio-walkway/economy-base-package2-paver-walkway.png', altTag: 'Economy Package' },
    ],
    [BasePackageType.ProfessionalBasePackage]: [
      { src: 'assets/images/marketplace/packages/patio-walkway/professional-base-package1-paver-walkway.png', altTag: 'Professional Package' },
      { src: 'assets/images/marketplace/packages/patio-walkway/professional-base-package2-paver-walkway.png', altTag: 'Professional Package' },
    ],
  },
  [ProductCategory.Walkway]: {
    [BasePackageType.EconomyBasePackage]: [
      { src: 'assets/images/marketplace/packages/patio-walkway/economy-base-package1-paver-walkway.png', altTag: 'Economy Package' },
      { src: 'assets/images/marketplace/packages/patio-walkway/economy-base-package2-paver-walkway.png', altTag: 'Economy Package' },
    ],
    [BasePackageType.ProfessionalBasePackage]: [
      { src: 'assets/images/marketplace/packages/patio-walkway/professional-base-package1-paver-walkway.png', altTag: 'Professional Package' },
      { src: 'assets/images/marketplace/packages/patio-walkway/professional-base-package2-paver-walkway.png', altTag: 'Professional Package' },
    ],
  },
  [ProductCategory.RetainingWall]: {
    [BasePackageType.EconomyBasePackage]: [
      { src: 'assets/images/marketplace/packages/retaining-wall/economy-base-package1-retaining-wall.png', altTag: 'Economy Package' },
      { src: 'assets/images/marketplace/packages/retaining-wall/economy-base-package2-retaining-wall.png', altTag: 'Economy Package' },
    ],
    [BasePackageType.ProfessionalBasePackage]: [
      { src: 'assets/images/marketplace/packages/retaining-wall/professional-base-package1-retaining-wall.png', altTag: 'Professional Package' },
      { src: 'assets/images/marketplace/packages/retaining-wall/professional-base-package2-retaining-wall.png', altTag: 'Professional Package' },
    ],
  },
};

export const accessoryPackageTypeCarousels = {
  [ProductCategory.Patio]: {
    [AccessoryPackageType.EconomyAccessoryPackage]: [
      { src: 'assets/images/marketplace/packages/patio-walkway/economy-accessory-package1-paver-walkway.png', altTag: 'Economy Package' },
      { src: 'assets/images/marketplace/packages/patio-walkway/economy-accessory-package2-paver-walkway.png', altTag: 'Economy Package' },
      { src: 'assets/images/marketplace/packages/patio-walkway/economy-accessory-package3-paver-walkway.png', altTag: 'Economy Package' },
    ],
    [AccessoryPackageType.ProfessionalAccessoryPackage]: [
      { src: 'assets/images/marketplace/packages/patio-walkway/professional-accessory-package1-paver-walkway.png', altTag: 'Professional Package' },
      { src: 'assets/images/marketplace/packages/patio-walkway/professional-accessory-package2-paver-walkway.png', altTag: 'Professional Package' },
      { src: 'assets/images/marketplace/packages/patio-walkway/professional-accessory-package3-paver-walkway.png', altTag: 'Professional Package' },
      { src: 'assets/images/marketplace/packages/patio-walkway/professional-accessory-package4-paver-walkway.png', altTag: 'Professional Package' },
    ],
  },
  [ProductCategory.Walkway]: {
    [AccessoryPackageType.EconomyAccessoryPackage]: [
      { src: 'assets/images/marketplace/packages/patio-walkway/economy-accessory-package1-paver-walkway.png', altTag: 'Economy Package' },
      { src: 'assets/images/marketplace/packages/patio-walkway/economy-accessory-package2-paver-walkway.png', altTag: 'Economy Package' },
      { src: 'assets/images/marketplace/packages/patio-walkway/economy-accessory-package3-paver-walkway.png', altTag: 'Economy Package' },
    ],
    [AccessoryPackageType.ProfessionalAccessoryPackage]: [
      { src: 'assets/images/marketplace/packages/patio-walkway/professional-accessory-package1-paver-walkway.png', altTag: 'Professional Package' },
      { src: 'assets/images/marketplace/packages/patio-walkway/professional-accessory-package2-paver-walkway.png', altTag: 'Professional Package' },
      { src: 'assets/images/marketplace/packages/patio-walkway/professional-accessory-package3-paver-walkway.png', altTag: 'Professional Package' },
      { src: 'assets/images/marketplace/packages/patio-walkway/professional-accessory-package4-paver-walkway.png', altTag: 'Professional Package' },
    ],
  },
  [ProductCategory.RetainingWall]: {
    [AccessoryPackageType.EconomyAccessoryPackage]: [
      { src: 'assets/images/marketplace/packages/retaining-wall/economy-accessory-package1-retaining-wall.png', altTag: 'Economy Package' },
      { src: 'assets/images/marketplace/packages/retaining-wall/economy-accessory-package2-retaining-wall.png', altTag: 'Economy Package' },
    ],
    [AccessoryPackageType.ProfessionalAccessoryPackage]: [
      { src: 'assets/images/marketplace/packages/retaining-wall/professional-accessory-package1-retaining-wall.png', altTag: 'Professional Package' },
      { src: 'assets/images/marketplace/packages/retaining-wall/professional-accessory-package2-retaining-wall.png', altTag: 'Professional Package' },
      { src: 'assets/images/marketplace/packages/retaining-wall/professional-accessory-package3-retaining-wall.png', altTag: 'Professional Package' },
    ],
  },
};
