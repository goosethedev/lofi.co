import { createSignal } from "solid-js";

import { type Scene, scenes } from "../data/scene.data";

export const [night, setNight] = createSignal(false);
export const [pixelated, setPixelated] = createSignal(false);

export const [currentScene, setCurrentScene] = createSignal<Scene>(scenes.cozyStudio);
