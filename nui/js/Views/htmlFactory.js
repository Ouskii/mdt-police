import { _Layout } from './Pages/_Layout.js'



export const htmlTemlplates = {
    _Layout: 1,
}

export const builderFunctions = {
    [htmlTemlplates._Layout]: _Layout,
    
 }


export function htmlFactory(template) {
    if (builderFunctions.hasOwnProperty(template)) {
        return builderFunctions[template];
    }

    console.error("Undefined template: " + template);

    return () => {
        return "";
    };
}
