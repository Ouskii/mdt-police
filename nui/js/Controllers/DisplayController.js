import { displayHandler, pages } from "../Handlers/DisplayHandler.js"
import { ClearMarkers } from "./DispatchController.js";

export const displayController = {
    BuildMdt(){
         displayHandler.OpenMdt(); 
         document.querySelectorAll('.navigation--item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelector('.navigation--active').classList.remove('navigation--active')
                item.classList.add('navigation--active')
                pages[item.id]()
                
            })
        })
        document.getElementById('off-tablet').addEventListener('click', () => displayController.CloseMdt())
        document.getElementById('minimalize-tablet').addEventListener('click', () => {
            document.querySelector('.tablet').display = "none"
            displayHandler.MinimalizeMdt()
        })
    },
    UnMinimalizeMdt() {
        document.querySelector('.tablet').display = 'flex'
    },
    CloseMdt(){
        document.querySelector('.tablet').remove();
        ClearMarkers()
        displayHandler.CloseMdt()
       
    }
    
}



