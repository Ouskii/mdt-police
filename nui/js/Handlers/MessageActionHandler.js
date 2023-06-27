import { displayController } from "../Controllers/DisplayController.js"
import { SetMdtData, SetMdtSpecifiedData } from "./DataHandler.js"

export const messageActionHandler = {

    SETUP_DATA(data){
        SetMdtData(data)
    },

    OPEN_MDT(data){
        SetMdtSpecifiedData('activeOfficers', data.activeOfficers)
        SetMdtSpecifiedData('dispatch', data.dispatch)
        console.log(JSON.stringify(data.activeOfficers))
        console.log(JSON.stringify(data.dispatch))
        displayController.BuildMdt()
    },

    UNMINIMALIZE_MDT() {
        displayController.UnMinimalizeMdt()
    }


}