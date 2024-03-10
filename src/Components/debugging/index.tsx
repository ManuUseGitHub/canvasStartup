import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { ApplicationContextType, BoundingBox, HighLightCode, Point } from "../../resources/types";
import { Highlighted } from "./Highlighted";
import { Design } from "./design";
import { ApplicationContext } from "../../App";
import { useThrottle } from "../../hooks/mouseUtil";
import { useEventHandler } from "../../hooks/handleEffect";
import { GAME_STATE } from "../../resources/messageConstants";
import { inBox } from "../../resources/mathsHelper";
import { SIXTYFPS_THROTTLING_DURATION } from "../../resources/constantes";

export const Debugging = () => {
	const context = useContext(ApplicationContext) as ApplicationContextType;

	const [debugContent, setDebugContent] = useState<ReactNode>("");
	const [style, setStyle] = useState<string>();
	const [bounding, setBounding] = useState<BoundingBox>()
	const [pp, setPp] = useState<Point>()

	const windowRef = useRef(window);
	const element: any = useRef(null);

	const debugFormal = { style, debugContent, element }

	const displayMessages = (context: ApplicationContextType, key: string): ReactNode => (
		context.debug[key]) ? context.debug[key]
			.map(readDebug) : null

	const getTextNode = (d: string) => (<p>{(d)
		.split("\n")
		.map((s: string, i: number) => (i != 0) ?
			(<span><br />{s}</span>) :
			<span>{s}</span>)}
	</p>)

	const getHighlightedCode = (code: HighLightCode) => (code.codeBlock !== undefined) ?
		(<Highlighted code={code}></Highlighted>) :
		null;

	const { throttle } = useThrottle(SIXTYFPS_THROTTLING_DURATION);

	const readDebug = (d: string | HighLightCode) => {
		const btype = typeof (d);
		return (btype === "object") ? getHighlightedCode(d as HighLightCode) : getTextNode(d as string);
	}

	useEffect(() => {
		setDebugContent(displayMessages(context, GAME_STATE))
		const debugProp = element!.current;
		setBounding({
			p1: { x: debugProp.clientLeft, y: debugProp.clientTop },
			p2: {
				x: debugProp.clientLeft + debugProp.clientWidth,
				y: debugProp.clientTop + debugProp.clientHeight
			}
		});

	}, [JSON.stringify(context.debug)]);

	useEventHandler("mousemove", windowRef, (event: any) => {
		if (event !== null) {
			throttle(() => {
				setPp({ x: event.pageX, y: event.pageY })
				if (pp) {
					setStyle(inBox(bounding!, pp!) ? "hovered" : undefined)
				}
			})
		}
	});

	return <Design prefix="debugging" displayMessages={displayMessages} debugFormal={debugFormal} />;
};