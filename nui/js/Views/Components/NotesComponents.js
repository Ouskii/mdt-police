import { utilsManager } from "../../utils.js";


export function __Notes(data) {
    const date = utilsManager.parseDate(data.created_at)
    return `
        <div class="notes-container w-100 display-f-c" data-noteId=${data.id} data-private=${data.isPrivate}>
            <div class="notes-header h-1of3 w-100  al-items display-f">
                <span class="notes-title">${data.title}</span>
                <span class="notes-id mg-left-auto"> #${data.id}</span>
            </div>
            <div class="notes-content h-1of3 w-100 ">
                <div class="note-content"> ${data.message} </div>
            </div>
            <div class="notes-footer h-1of3 w-100 display-f al-items">
                <span class="timestamp">${date}</span>
                <span class="note-owner mg-left-auto" data-ownerId=${data.owner}>|${JSON.parse(data.ownerInfo).firstname} ${JSON.parse(data.ownerInfo).lastname}</span>
                ${data.received? `<span class="note-reciver mg-left-auto" data-receivedId=${data.received}> |${JSON.parse(data.receivedInfo).firstname} ${JSON.parse(data.receivedInfo).lastname}</span>`: ``}  
            </div>
        </div>
    
    `
}