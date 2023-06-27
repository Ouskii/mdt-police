import { TopContainer } from "../Components/TopContainer.js"
import { Getters } from "../../Handlers/DataHandler.js"


export function _CivilianInfo(){
    const AccountData = Getters.GetAccountData()
    return `
    ${TopContainer(true, AccountData, "Obywatel", {chuj: "dcad"} )}
    <div class="content-container display-f-c">
        
            <div class="file-navigation-container display-f jst-content al-items">   
                <div class="file-navigation display-f ">
                    
                        <span id="civilian" class="subnav-active"><i class="fa-solid fa-user navigation--icon"> </i>Obywatel</span>
                        <span id="cars"><i class="fa-solid fa-car navigation--icon"> </i>Pojazdy</span>
                        <span id="offenses"><i class="fa-solid fa-book-journal-whills pd-r-5"> </i> Wykroczenia</span>
                        <span id="notes"><i class="fa-regular fa-note-sticky navigation--icon"> </i>Notatki </span>
                        <span id="property"><i class="fa-solid fa-house pd-r-5"></i> Nieruchomości </span>
                        <span id="playerJail"><i class="fa-solid fa-handcuffs navigation--icon"></i> WIĘZIENIE</span>
                
                </div>
            </div>

            <div class="content-container-main">
        


            </div>




        </div>
    
    `
}