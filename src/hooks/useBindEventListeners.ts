import { useRef } from "react";
import { useAppDispatch } from "../redux/hooks";
import { useKeyPress } from "./useKeyPress";
import { useMouseDown } from "./useMouseDown";
import { useWindowSize } from "./useWindowSize";
import { useMouseHover } from "./useMouseHover";
import { useMouseInWindow as useMouseEntered } from "./useMouseEntered";

export const useBindEventListeners = (canvasRef: React.MutableRefObject<null>) => {
    const windowRef = useRef(window);
    const dispatch = useAppDispatch();

    useMouseHover(canvasRef, dispatch);
    useMouseDown(windowRef, dispatch);
    useKeyPress(windowRef, dispatch);
    useWindowSize(canvasRef, dispatch);
    useMouseEntered(canvasRef, dispatch);
}