


export function ActivePatrol(data){
    return `
        <div class="units-component-container">
            <div class="units-component--header display-f"> <div class="unit-component-name"> ${data.unitName}</div> <div class="unit-component--edit"> <i class="fa-solid fa-pen-to-square" data-id=${data.id}></i></div></div>
            <div class="units-component--officers display-f-c">
                

               

            </div>
            <div class="unit-component--car display-f">
                <i class="fa-solid fa-car-side"></i>
                <span class="car-name">${data.car}</span>
            </div>
        </div>
                    `
}


export function OfficerInPatrol(data){
    return `
        <div class="units-officer display-f">
            <i class="fa-solid fa-user-group"></i>
            <span class="units-officer-name">${data.firstname} ${data.lastname}</span>
        </div>
    `
}