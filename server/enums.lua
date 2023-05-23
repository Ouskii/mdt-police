return {
    -- MDT HOMEPAGE COUNTERS 
    PLAYERS_COUNT = "SELECT COUNT(id) AS count FROM players",
    VEHICLE_COUNT = "SELECT COUNT(plate) AS count FROM `players.vehicles`",
    DAY_JUDGMENTS_COUNT = "SELECT COUNT(id) AS count  FROM `mdtpolice.judgments` WHERE created_at >= (DATE(NOW()) - INTERVAL 1 DAY  )",
    WEEK_JUDGMENTS_COUNT = "SELECT COUNT(id) AS count  FROM `mdtpolice.judgments` WHERE created_at >= (DATE(NOW()) - INTERVAL 7 DAY  )",
    MONTH_JUDGMENTS_COUNT =  "SELECT COUNT(id) AS count  FROM `mdtpolice.judgments` WHERE created_at >= (DATE(NOW()) - INTERVAL 30 DAY  )",
    QUARTER_JUDGMENTS_COUNT = "SELECT COUNT(id) AS count  FROM `mdtpolice.judgments` WHERE created_at >= (DATE(NOW()) - INTERVAL 3 MONTH  )",
    YEAR_JUDGMENTS_COUNT = "SELECT COUNT(id) AS count  FROM `mdtpolice.judgments` WHERE created_at >= (DATE(NOW()) - INTERVAL 1 YEAR  )", 
    GET_ALL_TARIFF = "SELECT * FROM `mdtpolice.tariff`",
    GET_PLAYER_ACCOUNT = "SELECT id, account_info, account_username, account_acces, account_image, citizenId FROM `mdtpolice.accounts` WHERE citizenId = @citizenId ",
    GET_OFFICERS_ACCONTS = "SELECT id, account_username, account_acces, account_image  FROM `mdtpolice.accounts`"
    

}