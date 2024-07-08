import React from "react";
import { Fade } from "react-awesome-reveal";
type Props = {};
import aiimage from "../assets/output-onlinegiftools.gif";
import { Input } from "./ui/input";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from "./ui/button";
const genAI = new GoogleGenerativeAI("AIzaSyBI5B23RXprsQeqPuER3xVzFDzmp8-ZM28");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Loader, Loader2Icon } from "lucide-react";
function Aidemo({}: Props) {
  const [aiResponse, setResponse] = React.useState("");
  const [thinking, setThinking] = React.useState(false);
  // Generative AI Call to fetch dishes
  const [search, setSearch] = React.useState("");
  async function aiRun() {
    const prompt = `write a response of this in restricted 100 words and in one paragraph not pointwise :: ${search} `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(response);
    setResponse(text);
    setThinking(false);
  }

  // button event trigger to consume gemini Api

  const handleClick = () => {
    setThinking(true);
    aiRun();
  };

  return (
    <>
      <Fade cascade={true} direction={"right"} className="widthandcenter">
        <div className="bg-white aicard flex flex-col justify-start items-center">
          <img src={aiimage} className="h-1/6"></img>
          <div className="flex justify-start items-start">
            <h1 className="text-gray-400">
              Ask Drift AI to create a roadmap for you ...
            </h1>
          </div>
          <div className="flex message-box justify-start items-start overflow-scroll absolute bottom-40 right-10 bg-violet-100">
            <h1 className="text-gray-900">
              {thinking ? (
                <div className="flex justify-center items-center">
                  <img src={aiimage} className="h-1/2 w-1/4"></img>
                  Thinking ......
                </div>
              ) : (
                <>{aiResponse}</>
              )}
            </h1>
          </div>
          <div className="w-full p-7 absolute bottom-0">
            <Input
              className="bg-white focus:border-gray-500 border-gray-400 box-shadow py-7"
              placeholder="Ask Me Anything of WEB-3 Spaces.."
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              onClick={handleClick}
              className="absolute right-7 top-7 bg-gray-800 hover:text-gray-800 text-white p-7 text-lg border-gray-200"
            >
              Ask Drift AI
            </Button>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Aidemo;
