import { utilsManager } from "../utils.js"
import { ActiveOfficersRow, WantedCivilian, WantedCar } from "../Views/Components/RowComponents.js"
import { Getters, Fetchers } from "../Handlers/DataHandler.js"


export const InitHomePage= () =>{
    DisplayActiveOfficers()
    DisplayWantedCivilians()
    DisplayWantedCars()
}


function DisplayActiveOfficers(){
    
   const activeOfficers =  Getters.GetActiveOfficers()
   activeOfficers.map(officer => {
        utilsManager.addChild('#active-officers tbody', ActiveOfficersRow(officer))
   })
}


async function DisplayWantedCivilians() {
   
    Fetchers.FetchWantedCivilians().then(response => {
        response.map(civilian => {
            utilsManager.addChild('#wanted-civilian tbody', WantedCivilian(civilian) )
        })
    })  
}

async function DisplayWantedCars() {

    Fetchers.FetchWantedCars().then(response => {
        response.map(car => {
            utilsManager.addChild('#wanted-cars tbody', WantedCar(car))
        })
    })   
}