import { displayController } from "../Controllers/DisplayController.js"

export const messageActionHandler = {

    OPEN_MDT(data){
        displayController.BuildMdt()
    }


}