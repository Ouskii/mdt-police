import { Getters, Posts, SetMdtSpecifiedData } from "../Handlers/DataHandler.js"
import { TariffEditComponent } from "../Views/Components/TariffEditComponent.js"
import { utilsManager } from "../utils.js"
import { AddTariff } from "./PopupController.js"
import { PopupTariffEdit } from "../Views/Components/Popups/PopupTariffEdit.js"
import { PopupDefaultMessage } from "../Views/Components/Popups/PopupDefaultMessage.js"

export function InitTariffEdit(){
    DisplayTariff()
    InitAddTariff()
}


export function DisplayTariff(){
    const tariff = Getters.GetTariff()

    document.querySelectorAll('tbody').forEach(item =>{
        item.innerHTML = ""
    })
    tariff.map(tariffItem =>{
        utilsManager.addChild(`tbody[data-subcategory="${tariffItem.subcategory}"]`, TariffEditComponent(tariffItem))
    })
    InitEditTariff()
    DeleteTariffRecord()
}

function InitEditTariff(){
    let tariff = Getters.GetTariff()
    document.querySelectorAll('.tariff-record-edit').forEach(editButton => {
        editButton.addEventListener('click', () => {
            const buttonId = editButton.dataset.id
            const filtredTariff = Getters.GetFiltredTariff(buttonId)
            utilsManager.addChild('body', PopupTariffEdit(filtredTariff[0]))

            document.querySelector('.popup-cancel').addEventListener('click', () =>{
                document.querySelector('.popup-holder').remove()
            })

            document.querySelector('#submit').addEventListener('click', () =>{

                let description = document.querySelector('#description').value
                const price = document.querySelector('#price').value
                const months = document.querySelector('#months').value
                let comment = document.querySelector('#comment').value

                if (!description) description = filtredTariff[0].description
                if (!comment) comment = filtredTariff[0].comment

                if(!(description && price && months)) return
                Posts.EditTariff({id:parseInt(buttonId), description: description, price:price, months:months, comment:comment })
                const index = tariff.indexOf(filtredTariff[0])
                if (index < 0)  return document.querySelector('.popup-holder').remove()
                filtredTariff[0].description = description
                filtredTariff[0].price = price
                filtredTariff[0].months = months
                filtredTariff[0].comment = comment
                tariff[index] = filtredTariff[0]
                SetMdtSpecifiedData('Tariff', tariff)
                document.querySelector('.popup-holder').remove()
                document.querySelector(`.tariff-record-delete[data-id='${buttonId}']`).parentNode.parentNode.remove()
                utilsManager.addChild(`tbody[data-subcategory="${filtredTariff[0].subcategory}"]`, TariffEditComponent(filtredTariff[0]))
            })
        })
    })
}


function DeleteTariffRecord(){
    let tariff = Getters.GetTariff()
    document.querySelectorAll('.tariff-record-delete').forEach(deleteButton => {
        deleteButton.addEventListener('click', () => {
            const buttonId = deleteButton.dataset.id
            const filtredTariff = Getters.GetFiltredTariff(buttonId)
            utilsManager.addChild('body', PopupDefaultMessage())
            document.querySelector('.button-abort').addEventListener('click', ()=>{
                document.querySelector('.popup-holder').remove()
            })
            document.querySelector('.button-accept').addEventListener('click', ()=>{
                const index = tariff.indexOf(filtredTariff[0])
                if (index < 0)  return document.querySelector('.popup-holder').remove()
                Posts.DeleteTariff(buttonId)
                tariff.splice(index, 1)
                document.querySelector(`.tariff-record-delete[data-id='${buttonId}']`).parentNode.parentNode.remove()
                SetMdtSpecifiedData('Tariff', tariff)
                document.querySelector('.popup-holder').remove()
            })
        })
    })
}




function InitAddTariff(){
    document.querySelector('#add-tariff').addEventListener('click',() => { 
        AddTariff()
    } )
}