import { useEventHandler } from "./handleEffect";
import { relocate, move, stop } from "../redux/pointer/slice/pointerSlice";
import { useAppSelector } from "../redux/hooks";
import { SIXTYFPS_THROTTLING_DURATION } from "../resources/constantes";

let timeout: any = undefined;

export const throttle = (callback: () => void) => {
    if (timeout === undefined) {
        callback();
        timeout = setTimeout(() => {
            // allow another call to be throttled
            timeout = undefined;
        }, SIXTYFPS_THROTTLING_DURATION);
    }
}

let timeoutMouve: any = undefined;
let whenMouseMoves = (dispatch: any) => {
    clearTimeout(timeoutMouve);
    timeoutMouve = setTimeout(() => {
        dispatch(stop());
    }, 100);
}

export const useMouseHover = (canvasRef: any, dispatch: any) => {
    const { isMoving } = useAppSelector(state => state.point)
    useEventHandler("mousemove", canvasRef, (event: any) => {

        if (event != null) {
            throttle(() => {
                dispatch(relocate({ x: event.layerX, y: event.layerY }));
                
                if(!isMoving)
                    dispatch(move());
                
                whenMouseMoves(dispatch)
            })
        }
    });
}