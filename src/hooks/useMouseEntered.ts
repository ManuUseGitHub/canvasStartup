import { enter, leave } from "../redux/pointer/slice/pointerSlice";
import { useEventHandler } from "./handleEffect";

export const useMouseInWindow = (canvasRef:any,dispatch:any) => {
    
    useEventHandler("mouseleave", canvasRef, (event: any) => {
        if (event != null) {
            dispatch(leave())
        }
    });
    useEventHandler("mouseenter", canvasRef, (event: any) => {
        if (event != null) {
            dispatch(enter())
        }
    });
}