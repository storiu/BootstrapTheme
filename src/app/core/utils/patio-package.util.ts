import { PatioPackageCard } from '../models/patio-package';
import { patioPackageCards } from '../data/patio-packages';

export function nextPatioPackage(source: PatioPackageCard, isForward = true): PatioPackageCard {
  const currentPatioPackageIndex = patioPackageCards.indexOf(source);
  return patioPackageCards[currentPatioPackageIndex + (isForward ? 1 : -1)];
}


