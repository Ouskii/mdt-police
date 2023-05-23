// import { AccesLabel } from '../../config.js'


export function TopContainer() {
    return `
    <div class="content--top">
        ${true ? `<div class="content--top-button-back"><i class="fa-solid fa-caret-left"></i></div>` : ``}
        <div class="content--top-personal-text"> <span>$asd </span> <span>$chuj chuj</span> </div>
        "das": ``}
    </div>
    `
}


// function UserAccountComponent(account){
//     return `
//     <div class="officer-account-container">
//         <img src=${account.account_image? account.account_image : "https://cdn.discordapp.com/attachments/828339415813324830/1061013694861017108/360_F_446993031_VjdtBS8T2dUQtgBbxsjkPdr3trXTdRG7.png"} class="top-user-photo">
//         <div class="top-user-names-container">
//             <span class="top-user-permision"> ${AccesLabel[account.account_acces]} </span>
//             <span class="top-user-name"> ${account.account_username} <i class="fa-solid fa-chevron-down edit-self-profile" data-id="${account.id}"></i> </span>
//         </div>
//     </div>
//     `
// }