export function PopupAddAccount() {
    return ` 
    <div class="popup-holder" >
        <div class="popup popup-conainer-medium display-f-c jst-content al-items">
            <div class="popup-cancel"><i class="fa-solid fa-x"></i></div>
            <label for="" class="form_label mg-top-2">Nadaj permisje</label>
            <div class="select mg-top-2" tabindex="1">
                
            </div>
            <label for="" class="form_label mg-top-2">Wprowadź CID</label>
            <input type="text" class="form__field" id="cid">
            <label for="" class="form_label mg-top-2">Wprowadź nazwę konta</label>
            <input type="text" class="form__field" id="acc-name">
            <div class="button mg-top-2" id="submit">ZATWIERDŹ</div>
        </div>
    </div>
    `
}