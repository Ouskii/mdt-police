import { Getters } from "../../Handlers/DataHandler.js"
import { TopContainer } from "../Components/TopContainer.js"
import { PageHeaderComponent } from '../Components/PageHeaderComponent.js'

export function _Home(){
    const Counters  = Getters.GetConters()
    const AccountData = Getters.GetAccountData()
    return `
        ${TopContainer(false, AccountData, "Witaj" )}
        <div class="content-container display-f-c">
        ${PageHeaderComponent("Dashboard", "Witaj w systemie Los Santos Police Department", false, {} )}
            <div class="content-container-main"> 
                <div class="col-1-of-2 mgr-3">
                    <div class="container-small mg-right-5 default-border display-f-c">
                        <span class="stats-title">Mieszkańców</span>
                        <span class="stats-count">${Counters.citizenCount.count}</span>
                    </div>
                    <div class="container-small default-border display-f-c">
                        <span class="stats-title">Pojazdów</span>
                        <span class="stats-count">${Counters.vehicleCount.count}</span>
                    </div>
                    <div class="container-large default-border display-f-c">
                        <span class="stats-title pd-l-5 pd-t-3 display-f-c">Wystawione Wyroki <span class="pd-t-1">Statystyka wystawionych wyroków i mandatów</span></span>
                        <div class="display-f">
                            <span class="stats-count display-f-c pd-l-5 pd-t-2">${Counters.dayCount.count} <span>W dniu</span></span>
                            <span class="stats-count display-f-c pd-l-5 pd-t-2">${Counters.weekCount.count}<span>W tygodniu</span></span>
                            <span class="stats-count display-f-c pd-l-5 pd-t-2">${Counters.monthCount.count}<span>W miesiącu</span></span>
                            <span class="stats-count display-f-c pd-l-5 pd-t-2">${Counters.quarterCount.count} <span>W kwartale</span></span>
                            <span class="stats-count display-f-c pd-l-5 pd-t-2">${Counters.yearCount.count} <span>W roku</span></span>
                        </div>

                    </div>
                    <div class="container-table-samll mgt-auto default-border display-f-c">
                        <span class="stats-title pd-l-5 pd-t-2 display-f-c">Poszukiwani Obywatele <span class="pd-t-1">Ostatnio wystawione poszukiwania na obywatela</span></span>
                        <div class="table-container pd-t-2">
                            <table id="wanted-civilian">
                                <thead>
                                    <tr>
                                        <td>Imię i Nazwisko</td>
                                        <td>CID</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="col-1-of-2">
                    <div class="container-table-samll default-border display-f-c">
                        <span class="stats-title pd-l-5 pd-t-2 display-f-c">Aktywni Funkcjonariusze <span class="pd-t-1">Lista aktywnych funkcjonariuszy</span></span>
                        <div class="table-container pd-t-2">
                            <table id="active-officers">
                                <thead>
                                    <tr>
                                        <td>Imię i Nazwisko</td>
                                        <td>Ranga</td>
                                        <td>Nr. Odznaki</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                        
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="container-table-samll mgt-auto default-border display-f-c">
                        <span class="stats-title pd-l-5 pd-t-2 display-f-c">Poszukiwane Pojazdy <span class="pd-t-1">Ostatnio wystawione poszukiwania na samochody</span></span>
                        <div class="table-container pd-t-2">
                            <table id="wanted-cars">
                                <thead>
                                    <tr>
                                        <td>Model</td>
                                        <td>Numer rej.</td>
                                        <td>Właściciel</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    `
}

