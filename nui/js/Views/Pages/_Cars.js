import {TopContainer} from '../Components/TopContainer.js'
import { Getters } from '../../Handlers/DataHandler.js'
import { PageHeaderComponent } from '../Components/PageHeaderComponent.js'
import { SearchBox } from '../Components/SearchBoxComponent.js'

export function _Cars() {
    const AccountData = Getters.GetAccountData()
    return `
        ${TopContainer(false, AccountData, "Witaj" )}
        <div class="content-container display-f-c">
        ${PageHeaderComponent("Wyszukaj Pojazd", "Wyszukaj kartotekę pojazdów po rejestracji", false, {} )}
            ${SearchBox()}
            <div class="table-container pd-t-2">
                <table>
                    <thead>
                        <tr>
                            <td>Model</td>
                            <td>Numer Rejestracyjny</td>  
                            <td>Właściciel</td>
                            <td>Poszukiwanie</td> 
                            <td>Więcej</td>   
                        </tr>
                    </thead>
                    <tbody>
            
                    </tbody>
                </table>
            </div>
        </div>                
    `

}