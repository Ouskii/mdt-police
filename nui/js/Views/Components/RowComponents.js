import { PoliceGrades } from "../../config.js"


export function ActiveOfficersRow(officer){
    return `
    <tr>
    <td>${officer.charInfo.firstname} ${officer.charInfo.lastname}</td>
    <td>${PoliceGrades[officer.job.grade]}</td>
    <td>60</td>
    <td><span class="status-active">Aktywny </span></td>
</tr>
    `
}

export function WantedCivilian(civilian){

    return `
    <tr>
        <td>${JSON.parse(civilian.charInfo).firstname} ${JSON.parse(civilian.charInfo).lastname}</td>
        <td>${civilian.citizenId}</td>
        <td><span class="status-nonactive">Poszukiwany </span></td>
    </tr>`
}


export function WantedCar(car){
    return `
    <tr>
        <td>${car.model}</td>
        <td>${car.plate}</td>
        <td>${JSON.parse(car.charInfo).firstname} ${JSON.parse(car.charInfo).lastname}</td>
        <td><span class="status-nonactive"> Poszukiwany </span></td>
    </tr>
    `
}


export function CivilianRow(civilian){
    return `
    <tr>
        <td>${JSON.parse(civilian.charInfo).firstname} ${JSON.parse(civilian.charInfo).lastname}</td>
        <td>${civilian.citizenId}</td>
        <td><span class=${civilian.wanted? "status-active" : "status-nonactive"}> ${civilian.wanted? "Poszukiwany" : "Nieposzukiwany" } </span></td>
        <td><button style="color: white" class="button-file button" data-cid="${civilian.citizenId}"> <i class="fa-solid fa-angles-right"></i></button></td>
    </tr>
    `
}


export function SubPageCarRow(car){
    return `
    <tr>
        <td> ${car.model} </td>
        <td>${car.plate}</td>
        <td>${car.wanted? `<span class="status-nonactive">Poszukiwany</span>` : `<span class="status-active">Nieposzukiwany</span>`}</td>
    </tr>
`
}