
export function _Home(){
    
    return `
    <div class="content--top">
    ${true ? `<div class="content--top-button-back"><i class="fa-solid fa-caret-left"></i></div>` : ``}
    <div class="content--top-personal-text"> <span>$asd </span> <span>$chuj chuj</span> </div>
    }
    </div>
        <div class="content-container display-f-c">
            
            <div class="content-container-main"> 
                <div class="col-1-of-2 mgr-3">
                    <div class="container-small mg-right-5 default-border display-f-c">
                        <span class="stats-title">Mieszkańców</span>
                        <span class="stats-count">$0</span>
                    </div>
                    <div class="container-small default-border display-f-c">
                        <span class="stats-title">Pojazdów</span>
                        <span class="stats-count">$0</span>
                    </div>
                    <div class="container-large default-border display-f-c">
                        <span class="stats-title pd-l-5 pd-t-3 display-f-c">Wystawione Wyroki <span class="pd-t-1">Statystyka wystawionych wyroków i mandatów</span></span>
                        <div class="display-f">
                            <span class="stats-count display-f-c pd-l-5 pd-t-2">$0 <span>W dniu</span></span>
                            <span class="stats-count display-f-c pd-l-5 pd-t-2">$0<span>W tygodniu</span></span>
                            <span class="stats-count display-f-c pd-l-5 pd-t-2">$0<span>W miesiącu</span></span>
                            <span class="stats-count display-f-c pd-l-5 pd-t-2">$0 <span>W kwartale</span></span>
                            <span class="stats-count display-f-c pd-l-5 pd-t-2">$0 <span>W roku</span></span>
                        </div>

                    </div>
                    <div class="container-table-samll mgt-auto default-border display-f-c">
                        <span class="stats-title pd-l-5 pd-t-2 display-f-c">Poszukiwani Obywatele <span class="pd-t-1">Ostatnio wystawione poszukiwania na obywatela</span></span>
                        <div class="table-container pd-t-2">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Imię i Nazwisko</td>
                                        <td>CID</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bodzio Monster</td>
                                        <td>26</td>
                                        <td><span class="status-nonactive">Poszukiwany </span></td>
                                    </tr>
                                    <tr>
                                        <td>Bodzio Monster</td>
                                        <td>26</td>
                                        <td><span class="status-nonactive">Poszukiwany </span></td>
                                    </tr>
                                    <tr>
                                        <td>Bodzio Monster</td>
                                        <td>26</td>
                                        <td><span class="status-nonactive">Poszukiwany </span></td>
                                    </tr>
                                    <tr>
                                        <td>Bodzio Monster</td>
                                        <td>26</td>
                                        <td><span class="status-nonactive">Poszukiwany </span></td>
                                    </tr>
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
                            <table>
                                <thead>
                                    <tr>
                                        <td>Model</td>
                                        <td>Numer rej.</td>
                                        <td>Właściciel</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jester</td>
                                        <td>Essen</td>
                                        <td>Bodzio Monster</td>
                                        <td><span class="status-nonactive"> Poszukiwany </span></td>
                                    </tr>
                                    <tr>
                                        <td>Jester</td>
                                        <td>Czternastka</td>
                                        <td>Bodzio Monster</td>
                                        <td><span class="status-nonactive"> Poszukiwany </span></td>
                                    </tr>
                                    <tr>
                                        <td>Jester</td>
                                        <td>Czternastka</td>
                                        <td>Bodzio Monster</td>
                                        <td><span class="status-nonactive"> Poszukiwany </span></td>
                                    </tr>
                                    <tr>
                                        <td>Jester</td>
                                        <td>Czternastka</td>
                                        <td>Bodzio Monster</td>
                                        <td><span class="status-nonactive"> Poszukiwany </span></td>
                                    </tr>
                                    <tr>
                                        <td>Jester</td>
                                        <td>Czternastka</td>
                                        <td>Bodzio Monster</td>
                                        <td><span class="status-nonactive"> Poszukiwany </span></td>
                                    </tr>
                        
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    `
}

