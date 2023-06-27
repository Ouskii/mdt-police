import { utilsManager } from "../utils.js";
import { AccountComponent } from "../Views/Components/AccountComponent.js";
import { Getters, Posts } from "../Handlers/DataHandler.js";
import { PopupAccountDetails } from "../Views/Components/Popups/PopupAccountDetails.js";
import { PopupAddAccount } from "../Views/Components/Popups/PopupAddAccount.js";
import { permisionAccount } from "../Views/Components/Popups/PopupSubMessages.js";
import { PopupEditAccount } from "../Views/Components/Popups/PopupEditAccount.js";
import { InsertMdtSpecifiedData, SetMdtSpecifiedData } from "../Handlers/DataHandler.js";

export function InitAccounts(){
    DisplayAccounts()
    AddAccountButtonListener()
}


function DisplayAccounts() {
    document.querySelector('.content-container-main').innerHTML = ""
    const accounts = Getters.GetAccounts()
    accounts.map( account => {
        utilsManager.addChild('.content-container-main', AccountComponent(account));
    })
    AccountsSettingsListener()
}

function AccountsSettingsListener() {
    document.querySelectorAll('.user-item-settings').forEach(accountSettings => {
        accountSettings.addEventListener('click', (e) =>{
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            utilsManager.addChild('body', PopupAccountDetails(mouseX, mouseY))
            document.querySelector('.popup-container-option').style.transform = "none"
            AccountPopupListener(accountSettings.dataset.id)
        })
    })
}

function AccountPopupListener(id){
    
    let popupHolder = document.querySelector('.popup-holder')
    let acc = Getters.GetAccounts();
    document.querySelector('.edit').addEventListener('click', () => {
        
        const accountData = Getters.GetFiltredAccount(id);
        popupHolder.remove();
        utilsManager.addChild('body', PopupEditAccount(accountData[0]));    
        utilsManager.addChild('.select', permisionAccount());
        document.querySelector('.popup-cancel').addEventListener('click', ()=> { document.querySelector('.popup-holder').remove()});
        document.querySelector('#submit').addEventListener('click', () => {
            const permision =  document.querySelector('input[type="radio"]:checked').id;
            const accName = document.querySelector('#acc-name').value;
            if(!accName) return;
            const index = acc.indexOf(accountData[0])
            if (index < 0)  return popupHolder.remove()
            Posts.EditAccount({account_acces: permision , account_username: accName, id: id})
            accountData[0].permision = permision;
            accountData[0].account_username = accName;
            acc[index] = accountData[0]
            SetMdtSpecifiedData('OfficersAccounts', acc )
            popupHolder.remove()
        })

    })

    document.querySelector('.delete').addEventListener('click', () => {
        
        const accountData = Getters.GetFiltredAccount(id);
        const index = acc.indexOf(accountData[0])
        if (index < 0)  return popupHolder.remove()
        Posts.DeleteAccount(id)
        acc.splice(index, 1)
        document.querySelector(`.user-item-settings[data-id='${id}']`).parentNode.remove()
        SetMdtSpecifiedData('OfficersAccounts', acc )
        popupHolder.remove()
        
    })

    document.querySelector('.abort').addEventListener('click', () => {
        popupHolder.remove()
    })

}


function AddAccountButtonListener(){
    document.querySelector('#create-user').addEventListener('click', () => {
        utilsManager.addChild('body', PopupAddAccount());
        const popupHolder = document.querySelector('.popup-holder');
        utilsManager.addChild('.select', permisionAccount());

        document.querySelector('.popup-cancel').addEventListener('click', ()=> {popupHolder.remove()})

        document.querySelector('#submit').addEventListener('click', ()=> {
            const permision =  document.querySelector('input[type="radio"]:checked').id
            const citizenId = document.querySelector('#cid').value;
            const accName = document.querySelector('#acc-name').value;

            if(!citizenId) return;
            if(!accName) return;
            Posts.AddAccount({citizenId: citizenId , account_username: accName, account_acces: permision}).then(response => {
                InsertMdtSpecifiedData('OfficersAccounts', response )
                utilsManager.addChild('.content-container-main', AccountComponent(response));
            })

            popupHolder.remove()
        })
    })
}