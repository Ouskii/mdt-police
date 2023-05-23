export function PageHeaderComponent(page, desc, isButton, button){
    return `
        <div class="page-header display-f-c">
            <span class="page-info">${page}</span>
            <div class="page-description-container">
                <span class="page-description">${desc}</span> ${isButton? `<div id="${button.buttonId}" class="button ${button.buttonClass} mg-left-auto"> <i class="${button.icon}"></i> ${button.desc} </div>`:``}
            </div>
        </div>
    `
}