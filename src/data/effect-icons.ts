import { IconTypes } from "solid-icons";
import { EffectType } from "./audio.data";
import { TbActivity, TbBuildingCommunity, TbCampfire, TbChartBubble, TbChristmasTree, TbCloudStorm, TbKeyboard, TbPlaneTilt, TbSnowflake, TbWind, TbWindmill } from "solid-icons/tb";
import { WiRain, WiStars, WiThunderstorm } from "solid-icons/wi";
import { TiSocialTwitter, TiWaves } from "solid-icons/ti";
import { FaSolidPeopleGroup } from "solid-icons/fa";
import { BiRegularWater, BiSolidTrain } from "solid-icons/bi";

type EffectIcon = { [key in EffectType]: IconTypes }

export const effectIcon: EffectIcon = {
  "fire": TbCampfire,
  "forest": TbChristmasTree,
  "rain_forest": WiRain,
  "waves": TiWaves,
  "fan": TbWindmill,
  "city": TbBuildingCommunity,
  "storm": TbCloudStorm,
  "rain_street": WiRain,
  "river": BiRegularWater,
  "birds": TiSocialTwitter,
  "people": FaSolidPeopleGroup,
  "wind": TbWind,
  "ocean": TiWaves,
  "fireplace": TbCampfire,
  "snow": TbSnowflake,
  "keyboard": TbKeyboard,
  "underwater": TbChartBubble,
  "space": WiStars,
  "window_rain": WiRain,
  "train_noise": BiSolidTrain,
  "thunders": WiThunderstorm,
  "white_noise": TbActivity,
  "pink_noise": TbActivity,
  "brown_noise": TbActivity,
  "plane": TbPlaneTilt,
}