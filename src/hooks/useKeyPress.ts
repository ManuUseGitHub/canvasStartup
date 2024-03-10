import { useEventHandler } from "./handleEffect";
import { PLUS_KEY, MINUS_KEY } from "../resources/constantes";
import { zoomIn, zoomOut } from "../redux/zoom/slice/zoomSlice";

export const useKeyPress = (canvasRef: any, dispatch: any) => {

    useEventHandler("keydown", canvasRef, (event: any) => {
        if (event != null) {
            reposition(dispatch, event.keyCode);
            // TODO: frame up
        }
    });
}

const reposition = (dispatch: any, keyCode: number) => {
    switch (keyCode) {
        case PLUS_KEY: dispatch(zoomIn()); break;
        case MINUS_KEY: dispatch(zoomOut()); break;
    }

    // TODO: reset point x y of mouse
    // context.setPosition(rescaledPoint(context.translation,context));
}