import React from 'react'
import ReactTextTransition, { presets } from "react-text-transition";

const TEXTS = ['Which blockchain platform should I develop on?', 'How do I interact with smart contracts?', 'What are decentralized applications (dApps) and how do I build them?', 'How do I handle security concerns in blockchain development?'];
type Props = {}

function TextTransition({}: Props) {
    const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
    <ReactTextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</ReactTextTransition>
    </>
  )
}

export default TextTransition