import React from "react";
import ReactFlipCard from "reactjs-flip-card";
type Props = {};
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import ReactTextTransition, { presets } from "react-text-transition";
// import required modules
import { Autoplay, EffectCards, EffectCoverflow } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import ether from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowRight,
  Bold,
  Package2Icon,
} from "lucide-react";
import { Button } from "./ui/button";

function Flipcard({}: Props) {
  const [isFlipped, setIsFlipped] = useState(true);
  const TEXTS = [
    "a blockchain development platform that supports multiple chains and platforms.",
    "a AI that help you create a proper roadmap and strategy for your blockchain project.",
    "have playground to play and compete with other developers.",
    "have framework to build dApps and smart contracts.",
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <div className="bg-gradient">
        <h1
          className={`text-white text-3xl leading-loose rounded w-screen text-center  ${isFlipped}`}
        >
          <span className="text-white-800 italic  mx-7">
            {" "}
            <ReactTextTransition springConfig={presets.gentle}>
              <div className="text-3xl bg-blue-gradient">
                <span className="text-gray-800 underline">Drift</span>{" "}
                {TEXTS[index % TEXTS.length]}
              </div>
            </ReactTextTransition>
          </span>
        </h1>
      </div>
      <Fade cascade direction={"up"} className="w-full">
        <div className="my-violetcard h-full w-full">
          <div className="main-card flex  h-1/2 w-1/2">
            <div className="left-card"></div>
            <div className="right-card flex flex-col justify-center items-start mx-7 gap-7">
              <p className="text-sm underline italic">Create With Drift</p>
              <p className="text-4xl w-85 leading-snug pt-sans-bold">
                <b> THE RISE OF A MULTICHAIN LANGUAGE</b>
              </p>
              <p className="text-sm">
                Install Drift and start building your blockchain project today.
              </p>

              <Button className="border border-gray-900 rounded-full text-lg p-7 text-gray-900 hover:bg-gray-900  hover:text-white flex gap-4">
                Install Drift <Package2Icon />
              </Button>
            </div>
          </div>

          {/* <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[Autoplay, EffectCards]}
          className="mySwiper"
          autoplay={true}
          //cards numnbe
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide> </SwiperSlide>
          <SwiperSlide> </SwiperSlide>
          <SwiperSlide> </SwiperSlide>
          <SwiperSlide> </SwiperSlide>
          <SwiperSlide> </SwiperSlide>
          <SwiperSlide> </SwiperSlide>
          <SwiperSlide> </SwiperSlide>
        </Swiper> */}
        </div>
      </Fade>
    </>
  );
}

export default Flipcard;
