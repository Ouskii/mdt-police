local SQL = require 'server.enums';


local function FetchMdtInformation() 
    MdtData.CounterStorage.citizenCount = MySQL.query.await(SQL.PLAYERS_COUNT);
    MdtData.CounterStorage.vehicleCount = MySQL.query.await(SQL.VEHICLE_COUNT);
    MdtData.CounterStorage.dayCount = MySQL.query.await(SQL.DAY_JUDGMENTS_COUNT);
    MdtData.CounterStorage.weekCount = MySQL.query.await(SQL.WEEK_JUDGMENTS_COUNT);
    MdtData.CounterStorage.monthCount = MySQL.query.await(SQL.MONTH_JUDGMENTS_COUNT);
    MdtData.CounterStorage.quarterCount = MySQL.query.await(SQL.QUARTER_JUDGMENTS_COUNT);
    MdtData.CounterStorage.yearCount = MySQL.query.await(SQL.YEAR_JUDGMENTS_COUNT);
    MdtData.Tariff = MySQL.query.await(SQL.GET_ALL_TARIFF);
end

local function OpenMdt() 
    local activeOfficers = Core.Players.Get({ 'police' }, { 'charInfo', 'job', ' citizenId' });
    return activeOfficers , MdtData
end






return{
    FetchMdtInformation = FetchMdtInformation,
    OpenMdt = OpenMdt
}