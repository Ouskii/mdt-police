import {TopContainer} from '../Components/TopContainer.js'
import { Getters } from '../../Handlers/DataHandler.js'
import { PageHeaderComponent } from '../Components/PageHeaderComponent.js'


export function _Accounts() {
    const AccountData = Getters.GetAccountData()
    return `
        ${TopContainer(false, AccountData, "Witaj" )}
        <div class="content-container display-f-c ">
            ${PageHeaderComponent("Zarządzanie Użytkownikami", "Witaj w systemie zarządzania użytkownikami.", true, {buttonId: "create-user", buttonClass: "users--button-create", icon: "fa-regular fa-plus", desc: "Stwórz użytkownika" })}
       
            <div class="content-container-main display-f content-wrap overflow-scroll mg-top-2">
            
            
            </div>
        </div>                
    `

}