import { enumToOptions } from '../utils/enum.util';
import { Opinion, Entity } from './base';
import { MaterialType } from './idea-board';
import { HardscapeBrand, WarrantyWorkmanShip } from './final-proposal';
import { DeclineReason, declineReasonLabels } from './decline';
import { User, UserSpecificProfile } from './auth';
import { Estimate } from './estimate';
import { SiteVisit } from './site-visit';
import { FinalProposal } from './final-proposal';
import { Milestone } from './milestone';

export enum ProjectAccessoryType {
  Steps = 'STEPS',
  SittingWall = 'SITTING_WALL',
  Pillars = 'PILLARS',
  Lighting = 'LIGHTING',
  Patio = 'PATIO',
  Walkway = 'WALKWAY',
  RetainingWall = 'RETAINING_WALL',
  PoolPatio = 'POOL_PATIO',
  FirePit = 'FIRE_PIT',
  DrivewayParking = 'DRIVEWAY_PARKING',
  Veneer = 'VENEER',
  Fireplace = 'FIREPLACE',
  OutdoorKitchen = 'OUTDOOR_KITCHEN',
  CleaningSanding = 'CLEANING_SANDING',
  MinorRepair = 'MINOR_REPAIR',
  LandscapingPlants = 'LANDSCAPING_PLANTS',
  StoneCurbing = 'STONE_CURBING',
  Other = 'OTHER',
}

// same as ProjectAccessoryType but available on idea board filter
export enum AvailableProjectAccessoryType {
  Patio = 'PATIO',
  Walkway = 'WALKWAY',
  PoolPatio = 'POOL_PATIO',
  RetainingWall = 'RETAINING_WALL',
  DrivewayParking = 'DRIVEWAY_PARKING',
}

export enum ProjectTimelineType {
  Immediately = 'IMMEDIATELY',
  About30Days = 'ABOUT_30_DAYS',
  About1To3Months = 'ABOUT_1_TO_3_MONTHS',
  About3To6Months = 'ABOUT_3_TO_6_MONTHS',
  MoreThan6Months = 'MORE_THAN_6_MONTHS',
}

export enum CleanupRequiredType {
  TopSoil = 'TOPSOIL',
  NoTopSoil = 'NO_TOPSOIL',
  TopSoilAndSeed = 'TOPSOIL_AND_SEED',
  Other = 'OTHER',
}

export enum PreferredColor {
  EarthTone = 'EARTH_TONE',
  Brown = 'BROWN',
  ShaleGrey = 'SHALE_GREY',
  ChamplainGrey = 'CHAMPLAIN_GREY',
  OnyxBlack = 'ONYX_BLACK',
  DanvilleBlend = 'DANVILLE_BLEND',
  Sherwood = 'SHERWOOD',
  ChestnutBrown = 'CHESTNUT_BROWN',
  Sandlewood = 'SANDLEWOOD',
  Hickory = 'HICKORY',
  BedfordBrown = 'BEDFORD_BROWN'
}

export enum ProjectLocationType {
  FrontYard = 'FRONT_YARD',
  BackYard = 'BACK_YARD',
  SideYard = 'SIDE_YARD',
  PartOfPatioDesign = 'PART_OF_PATIO_DESIGN',
  Other = 'OTHER',
}

export enum ProjectShapeType {
  Straight = 'STRAIGHT',
  CurvedCorners = 'CURVED_CORNERS',
  SShaped = 'S_SHAPED',
  FreeForm = 'FREE_FORM',
  Other = 'OTHER',
}

export enum CostUnit {
  SquareFoot = 'SQUARE_FOOT',
  LinerFoot = 'LINER_FOOT',
  Total = 'TOTAL',
  TotalPlusTax = 'TOTAL_PLUS_TAX',
  Step = 'STEP',
  Pillar = 'PILLAR',
  Unit = 'UNIT'
}

export enum PreferredPricePoint {
  Economy = 'ECONOMY',
  Average = 'AVERAGE',
  AboveAverage = 'ABOVE_AVERAGE',
}

export enum MachineAccessType {
  Yes = 'YES',
  No = 'NO',
  NotSure = 'NOT_SURE',
}

export enum SoilType {
  Clay = 'CLAY',
  Sand = 'SAND',
  Rock = 'ROCK',
  TopSoil = 'TOP_SOIL',
}

export enum PropertyGradeType {
  Level = 'LEVEL',
  FairlyLevel = 'FAIRLY_LEVEL',
  WellOutOfLevel = 'WELL_OUT_OF_LEVEL',
}

