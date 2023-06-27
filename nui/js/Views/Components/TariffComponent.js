export function TariffComponent(data){
    return `
     <div class="tariff-item display-f-c default-border" data-id=${data.id} data-subcategory="${data.subcategory}">
        <div class="tariff-quantity pd-t-1">
            <span class="value-quant" data-id=${data.id}>0</span>
        </div>
        <div class="tariff-desc display-f-c w-100">
            <div class="tariff-title" data-id=${data.id}> ${data.description}</div>
            <div class="tariff-prices display-f"> <span>${data.price}$</span> <span>${data.months} miesięcy</span> </div>
        </div>
        <div class="tariff-buttons display-f ">
            <div class="button tariff-button mg-right-5 display-f button-increse" data-id="${data.id}"> +</div>
            <div class="button tariff-button display-f button-decrese" data-id=${data.id}> -</div>
        </div>
    </div>
    `
}