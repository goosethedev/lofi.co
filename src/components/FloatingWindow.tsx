import { Component, createSignal, ParentProps } from "solid-js";

import { HiOutlineMinus } from "solid-icons/hi"

type Props = {
  width: number,
  height: number,
  closeWindow: () => void,
} & ParentProps;

const FloatingWindow: Component<Props> = (props) => {

  const [x, setX] = createSignal(20)
  const [y, setY] = createSignal(100)

  return <div class="z-20 fixed bg-bgd-100 border border-white/20 backdrop-blur-[30px] rounded-2xl pt-8 px-4 pb-4 overflow-y-scroll"
    style={{
      width: props.width + "px",
      height: props.height + "px",
      top: y() + "px",
      left: x() + "px"
    }}>
    <HiOutlineMinus class="absolute top-1 right-3 text-2xl text-white/20 hover:text-white/50" onClick={props.closeWindow} />
    {props.children}
  </div>;
};

export default FloatingWindow;