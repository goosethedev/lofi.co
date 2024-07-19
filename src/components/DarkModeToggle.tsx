import { Accessor, Component, Setter } from "solid-js";

import SunIcon from "../assets/icons/sun.svg?component-solid";
import MoonIcon from "../assets/icons/moon.svg?component-solid";

type Props = {
  dark: Accessor<boolean>,
  setDark: Setter<boolean>
}

const DarkModeToggle: Component<Props> = (props) => {

  // Replacement for "bg-yellow-400 has-[:checked]:bg-black" in label class.
  // Doesn't work in Firefox
  const bgClass = () => props.dark() ? "bg-black" : "bg-yellow-400"

  return <div>
    <label for="toggle-mode" class={"w-[60px] h-[30px] rounded-[50px] flex flex-row justify-between cursor-pointer p-[6px] relative transition-colors ease-linear duration-200 " + bgClass()}>
      <input type="checkbox" name="toggle-mode" id="toggle-mode" class="peer opacity-0 absolute" checked={!props.dark()} onChange={() => props.setDark(v => !v)} />
      <SunIcon class="text-white w-6 stroke-2" />
      <MoonIcon class="text-white w-6 stroke-2" />
      <span class="bg-white absolute w-[22px] h-[22px] top-[4px] left-[4px] rounded-full transition-transform ease-linear duration-200 peer-checked:translate-x-[30px]"></span>
    </label>
  </div>
}

export default DarkModeToggle;
