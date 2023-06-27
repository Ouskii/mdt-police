

export function PopupCallDetails(x, y){
    return`
    <div class="popup-holder">
    <div class="popup popup-container-option display-f-c al-items jst-content" style="top: ${y}px; left: ${x}px">
        <span class="pd-t-5 addpin">Oznacz na mapie</span>
        <span class="pd-t-5 gps">Oznacz GPS</span>
        <span class="pd-t-5 deletepin">Usuń  oznaczenie</span>
        <span class="pd-t-5 deletecall">Usuń Call</span>
        <span class="pd-t-5 abort ">Anuluj</span>
    </div>
</div>
    `
}