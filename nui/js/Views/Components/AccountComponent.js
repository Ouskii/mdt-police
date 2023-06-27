import { AccesLabel } from "../../config.js"

export function AccountComponent(account) {
    return `
     <div class="user-item-container mrg-s">
        <div class="user-item-settings" data-id="${account.id}"><i class="fa-solid fa-ellipsis"></i> </div>
        <div class="user-item-desc">
            <img src=${account.account_image? account.account_image : "https://media.discordapp.net/attachments/828339415813324830/1061013694861017108/360_F_446993031_VjdtBS8T2dUQtgBbxsjkPdr3trXTdRG7.png"} class="user-photo"> 
        </div>
        <span data-id="${account.id}"> ${account.account_username} </span>

        <div class="acces-title-label"> <span>${AccesLabel[account.account_acces]}</span> </div>
    </div>
    `
}