import { utilsManager } from '../utils.js'
import { Getters } from '../Handlers/DataHandler.js'
import { TariffComponent } from '../Views/Components/tariffComponent.js';
import { PopupJailPlayer } from '../Views/Components/Popups/PopupJail.js';


let pricequant = 0;
let monthquant = 0;   
let judment = "";



export function InitJail() {
    DisplayTariff()
    InitCategory()
    InitSearchBox()
    JailPlayer()
}

export function InitJailSubpage() {
    DisplayTariff()
    InitCategory()
    InitSearchBox()


}


function DisplayTariff() {
    const tariff = Getters.GetTariff()

    document.querySelector('.content-second-container').innerHTML = "";

    tariff.map(item => {
        utilsManager.addChild('.content-second-container', TariffComponent(item))


        document.querySelector(`.button-increse[data-id="${item.id}"]`).addEventListener('click', () =>{
            document.querySelector(`.value-quant[data-id="${item.id}"]`).innerHTML =  parseInt(document.querySelector(`.value-quant[data-id="${item.id}"]`).innerHTML) + 1 
            pricequant += item.price;
            monthquant += item.months;
            document.querySelector('.price').value = pricequant
            document.querySelector('.month').value = monthquant
        } )

        document.querySelector(`.button-decrese[data-id="${item.id}"]`).addEventListener('click', () =>{
            if(!parseInt(document.querySelector(`.value-quant[data-id="${item.id}"]`).innerHTML)) return;
            document.querySelector(`.value-quant[data-id="${item.id}"]`).innerHTML =  parseInt(document.querySelector(`.value-quant[data-id="${item.id}"]`).innerHTML) - 1 
            pricequant -= item.price;
            monthquant -= item.months;
            document.querySelector('.price').value = pricequant
            document.querySelector('.month').value = monthquant
        } )

    })
}



function InitCategory() {
    document.querySelectorAll('.category-item').forEach(category =>{
        category.addEventListener('click', () =>{   
            document.querySelector('.active').classList.remove('active')
            category.classList.add('active')
            document.querySelector('.searchBox').value = ""
            categoryHandle[`${category.id}`]() 
            

        })
    })
    const allTariff = document.querySelectorAll('.tariff-item')
    

     const categoryHandle = {
        all(){
            allTariff.forEach(item => {
                item.style.display = "flex";
            })
        },
        traffic(){
            allTariff.forEach(item => {
                item.dataset.subcategory.includes("traffic")? item.style.display = "flex" : item.style.display = "none"  
            })
        },
        drugs(){
            allTariff.forEach(item => {
                item.dataset.subcategory.includes("drugs")? item.style.display = "flex" : item.style.display = "none"  
            })
        },
        violence(){
            allTariff.forEach(item => {
                item.dataset.subcategory.includes("violence")? item.style.display = "flex" : item.style.display = "none"  
            })
        },
        weapon(){
            allTariff.forEach(item => {
                item.dataset.subcategory.includes("weapon")? item.style.display = "flex" : item.style.display = "none"  
            })
        },
        kidnappings(){
            allTariff.forEach(item => {
                item.dataset.subcategory.includes("kidnappings")? item.style.display = "flex" : item.style.display = "none"  
            })
        },
        fits(){
            allTariff.forEach(item => {
                item.dataset.subcategory.includes("fits")? item.style.display = "flex" : item.style.display = "none"  
            })
        },
        Other(){
            allTariff.forEach(item => {
                item.dataset.subcategory.includes("Other")? item.style.display = "flex" : item.style.display = "none"  
            })
        }
    }

}


function InitSearchBox() {
    const allTariff = document.querySelectorAll('.tariff-item')
    document.querySelector('.searchBox').addEventListener('input', (e)=>{

        if(e.target.value == "")
        {
           allTariff.forEach(item => {
                item.style.display = "flex";
            }) 
        }
        else
        {
            allTariff.forEach(item => {
                item.querySelector('.tariff-title').innerHTML.toLowerCase().includes(e.target.value.toLowerCase())? item.style.display = "flex" : item.style.display = "none"  
            })
        }
    })
}


function JailPlayer(cid = null) {

    document.querySelector('#jail-player').addEventListener('click', () =>{
        const allTariff = document.querySelectorAll('.tariff-item')

        allTariff.forEach(item => {
            if(parseInt(item.querySelector('.value-quant').innerHTML) > 0) {
                judment += `${item.querySelector('.value-quant').innerText}x ${item.querySelector('.tariff-title').innerText } | ` 
            }
        }) 
        utilsManager.addChild('body', PopupJailPlayer())
        if (cid) document.querySelector('.popup-cid').value = cid
        document.querySelector('.popup-price').value = pricequant
        document.querySelector('.popup-months').value = monthquant
        document.querySelector('#judge').value = judment



        document.querySelector('.popup-cancel').addEventListener('click', () =>{
            document.querySelector('.popup-holder').remove()
            judment = ""
       })
       

    })

}