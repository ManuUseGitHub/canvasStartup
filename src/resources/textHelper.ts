import { ApplicationContextType, HighLightCode } from "./types";

const pieces: { [x: string]: any } = {}


export const configureDebug = () => {
    const msgs: string[] = [];
    
    return msgs.join("\n");
}

function normalizeSymbole(symbol: string) {
    return symbol.charAt(0)
}

export const pushDebugMessage = (context: ApplicationContextType, key: string, entry: (string | HighLightCode)[]) => {
    context.setDebug(Object.assign(context.debug, { [key]: entry }));
}