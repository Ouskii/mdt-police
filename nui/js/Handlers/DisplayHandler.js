import { htmlTemlplates , htmlFactory  } from "../Views/htmlFactory.js";
import { utilsManager } from "../utils.js";


export const displayHandler = {

    OpenMdt() {
        const mdtBuilder = htmlFactory(htmlTemlplates._Layout);
        utilsManager.addChild('body', mdtBuilder());
        pages.home()
    }

}


export const pages = {
    home(){
        ClearContent()
        const homeBuilder = htmlFactory(htmlTemlplates._Home);
        utilsManager.addChild('.content', homeBuilder())
        
    },
}


function ClearContent(){
    document.querySelector(".content").innerHTML = "";
}
