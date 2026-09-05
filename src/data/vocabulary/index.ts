import type { VocabTopic } from "@/data/types";
export type { VocabTopic }; // Xuất ra ngoài cho App.tsx xài

import { greetings } from "./greetings";
import { family } from "./family";
import { numbersDatesTime } from "./numbersDatesTime";
import { foodAndDrinks } from "./foodAndDrinks";
import { houseAndHome } from "./houseAndHome";
import { clothesAndFashion } from "./clothesAndFashion";
import { schoolAndEducation } from "./schoolAndEducation";
import { colorsAndAppearance } from "./colorsAndAppearance";
import { shoppingAndMoney } from "./shoppingAndMoney";
import { foodAndDining } from "./foodAndDining";
import { travelAndTransport } from "./travelAndTransport";
import { weatherAndSeasons } from "./weatherAndSeasons";
import { healthAndSports } from "./healthAndSports";
import { hobbiesAndFreeTime } from "./hobbiesAndFreeTime";
import { placesAndDirections } from "./placesAndDirections";
import { jobsAndWorkplace } from "./jobsAndWorkplace";
import { travelAndAdventure } from "./travelAndAdventure";
import { workAndOffice } from "./workAndOffice";
import { technologyAndSocialMedia } from "./technologyAndSocialMedia";
import { environmentAndNature } from "./environmentAndNature";
import { feelingsAndOpinions } from "./feelingsAndOpinions";
import { cultureAndFestivals } from "./cultureAndFestivals";

export const vocabularyCategories: VocabTopic[] = [
  greetings,
  family,
  numbersDatesTime,
  foodAndDrinks,
  houseAndHome,
  clothesAndFashion,
  schoolAndEducation,
  colorsAndAppearance,
  shoppingAndMoney,
  foodAndDining,
  travelAndTransport,
  weatherAndSeasons,
  healthAndSports,
  hobbiesAndFreeTime,
  placesAndDirections,
  jobsAndWorkplace,
  travelAndAdventure,
  workAndOffice,
  technologyAndSocialMedia,
  environmentAndNature,
  feelingsAndOpinions,
  cultureAndFestivals
  // shopping,
];