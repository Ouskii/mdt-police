import {TopContainer} from '../Components/TopContainer.js'
import { Getters } from '../../Handlers/DataHandler.js'
import { PageHeaderComponent } from '../Components/PageHeaderComponent.js'


export function _Dispatch(){
    const AccountData = Getters.GetAccountData()
    
    return `

        ${TopContainer(false, AccountData, "Witaj" )}
        
        <div class="content-container display-f">
       
        <div class="col-1-of-2">
            <div id="map"></div>
        </div>
        <div class="col-1-of-2" style=" margin-left:2%;">
            <div class="col-1-of-2 container-calls display-f-c" >
                <div class="calls-header display-f"><span>Aktywne Powiadomienia</span></div>
                <div class="calls-holder display-f-c">

                    





                </div>
            </div>






            <div class="col-1-of-2 container-units display-f-c" style="margin-left: auto;">
                <div class="units-header display-f"><span>Jednostki</span> <span class="units-header--add">+</span></div>
                <div class="units-holder display-f-c">

                </div>
            </div>
        </div>






</div>
    
    
    `
}