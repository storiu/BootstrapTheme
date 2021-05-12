import { ProjectAccessoryType } from '../models/project';

export const ideaBoardCategories = [
  { value: ProjectAccessoryType.Patio, label: 'Patios' },
  { value: ProjectAccessoryType.Walkway, label: 'Walkways' },
  { value: ProjectAccessoryType.RetainingWall, label: 'Retaining Walls' },
  { value: ProjectAccessoryType.DrivewayParking, label: 'Driveways' },
  { value: ProjectAccessoryType.PoolPatio, label: 'Pool Patios' },
  { value: ProjectAccessoryType.Steps, label: 'Steps & Staircases' }
];

export const ideaBoardAltTemplate = {
  [ProjectAccessoryType.Patio]: [
    'patio-installation-services-[county]-county',
    'professional-patio-installation-services-[county]-county',
    'patio-with-a-firepit-[county]-county',
    'patio-installation-services-[county]-county-united-hardscapes',
    'building-a-patio-in-[county]-county',
    'patio-services-near-me-[county]-county'
  ],
  [ProjectAccessoryType.Walkway]: [
    'patio-installation-services-[county]-county',
    'professional-patio-installation-services-[county]-county',
    'patio-with-a-firepit-[county]-county',
    'patio-installation-services-[county]-county-united-hardscapes',
    'building-a-patio-in-[county]-county',
    'patio-services-near-me-[county]-county'
  ],
  [ProjectAccessoryType.RetainingWall]: [
    'retaining-wall-installation-services-[county]-county',
    'professional-retaining-wall-installation-services-[county]-county',
    'beautiful-retaining-wall-ideas-[county]-county',
    'retaining-wall-installation-services-[county]-county-united-hardscapes',
    'building-a-retaining-wall-in-[county]-county',
    'retaining-wall-installation-services-near-me-[county]-county'
  ],
  [ProjectAccessoryType.DrivewayParking]: [
    'driveway-installation-services-[county]-county',
    'professional-driveway-installation-services-[county]-county',
    'beautiful-driveway-ideas-[county]-county',
    'driveway-installation-services-[county]-county-united-hardscapes',
    'building-a-driveway-in-[county]-county',
    'driveway-installation-services-near-me-[county]-count'
  ],
  [ProjectAccessoryType.PoolPatio]: [
    'pool-patio-installation-services-[county]-county',
    'professional-pool-patio-installation-services-[county]-county',
    'pool-patio-with-a-firepit-[county]-county',
    'pool-patio-installation-services-[county]-county-united-hardscapes',
    'building-a-pool-patio-in-[county]-county',
    'pool-patio-services-near-me-[county]-county'
  ],
  [ProjectAccessoryType.Steps]: [
    'steps-installation-services-[county]-county',
    'professional-staircase-installation-services-[county]-county',
    'steps-and-staircases-installation-services-[county]-county',
    'beautiful-outdoor-steps-ideas-[county]-county',
    'steps-installation-services-[county]-county-united-hardscapes',
    'steps-and-staircases-installation-services-near-me-[county]-county'
  ]
};
