import { Fetchers, Setters, Getters } from '../Handlers/DataHandler.js';
import { utilsManager } from '../utils.js';
import { CivilianRow } from '../Views/Components/RowComponents.js';
import { pages, civilianPages } from '../Handlers/DisplayHandler.js';

export function InitCivilianPage(){
    InitSearchBox()
}


function InitSearchBox(){
    document.querySelector('.searchButton').addEventListener('click', () =>{
        const value =  document.querySelector('input').value
         if (value) {
             searchPlayerValidating(value)
         }
     })
}

function searchPlayerValidating(string){
    let splitedStringTable = string.split(" ");
        if(+splitedStringTable[0]){
            Fetchers.FetchFindedPlayers(splitedStringTable[0], true).then(response => {
                DisplayFindedPlayers(response)
                Setters.SetPlayersData(response)
            })
        }
        else{
            Fetchers.FetchFindedPlayers(splitedStringTable, false).then(response => {
                DisplayFindedPlayers(response)
                Setters.SetPlayersData(response)
            })
        }
}


export function DisplayFindedPlayers(data){
    document.querySelector('tbody').innerHTML = ""

    data.map(player => {
        utilsManager.addChild('tbody', CivilianRow(player))
    })
    
    document.querySelectorAll('.button-file').forEach(button => {
        button.addEventListener('click', ()=>{
            Setters.SetFiltredPlayer(button.dataset.cid);
            pages.civilianInfo(button.dataset.cid);
            const playerData = Getters.GetFiltredPlayer();
            civilianPages.civilian(playerData[0]);
        })
    })

}


export function InitNavigation(){
    const playerData = Getters.GetFiltredPlayer()
    document.querySelectorAll(".file-navigation span").forEach(navitem => {
        navitem.addEventListener("click", () => {
            document.querySelector('.subnav-active').classList.remove('subnav-active');
            navitem.classList.add('subnav-active');
            civilianPages[navitem.id](playerData[0]);
        })
    })
}