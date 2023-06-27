import {TopContainer} from '../Components/TopContainer.js'
import { Getters } from '../../Handlers/DataHandler.js'
import { PageHeaderComponent } from '../Components/PageHeaderComponent.js'


export function _Notes() {
    const AccountData = Getters.GetAccountData()
    return `
        ${TopContainer(false, AccountData, "Witaj" )}
        <div class="content-container display-f-c">
            ${PageHeaderComponent("Notatki", "Witaj w systemie Notatek", false, {})}
         
            <div class="content-container-main">
                <div class="col-1-of-3  overflow-scroll notes-private">
                  

                </div>

                <div class="col-1-of-3 mg-left-auto ">
                    <div class="buttons-container display-f al-items">
                        <div class="group-start display-f">
                            <div class="content-1-of-2"><span>Notatka</span></div>
                            <div class="content-1-of-2"><span id="notes-id"></span></div>
                        </div>
                        <div class="group-end display-f mg-left-auto">
                            <button class="content-1-of-4 display-f al-items jst-content" id="add-notes"> <i class="fa-solid fa-circle-plus"></i></button>
                            <button class="content-1-of-4 display-f al-items jst-content" id="edit-notes" disabled> <i class="fa-solid fa-pen"></i></button>
                            <button class="content-1-of-4 display-f al-items jst-content" id="save-notes" disabled> <i class="fa-solid fa-floppy-disk"></i></button>
                            <button class="content-1-of-4 display-f al-items jst-content" id="delete-notes" disabled> <i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                    <div class="display-form display-f-c">
                        <div class="input-group display-f ">
                            <div class="input-small ">
                                <span class="label">Właściciel CID</span>
                                <input type="text" class="base-input owner" disabled>
                            </div>
                            <div class="input-small mg-left-auto">
                                <span class="label">Otrzymujący CID</span>
                                <input type="text" class="base-input received" disabled>
                            </div>
                        </div>
                        <div class="input-large mg-top-3">
                            <span class="label">Tytuł</span>
                            <input type="text" class="base-input" id="note-title" disabled>
                        </div>
                        <div class="input-texarea mg-top-3">
                            <span class="label">Wiadomość</span>
                            <textarea name="" id="" class="textarea note-message" disabled></textarea>
                        </div>

                        <div class="form-footer display-f">
                            <span id="timestamp"> </span>
                            <div class="private-checkbox mg-left-auto display-f al-items jst-content" > <input type="checkbox" name="" id="isPrivate" checked disabled> <span class="accesable"> Prywatna</span></div>
                        </div>
                    </div>
                </div>


                <div class="col-1-of-3 mg-left-auto overflow-scroll notes-public">

                   
                </div>

            </div>


        </div>        
    `

}