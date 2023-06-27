import {TopContainer} from '../Components/TopContainer.js'
import { Getters } from '../../Handlers/DataHandler.js'
import { PageHeaderComponent } from '../Components/PageHeaderComponent.js'
import { SearchBox } from '../Components/SearchBoxComponent.js'

export function _Civilian() {
    const AccountData = Getters.GetAccountData()
    return `
        ${TopContainer(false, AccountData, "Witaj" )}
        <div class="content-container display-f-c">
            ${PageHeaderComponent("Wyszukaj Obywatela", "Wyszukaj kartotekę mieszkańca po jego cid bądź Imieniu i nazwisku", false, {})}
            ${SearchBox()}
            <div class="table-container pd-t-2">
                <table>
                    <thead>
                        <tr>
                            <td>Imię i Nazwisko</td>
                            <td>CID</td>
                            <td>Status</td>
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