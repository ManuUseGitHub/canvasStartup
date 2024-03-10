export type DrawCallBack = (ctx: any, frameCount: number) => void;
export type Point = {
    x: number,
    y: number
}
export type GostPoint = { x?: number, y?: number };

export type BoundingBox = {
    p1: Point,
    p2: Point
}

export type Dimension = {
    width: number,
    height: number
}

export type HighLightCode = {
    language: "jsx" | "tsx" | "json",
    codeBlock: string
}

export type ApplicationContextType = {
    debug: { [x: string]: (string | HighLightCode)[] },
    setDebug: React.Dispatch<React.SetStateAction<{
        [x: string]: (string | HighLightCode)[]
    }>>,
    frameCount: number,
    setFrameCount: React.Dispatch<React.SetStateAction<number>>,
    framesAnimationId: number,
    setFramesAnimationId: React.Dispatch<React.SetStateAction<number>>,
    coords: Point,
    setCoords: React.Dispatch<React.SetStateAction<Point>>
}