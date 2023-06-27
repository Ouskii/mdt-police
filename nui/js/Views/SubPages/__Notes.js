export function __Notes() {
    return `
    <div class="col-1-of-3 ">
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
                    <span class="label">Właściciel </span>
                    <input type="text" class="base-input owner" disabled>
                </div>
                <div class="input-small mg-left-auto">
                    <span class="label">Otrzymujący </span>
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
            </div>
        </div>
    </div>

    <div class="col-2-of-3 container-notes display-f mg-left-1">

</div>
    
`
}