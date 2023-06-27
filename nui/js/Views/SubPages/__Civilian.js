export function __Civilian(playerData) {
    const charInfo = JSON.parse(playerData.charInfo)
    return `
        <div class="content-container-main display-f-c">
                <div class="container-h-60  display-f">
                    <div class="col-1-of-3 display-f-c">
                        <div class="player-desc-item display-f">
                            <i class="fa-solid fa-id-card"></i>
                             <div class="display-f-c">
                                <span class="file-label"> CID </span>
                                <span class="item owner" > ${playerData.citizenId}</span>
                                
                            </div>
                        </div>
                        <div class="player-desc-item display-f " >
                            <i class="fa-solid fa-user"></i>
                             <div class="display-f-c">
                                <span class="file-label"> Imię i Nazwisko </span>
                                <span class="item"> ${charInfo.firstname} ${JSON.parse(playerData.charInfo).lastname}</span>
                            </div>
                        </div>
                        <div class="player-desc-item display-f">
                            <i class="fa-solid fa-venus-mars"></i>
                             <div class="display-f-c">
                                <span class="file-label"> Płeć </span>
                                <span class="item"> ${charInfo.gender}</span>
                            </div>
                        </div>
                        <div class="player-desc-item display-f">
                            <i class="fa-regular fa-calendar-days"></i>
                             <div class="display-f-c">
                                <span class="file-label"> Data urodzenia: </span>
                                <span class="item">${charInfo.birthdate}</span>
                            </div>
                        </div>
                        <div class="player-desc-item display-f">
                            <i class="fa-solid fa-globe"></i>
                             <div class="display-f-c">
                                <span class="file-label"> Narodowość: </span>
                                <span class="item"> ${charInfo.nationality}</span>
                            </div>
                        </div>
                        <div class="player-desc-item display-f">
                            <i class="fa-solid fa-fingerprint"></i>
                             <div class="display-f-c">
                                <span class="file-label"> Odcisk Palca </span>
                                <span class="item">123124124141414</span>
                            </div>
                        </div>
                        <div class="player-desc-item display-f">
                            <i class="fa-solid fa-droplet"></i>
                            <div class="display-f-c">
                                <span class="file-label"> DNA </span>
                                <span class="item">${JSON.parse(playerData.charInfo).dna}</span>
                            </div>
                        </div>


                    </div>
            
        
           <div class="col-1-of-3 mg-left-auto display-f-c al-items">
                <div class="page-header display-f jst-content al-items">Licencje</div>
                <div class="player-licenses-main">
                    
                </div>
            </div>



            <div class="col-1-of-3 mg-left-auto display-f-c al-items content-no-wrap">
                <div class="player-face-image" style="background-image: url(${false? playerData.url : 'https://cdn.discordapp.com/attachments/828339415813324830/1059430624781414410/40773111_1629835170473011_6813804042729291776_n.jpg'})">
                    <i class="fa-solid fa-pen edit-pic"></i>
                </div>
                <div class="wanted-footer display-f w-100 al-items mg-top-5" >
                    <span class=${playerData.wanted? "status-active wanted-status" : "status-nonactive wanted-status"}> ${playerData.wanted? "Poszukiwany" : "Nieposzukiwany" } </span>
                    ${playerData.wanted? `` : `<div class="button button-wanted mg-left-auto add-wanted">NADAJ POSZUKIWANIE</div>` }
                </div>
            </div>
                
        </div>  
        <div class="player-file-footer w-100  display-f-c">
            <div class="button mg-left-auto add-tag">DODAJ TAG</div>
            <div class="tags-container w-100  display-f">
                
            </div>
        </div>
    `
   
}