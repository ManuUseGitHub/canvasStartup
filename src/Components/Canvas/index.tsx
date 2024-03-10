import { draw } from "../../Drawings/drawFunc";
import { useCanvas } from "../../hooks/useCanvas";
import { useAppSelector } from "../../redux/hooks";
import { postdraw, predraw } from "./Aspect/fencingDraw";
import { resizeCanvasToDisplaySize } from "./Aspect/size";
import { Design } from "./design";

export const Canvas = (props: any) => {

	const { draws } = props;
	const p = useAppSelector(state => state.point).coords

	const options = { predraw, postdraw };
	const canvasRef = useCanvas((ctx: any, frameCount: number) => draw(ctx, frameCount, p, draws), options)

	return <div id="canvas-container">
		<Design prefix="canvas" canvasRef={canvasRef} />;
	</div>

};
