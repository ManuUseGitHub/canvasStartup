import { useRef } from "react";
import "./style.scss";
import { useClassPrefix } from "mazeof-react/dist/hooks";

export const Design = (props: any) => {
	const { prefix, canvasRef, ...rest } = props;
	const pre = useClassPrefix(prefix);
	const design = useRef(null);

	return <div ref={design} className={pre(`feat feat-light`)}>
		<canvas ref={canvasRef} {...rest} />
	</div>;
};