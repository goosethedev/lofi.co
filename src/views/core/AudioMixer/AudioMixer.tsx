import { Component, For, ParentProps } from "solid-js";

import { Slider } from "@kobalte/core/slider";
import {
  BiSolidPlaylist, BiSolidMoon, BiSolidCoffee, BiSolidVolume, BiSolidVolumeFull,
  BiRegularShuffle, BiSolidMusic, BiLogosSpotify
} from "solid-icons/bi"

import FloatingWindow from "../../../components/FloatingWindow";
import SaxIcon from "../../../assets/icons/sax.svg?component-solid"
import player from "../../../stores/player";
import { SoundEffect, SoundTrackMood, effects } from "../../../data/audio.data";
import effectsStore from "../../../stores/effects";
import { currentScene } from "../../../stores/scene";
import { effectIcon } from "../../../data/effect-icons";
import { setShowAudioMixer } from "../../../stores/app";


const AudioMixer: Component = () => {

  // const effects = ["Forest Rain", "Bird Chirping", "Keyboard"]
  const sceneEffectNames = () => currentScene().actions.filter(a => a.type === "sound").map(a => a.effect);

  const sceneEffects = () => effects.filter(e => sceneEffectNames().includes(e.type))

  const otherEffects = () => effects.filter(e => !sceneEffectNames().includes(e.type))

  return <FloatingWindow width={360} height={480} closeWindow={() => setShowAudioMixer(false)}>
    <div class="grid grid-cols-12 gap-4 text-white/90">
      {/* Mood selector */}
      <div class="col-span-7 row-span-2">
        <Panel padding={12}>
          <div class="flex flex-row justify-between">
            <p class="uppercase">Music</p>
            <BiSolidPlaylist class="text-2xl fill-white/20" />
          </div>
          <div class="flex flex-row justify-between pt-4">
            <PlaylistButton title="Sleepy" mood="sleepy" >
              <BiSolidMoon class={"m-auto text-2xl group-hover:fill-white " + (player.mood() === "sleepy" ? "fill-primary" : "fill-white/50")} />
            </PlaylistButton>
            <PlaylistButton title="Jazzy" mood="jazzy" >
              <SaxIcon class={"m-auto w-6 group-hover:fill-white " + (player.mood() === "jazzy" ? "fill-primary" : "fill-white/50")} />
            </PlaylistButton>
            <PlaylistButton title="Chill" mood="chill" >
              <BiSolidCoffee class={"m-auto text-2xl group-hover:fill-white " + (player.mood() === "chill" ? "fill-primary" : "fill-white/50")} />
            </PlaylistButton>
          </div>
        </Panel>
      </div>
      {/* Playlists */}
      <div class="col-span-5">
        <Panel padding={0}>
          <div class="flex flex-row py-4">
            <BiSolidMusic class="text-2xl mx-2 fill-white/50" />
            <p>lofi.co</p>
          </div>
        </Panel>
      </div>
      <div class="col-span-5">
        <Panel padding={0}>
          <div class="flex flex-row py-4">
            <BiLogosSpotify class="text-2xl mx-2 fill-white/50" />
            <p>Spotify</p>
          </div>
        </Panel>
      </div>
      {/* Music volume */}
      <div class="col-span-12">
        <Panel padding={12}>
          <p class="uppercase mb-3">Music volume</p>
          <VolumeSlider />
        </Panel>
      </div>
      {/* Scene sounds */}
      <div class="col-span-12">
        <Panel padding={14}>
          <div class="flex flex-row justify-between mb-2">
            <p class="uppercase">Sounds from <span class="text-primary">scene</span></p>
            <BiRegularShuffle class="text-2xl fill-white/50" />
          </div>

          <For each={sceneEffects()}>
            {e => <EffectSlider effect={e} />}
          </For>
        </Panel>
      </div>
      {/* All sounds */}
      <div class="col-span-12">
        <Panel padding={14}>
          <div class="flex flex-row justify-between mb-2">
            <p class="uppercase">All sounds</p>
            <BiRegularShuffle class="text-2xl fill-white/50" />
          </div>

          <For each={otherEffects()}>
            {e => <EffectSlider effect={e} />}
          </For>
        </Panel>
      </div>
    </div>
  </FloatingWindow>
};

const Panel = (props: { padding: number } & ParentProps) => {
  return <div class="rounded-xl bg-bgd-300 backdrop-blur-xl border border-white/20 h-full" style={{
    padding: props.padding + "px"
  }}>
    {props.children}
  </div>
}


const PlaylistButton = (props: { title: string, mood: SoundTrackMood } & ParentProps) => {
  return <label class="group flex flex-col items-center gap-1.5" onClick={() => player.controls.setMood(props.mood)}>
    <button class="relative rounded-full w-11 h-11 bg-white/10">
      <input type="radio" name="playlistMood" value={props.mood} class="absolute opacity-0" />
      {props.children}
    </button>
    <p class="text-xs text-white/50">{props.title}</p>
  </label>
}

const VolumeSlider = () => {

  const volume = () => [player.audio.volume]
  const changeVolume = (v: number[]) => player.controls.setVolume(v[0])

  return <div class="flex flex-row items-center">
    <BiSolidVolume class="text-2xl fill-primary" />

    <Slider class="flex-auto px-4" value={volume()} onChange={changeVolume} minValue={0} maxValue={1} step={0.05}>
      <Slider.Track class="h-2 bg-[#fff2] relative rounded-2xl">
        <Slider.Fill class="bg-primary h-full absolute rounded-2xl" />
        <Slider.Thumb class="bg-primary w-5 h-5 rounded-full top-[-6px]">
          <Slider.Input />
        </Slider.Thumb>
      </Slider.Track>
    </Slider>

    <BiSolidVolumeFull class="text-2xl fill-primary" />
  </div>
}

const EffectSlider = (props: { effect: SoundEffect }) => {

  const Icon = effectIcon[props.effect.type]

  const effectVolume = () => [effectsStore.volume()[props.effect.type]]
  const setEffectVolume = (v: number[]) => effectsStore.setVolume(s => ({ ...s, [props.effect.type]: v[0] }))

  return <div class="flex flex-row items-center py-2">
    <p class="w-[40%] text-sm">{props.effect.name}</p>

    {/* Add curved parts before and after the slider */}
    <div class="h-8 w-4 bg-primary rounded-l-full" />
    <Slider class="flex-auto" value={effectVolume()} onChange={setEffectVolume} minValue={0} maxValue={1} step={0.05}>
      <Slider.Track class="h-8 bg-[#fff2] relative">
        <Slider.Fill class="bg-primary h-full absolute rounded-r-none" />
        <Slider.Thumb class="bg-primary w-8 h-8 rounded-full flex justify-center items-center shadow-bg-300/30 shadow-[-1px_1px_1px_1px_rgba(0,0,0,0.02)]">
          <Icon class="text-2xl text-black" />
          <Slider.Input />
        </Slider.Thumb>
      </Slider.Track>
    </Slider>
    <div class="h-8 w-4 bg-[#fff2] rounded-r-full" />

  </div>
}

export default AudioMixer;