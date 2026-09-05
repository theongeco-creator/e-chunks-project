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
import { travelAndTransport } from "./travelAndTransport";
import { weatherAndSeasons } from "./weatherAndSeasons";
import { healthAndSports } from "./healthAndSports";
import { hobbiesAndFreeTime } from "./hobbiesAndFreeTime";
import { placesAndDirections } from "./placesAndDirections";
import { workAndOffice } from "./workAndOffice";
import { technologyAndSocialMedia } from "./technologyAndSocialMedia";
import { environmentAndNature } from "./environmentAndNature";
import { feelingsAndOpinions } from "./feelingsAndOpinions";
import { cultureAndFestivals } from "./cultureAndFestivals";
import { prepositions } from "./prepositions";
import { basicVerbs } from "./basicVerbs";

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
  travelAndTransport,
  weatherAndSeasons,
  healthAndSports,
  hobbiesAndFreeTime,
  placesAndDirections,
  workAndOffice,
  technologyAndSocialMedia,
  environmentAndNature,
  feelingsAndOpinions,
  cultureAndFestivals,
  prepositions,
  basicVerbs
  // shopping,
];