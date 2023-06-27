

export function PopupAddUnit(){
    return ` 
    <div class="popup-holder" >
        <div class="popup popup-conainer-medium display-f-c jst-content al-items">
            <div class="popup-cancel"><i class="fa-solid fa-x"></i></div>
                <span class="popup-title">Dodaj Patrol</span>
            <label for="" class="form_label mg-top-5">Nazwa Jednoski</label>
            <input type="text" class="form__field" id="patrol_unit">
            <label for="" class="form_label mg-top-5">Pojazd</label>
            <input type="text" class="form__field" id="patrol_unit">
            <label for="" class="form_label mg-top-5">Oficerowie</label>


            <input type="text" class="form__field" id="unit_officers" disabled>
            <button class=" button open_list_officers pd-l-5 pd-r-5">+</button>


            <div class="button mg-top-5" id="submit">ZATWIERDŹ</div>
        </div>
    </div>
    `
}