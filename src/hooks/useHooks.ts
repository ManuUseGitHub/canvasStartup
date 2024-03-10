import { useState } from "react";
import { HighLightCode } from "../resources/types";

export const useHooks = () => {
    const [frameCount, setFrameCount] = useState(0);
    const [debug, setDebug] = useState<{ [x: string]: (string | HighLightCode)[] }>({});
    const [framesAnimationId, setFramesAnimationId] = useState(0);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    return {
        debug,setDebug,
        frameCount,
        setFrameCount, 
        framesAnimationId, 
        setFramesAnimationId, 
        coords, 
        setCoords
    }
}