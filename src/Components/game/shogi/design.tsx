
import { pulseSeconds } from "../../../Drawings/check";
import { useAppSelector } from "../../../redux/hooks";
import { Canvas } from "../../Canvas";
import "./style.scss";
import { useClassPrefix } from "mazeof-react/dist/hooks";

export const Design = ({ prefix }: any) => {
	const pre = useClassPrefix(prefix);
	const state = useAppSelector(state => state);
	const {point} = state
	const draws = [];

	if(point.inCanvas){
		draws.push(pulseSeconds)
	}
	return (
		<div className={pre(`feat feat-light`)}>
			{JSON.stringify(state, null, 2)}
			<Canvas draws={draws}></Canvas>
		</div>
	);
};