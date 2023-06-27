import {utilsManager} from '../../utils.js'


export function JudgmentComponent(data){
    const date = utilsManager.parseDate(data.created_at) 
    return `
    <div class="judgment-component">
        <div class="judgment-header"><span><i class="fa-solid fa-dollar-sign"></i> ${data.price}</span> <span><i
                    class="fa-regular fa-calendar-days"></i> ${data.months}</span></div>
        <div class="judgment-content"><span> ${data.message}</span> </div>
        <div class="judgment-footer"><span><i class="fa-regular fa-user"></i> ${JSON.parse(data.created_by).firstName} ${JSON.parse(data.created_by).lastName}</span> <span> ${date} <i class="fa-regular fa-clock"></i></span></div>
    </div>
    `
}