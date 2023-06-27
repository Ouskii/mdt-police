export function PopupAddWantedNotes(){
    return `
    <div class="popup-holder" >
        <div class="popup popup-conainer-medium display-f-c jst-content al-items">
            <div class="popup-cancel"><i class="fa-solid fa-x"></i></div>
            <label for="" class="form_label">Wpisz poszukiwanie</label>
            <div class="input-texarea mg-top-3 ">
                <span class="label">Wiadomość</span>
                <textarea name="" id="" class="textarea note-message"></textarea>
            </div>
            <div class="button mg-top-2" id="submit">ZATWIERDŹ</div>
        </div>
    </div>

    `
}