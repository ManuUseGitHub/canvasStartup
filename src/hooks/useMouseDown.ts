import { push, release, clicked } from "../redux/pointer/slice/pointerSlice";
import { useEventHandler } from "./handleEffect";

// Hook
export const useMouseDown = (canvasRef: any,dispatch:any) => {

    useEventHandler("mousedown", canvasRef, (event: any) => {
        if (event != null) {
            dispatch(push())
        }
    });

    useEventHandler("mouseup", canvasRef, (event: any) => {
        if (event != null) {
            dispatch(release())
        }
    });

    useEventHandler("click", canvasRef, (event: any) => {
        if (event != null) {
            dispatch(clicked())
        }
    });
}