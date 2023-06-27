import { htmlTemlplates , htmlFactory  } from "../Views/htmlFactory.js";
import { utilsManager } from "../utils.js";
import { InitHomePage } from "../Controllers/HomeController.js";
import { apiPost } from "./DataHandler.js";
import { InitCivilianPage, InitNavigation } from '../Controllers/CivilianController.js'
import { __Civilian } from "../Views/SubPages/__Civilian.js";
import { SubPagesController } from "../Controllers/CivilianSubpagesController.js";
import { __Cars } from "../Views/SubPages/__Cars.js";
import { __Judgments } from "../Views/SubPages/__Judgments.js";
import { __Jail } from "../Views/SubPages/__Jail.js";
import { __Property } from "../Views/SubPages/__Property.js";
import { __Notes } from "../Views/SubPages/__Notes.js";
import { InitCars } from "../Controllers/CarsController.js";
import { InitDispatch } from "../Controllers/DispatchController.js";
import { InitJail } from "../Controllers/JailController.js";
import { InitTariffEdit } from "../Controllers/TariffController.js";
import { InitAccounts } from "../Controllers/AccountsController.js";

export const displayHandler = {

    OpenMdt() {
        const mdtBuilder = htmlFactory(htmlTemlplates._Layout);
        utilsManager.addChild('body', mdtBuilder());
        pages.home()
        
        
    },
    MinimalizeMdt() {
        apiPost({action: 'MINIMALIZE_MDT'})

    },
    CloseMdt() {
        apiPost({action: 'CLOSE_MDT'})
    }


}

export const pages = {
    home(){
        ClearContent()
        const homeBuilder = htmlFactory(htmlTemlplates._Home);
        utilsManager.addChild('.content', homeBuilder()) 
        InitHomePage()
    },
    civilian() {
        ClearContent()
        const civilianBuilder = htmlFactory(htmlTemlplates._Civilian);
        utilsManager.addChild('.content', civilianBuilder())
        InitCivilianPage()
    },
    civilianInfo() {
        ClearContent()
        const civilianInfoBuilder = htmlFactory(htmlTemlplates._CivilianInfo);
        utilsManager.addChild('.content', civilianInfoBuilder())
        InitNavigation()
    },
    cars() {
        ClearContent()
        const carsBuilder = htmlFactory(htmlTemlplates._Cars);
        utilsManager.addChild('.content', carsBuilder())
        InitCars()
    },
    jail() {
        ClearContent()
        const jailBuilder = htmlFactory(htmlTemlplates._Jail)
        utilsManager.addChild('.content', jailBuilder())
        InitJail()
    },
    tariffedit(){
        ClearContent()
        const tariffEditBuilder = htmlFactory(htmlTemlplates._TariffEdit)
        utilsManager.addChild('.content', tariffEditBuilder())
        InitTariffEdit()
        
    },
    dispatch(){
        ClearContent()
        const dispatchBuilder = htmlFactory(htmlTemlplates._Dispatch)
        utilsManager.addChild('.content', dispatchBuilder())
        InitDispatch()
    },
    notes(){
        ClearContent()
        const notesBuilder = htmlFactory(htmlTemlplates._Notes)
        utilsManager.addChild('.content', notesBuilder())
    },
    accounts(){
        ClearContent()
        const accountsBuilder = htmlFactory(htmlTemlplates._Accounts)
        utilsManager.addChild('.content', accountsBuilder())
        InitAccounts()
    },

}

export const civilianPages = {
    civilian(playerData){
        ClearSubContent();
        utilsManager.addChild(".content-container-main", __Civilian(playerData));
        SubPagesController.InitSubpageCivilian(playerData)
    },
    cars(playerData){
        ClearSubContent();
        utilsManager.addChild(".content-container-main", __Cars())
        SubPagesController.InitSubpageCars(playerData.cars)
    },
    offenses(playerData){
        ClearSubContent();
        utilsManager.addChild(".content-container-main", __Judgments())
        SubPagesController.InitSubpageOffences(playerData.judgments)
    },
    notes(playerData){
        ClearSubContent();
        utilsManager.addChild(".content-container-main", __Notes())
        SubPagesController.InitSubpageNotes(playerData.notes)
    }, 
    property(playerData){
        ClearSubContent();
        utilsManager.addChild(".content-container-main", __Property())

    },
    playerJail(playerData){
        ClearSubContent();
        utilsManager.addChild(".content-container-main", __Jail())
        SubPagesController.InitSubpageJail()
    }



}



function ClearSubContent(){
    document.querySelector(".content-container-main").innerHTML = ""
}



function ClearContent(){
    document.querySelector(".content").innerHTML = "";
}
