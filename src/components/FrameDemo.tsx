import React from "react";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { CopyIcon } from "lucide-react";
import { Button } from "./ui/button";
import toast, { Toaster } from "react-hot-toast";
type Props = {};

function FrameDemo({}: Props) {
  const handleInputClick = () => {
    navigator.clipboard
      .writeText("https://drift-library.netlify.app/script.js")
      .then(() => {
        notify();
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  const npmhandleInputClick = () => {
    navigator.clipboard
      .writeText("npm i drift-library")
      .then(() => {
        notify();
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  const notify = () => toast("Copied to clipboard!");
  return (
    <>
      <div className="w-1/2 relative">
        <h1 className="pt-sans-bold italic  text-6xl my-7  flex justify-center">
          WEB3 MADE EASY
        </h1>
        <Label htmlFor="picture" className="text-white text-xl italic">
          CDN Link
        </Label>
        <Input
          id="picture"
          value={"https://drift-library.netlify.app/script.js"}
          className="bg-white pt-sans-bold text-gray-500 w-full h-full border border-gray-300 rounded-lg px-7 py-7 text-xl py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
        <Button
          className="absolute right-0 bottom-1 hover:bg-gray-200"
          onClick={npmhandleInputClick}
        >
          <CopyIcon></CopyIcon>
        </Button>
        <span className=" my-10 block"></span>
        <Label htmlFor="picture" className="text-white text-xl italic">
          via NPM
        </Label>
        <Input
          id="picture"
          value={"npm i drift-library"}
          className="bg-white pt-sans-bold text-gray-500 w-full h-full border border-gray-300 rounded-lg px-7 py-7 text-xl py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
        <Button
          className="absolute right-0 hover:bg-gray-200"
          onClick={handleInputClick}
          style={{ bottom: "7rem" }}
        >
          <CopyIcon></CopyIcon>
        </Button>

        <div className="comparision">
          <div className="box1"></div>
          <div className="box2"></div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default FrameDemo;
