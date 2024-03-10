import { useEffect } from "react";
import { useEventHandler } from "./handleEffect";
import { redimension } from "../redux/properties/slice/sizeSlice";

// Hook
export const useWindowSize = (canvas: any, dispatch: any) => {
  const windowRef = Object.assign({ current: window });

  useEventHandler("resize", windowRef, () => dispatch(redimension({
    width: canvas.current.width,
    height: canvas.current.height
  })),
    // which changes :
    [canvas.width, canvas.height]
  );
}