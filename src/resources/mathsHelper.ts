import { BoundingBox, Point } from "./types";

export const inBox = (box: BoundingBox, p: Point) => {
    if (box === undefined)
        return false;
    const { p1, p2 } = box;
    return (
        (p1.x <= p.x && p1.y <= p.y) &&
        (p2.x >= p.x && p2.y >= p.y)
    );
}