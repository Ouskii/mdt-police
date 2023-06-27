export function PopupTariff(){
    return `
    <div class="popup-holder">
        <div class="popup popup-container-big display-f-c jst-content al-items">
            <div class="popup-cancel"><i class="fa-solid fa-x"></i></div>
                    <label for="" class="form_label mg-top-2">Wybierz kategorie</label>
                    <div class="mg-top-2 of">
                    <label class="radio "><input name="radio" type="radio" id="subcatJudgments" data-category="judgments" checked> <span>Przestępstwa</span></label>
                    <label class="radio"><input name="radio" type="radio" id="subcatOffenses" data-category="offenses"> <span>Wykroczenia</span></label>
                    </div>

                <label for="" class="form_label mg-top-2">Wybierz podkategorię</label>
                <div class="select mg-top-2" tabindex="1">
                    
                </div>
                <label for="" class="form_label mg-top-2">Opis</label>
                <input type="text" class="form__field" id="description">
                <label for="" class="form_label mg-top-2">Kwota</label>
                <input type="number" class="form__field" id="price">
                <label for="" class="form_label mg-top-2">Miesięcy</label>
                <input type="number" class="form__field" id="months">
                <label for="" class="form_label mg-top-2">Komentarz</label>
                <input type="text" class="form__field" id="comment">
                <div class="button mg-top-2" id="submit">ZATWIERDŹ</div>
        </div>
    </div>
    `
}