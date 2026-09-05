import type { Category } from "../types";
import { basicCommunication } from "./basicCommunication";
import { dailyLife } from "./dailyLife";
import { workStudy } from "./workStudy";
import { feelingsPersonal } from "./feelingsPersonal";
import { travelSocial } from "./travelSocial";
import { advancedReview } from "./advancedReview";

export const categories: Category[] = [
  basicCommunication,
  dailyLife,
  workStudy,
  feelingsPersonal,
  travelSocial,
  advancedReview,
];
