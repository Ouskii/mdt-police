


export function PopupAccountDetails(x, y) {
    return `
    <div class="popup-holder">
        <div class="popup popup-container-option display-f-c al-items jst-content" style="top: ${y}px; left: ${x}px">
            <span class="edit">Edytuj Konto</span>
            <span class="pd-t-5 delete">Usuń Konto</span>
            <span class="pd-t-5 abort ">Anuluj</span>
        </div>
    </div>
    `
}