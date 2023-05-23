import { htmlTemlplates , htmlFactory  } from "../Views/htmlFactory.js";
import { utilsManager } from "../utils.js";


export const displayHandler = {

    OpenMdt() {
        const mdtBuilder = htmlFactory(htmlTemlplates._Layout);
        utilsManager.addChild('body', mdtBuilder());
    }

}