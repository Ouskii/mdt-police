import { AccesLabel } from '../../config.js'


export function TopContainer(buttonVisable, accountData, message, playerInfo = false) {
    return `
    <div class="content--top">
        ${buttonVisable ? `<div class="content--top-button-back"><i class="fa-solid fa-caret-left"></i></div>` : ``}
        <div class="content--top-personal-text"> ${message},  ${playerInfo ? `sadsad` : `<span>${JSON.parse(accountData.charInfo).firstname} </span> <span>${JSON.parse(accountData.charInfo).lastname}</span>`} </div>
        ${UserAccountComponent(accountData)}
    </div>
    `
}


function UserAccountComponent(accountData){
    return `
    <div class="officer-account-container">
        <img src=${accountData.account_image? accountData.account_image : "https://cdn.discordapp.com/attachments/828339415813324830/1061013694861017108/360_F_446993031_VjdtBS8T2dUQtgBbxsjkPdr3trXTdRG7.png"} class="top-user-photo">
        <div class="top-user-names-container">
            <span class="top-user-permision"> ${AccesLabel[accountData.account_acces]} </span>
            <span class="top-user-name"> ${accountData.account_username} </span>
        </div>
    </div>
    `
}