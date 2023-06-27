import { Getters } from "../../Handlers/DataHandler.js"
export function _Layout() {
    const Account = Getters.GetAccountData()
    return `
    <div class="tablet" >
        <div class="navigation display-f-c ">
            <div class="logo-box ">
                <img src="./images/logo.png" alt="logo" class="logo">
            </div>
            <div class="navigation--items-container">
                <div class="navigation--item navigation--active " id="home">
                    <i class="fa-solid fa-house navigation--icon"> </i>
                    <span class="navigation--item-text"> HOME </span>
                </div>
                <div class="navigation--item " id="civilian">
                    <i class="fa-solid fa-user navigation--icon"> </i>
                    <span class="navigation--item-text"> OBYWATEL </span>
                </div>
                <div class="navigation--item " id="cars">
                    <i class="fa-solid fa-car navigation--icon"> </i>
                    <span class="navigation--item-text"> POJAZD </span>
                </div>
                <div class="navigation--item " id="jail">
                    <i class="fa-solid fa-handcuffs navigation--icon"> </i>
                    <span class="navigation--item-text"> WIEZIENIE </span>
                </div>
                ${Account.account_acces <= 1 ? `
                <div class="navigation--item " id="tariffedit">
                    <i class="fa-solid fa-book-journal-whills navigation--icon"> </i>
                    <span class="navigation--item-text"> EDYCJA TARYFIKATORA </span>
                </div>
                ` : ``}
                <div class="navigation--item " id="dispatch">
                    <i class="fa-solid fa-people-group navigation--icon"> </i>
                    <span class="navigation--item-text"> DISPATCH </span>
                </div>
                <div class="navigation--item " id="notes">
                    <i class="fa-regular fa-note-sticky navigation--icon"> </i>
                    <span class="navigation--item-text"> NOTATKI </span>
                </div>
                 ${Account.account_acces <= 1 ? `
                <div class="navigation--item " id="accounts">
                    <i class="fa-solid fa-user-gear navigation--icon"> </i>
                    <span class="navigation--item-text"> UŻYTKOWNICY </span>
                </div>
                 ` : `` }
               
            </div>
           
            <div class="navigation--bottom-container ">
                <span id='minimalize-tablet'><i class="fa-solid fa-down-left-and-up-right-to-center"></i>SCHOWAJ</span>
                <span id='off-tablet'><i class="fa-solid fa-power-off"></i>WYŁĄCZ</span>
            </div>
           
            
        </div>
        <div class="content"> 
            

            
        </div>
    </div>
    `
}



