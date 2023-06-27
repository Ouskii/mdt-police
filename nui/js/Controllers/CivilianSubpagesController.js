import { utilsManager } from "../utils.js"
import { SubPageCarRow } from "../Views/Components/RowComponents.js"
import { InitAddWanted, InitAddTag } from "./PopupController.js"
import { JudgmentComponent } from "../Views/Components/JudgmentComponent.js"
import { InitJailSubpage } from "./JailController.js"
import { InitSubpageNotes } from "./NotesController.js"

export const SubPagesController = {

    InitSubpageCivilian(playerData) {
        AddWanted(playerData.citizenId)
        AddTag(playerData.citizenId)
    },
    
    
    InitSubpageCars(cars) {
        DisplayPlayerCars(cars)
    },
    
    InitSubpageOffences(judgments) {
        DisplayJudgments(judgments)
    },
    
    InitSubpageNotes(notes) {
        InitSubpageNotes(notes)
    },
    
    InitSubpageProperty() {
    
    },
    
    InitSubpageJail() {
        InitJailSubpage()
    },

}



function AddWanted(citizenId){
    const buttonAddWanted = document.querySelector('.add-wanted')
    if (!buttonAddWanted) return
    document.querySelector('.add-wanted').addEventListener('click', () => {InitAddWanted(citizenId)})
}

function AddTag(citizenId){
    document.querySelector('.add-tag').addEventListener('click', () => {InitAddTag(citizenId)})
}

function DisplayPlayerCars(cars){
    cars.map(car => {
        utilsManager.addChild('.table-container tbody', SubPageCarRow(car))
    })
}

function DisplayJudgments(judgments){
    judgments.map(judgment => {
        utilsManager.addChild('.container-judgments', JudgmentComponent(judgment))
    })
}