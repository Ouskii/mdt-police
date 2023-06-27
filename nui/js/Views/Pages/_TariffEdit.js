import {TopContainer} from '../Components/TopContainer.js'
import { Getters } from '../../Handlers/DataHandler.js'
import { PageHeaderComponent } from '../Components/PageHeaderComponent.js'


export function _TariffEdit() {
    const AccountData = Getters.GetAccountData()
    return `
        ${TopContainer(false, AccountData, "Witaj" )}
        <div class="content-container display-f-c">
            ${PageHeaderComponent("Edycja Taryfikatora", "Dodaj Usuń Edytuj podpunkty taryfikatora", true, {buttonId:"add-tariff", buttonClass:"button-tarriff-add" , icon: "fa-solid fa-book-journal-whills", desc: "Dodaj kare" })}
            <div class="content-container default-border mg-top-1 overflow-scroll">
            <span class="title w-100 display-f jst-content">Wykroczenia - Inne</span>
            <table>
                <thead>
                    <tr>
                        <td>Opis</td>
                        <td>Grzywna</td>
                        <td>Kara</td>
                        <td>Komentarz</td>
                        <td>Akcje</td>
                    </tr>
                </thead>
                <tbody data-subcategory="offensesOther">
        
        
                </tbody>
            </table>
        
            <span class="title w-100 display-f jst-content">Wykroczenia - Drogowe</span>
            <table>
                <thead>
                    <tr>
                        <td>Opis</td>
                        <td>Grzywna</td>
                        <td>Kara</td>
                        <td>Komentarz</td>
                        <td>Akcje</td>
                    </tr>
                </thead>
                <tbody data-subcategory="traffic">
        
                </tbody>
            </table>
            <span class="title w-100 display-f jst-content">Przestępstwa - Narkotyki</span>
            <table>
                <thead>
                    <tr>
                        <td>Opis</td>
                        <td>Grzywna</td>
                        <td>Kara</td>
                        <td>Komentarz</td>
                        <td>Akcje</td>
                    </tr>
                </thead>
                <tbody data-subcategory="drugs">
        
                </tbody>
            </table>
        
            <span class="title w-100 display-f jst-content">Przestępstwa - Przemoc</span>
            <table>
                <thead>
                    <tr>
                        <td>Opis</td>
                        <td>Grzywna</td>
                        <td>Kara</td>
                        <td>Komentarz</td>
                        <td>Akcje</td>
                    </tr>
                </thead>
                <tbody data-subcategory="violence">
        
                </tbody>
            </table>
        
            <span class="title w-100 display-f jst-content">Przestępstwa - Bron</span>
            <table>
                <thead>
                    <tr>
                        <td>Opis</td>
                        <td>Grzywna</td>
                        <td>Kara</td>
                        <td>Komentarz</td>
                        <td>Akcje</td>
                    </tr>
                </thead>
                <tbody data-subcategory="weapon">
        
                </tbody>
            </table>
        
        
            <span class="title w-100 display-f jst-content">Przestępstwa - Porwania</span>
            <table>
                <thead>
                    <tr>
                        <td>Opis</td>
                        <td>Grzywna</td>
                        <td>Kara</td>
                        <td>Komentarz</td>
                        <td>Akcje</td>
                    </tr>
                </thead>
                <tbody data-subcategory="kidnappings">
        
                </tbody>
            </table>
        
            <span class="title w-100 display-f jst-content">Przestępstwa - Napady</span>
            <table>
                <thead>
                    <tr>
                        <td>Opis</td>
                        <td>Grzywna</td>
                        <td>Kara</td>
                        <td>Komentarz</td>
                        <td>Akcje</td>
                    </tr>
                </thead>
                <tbody data-subcategory="fits">
        
                </tbody>
            </table>

            <span class="title w-100 display-f jst-content">Przestępstwa - Inne</span>
            <table>
                <thead>
                    <tr>
                        <td>Opis</td>
                        <td>Grzywna</td>
                        <td>Kara</td>
                        <td>Komentarz</td>
                        <td>Akcje</td>
                    </tr>
                </thead>
                <tbody data-subcategory="judgmentsOther">
        
                </tbody>
            </table>
        
        </div>
        </div>                
    `

}