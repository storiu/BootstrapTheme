export enum SopProcedureType {
  Excavation = 'EXCAVATION',
  SetGrade = 'SET_GRADE',
  BaseInstallation = 'BASE_INSTALLATION',
  Screeding = 'SCREEDING',
  HardscapeInstallation = 'HARDSCAPE_INSTALLATION',
  CutsAndSanding = 'CUTS_AND_SANDING',
  Cleanup = 'CLEANUP',
  FinalPhotos = 'FINAL_PHOTOS',
}

export const sopProcedureLabels = {
  [SopProcedureType.Excavation]: 'Excavation',
  [SopProcedureType.SetGrade]: 'Set Grade',
  [SopProcedureType.BaseInstallation]: 'Base Installation',
  [SopProcedureType.Screeding]: 'Screeding',
  [SopProcedureType.HardscapeInstallation]: 'Hardscape Installation',
  [SopProcedureType.CutsAndSanding]: 'Cuts & Sanding',
  [SopProcedureType.Cleanup]: 'Cleanup',
  [SopProcedureType.FinalPhotos]: 'Final Photos',
};

export const sopProcedureContents = {
  [SopProcedureType.Excavation]: [
    {
      title: 'Patio',
      factors: [
        'Hand Dig Over any Hazards.',
        '12" Dig depth minimum.',
        'Dig out 12" wider than paver specs.',
        'Be mindful of grade.',
        'Spray paint out dig marks.',
        'Spray paint out outline of job inside the dig marks after dug to confirm proper excavation.',
      ],
      images: [
        'assets/images/sop-procedures/excavation/patio1.jpg',
        'assets/images/sop-procedures/excavation/patio2.jpg',
        'assets/images/sop-procedures/excavation/patio3.jpg',
        'assets/images/sop-procedures/excavation/patio4.jpg',
      ],
    },
    {
      title: 'Walkways',
      factors: [
        'Hand Dig Over any Hazards.',
        '12" Dig depth minimum.',
        'Dig out 8" wider than paver specs.',
        'Be mindful of grass.',
        'Spray paint out dig marks.',
        'Spray paint outline of job inside the dig marks after excavation to confirm proper excavation.',
      ],
      images: [
        'assets/images/sop-procedures/excavation/walkway1.jpg',
        'assets/images/sop-procedures/excavation/walkway2.jpg',
      ],
    },
    {
      title: 'Retaining Walls',
      factors: [
        'Hand Dig Over any Hazards.',
        '10" of base minimum.',
        'Trench 3\' wide.',
        'Dig back a minimum of 3’.',
        'Spray paint out dig marks (Utilize Zip level tool  to identify where steps will be in the wall and dig accordingly.',
        'Spray paint outline of job inside the dig marks after excavation to confirm proper excavation.',
      ],
      images: [
        'assets/images/sop-procedures/excavation/retainingwall1.jpg',
        'assets/images/sop-procedures/excavation/retainingwall2.jpg',
        'assets/images/sop-procedures/excavation/retainingwall3.jpg',
        'assets/images/sop-procedures/excavation/retainingwall4.jpg',
      ],
    },
  ],
  [SopProcedureType.SetGrade]: [
    {
      title: 'Patio',
      factors: [
        'Patios should be sloped away from houses or hazard area.',
        'Minimum grade of 2" per 10\' (Double check site plan to confirm)',
      ],
      images: [
        'assets/images/sop-procedures/set-grade/patio1.jpg',
      ],
    },
    {
      title: 'Walkways',
      factors: [
        '1" slope for every 4’.',
        'Ensure sidewalk sits above grass.',
        'Set height of sidewalk to make equal steps from stairs (Unless its not possible due to grade height)'
      ],
      images: [
        'assets/images/sop-procedures/set-grade/walkway1.jpg',
      ],
    },
    {
      title: 'Retaining Walls',
      factors: [
        'Retaining walls should be level from side to side and front to back.',
        'Retaining walls should be buried 10% below height of wall.',
        'Ensure wall grade includes cap height.'
      ],
      images: [
        'assets/images/sop-procedures/set-grade/retaining-wall1.jpg',
        'assets/images/sop-procedures/set-grade/retaining-wall2.jpg',
      ],
    },
  ],
  [SopProcedureType.BaseInstallation]: [
    {
      title: 'Patio',
      factors: [
        'Fill in any holes or low spots with trap rock, and run a small plate compactor over subsoil.',
        'Install Geo-textile fabric, make sure to over lap and wrap up the sides.',
        'Install first “Lift of trap rock up to 5" per lift” after first 5" compact with Heavy Duty plate compactor.',
        'Install second lift, again level off and compact but with both large and small compactor.',
        'Ensure there are no low or high spots, fill any low spots and compact again with small compactor.',
        'Ensure any trap rock out side of the line is compacted to prevent future settling.',
        'Minimum of 3 passes with the large packer.',
      ],
      images: [
        'assets/images/sop-procedures/base-installation/patio1.jpg',
        'assets/images/sop-procedures/base-installation/patio2.jpg',
        'assets/images/sop-procedures/base-installation/patio3.jpg',
        'assets/images/sop-procedures/base-installation/patio4.jpg',
        'assets/images/sop-procedures/base-installation/patio5.jpg',
        'assets/images/sop-procedures/base-installation/patio6.jpg',
      ],
    },
    {
      title: 'Walkways',
      factors: [
        'Fill in any holes or low spots with trap rock, and run a small plate compactor over subsoil.',
        'Install Geo-textile fabric, make sure to over lap and wrap up the sides.',
        'Install first “Lift of trap rock up to 5" per lift” after first 5" compact with Heavy Duty plate compactor.',
        'Install second lift, again level off and compact but with both large and small compactor.',
        'Ensure there are no low or high spots, fill any low spots and compact again with small compactor.',
        'Ensure any trap rock out side of the line is compacted to prevent future settling.',
        'Minimum of 3 passes with the large packer.',
      ],
      images: [
        'assets/images/sop-procedures/base-installation/walkways1.jpg',
        'assets/images/sop-procedures/base-installation/walkways2.jpg',
        'assets/images/sop-procedures/base-installation/walkways3.jpg',
        'assets/images/sop-procedures/base-installation/walkways4.jpg',
        'assets/images/sop-procedures/base-installation/walkways5.jpg',
      ],
    },
    {
      title: 'Retaining Walls',
      factors: [
        'Fill in any holes or low spots with trap rock, and run a small plate compactor over subsoil.',
        'Install Geo-textile fabric, make sure to over lap and wrap up the sides.',
        'Install first “Lift of trap rock up to 5" per lift” after first 5" compact with Heavy Duty plate compactor.',
        'Install second lift, again level off and compact but with both large and small compactor.',
        'Ensure there are no low or high spots, fill any low spots and compact again with small compactor.',
        'Ensure any trap rock out side of the line is compacted to prevent future settling.',
        'Minimum of 3 passes with the large packer.',
      ],
      images: [
        'assets/images/sop-procedures/base-installation/retainingwall1.jpg',
        'assets/images/sop-procedures/base-installation/retainingwall2.jpg',
        'assets/images/sop-procedures/base-installation/retainingwall3.jpg',
        'assets/images/sop-procedures/base-installation/retainingwall4.jpg',
      ],
    },
    {
      title: 'Steps',
      factors: [
        'After base is installed, setup screen pipes and confirm all heights and measurements.',
        'Mark out exact heights and center marks for the step.',
        'Snap lines and check square for the step.',
        'Lay a course of pavers where step is going “Flat side up”.',
        'Cut in all pavers for the outline of the step area (Including Fillers).',
        'Snap line for back of step on pavers.',
        'First step, use chain, excavator bucket and clamp to set step.',
        'Slowly lift step, make sure it\'s centered and everyone is clear.',
        'Slowly lower step in place and line up with chalk line.',
        'For larger steps or steps where the clamp will not work, use Suction tool.',
      ],
      images: [
        'assets/images/sop-procedures/base-installation/steps1.jpg',
        'assets/images/sop-procedures/base-installation/steps2.jpg',
        'assets/images/sop-procedures/base-installation/steps3.jpg',
        'assets/images/sop-procedures/base-installation/steps4.jpg',
        'assets/images/sop-procedures/base-installation/steps5.jpg',
        'assets/images/sop-procedures/base-installation/steps6.jpg',
        'assets/images/sop-procedures/base-installation/steps7.jpg',
        'assets/images/sop-procedures/base-installation/steps8.jpg',
        'assets/images/sop-procedures/base-installation/steps9.jpg',
        'assets/images/sop-procedures/base-installation/steps10.jpg',
      ],
    },
  ],
  [SopProcedureType.Screeding]: [
    {
      title: 'Patio',
      factors: [
        'Ensure  you are working off your lines.',
        'Check strings for accuracy, base for no low or high spots and layout poles.',
        'Use a paver to check the height on the string and set pole.',
        'Use a level to ensure poles are properly sloped.',
        'Spread pea stone between poles (Be careful to not hit poles).',
        'Start to screed when first set of poles are setup.',
        'Optional, as more poles are setup multiple people can screed.',
        'Gently pull out poles when screeding is complete.',
        'Fill in the pole holes and gently level.',
        'Confirm proper slope before laying pavers.',
      ],
      images: [
        'assets/images/sop-procedures/screeding/patio1.jpg',
        'assets/images/sop-procedures/screeding/patio2.jpg',
        'assets/images/sop-procedures/screeding/patio3.jpg',
        'assets/images/sop-procedures/screeding/patio4.jpg',
        'assets/images/sop-procedures/screeding/patio5.jpg',
        'assets/images/sop-procedures/screeding/patio6.jpg',
        'assets/images/sop-procedures/screeding/patio7.jpg',
        'assets/images/sop-procedures/screeding/patio8.jpg',
        'assets/images/sop-procedures/screeding/patio9.jpg',
        'assets/images/sop-procedures/screeding/patio10.jpg',
      ],
    },
    {
      title: 'Walkways',
      factors: [
        'Ensure you are working off your lines.',
        'Check strings and install first poles “Horizontal”.',
        'Use a level to ensure poles are properly sloped.',
        'Apply screed material.',
        'Start screeding set poles while others can continue setting up additional poles using set lines to set grade.',
        'Fill any holes from the pipe and gently level.',
        'Confirm proper slope before laying pavers.',
      ],
      images: [
        'assets/images/sop-procedures/screeding/walkway1.jpg',
        'assets/images/sop-procedures/screeding/walkway2.jpg',
        'assets/images/sop-procedures/screeding/walkway3.jpg',
        'assets/images/sop-procedures/screeding/walkway4.jpg',
      ],
    },
    {
      title: 'Retaining Walls',
      factors: [
        'Apply screed material.',
        'Rake out and compact screen materials.',
        'Ensure  you are working off your lines.',
        'Confirm proper slope before laying wall block.',
        'After screeding ensure height of wall.'
      ],
      images: [
        'assets/images/sop-procedures/screeding/retainingwall1.jpg',
        'assets/images/sop-procedures/screeding/retainingwall2.jpg',
        'assets/images/sop-procedures/screeding/retainingwall3.jpg',
        'assets/images/sop-procedures/screeding/retainingwall4.jpg',
        'assets/images/sop-procedures/screeding/retainingwall5.jpg',
        'assets/images/sop-procedures/screeding/retainingwall6.jpg',
      ],
    }
  ],
  [SopProcedureType.HardscapeInstallation]: [
    {
      title: 'Pavers',
      factors: [
        'Confirm proper materials.',
        'Mix pallets.',
        'Mindful of bad materials.',
        'No four corners.',
        'No long lines.',
        'Ensure the patio is square off the house/parallel (Unless site plan say different).',
        'Makes sure solider course fits between core paver, and house/steps.',
        'No small pieces less than 3" along a parallel.',
        'When laying be mindful of sizes being used (Ratio).',
        'No back to back big or small pieces.'
      ],
      images: [
        'assets/images/sop-procedures/hardscape-installation/patio1.jpg',
        'assets/images/sop-procedures/hardscape-installation/patio2.jpg',
      ],
    },
    {
      title: 'Retaining Walls',
      factors: [
        'Mix pallets.',
        'Mindful of bad materials.',
        'No seam on seams.',
        'Install pipe on 2nd course drains every 40’.',
        'Ensure snapped pieces are in good shape (No bad splits).',
        'Check each layer as building for large chips.',
        'Straighten each row of wall as you build it layer by layer.',
        'Straighten caps after gluing with a string line.',
        'Ensure black fabric is between soil and 3/4" trap rock',
      ],
      images: [
        'assets/images/sop-procedures/hardscape-installation/retaining-wall1.jpg',
        'assets/images/sop-procedures/hardscape-installation/retaining-wall2.jpg',
        'assets/images/sop-procedures/hardscape-installation/retaining-wall3.jpg',
        'assets/images/sop-procedures/hardscape-installation/retaining-wall4.jpg',
        'assets/images/sop-procedures/hardscape-installation/retaining-wall5.jpg',
        'assets/images/sop-procedures/hardscape-installation/retaining-wall6.jpg',
        'assets/images/sop-procedures/hardscape-installation/retaining-wall7.jpg',
        'assets/images/sop-procedures/hardscape-installation/retaining-wall8.jpg',
        'assets/images/sop-procedures/hardscape-installation/retaining-wall9.jpg',
        'assets/images/sop-procedures/hardscape-installation/retaining-wall10.jpg',
      ],
    }
  ],
  [SopProcedureType.CutsAndSanding]: [
    {
      title: 'Pavers',
      factors: [
        'Try not to cut pavers on top of patio/sidewalks - Keep paver joints clean.',
        'Tapper edge of pavers when done cutting.',
        'When installing solider course next to a cut, ensure paver is level and sloped properly - Adjust if needed.',
        'Space cuts/solider course to allow sand to fill joints.',
        'Cut solider course so there is no gap larger than 1/4”.',
        'Don\'t sand if there is a risk of rain or excess moisture in the air.',
        'Wet sand once lightly then soak sand after.',
        'When edging install pea stone between pavers and edging.',
        'Install nails appropriately to ensure a secure edge restraint.'
      ],
      images: [
        'assets/images/sop-procedures/sanding/patio1.jpg',
        'assets/images/sop-procedures/sanding/patio2.jpg',
        'assets/images/sop-procedures/sanding/patio3.jpg',
      ],
    },
    {
      title: 'Retaining Walls',
      factors: [
        'Rules on fabric.',
        'Rules on amount of trap rock.',
        'Rules on leaving 6" for topsoil.'
      ],
      images: [
        'assets/images/sop-procedures/sanding/walkway1.jpg',
        'assets/images/sop-procedures/sanding/walkway2.jpg',
        'assets/images/sop-procedures/sanding/walkway3.jpg',
      ],
    }
  ],
  [SopProcedureType.Cleanup]: [
    {
      title: 'All Projects',
      factors: [
        'Spread topsoil and compact with a rake over edging and then re-rake.',
        'Compact large areas of topsoil so people will not sink when stepping on it.',
        'Blow off/broom off pavers before wetting poly sand.',
        'Clean off boots before walking on the new project.',
      ],
      images: [
        'assets/images/sop-procedures/cleanup/patio1.jpg',
        'assets/images/sop-procedures/cleanup/patio2.jpg',
        'assets/images/sop-procedures/cleanup/walkway1.jpg',
      ],
    }
  ],
  [SopProcedureType.FinalPhotos]: [
    {
      title: 'All Projects',
      factors: [
        'Be mindful of shadows.',
        'Make sure patio is clean.',
        'Take pic after blown off before water.',
        'Take pic after watered down.',
      ],
      images: [
        'assets/images/sop-procedures/final-photos/patio1.jpg',
        'assets/images/sop-procedures/final-photos/patio2.jpg',
        'assets/images/sop-procedures/final-photos/walkway1.jpg',
        'assets/images/sop-procedures/final-photos/walkway2.jpg',
      ],
    }
  ],
};
