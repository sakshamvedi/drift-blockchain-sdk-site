import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import manimage from "../assets/drifthero.jpg";
import trailimage from "../assets/trail.jpg";
import robots from "../assets/robots.png";
import reobot from "../assets/reobot.gif";
import robotfly from "../assets/robotfly.gif";
import polkadot from "../assets/handshake.png";
import logo from "../assets/ingoude.png";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Bitcoin } from "lucide-react";
import { LiaEthereum } from "react-icons/lia";
import { SiDogecoin, SiPolygon } from "react-icons/si";
import { BiPolygon } from "react-icons/bi";
import { Button } from "./ui/button";
import TextTransition from "../components/ui/TextTransition";
import DrawerAddDownload from "./DrawerAddDownload";
import Flipcard from "./Flipcard";
import Aidemo from "./Aidemo";
import FrameDemo from "./FrameDemo";
type Props = {};

function Home({}: Props) {
  return (
    <>
      <div>
        <Parallax
          pages={3.3}
          style={{ top: "0", left: "0" }}
          className="animation overflow-hidden"
        >
          <ParallaxLayer offset={0} speed={-0.1}>
            <div className="main-container flex justify-center h-full relative">
              <div className="absolute text-transition text-4xl font-bold">
                <TextTransition />
              </div>
              <div className="side-image">
                <img src={robotfly} className="h-full"></img>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={-0.9} className="h-fit">
            <div className="side-image  absolute  top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <img src={logo} className="h-fit opacity-40"></img>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.98} speed={0.5}>
            <div className="side-image-polka flex item-center justify-between">
              <div className="flex items-center justify-center w-full">
                <Flipcard />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.45} speed={0.5}>
            <div className="bg-black h-full flex justify-center items-center">
              <Aidemo />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            <div className="bg-violet h-full flex justify-center items-start p-7">
              <FrameDemo />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default Home;
