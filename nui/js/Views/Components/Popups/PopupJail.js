export function PopupJailPlayer(){
    return`
        <div class="popup-holder">
            <div class="popup popup-container-big display-f-c al-items jst-content jail">
                <div class="popup-cancel"><i class="fa-solid fa-x"></i></div>
                <label for="" class="form_label mg-top-5">CID skazanego</label>
                <input type="number" class="form__field popup-cid" >
                <label for="" class="form_label mg-top-2">Kwota</label>
                <input type="number" class="form__field popup-price">
                <label for="" class="form_label mg-top-2">Miesięcy</label>
                <input type="number" class="form__field popup-months">

                <div class="input-texarea mg-top-3">
                    <span class="label">Zarzuty</span>
                    <textarea name="" id="judge" class="textarea"></textarea>
                </div>
                <div class="w-100 display-f al-items jst-content mg-top-2"><div class="checkbox-wrapper-2 display-f al-items jst-content " > <input type="checkbox" name="" id="isAlcatraz" class="sc-gJwTLC ikxBAC"></div class="display-f al-items jst-content"> <label for="isAlcatraz" class="form_label  mg-left-1">Więzienie o zaostrzonym rygorze</label></div>               
                <div class="button mg-top-2" id="submit">ZATWIERDŹ</div>
            </div>
        </div>
    
    `
}

