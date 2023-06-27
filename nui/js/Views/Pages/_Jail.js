
import { SearchBox } from '../Components/SearchBoxComponent.js'
import { TopContainer } from '../Components/TopContainer.js'
import { PageHeaderComponent } from '../Components/PageHeaderComponent.js'
import { Getters } from '../../Handlers/DataHandler.js'
export function _Jail(){
    const AccountData = Getters.GetAccountData()
return`
    ${TopContainer(false, AccountData, "Witaj" )}
    <div class="content-container display-f-c">
        
            ${PageHeaderComponent("Więzienie", "Wystaw wyrok. Niech służba więzienna zajmie się resztą", true, {buttonId: "jail-player", buttonClass: "", icon: "fa-solid fa-handcuffs", desc: "Wystaw Wyrok" } )}
           
            <div class="content-container-main display-f">
                <div class="col-1-of-4 pd-t-2">
                    <div class="category-container display-f-c w-100">
                        
                            <span class="page-info pd-l-10 pd-b-10 ">Kategorie</span>
                            
                            <div class="category-item active" id="all">
                                <span>Wszystkie</span>
                            </div>
                            <div class="category-item" id="traffic" >
                                <span>Wykroczenia Drogowe</span>
                            </div>
                            <div class="category-item" id="drugs">
                                <span>Narkotyki</span>
                            </div>
                            <div class="category-item" id="violence">
                                <span>Przemoc</span>
                            </div>
                            <div class="category-item" id="weapon">
                                <span>Bron</span>
                            </div>
                            <div class="category-item" id="kidnappings">
                                <span>Porwania</span>
                            </div>
                            <div class="category-item" id="fits">
                                <span>Napady</span>
                            </div>
                            <div class="category-item" id="Other">
                                <span>Inne</span>
                            </div>
                      
                    </div>

                </div>

                <div class="col-3-of-4 display-f-c pd-t-2 content-no-wrap">
                    ${SearchBox()}

                    <div class="content-second-container brd-standard display-f">
                        
                    </div>

                    <div class="footer-container w-100 display-f al-items">
                        <div class="input-container"><label for="" class="form__label">Miesiące</label><input type="number" class="form__field month" ></div>
                        <div class="input-container display-f"><label for="" class="form__label">Kwota</label><input type="number" class="form__field price" ></div>
                        
                        <div class="button button-show-jail display-f al-items mg-left-auto">Pokaż Wyrok</div>
                        <div class="button button-clear display-f al-items mg-left-auto">Wyczyść</div>
                    </div>

                </div>



            </div>
        </div>    
    


    `




}