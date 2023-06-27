import { PopupAddWantedNotes } from "../Views/Components/Popups/PopupAddWantedNotes.js"
import { Getters, Posts } from "../Handlers/DataHandler.js"
import { utilsManager } from '../utils.js'
import { PopupAddTag } from "../Views/Components/Popups/PopupAddTag.js"
import { PopupJailPlayer } from '../Views/Components/Popups/PopupJail.js';
import { PopupAddUnit } from "../Views/Components/Popups/PopupAddUnit.js";
import { PopupTariff } from "../Views/Components/Popups/PopupAddTariff.js";
import { subcatJudgments, subcatOffenses } from "../Views/Components/Popups/PopupSubMessages.js";
import { InsertMdtSpecifiedData } from "../Handlers/DataHandler.js";
import { TariffEditComponent } from "../Views/Components/TariffEditComponent.js";


export function InitAddWanted(citizenId) {
    utilsManager.addChild('body', PopupAddWantedNotes())
    AddEventCloseToX()
    document.querySelector('#submit').addEventListener('click', () => {
        const noteMessage = document.querySelector('textarea').value;
        
        if(!noteMessage) return;    
        Posts.AddNote({
            owner: Getters.GetAccountCitizenId(),
            received: citizenId,
            title: "Poszukiwanie",
            message: noteMessage,
            is_private: 0
        })
        ClosePopup()
    })
}

export function InitAddTag(citizenId){
    utilsManager.addChild('body',PopupAddTag())
    AddEventCloseToX()
    document.querySelector('#submit').addEventListener('click', () =>{
        const tagMessage = document.querySelector('input').value;

        if(!tagMessage) return;
        Posts.AddTag({
                citizenId: citizenId,
                tag: tagMessage
        })
        ClosePopup()
    })
}

export function InitJailPlayer(price, months, judment, citizenid = 0, isAlcatras = false){

    utilsManager.addChild('body', PopupJailPlayer())
    AddEventCloseToX()
    document.querySelector('.popup-price').value = price
    document.querySelector('.popup-months').value = months
    document.querySelector('#judge').value = judment
    document.querySelector('#submit').addEventListener('click', () => {

        price =  document.querySelector('.popup-price').value
        months = document.querySelector('.popup-months').value 
        judment = document.querySelector('#judge').value

        if(!judment) return;
        if(!price) return;
        citizenid = document.querySelector('.popup-cid').value
        if (!citizenid) return;

    })
}


export function InitAddUnit(){
    utilsManager.addChild('body', PopupAddUnit())
    AddEventCloseToX()
    document.querySelector('.open_list_officers').addEventListener('click', () => {
      const officers =  Getters.GetActiveOfficers()
      console.log(JSON.stringify(officers))
    })
}

export function AddTariff(){
    utilsManager.addChild('body', PopupTariff())
    AddEventCloseToX()
    utilsManager.addChild('.select', subcatJudgments())
    document.querySelector('.of').addEventListener('change', (e) =>{
        if(e.target.id === "subcatJudgments"){
            document.querySelector('.select').innerHTML = ""
            utilsManager.addChild('.select', subcatJudgments())
        }
        else{
            document.querySelector('.select').innerHTML = ""
            utilsManager.addChild('.select', subcatOffenses())
        }  
    })
    document.querySelector('#submit').addEventListener('click', () => {

        const category = document.querySelector('.of input[type="radio"]:checked').dataset.category
        const subcategory = document.querySelector('.select input[type="radio"]:checked').id
        const description = document.querySelector('#description').value
        const price = document.querySelector('#price').value
        const months = document.querySelector('#months').value
        const comment = document.querySelector('#comment').value

        if (!(category && subcategory && description && price && months) ) return
        Posts.AddTariff({
            category: category,
            subcategory: subcategory,
            description: description,
            price: price,
            months: months,
            comment: comment
        }).then(response => {
            InsertMdtSpecifiedData('Tariff', {
                id: response,
                category: category,
                subcategory: subcategory,
                description: description,
                price: price,
                months: months,
                comment: comment
            } )
    
            const tariffItem = {
                id: response,
                category: category,
                subcategory: subcategory,
                description: description,
                price: price,
                months: months,
                comment: comment
            }

            utilsManager.addChild(`tbody[data-subcategory="${tariffItem.subcategory}"]`, TariffEditComponent(tariffItem))
        })
        
        ClosePopup()
       
       
    })

}
    



function AddEventCloseToX(){
    document.querySelector('.popup-cancel').addEventListener('click', ClosePopup)
}


function ClosePopup(){
    document.querySelector('.popup-holder').remove()
}