export enum DrainageType {
  Dry = 'DRY',
  SoftInSpring = 'SOFT_IN_SPRING',
  WetYearRound = 'WET_YEAR_ROUND',
}

export interface Refund {
  id: string;
  amount: number;
  refundDate: Date;
  comment: string;
}

export const projectAccessoryTypeLabels = {
  [ProjectAccessoryType.Steps]: 'Steps',
  [ProjectAccessoryType.SittingWall]: 'Sitting Wall',
  [ProjectAccessoryType.Pillars]: 'Pillars',
  [ProjectAccessoryType.Lighting]: 'Lighting',
  [ProjectAccessoryType.Patio]: 'Patio',
  [ProjectAccessoryType.Walkway]: 'Walkway',
  [ProjectAccessoryType.RetainingWall]: 'Retaining Wall',
  [ProjectAccessoryType.PoolPatio]: 'Pool Patio',
  [ProjectAccessoryType.FirePit]: 'Fire Pit',
  [ProjectAccessoryType.DrivewayParking]: 'Driveway Parking',
  [ProjectAccessoryType.Veneer]: 'Veneer',
  [ProjectAccessoryType.Fireplace]: 'Fireplace',
  [ProjectAccessoryType.OutdoorKitchen]: 'Outdoor Kitchen',
  [ProjectAccessoryType.CleaningSanding]: 'Cleaning Sanding',
  [ProjectAccessoryType.MinorRepair]: 'Minor Repair',
  [ProjectAccessoryType.LandscapingPlants]: 'Landscaping Plants',
  [ProjectAccessoryType.StoneCurbing]: 'Stone Curbing',
  [ProjectAccessoryType.Other]: 'Custom Project',
};

export const projectOptions = {
  projectTimelineTypes: enumToOptions<ProjectTimelineType>(ProjectTimelineType),
  opinion: enumToOptions<Opinion>(Opinion),
  cleanupRequiredTypes: enumToOptions<CleanupRequiredType>(CleanupRequiredType),
  materialTypes: enumToOptions<MaterialType>(MaterialType),
  preferredColors: enumToOptions<PreferredColor>(PreferredColor),
  projectLocationTypes: enumToOptions<ProjectLocationType>(ProjectLocationType),
  projectShapeTypes: enumToOptions<ProjectShapeType>(ProjectShapeType),
  costUnitTypes: enumToOptions<CostUnit>(CostUnit),
  preferredPricePoints: enumToOptions<PreferredPricePoint>(PreferredPricePoint),
  machineAccessTypes: enumToOptions<MachineAccessType>(MachineAccessType),
  soilTypes: enumToOptions<SoilType>(SoilType),
  propertyGradeTypes: enumToOptions<PropertyGradeType>(PropertyGradeType),
  drainageTypes: enumToOptions<DrainageType>(DrainageType),
  projectAccessoryTypes: enumToOptions<ProjectAccessoryType>(ProjectAccessoryType, projectAccessoryTypeLabels),
  manufacturerTypes: enumToOptions<HardscapeBrand>(HardscapeBrand),
  declineReasons: enumToOptions<DeclineReason>(DeclineReason, declineReasonLabels),
  warrantyTypes: enumToOptions<WarrantyWorkmanShip>(WarrantyWorkmanShip),
};

export interface RegisterProject extends Project {
  accessories: ProjectAccessoryType[];
  attachments: string[];
}

export interface Project extends Entity {
  name: string;
  address: string;
  latitude?: number;
  longitude?: number;
  projectType: ProjectAccessoryType;
  locationType: ProjectLocationType;
  projectSize: string;
  shapeType: ProjectShapeType;
  timelineType: ProjectTimelineType;
  machineAccess: MachineAccessType;
  propertyGrade: PropertyGradeType;
  soilType: SoilType;
  drainageType: DrainageType;
  comment?: string;
  budget: number;
  estimate?: Estimate;
  siteVisit?: SiteVisit;
  finalProposal?: FinalProposal;
  consultant?: UserSpecificProfile;
  milestones?: Milestone[];
  customer?: UserSpecificProfile;
  assignedConsultant?: User;
  contractSignedDate?: string;
  refund?: Refund;
  estimateSkipped: boolean;
  user: User;
  siteVisitPassed?: boolean;
  governmentConfirmed?: boolean;
  governmentCallComment?: string;
}

