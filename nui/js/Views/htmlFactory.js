import { _Layout } from './Pages/_Layout.js'
import { _Home } from './Pages/_Home.js';


export const htmlTemlplates = {
    _Layout: 1,
    _Home: 2,

}

export const builderFunctions = {
    [htmlTemlplates._Layout]: _Layout,
    [htmlTemlplates._Home] : _Home,

    
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
