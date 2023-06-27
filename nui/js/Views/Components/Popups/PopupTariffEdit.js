

export function PopupTariffEdit(data){
    return `
    <div class="popup-holder" >
        <div class="popup popup-conainer-medium display-f-c jst-content al-items">
            <div class="popup-cancel"><i class="fa-solid fa-x"></i></div>
                <label for="" class="form_label">Edycja Taryfikatora</label>

            <label for="" class="form_label mg-top-5">Opis - ${data.description}</label>
            <input type="text" class="form__field" id="description" placeholder="zostaw puste jeśli nie chcesz zmienić">
            <label for="" class="form_label mg-top-2">Kwota </label>
            <input type="number" class="form__field" id="price" value=${data.price}>
            <label for="" class="form_label mg-top-2">Miesięcy </label>
            <input type="number" class="form__field" id="months" value=${data.months}>
            <label for="" class="form_label mg-top-2">Komentarz - ${data.comment}</label>
            <input type="text" class="form__field" id="comment" placeholder="zostaw puste jeśli nie chcesz zmienić">
            <div class="button mg-top-2" id="submit">ZATWIERDŹ</div>
        </div>
    </div>
    `
}