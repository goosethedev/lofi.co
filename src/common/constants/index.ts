// Use env var URL for remote assets
const ASSETS_URL = import.meta.env.VITE_ASSETS_URL;

export const digitalOcean = {
  EFFECTS_ROOT_URL: ASSETS_URL + "/effects/",
  ALARMS_ROOT_URL: ASSETS_URL + "/alarms/",
  TRACKS_ROOT_URL: ASSETS_URL + "/ogtracks/",
  SCENES_ROOT_URL: ASSETS_URL + "/scenes/",
  WALLPAPERS_ROOT_URL: ASSETS_URL + "/wallpapers/",

  /** NOTE: Should NOT be used in the app, since not supported. */
  USER_FILES_ROOT_URL: "https://lofico.nyc3.digitaloceanspaces.com",
} as const;
