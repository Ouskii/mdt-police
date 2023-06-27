
export function TariffEditComponent(data){
    return `
    <tr>
        <td> ${data.description}</td>
        <td> $ ${data.price}</td>
        <td>${data.months} miesięcy</td>
        <td>${data.comment}</td>
        <td class="display-f jst-content al-items"><div class="tariff-record-edit" data-id=${data.id}><i class="fa-solid fa-pencil"></i></div> <div class="tariff-record-delete" data-id=${data.id}><i class="fa-solid fa-trash-can"></i></div></td>
    </tr>
    `
}