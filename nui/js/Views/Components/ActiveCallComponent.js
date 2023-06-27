

export function ActiveCallComponent(data , id){
    return `
    <div class="calls-item--container display-f-c" data-id=${id}>
        <div class="calls-item--header display-f "> <div class="calls-item--callsign"> ${data.code}</div> <span class="calls-item--name"> ${data.description} </span></div>
        <div class="calls-item-info"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
    </div>
 `
}