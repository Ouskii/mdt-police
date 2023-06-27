let MdtData;
let PlayersData;
let FiltredPlayer;

export const SetMdtData = (data) => {
    MdtData = data;
    return console.log("Mdt loaded")
}
// @param 'name' must be a string value
export const SetMdtSpecifiedData = (name, data) => {
    MdtData[name] = data
    return console.log(`data ${name} has been set `)
}
export const InsertMdtSpecifiedData = (name, data) => {
    MdtData[name] ? MdtData[name].push(data) : SetMdtSpecifiedData(name, data)
    return console.log(`data ${name} has been update `)
}

                 

export const Getters ={
    GetConters() { 
        return MdtData.CounterStorage
    },
    GetActiveOfficers() {
        return MdtData.activeOfficers
    },
    GetAccountData() {
        return MdtData.Account
    },
    GetAccountCitizenId() {
        return MdtData.Account.citizenId
    },
    GetPlayersData() {
        return PlayersData
    },
    GetFiltredPlayer(){
        return FiltredPlayer
    },
    GetTariff(){
        return MdtData.Tariff
    },
    GetActiveCalls() {
        return MdtData.dispatch
    },
    GetFiltredTariff(id){
        const filtredTariff = MdtData.Tariff.filter(item => {
            return item.id == id
        })
        return filtredTariff
    },
    GetAccounts(){
        return MdtData.OfficersAccounts
    },
    GetFiltredAccount(id){
        const filtredAccount = MdtData.OfficersAccounts.filter(acc => {
            return acc.id == id
        })
        return filtredAccount
    },
}


export const Setters = {
    SetPlayersData(data){
        PlayersData = data
    },
    SetFiltredPlayer(cid){
        FiltredPlayer = PlayersData.filter(player => {
            return player.citizenId === cid
        })
        console.log(JSON.stringify(FiltredPlayer))
    }


}

export const Fetchers = {
    FetchWantedCivilians(){ 
       return apiPost({action: "GET_WANTED_CIVILIANS"})
    },
    FetchWantedCars(){
       return apiPost({action:"GET_WANTED_CARS"})
    },
    FetchFindedPlayers(data, catchByCid){ 
        return apiPost({action: "FIND_PLAYER", dataset: {data:data, catchByCid:catchByCid }})
    }

 }

export const Posts = {
    AddNote(data) {
        console.log(JSON.stringify(data))
    },
    AddTag(data) {
        console.log(JSON.stringify(data))
    },
    SendToJail(data){
        console.log(JSON.stringify(data))
    },
    MarkGps(data){
        apiPost({action:"MARK_GPS", coords: data})
    },
    AddTariff(data){
       return apiPost({action: "ADD_TARIFF", dataset: data})
    },
    AddAccount(data){
        return apiPost({action: "ADD_ACCOUNT", dataset: data})
    },
    DeleteAccount(data){
        apiPost({action: "DELETE_ACCOUNT", dataset: data})
    },
    EditAccount(data){
        apiPost({action: "UPDATE_ACCOUNT", dataset: data})
    },
    EditTariff(data){
        apiPost({action: "UPDATE_TARIFF", dataset: data})
    },
    DeleteTariff(data){
        apiPost({action: "DELETE_TARIFF", dataset: data})
    }
}



export async function apiPost(payload) {
    const response = await fetch(`https://77-mdtpolice/catchNui`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload) 
    })

    if (response.ok) {
        return await response.json();
    }
}

 